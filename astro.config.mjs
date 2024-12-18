// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import node from '@astrojs/node';

export default defineConfig({
  integrations: [tailwind()
  ],

  site: 'https://natewhoms.github.io',
  base: 'natewhoms-github-io',

  adapter: node({
    mode: 'standalone',
  }),
});