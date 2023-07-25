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
        
          {(true && (
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
                <li> {/* 
                  //TODO: This is only to test if the logout funciont works
                  //TODO: Only will appear in the logged in section to users be able to logout
                */}
                  <a href="/logout/">
                    Cerrar sesión
                  </a>
                </li>
              </ul>
          ))}  
      </div>
    </header>
  );
});
