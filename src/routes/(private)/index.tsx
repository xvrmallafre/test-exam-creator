import { Slot, component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <Slot />
  );
});

export const head: DocumentHead = {
  title: "Cuenta",
  meta: [
    {
      name: "description",
      content: "Datos de tu cuenta",
    },
  ],
};
