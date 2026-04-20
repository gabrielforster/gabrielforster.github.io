import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://gabrielforster.github.io",
  base: "/",
  integrations: [mdx(), sitemap()],
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
