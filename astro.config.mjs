import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercelServerless from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercelServerless(),
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [],
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
    fallback: {
      es: "en",
    },
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
