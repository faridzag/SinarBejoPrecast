// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Produk", url: "/products" },
  { name: "Kontak", url: "/contact" },
  { name: "Tentang Kami", url: "/about" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Perusahaan",
    links: [
      { name: "Tentang kami", url: "/about" },
      { name: "Produk", url: "/products" },
    ],
  },
  {
    section: "Hubungi Kami",
    links: [
      {
        name: "Jl. Lidjen, Dsn. Krajan, RT/RW 001/002, Desa Licin, Kec. Licin, Kab Banyuwangi",
      },
      {
        name: "Email: cv.sinarbejo@gmail.com",
        url: "mailto:cv.sinarbejo@gmail.com",
      },
      { name: "Telp: 0852 3009 9980" },
    ],
  },
];
// An object of links for social icons
// TODO: Link Toko, Shopee, Tokped
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
