import { Slot, component$, useStylesScoped$ } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';

import styles from './private-layout.css?inline';

export const onRequest: RequestHandler = async ({ redirect, sharedMap }) => {
    const session = sharedMap.get('session');

    if (!session?.user || new Date(session?.expires) < new Date()) {
        throw redirect(308, '/')
    }
}

export default component$(() => {
    useStylesScoped$(styles);
    
    return (
        /* TODO: create a component to get a lateral menu */
        <Slot />
    )
});