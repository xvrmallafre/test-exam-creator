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
          <label tabIndex={0} class="btn btn-ghost rounded" title={'Perfil'}>
            <span class="indicator"><Profile /></span>
            <span>{`${user.username}`}</span>
          </label>
          <ul tabIndex={0} class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral rounded min-w-max text-right">
            <li class="items-end"><a href={'/account/'}>Ver perfil</a></li>
            <li class="items-end">
                <span onClick$={async () => {
                        await signout.submit({
                            callbackUrl: '/',
                        });
                    }}>
                    Cerrar sesión
                </span>  
            </li>
          </ul>
        </div>
    </> );
});