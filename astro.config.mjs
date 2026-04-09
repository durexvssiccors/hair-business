import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://rawhairdirect.com',
  output: 'static',
  integrations: [
    mdx(),
  ],
});
