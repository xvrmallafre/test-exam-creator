import { component$, useStylesScoped$ } from '@builder.io/qwik';

import { useAuthSession, useAuthSignout } from '~/routes/plugin@auth';

import styles from './menu.css?inline';

export const LoggedInMenu = component$(() => {
    useStylesScoped$(styles);

    const session = useAuthSession();
    const signout = useAuthSignout();
    const user = session.value?.user;
    
    return (
        <ul>
            <li>
                <span class="welcome-message">{`Hola ${user?.name}`}</span>
            </li>
            <li>
                <span
                    class="logout-button"
                    onClick$={async () => {
                        await signout.submit({
                            callbackUrl: '/',
                        });
                    }}>
                    Cerrar sesión
                </span>
            </li>
        </ul>
    );
});