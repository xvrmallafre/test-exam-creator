import { component$ } from '@builder.io/qwik';

export default component$(() => {
    return (
        <div>Examen</div>
    )
});

export const head = {
    title: 'Examen ID',
    meta: [{
        name: 'description',
        content: 'Examen ID'
    }]
}