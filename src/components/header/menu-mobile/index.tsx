import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { useAuthSession } from '~/routes/plugin@auth';

import { MobileLoggedInMenu } from './loggedin'
import { MobileNotLoggedInMenu } from './notloggedin'

import styles from './menu.css?inline';

export const MobileMenuDesktop = component$(() => {
    useStylesScoped$(styles);
    const session = useAuthSession();
    
    return (session.value?.user ? <MobileLoggedInMenu /> : <MobileNotLoggedInMenu /> );
});
