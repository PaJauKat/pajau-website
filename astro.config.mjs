// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  redirects: {
      '/rch': 'https://discord.gg/rrhxskVWNg',
      '/download-kathub': 'https://github.com/PaJauKat/kathub-go/releases/latest/download/KatHub_Setup.exe'
  },

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  })
});