import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  integrations: [tailwind()],
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
    fallback: {
      es: "en",
    },
  },
  routing: {
    prefixDefaultLocale: false,
    redirectToDefaultLocale: false,
  }
});

