import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from './login.css?inline';

export const LoginForm = component$(() => {

    useStylesScoped$(styles);

    return (
        <form class="login-form">
            <div class="relative">
                <input name="email" type="text" placeholder="Usuario" />
                <label for="email">Usuario</label>
            </div>
            <div class="relative">
                <input id="password" name="password" type="password" placeholder="Contraseña" />
                <label for="password">Contraseña</label>
            </div>
            <div class="relative">
                <button>Acceder</button>
            </div>
            {/* <code>
                { JSON.stringify( formState, undefined , 2 ) }
            </code> */}
        </form>
    )

});