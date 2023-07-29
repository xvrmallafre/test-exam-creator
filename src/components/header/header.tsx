import { component$ } from "@builder.io/qwik";

import { useAuthSession } from "~/routes/plugin@auth";

import { LoggedInMenu } from "./menu/loggedin";
import { NotLoggedInMenu } from "./menu/notloggedin";

//import styles from "./header.module.css";

export default component$(() => {
  const session = useAuthSession();

  return (
    <div class="navbar bg-neutral text-neutral-content">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">ExamenListo</a>
      </div>
      <div class="flex-none">
        {(session.value?.user ? <LoggedInMenu /> : <NotLoggedInMenu /> )}  
      </div>
    </div>
  );

 /* return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            <QwikLogo width={90} />
          </a>
        </div>
        
      </div>
    </header>
  ); 
  
  <ul class="menu menu-horizontal px-1">
          <li><a>Link</a></li>
          <li>
            <details>
              <summary>
                Parent
              </summary>
              <ul class="p-2 bg-base-100">
                <li><a>Link 1</a></li>
                <li><a>Link 2</a></li>
              </ul>
            </details>
          </li>
        </ul>
  */
});
