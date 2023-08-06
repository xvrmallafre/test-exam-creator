import { component$, useStylesScoped$ } from '@builder.io/qwik';

import { useAuthSession, useAuthSignout } from '~/routes/plugin@auth';

import type { SessionUserInterface } from '~/interfaces';
import { Profile, Exam } from '~/components/icons';

import styles from './menu.css?inline';

export const MobileLoggedInMenu = component$(() => {
    useStylesScoped$(styles);
    const session = useAuthSession();
    const signout = useAuthSignout();
    const user = session.value?.user as SessionUserInterface;

    return (
      <ul class="menu bg-neutral w-56 h-full text-neutral-content">
        <li>
          <h2 class="menu-title text-neutral-content flex items-center">
            <span class="indicator"><Exam /></span>
            <span class="ml-3">Mis exámenes</span>
          </h2>
          <ul>
            <li><a href={'/exam/'}>Ver exámenes</a></li>
            <li><a href={'/exam/create/'}>Crear examen</a></li>
          </ul>
        </li>
        <li>
          <h2 class="menu-title text-neutral-content flex items-center">
            <span class="indicator"><Profile /></span>
            <span class="ml-3">{`${user.username}`}</span>
          </h2>
          <ul>
            <li><a href={'/account/'}>Ver perfil</a></li>
            <li>
                <span onClick$={async () => {
                        await signout.submit({
                            callbackUrl: '/',
                        });
                    }}>
                    Cerrar sesión
                </span>  
            </li>
          </ul>
        </li>
      </ul>
    );
});