import { component$, useStylesScoped$ } from '@builder.io/qwik';

import { useAuthSession, useAuthSignout } from '~/routes/plugin@auth';

import type { SessionUserInterface } from '~/interfaces';
import styles from './menu.css?inline';
import { Profile } from '~/components/icons/profile';

export const LoggedInMenu = component$(() => {
    useStylesScoped$(styles);

    const session = useAuthSession();
    const signout = useAuthSignout();
    const user = session.value?.user as SessionUserInterface;
    
    return (<>
        <div class="dropdown dropdown-end">
          <div>
            <span class="uppercase text-l ml-4">{`Hola ${user.name}`}</span>
          </div>
          <label tabIndex={0} class="btn btn-ghost rounded" title={'Perfil'}>
            <a class="indicator" href='/account/'>
                <Profile />
              {/* <span class="badge badge-sm indicator-item">8</span> */}
            </a>
            <span>Perfil</span>
          </label>
          <ul tabIndex={0} class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-800 rounded w-40 text-right">
            <li class="items-end"><a href={'/login/'}>Iniciar Sesion{/* <span class="badge">New</span> */}</a></li>
            <li class="items-end"><a href={'/register/'}>Registrarse</a></li>
          </ul>
        </div>
    </> );

    return (
        <ul>
            <li>
                <span class="welcome-message">{`Hola ${user.name}`}</span>
            </li>
            <li>
                <span
                    class="logout-button"
                    onClick$={async () => {
                        await signout.submit({
                            callbackUrl: '/',
                        });
                    }}>
                    Cerrar sesión
                </span>
            </li>
        </ul>
    );
});