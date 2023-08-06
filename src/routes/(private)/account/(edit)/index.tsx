import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { routeAction$, type DocumentHead, Form, routeLoader$ } from '@builder.io/qwik-city';

import styles from './edit-profile.css?inline';

export const useGetUser = routeLoader$(async ({ sharedMap }) => {
  return sharedMap.get('session')?.user;
});

export const useEditAccountAction = routeAction$(async (data) => {
  
});

export default component$(() => {
  const userData = useGetUser();
  const editAccountAction = useEditAccountAction();

  useStylesScoped$(styles);

  return (
    <>
        <div class="max-w-3xl mx-auto">
          <div class="title">
            <h2>Modifica tus datos de usuario</h2>
          </div>
          <div class="form text-center">
            <Form action={editAccountAction}>
              <div class="two-cols">
                <div class="form-control group">
                  <input type="text" name="name" id="name" placeholder=" " class="peer" value={userData.value?.name} autoComplete={'none'} />
                  <label for="name" class="transform -translate-y-6 peer-focus:left-0 peer-focus:text-neutral-content peer-focus:dark:text-neutral-content peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
                </div>
                <div class="form-control group">
                  <input type="text" name="lastname" id="lastname" placeholder=" " class="peer" value={userData.value?.lastname ?? ''} autoComplete={'none'} />
                  <label for="lastname" class="transform -translate-y-6 peer-focus:left-0 peer-focus:text-neutral-content peer-focus:dark:text-neutral-content peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellidos</label>
                </div>
              </div>
              <div class="two-cols">
                <div class="form-control group">
                  <input type="text" name="username" id="username" placeholder=" " class="peer" value={userData.value?.username} disabled autoComplete={'none'} />
                  <label for="username" class="transform -translate-y-6 peer-focus:left-0 peer-focus:text-neutral-content peer-focus:dark:text-neutral-content peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre de usuario</label>
                </div>
                <div class="form-control group">
                  <input type="email" name="email" id="email" placeholder=" " class="peer" value={userData.value?.email} disabled autoComplete={'none'} />
                  <label for="email" class="transform -translate-y-6 peer-focus:left-0 peer-focus:text-neutral-content peer-focus:dark:text-neutral-content peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo electrónico</label>
                </div>
              </div>
              <div class="two-cols">
                <div class="form-control group">
                  <input type="password" name="password" id="password" placeholder=" " class="peer" autoComplete={'none'} />
                  <label for="password" class="transform -translate-y-6 peer-focus:left-0 peer-focus:text-neutral-content peer-focus:dark:text-neutral-content peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contraseña</label>
                </div>
                <div class="form-control group">
                  <input type="password" name="passwordConfirmation" id="passwordConfirmation" placeholder=" " class="peer" autoComplete={'none'} />
                  <label for="passwordConfirmation" class="transform -translate-y-6 peer-focus:left-0 peer-focus:text-neutral-content peer-focus:dark:text-neutral-content peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Repite la contraseña</label>
                </div>
              </div>
              <button type="submit">Enviar</button>
            </Form>
          </div>
        </div>
    </>
  );
});

export const head: DocumentHead = {
    title: 'Editar perfil',
    meta: [{
        name: 'description',
        content: 'Edita tu perfil de usuario'
    }]
}