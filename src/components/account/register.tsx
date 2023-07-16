import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";

import styles from './auth.css?inline';

interface RegisterFormProps {
    formAction: any;
}

export const RegisterForm = component$(({ formAction }: RegisterFormProps) => {

    useStylesScoped$(styles);

    return (
        <Form class="register-form" action={formAction}>
            <div class="relative">
                <input id="name" type="text" name="name" placeholder="Nombre" autoComplete={"name"} />
                <label for="name">Nombre</label>
            </div>
            <div class="relative">
                <input id="lastname" type="text" name="lastname" placeholder="Apellidos" autoComplete={"lastname"}/>
                <label for="lastname">Apellidos</label>
            </div>
            <div class="relative">
                <input id="username" type="text" name="username" placeholder="Usuario" autoComplete={"username nickname"} />
                <label for="username">Usuario</label>
            </div>
            <div class="relative">
                <input id="email" name="email" type="text" placeholder="Correo electrónico" autoComplete={"email"}/>
                <label for="email">Correo electrónico</label>
            </div>
            <div class="relative">
                <input id="password" name="password" type="password" placeholder="Contraseña" autoComplete={"password"} />
                <label for="password">Contraseña</label>
            </div>
            <div class="relative">
                <input id="passwordConfirmation" name="passwordConfirmation" type="password" placeholder="Repite la contraseña" autoComplete={"none"} />
                <label for="passwordConfirmation">Repite la contraseña</label>
            </div>
            <div class="relative">
                <button type="submit">Crear perfil</button>
            </div>
        </Form>
    )
});