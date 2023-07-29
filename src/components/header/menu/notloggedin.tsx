import { component$, useStylesScoped$ } from '@builder.io/qwik';

import { Profile } from '~/components/icons/profile';
import styles from './menu.css?inline'

export const NotLoggedInMenu = component$(() => {
    useStylesScoped$(styles);

    return (<>
    <div class="dropdown dropdown-end">
      <label tabIndex={0} class="btn btn-ghost" title={'Perfil'}>
        <div class="indicator">
            <Profile />
          {/* <span class="badge badge-sm indicator-item">8</span> */}
        </div>
        <span>Perfil</span>
      </label>
      <ul tabIndex={0} class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40 text-right">
        <li class="items-end"><a href={'/login'}>Iniciar Sesion{/* <span class="badge">New</span> */}</a></li>
        <li class="items-end"><a href={'/register'}>Registrarse</a></li>
      </ul>
    </div>
    </> );
});