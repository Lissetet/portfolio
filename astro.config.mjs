import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import markdownIntegration from '@astropub/md';

// https://astro.build/config
export default defineConfig({
  site: "https:/trejo.work/",
  integrations: [tailwind(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), markdownIntegration(),
  sitemap(), robotsTxt()],
  vite: {
    ssr: {
      external: ["svgo"],
      noExternal: ["astro-google-fonts-optimizer"]
    },
    server: {
      fs: {
        allow: ['..']
      }
    }
  }
});