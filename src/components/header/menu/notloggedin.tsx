import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './menu.css?inline'

export const NotLoggedInMenu = component$(() => {
    useStylesScoped$(styles);

    return (
        <ul>
            <li>
                <a href={'/login/'}>
                    Iniciar sesión
                </a>
            </li>
            <li>
                <a href={'/register/'}>
                    Registrarse
                </a>
            </li>
        </ul>
    );
});