import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "SinarBejoPrecast",
  tagline: "Beton Precast Berkualitas",
  description: "SinarBejoPrecast menyediakan beton pracetak bangunan dengan kualitas yang bersaing untuk kebutuhan beton konstruksi. Hubungi kami untuk pertanyaan lebih lanjut.",
  description_short: "SinarBejoPrecast menyediakan beton pracetak bangunan dengan kualitas yang bersaing untuk kebutuhan beton konstruksi.",
  url: "https://sinarbejoprecast.com",
  author: "LARE OSING NDO",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "id-ID",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "id-ID",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: :  Beton Precast Berkualitas`,
  description: "Ayo, pesan beton precast dari SinarBejoPrecast untuk beton berkualitas terpercaya di proyek anda.",
  image: ogImageSrc,
};
