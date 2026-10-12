// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages project sites live under /<repo-name>/.
// When the site moves to its own domain, set BASE_PATH=/ (and SITE_URL) in the workflow.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://example.github.io',
  base: process.env.BASE_PATH ?? '/valerie-grant-interiors',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});
