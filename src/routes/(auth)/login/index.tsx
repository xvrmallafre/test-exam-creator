import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { type DocumentHead, routeAction$, zod$ } from "@builder.io/qwik-city";

//TODO: implement useAuthSession

import { getUserFromCredentials } from "~/helpers/user";
import { LoginForm } from "~/components/account/login";
import styles from "../auth-layout.css?inline";

export const useLogin = routeAction$(
  async ( data ) => {
    const user = await getUserFromCredentials(data);

    if (user) {
      console.log("usuario", user);
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
