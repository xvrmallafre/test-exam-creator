import { component$, useStylesScoped$ } from "@builder.io/qwik";

import { useAuthSession } from "~/routes/plugin@auth";

import { LoggedInMenu } from "./menu/loggedin";
import { NotLoggedInMenu } from "./menu/notloggedin";

import styles from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  const session = useAuthSession();

  return (
    <div class="navbar bg-neutral text-neutral-content">
      <div class="flex-1">
        <a class="uppercase text-xl ml-4" href="/">ExamenListo</a>
      </div>
      <div class="flex-none">
        {(session.value?.user ? <LoggedInMenu /> : <NotLoggedInMenu /> )}  
      </div>
    </div>
  );
});
