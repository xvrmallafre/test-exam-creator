import { Slot, component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './auth-layout.css?inline';

export default component$(() => {

    useStylesScoped$(styles);

    return (
        <div class="login-main">
            <div class="login-bg">
                <div
                    class="login-bg-gradient">
                </div>
                <div class="login-white-bg">
                    <Slot />
                </div>
            </div>
        </div>
    )
});