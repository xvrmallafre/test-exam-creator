import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { type DocumentHead, routeAction$, zod$ } from "@builder.io/qwik-city";

//import { useAuthSignin } from '~/routes/plugin@auth';

import { getUserFromCredentials } from "~/helpers/user";
import { LoginForm } from "~/components/account/login";
import styles from "../auth-layout.css?inline";

export const useLogin = routeAction$(
  async ( data, { redirect } ) => {
    const user = await getUserFromCredentials(data);
    
    if (user) {
      

      redirect(301, "/");
    }
  },
  zod$((z) => {
    return z.object({
      username: z.string().nonempty(),
      password: z.string().min(8),
    }).refine(async (data) => {
      return getUserFromCredentials(data);
    }, { message: "Usuario o contraseña incorrectos" });
  })
);

export default component$(() => {
  const loginAction = useLogin();
  useStylesScoped$(styles);

  return (
    <>
        <div class="max-w-md mx-auto">
            <div>
                <h1 class="login-title">Login Form</h1>
            </div>
            <div class="login-content">
                <LoginForm formAction={loginAction} />
            </div>
            {loginAction.status === 200 && (
              <div class="message success">
                <h3>Sesión iniciada satisfactoriamente!</h3>
              </div>
            )}
            {loginAction.status === 400 && (
              <div class="message error">
                <h3>{loginAction.value?.formErrors}</h3>
              </div>
            )}
        </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Iniciar Sesión",
  meta: [
    {
      name: "description",
      content: "Inicia sesión en tu cuenta para ver tus exámenes",
    },
  ],
};
