import { Slot, component$, useStylesScoped$ } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';

import styles from './auth-layout.css?inline';

export const onRequest: RequestHandler = async ({ redirect, sharedMap }) => {
    const session = sharedMap.get('session');

    if (session?.user || new Date(session?.expires) < new Date()) {
        throw redirect(308, '/')
    }
}

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div class="login-main">
            <div class="login-bg">
                <div
                    class="login-bg-gradient">
                </div>
                <div class="login-white-bg">
                    <Slot />
                </div>
            </div>
        </div>
    )
});