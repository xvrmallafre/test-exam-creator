import { component$ } from '@builder.io/qwik';

export default component$(() => {
    return (
        <div>Crea tu examen</div>
    )
});

export const head = {
    title: 'Crea tu examen',
    meta: [{
        name: 'description',
        content: 'Aquí puedes crear tu examen para luego más tarde poder probarte a ti mismo'
    }]
}