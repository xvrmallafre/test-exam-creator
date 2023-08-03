import { type Signal, component$, useStylesScoped$ } from "@builder.io/qwik";

import { useAuthSession } from "~/routes/plugin@auth";

import { LoggedInMenu } from "./menu/loggedin";
import { NotLoggedInMenu } from "./menu/notloggedin";
import { ThemeChanger } from "~/components/themeChanger/themeChanger";

import styles from "./header.css?inline";

interface HeaderProps {
  theme: Signal<string>;
}

export default component$<HeaderProps>(({ theme }) => {
  useStylesScoped$(styles);
  const session = useAuthSession();

  return (
    <div class="navbar bg-neutral text-neutral-content">
      <div class="flex-1">
        <a class="uppercase text-xl ml-4" href="/">ExamenListo</a>
      </div>
      <div class="flex-none">
        {(session.value?.user ? <LoggedInMenu /> : <NotLoggedInMenu /> )}
        <ThemeChanger theme={ theme } />
      </div>
    </div>
  );
});
