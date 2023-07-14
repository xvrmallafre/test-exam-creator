import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { LoginForm } from "~/components/account/login";
import styles from "../auth-layout.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <>
        <div class="max-w-md mx-auto">
            <div>
                <h1 class="login-title">Login Form</h1>
            </div>
            <div class="login-content">
                <LoginForm />
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
