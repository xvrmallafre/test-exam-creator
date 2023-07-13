import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div class="container container-flex">
        
      </div>
    </>
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
