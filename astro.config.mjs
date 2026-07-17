import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

const site =
  "https://hirschenberger.github.io";

export default defineConfig({
  site,
  base: process.env.PUBLIC_BASE ?? "/",
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
