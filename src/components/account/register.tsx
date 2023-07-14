import { component$, useStylesScoped$ } from "@builder.io/qwik";

import styles from './login.css?inline';

export const RegisterForm = component$(() => {

    useStylesScoped$(styles);

    return (
        <form class="login-form">
            <div class="relative">
                <input type="text" name="username" placeholder="Usuario" />
                <label for="username">Usuario</label>
            </div>
            <div class="relative">
                <input name="email" type="text" placeholder="Correo electrónico" />
                <label for="email">Correo electrónico</label>
            </div>
            <div class="relative">
                <input id="password" name="password" type="password" placeholder="Contraseña" />
                <label for="password">Contraseña</label>
            </div>
            <div class="relative">
                <input id="password-repeat" type="password" placeholder="Repite la contraseña" />
                <label for="password-repeat">Repite la contraseña</label>
            </div>
            <div class="relative">
                <button>Crear perfil</button>
            </div>
            {/* <code>
                { JSON.stringify( formState, undefined , 2 ) }
            </code> */}
        </form>
    )

});