import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://raw-hair-ghana.vercel.app', // Update after Vercel assigns your domain
  output: 'static',
  integrations: [mdx()],
});
