import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";

import styles from './auth.css?inline';

interface LoginFormProps {
    formAction: any;
}

export const LoginForm = component$(({ formAction }: LoginFormProps) => {

    useStylesScoped$(styles);

    return (
        <Form class="login-form" action={formAction}>
            <div class="relative">
                <input id="username" name="username" type="text" placeholder="Usuario" autoComplete={'username'} />
            </div>
            <div class="relative">
                <input id="password" name="password" type="password" placeholder="Contraseña" />
            </div>
            <div class="relative">
                <button type="submit">Acceder</button>
            </div>
        </Form>
    )
});