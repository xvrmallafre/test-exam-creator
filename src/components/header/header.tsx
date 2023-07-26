import { component$ } from "@builder.io/qwik";

import { useAuthSession } from "~/routes/plugin@auth";

import { LoggedInMenu } from "./menu/loggedin";
import { NotLoggedInMenu } from "./menu/notloggedin";

import { QwikLogo } from "../icons/qwik";
import styles from "./header.module.css";

export default component$(() => {
  const session = useAuthSession();

 return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            <QwikLogo width={90} />
          </a>
        </div>
        {(session.value?.user ? <LoggedInMenu /> : <NotLoggedInMenu /> )}  
      </div>
    </header>
  );
});
