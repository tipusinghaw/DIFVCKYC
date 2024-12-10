import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  server: { port: 3001, host: true},
  integrations: [tailwind(), react()]
});