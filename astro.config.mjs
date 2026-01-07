// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://dmomplaisir.com',
  // No base property needed for custom domain
  integrations: [mdx(), sitemap()],
  output: 'static',
  build: {
    format: 'directory', // /projects/ instead of /projects.html
    assets: '_astro',
    inlineStylesheets: 'auto', // Inline small CSS for better performance
  },
  compressHTML: true, // Minify HTML output
  vite: {
    css: {
      transformer: 'lightningcss',
    },
    build: {
      cssMinify: 'lightningcss', // Use lightningcss for CSS minification
    },
  },
});
