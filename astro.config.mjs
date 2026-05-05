// @ts-check
import { defineConfig } from 'astro/config';

import linter from 'astro-linter';

// https://astro.build/config
export default defineConfig({
  integrations: [linter()]
});