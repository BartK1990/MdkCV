import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';
import rehypeBaseUrl from './plugins/rehype-base-url.mjs';

const base = '/MdkCV/';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site (https://<user>.github.io/<repo>/)
  // If your repo name differs, update `base` accordingly.
  site: 'https://bartk1990.github.io/MdkCV/',
  base: base,
  markdown: {
    rehypePlugins: [
      [rehypeBaseUrl, { base }]
    ],
  },
  integrations: [tailwind()],
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
});
