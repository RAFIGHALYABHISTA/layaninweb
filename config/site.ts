/**
 * Site-wide configuration and navigation settings for JokiCoding
 */

export const SITE_CONFIG = {
  name: "LayaninWeb",
  title: "LayaninWeb — Jasa Joki Tugas Coding, Web, Mobile & Skripsi IT Terpercaya",
  description:
    "Solusi joki tugas coding cepat, rapi, dan terpercaya. Melayani tugas pemrograman dasar, web fullstack, mobile app, algoritma, hingga skripsi IT dengan garansi revisi & penjelasan kode.",
  url: "https://jokicoding.com",
  locale: "id_ID",
  navItems: [
    { label: "Tentang", href: "#about" },
    { label: "Layanan", href: "#services" },
    { label: "Keunggulan", href: "#benefits" },
    { label: "Kontak & Order", href: "#contact" },
  ],
  links: {
    heroCta: "#contact",
    heroSecondary: "#services",
  },
  year: 2026,
} as const;
