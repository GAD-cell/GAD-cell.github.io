import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

export default defineConfig({
  site: 'https://gad-cell.github.io/',
  integrations: [tailwind(), react()]
})