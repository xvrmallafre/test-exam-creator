import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    plugins: [qwikCity({
      mdxPlugins: {
        remarkGfm: false,
        rehypeSyntaxHighlight: false,
        rehypeAutolinkHeadings: false,
      },
      trailingSlash: false
    }), qwikVite({
      devTools: {
        clickToSource: false,
      },
    }), tsconfigPaths()],
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
    optimizeDeps: {
      include: [ "@auth/core" ]
    },
  };
});
