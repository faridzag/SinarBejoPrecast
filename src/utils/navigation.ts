// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Produk", url: "/products" },
  { name: "Layanan", url: "/services" },
  // { name: "Blog", url: "/blog" },
  { name: "Kontak", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ekosistem",
    links: [
      { name: "Link", url: "#" },
      { name: "Produk", url: "/products" },
      { name: "Layanan", url: "/services" },
    ],
  },
  {
    section: "Perusahaan",
    links: [
      { name: "Tentang kami", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  google: "https://www.google.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};