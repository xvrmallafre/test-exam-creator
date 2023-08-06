import { component$ } from '@builder.io/qwik';

import { Profile } from '~/components/icons';

export const NotLoggedInMenu = component$(() => {
    return (
    <>
      <div class="dropdown dropdown-end">
        <label tabIndex={0} class="btn btn-ghost rounded" title={'Perfil'}>
          <div class="indicator">
              <Profile />
          </div>
          <span>Perfil</span>
        </label>
        <ul tabIndex={0} class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral rounded min-w-max text-right">
          <li class="items-end"><a href={'/login/'}>Iniciar Sesion</a></li>
          <li class="items-end"><a href={'/register/'}>Registrarse</a></li>
        </ul>
      </div>
    </> 
    );
});