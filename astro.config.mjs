// @ts-check
import { defineConfig } from 'astro/config';

import linter from 'astro-linter';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [linter(), react()],

  vite: {
    plugins: [tailwindcss()]
  }
});