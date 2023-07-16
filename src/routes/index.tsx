import { Slot, component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <Slot />
  );
});

export const head: DocumentHead = {
  title: "Crea tus exámenes tipo test",
  meta: [
    {
      name: "description",
      content: "Aplicación para la creación de exámenes tipo test",
    },
  ],
};
