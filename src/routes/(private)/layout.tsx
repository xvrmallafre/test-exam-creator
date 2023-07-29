import type { RequestHandler } from '@builder.io/qwik-city';

export const onRequest: RequestHandler = async ({ redirect, sharedMap }) => {
    const session = sharedMap.get('session');

    if (!session?.user || new Date(session?.expires) < new Date()) {
        throw redirect(308, '/')
    }
}