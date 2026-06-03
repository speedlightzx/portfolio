// @ts-check
import { defineConfig } from 'astro/config';

import linter from 'astro-linter';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import node from '@astrojs/node';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [linter(), react()],

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'load'
  },

  vite: {
    plugins: [tailwindcss()]
  }
});