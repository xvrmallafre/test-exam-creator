import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return <div>Lista de exámenes</div>
});

export const head = {
    title: 'Lista de exámenes',
    meta: [{
        name: 'description',
        content: 'Aquí puedes ver todos los exámenes que has creado'
    }]
}