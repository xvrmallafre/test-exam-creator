import { type Signal, component$, useStylesScoped$ } from "@builder.io/qwik";

import { MenuDesktop } from "./menu-desktop";
import { ThemeChanger } from "~/components/themeChanger/themeChanger";

import styles from "./header.css?inline";
import { Menu } from "../icons";

interface HeaderProps {
  theme: Signal<string>;
}

export default component$<HeaderProps>(({ theme }) => {
  useStylesScoped$(styles);

  return (
    <div class="navbar bg-neutral text-neutral-content">
      <div class="flex-1">
        <a class="uppercase text-xl ml-4" href="/">ExamenListo</a>
      </div>
      <div class="flex-none">
        <div class="hidden sm:block">
          <MenuDesktop />
        </div>
        <ThemeChanger theme={ theme } />
        <div class="block sm:hidden">
          <label for="menu-drawer" class="btn btn-square btn-ghost">
            <Menu />
          </label>
        </div>
      </div>
    </div>
  );
});
