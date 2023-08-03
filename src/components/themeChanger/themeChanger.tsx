import { type Signal, component$, useStylesScoped$ } from '@builder.io/qwik';

import { Pantone } from '~/components/icons';
import styles from './themeChanger.css?inline';

interface ThemeChangerProps {
  theme: Signal<string>;
}

export const CSSThemeScript = component$(() => {
  const themeScript = `
  if (!localStorage.getItem('theme')) {
    let theme = 'forest';

    if (!window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme = 'winter';
    }

    localStorage.setItem('theme', theme);
} 

  document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'));
  `;
  return <script dangerouslySetInnerHTML={themeScript} />;
});

export const ThemeChanger = component$<ThemeChangerProps>(({ theme }) => {
  useStylesScoped$(styles);

  return (
    <>
      <button class="theme-changer btn btn-ghost rounded"
        onClick$={() => {
          switch (localStorage.getItem('theme')) {
            case 'forest':
              theme.value = 'winter';
              localStorage.setItem('theme', 'winter');
              break;
            case 'winter':
              theme.value = 'forest';
              localStorage.setItem('theme', 'forest');
              break;
          }

          document.documentElement.setAttribute('data-theme', theme.value);
        }}>

        <Pantone htmlClass="theme-pantone" />
      </button>
    </>
  );
});