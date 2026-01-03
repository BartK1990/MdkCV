import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site (https://<user>.github.io/<repo>/)
  // If your repo name differs, update `base` accordingly.
  site: 'https://<your-gh-username>.github.io/MdkCV/',
  base: '/MdkCV/',
  integrations: [tailwind()],
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
});
