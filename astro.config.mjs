import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://uncrashableholdings.com',
  // /ifi is printed on the Continuity Scan rack cards.
  redirects: {
    '/ifi': '/diagnostics/ifi',
  },
  integrations: [sitemap()],
});
