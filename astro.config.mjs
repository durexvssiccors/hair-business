import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  // We don't need to specify anything else for glob-based markdown rendering.
});
