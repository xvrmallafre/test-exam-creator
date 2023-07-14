import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { RegisterForm } from "~/components/account/register";
import styles from "../auth-layout.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <>
      <div>
          <h1 class="login-title">Crea tu usuario</h1>
      </div>
      <div class="login-content">
        <RegisterForm />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Registro",
  meta: [
    {
      name: "description",
      content: "Créate una cuenta para crearte exámenes",
    },
  ],
};
