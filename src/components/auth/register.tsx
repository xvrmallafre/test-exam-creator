import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";

import styles from './auth.css?inline';

interface RegisterFormProps {
    formAction: any;
}

export const RegisterForm = component$(({ formAction }: RegisterFormProps) => {

    console.log(formAction);

    //TODO: Refactor this file to implement here the submit action to allow login after registration

    const errorName = (formAction.value?.fieldErrors?.name);
    const errorLastname = (formAction.value?.fieldErrors?.lastname);
    const errorUsername = (formAction.value?.fieldErrors?.username);
    const errorEmail = (formAction.value?.fieldErrors?.email);
    const errorPassword = (formAction.value?.fieldErrors?.password);
    const errorPasswordConfirmation = (formAction.value?.fieldErrors?.passwordConfirmation);

    useStylesScoped$(styles);

    return (
        <Form class="register-form" action={formAction}>
            <div class="relative">
                <input class={(errorName) ? 'error' : ''} id="name" type="text" name="name" placeholder="Nombre" autoComplete={"name"} />
                {errorName && (
                    <div class="error">
                        <span>{formAction.value?.fieldErrors.name}</span>
                    </div>
                )}
            </div>
            <div class="relative">
                <input class={(errorLastname) ? 'error ' : ''} id="lastname" type="text" name="lastname" placeholder="Apellidos" autoComplete={"lastname"}/>
                {errorLastname && (
                    <div class="error">
                        <span>{formAction.value?.fieldErrors.lastname}</span>
                    </div>
                )}
            </div>
            <div class="relative">
                <input class={(errorUsername) ? 'error' : ''} id="username" type="text" name="username" placeholder="Usuario" autoComplete={"username nickname"} />
                {errorUsername && (
                    <div class="error">
                        <span>{formAction.value?.fieldErrors.username}</span>
                    </div>
                )}
            </div>
            <div class="relative">
                <input class={(errorEmail) ? 'error' : ''} id="email" name="email" type="text" placeholder="Correo electrónico" autoComplete={"email"}/>
                {errorEmail && (
                    <div class="error">
                        <span>{(formAction.value?.fieldErrors.email?.length > 1) ? formAction.value?.fieldErrors.email[0] : formAction.value?.fieldErrors.email}</span>
                    </div>
                )}
            </div>
            <div class="relative">
                <input class={(errorPassword) ? 'error' : ''} id="password" name="password" type="password" placeholder="Contraseña" autoComplete={"password"} />
                {errorPassword && (
                    <div class="error">
                        <span>{formAction.value?.fieldErrors.password}</span>
                    </div>
                )}
            </div>
            <div class="relative">
                <input class={(errorPasswordConfirmation) ? 'error' : ''} id="passwordConfirmation" name="passwordConfirmation" type="password" placeholder="Repite la contraseña" autoComplete={"none"} />
                {errorPasswordConfirmation && (
                    <div class="error">
                        <span>{(formAction.value?.fieldErrors.email?.passwordConfirmation > 1) ? formAction.value?.fieldErrors.passwordConfirmation[0] : formAction.value?.fieldErrors.passwordConfirmation}</span>
                    </div>
                )}
            </div>
            <div class="relative">
                <button type="submit">Crear perfil</button>
            </div>
        </Form>
    )
});