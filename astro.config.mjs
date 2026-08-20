// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  redirects: {
      '/rch': 'https://discord.gg/rrhxskVWNg'
  },

  adapter: node({
    mode: 'standalone'
  })
});