import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
export default defineConfig({
  site: 'https://hair-business-ahad1qtic-durexvssiccors-projects.vercel.app',
  output: 'static',
  integrations: [
    mdx(),
  ],
});
