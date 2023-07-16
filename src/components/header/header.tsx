import { component$ } from "@builder.io/qwik";
import { QwikLogo } from "../icons/qwik";
import styles from "./header.module.css";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            <QwikLogo width={90} />
          </a>
        </div>
        <ul>
          <li>
            <a href="/login/">
              Iniciar sesión
            </a>
          </li>
          <li>
            <a href="/register/">
              Registrarse
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
