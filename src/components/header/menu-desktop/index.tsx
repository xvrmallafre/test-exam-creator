import { component$ } from '@builder.io/qwik';
import { useAuthSession } from '~/routes/plugin@auth';

import { LoggedInMenu } from './loggedin'
import { NotLoggedInMenu } from './notloggedin'

export const MenuDesktop = component$(() => {
    const session = useAuthSession();
    
    return (session.value?.user ? <LoggedInMenu /> : <NotLoggedInMenu /> );
});
