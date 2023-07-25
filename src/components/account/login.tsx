import { component$, useSignal, useStore, useStylesScoped$, useTask$ } from "@builder.io/qwik";

import { useAuthSignin } from '~/routes/plugin@auth';

import styles from './auth.css?inline';

interface LoginFormProps {
    formAction: any;
}

export const LoginForm = component$(({ formAction }: LoginFormProps) => {

    useStylesScoped$(styles);

    const signin = useAuthSignin();
    const inputData = useStore({
        username: '',
        password: '',
    });
    const isError = useSignal(false);

    useTask$(async ({ track }) => {
        track(() => formAction.status);

        if (formAction?.status && formAction?.status !== 200) {
            isError.value = true;
        }
    });

    return (
        <form class="login-form" method="POST">
            <div class="relative">
                <input 
                    class={(isError.value ? ' error' : '')}
                    type="text" 
                    name="username"
                    placeholder="Usuario" 
                    autoComplete="username"
                    onInput$={(e) => {
                        inputData.username = (e.target as HTMLInputElement).value;
                    }} />
            </div>
            <div class="relative">
                <input 
                    class={(isError.value ? ' error' : '')}
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    autoComplete="current-password"
                    onInput$={(e) => {
                        inputData.password = (e.target as HTMLInputElement).value;
                    }} />
            </div>
            <div class="relative">
                <button 
                    preventdefault:click
                    onClick$={async () => {
                        const user = await formAction.submit({
                            username: inputData.username,
                            password: inputData.password,
                        });

                        if (user.status === 200) {
                            signin.submit({
                                providerId: 'credentials',
                                options: {
                                    callbackUrl: "/",
                                    username: inputData.username,
                                    password: inputData.password,
                                }
                            });
                        }
                    }} >
                        Acceder
                    </button>
            </div>
            {isError.value && (
                <div class="message error">
                    <h3>{formAction.value?.formErrors}</h3>
                </div>
            )}
        </form>
    )
});