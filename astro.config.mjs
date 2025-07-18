import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import netlify from "@astrojs/netlify";
import path from "path"; // ✅ This is needed

export default defineConfig({
  site: 'https://gad-cell.github.io/',
  integrations: [mdx(), sitemap(), tailwind(), icon()],
});