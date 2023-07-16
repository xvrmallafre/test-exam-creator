import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { type DocumentHead, routeAction$, zod$ } from "@builder.io/qwik-city";
import { PrismaClient } from "@prisma/client";

import { LoginForm } from "~/components/account/login";
import styles from "../auth-layout.css?inline";

export const useLogin = routeAction$(
  () => {
    return;
  },
  zod$((z) => {
    return z.object({
      username: z.string().nonempty(),
      password: z.string().min(8),
    }).refine(async (data) => {
      const prisma = new PrismaClient();
      const user = await prisma.user.findUnique({
        where: {
          username: data.username.toString(),
          password: data.password.toString(),
        }
      });
      return !!user;
    }, { message: "Usuario o contraseña incorrectos" });
  })
);

export default component$(() => {
  const loginAction = useLogin();
  useStylesScoped$(styles);

  //TODO: Not being able to show all the errors reported by zod.
  //TODO: loginAction.value?.formErrors has the refined errors
  //TODO: but loginAction.value?.fieldErrors has the basic validation errors
  //TODO:
  //TODO: A possible solution to this, is create the form from an object, and then 
  //TODO: iterate over the object to show the errors under the field itself.

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
