// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind({
      applyBaseStyles: true,
    }),
  ],
  site: 'https://natewhoms.github.io',
  base: 'natewhoms-github-io',
});
