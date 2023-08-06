import { component$, useStylesScoped$ } from '@builder.io/qwik';

import { Profile } from '~/components/icons';

import styles from './menu.css?inline';

export const MobileNotLoggedInMenu = component$(() => {
  useStylesScoped$(styles);
    return (
    <>
      <ul class="menu bg-neutral w-56 text-neutral-content h-full">
        <li>
          <h2 class="menu-title text-neutral-content">
            <span class="indicator"><Profile /></span>
            <span> Perfil</span>
          </h2>
          <ul>
            <li><a href={'/login/'}>Iniciar Sesión</a></li>
            <li><a href={'/register/'}>Registrarse</a></li>
          </ul>
        </li>
      </ul>
    </> 
    );
});