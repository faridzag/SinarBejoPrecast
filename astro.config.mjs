import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercelStatic from "@astrojs/vercel/static";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import htmx from 'astro-htmx';
import netlify from "@astrojs/netlify";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://sinarbejoprecast.com",
  // image: {
  //   domains: ["images.unsplash.com"]
  // },
  prefetch: true,
  integrations: [htmx(), tailwind(), sitemap({
    i18n: {
      defaultLocale: "id",
      // All urls that don't contain `fr` after `https://sinarbejoprecast.com/` will be treated as default locale, i.e. `en`
      locales: {
        id: "id" // The `defaultLocale` value must present in `locales` keys
      }
    }
  }), compressor({
    gzip: false,
    brotli: true
  })],
  output: "server",
  experimental: {
    clientPrerender: true,
    directRenderScript: true
  }
  // adapter: vercelStatic(),
  ,

  adapter: vercel()
});