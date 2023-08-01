import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import markdownIntegration from '@astropub/md';
import partytown from "@astrojs/partytown";

export default defineConfig({
  site: "https:/liztrejo.dev",
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp"
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"]
      }
    }), 
    markdownIntegration(),
    sitemap(),
    robotsTxt()],
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