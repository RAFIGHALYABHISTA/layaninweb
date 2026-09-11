/**
 * Centralized Contact Configuration for JokiCoding
 */

export const CONTACT_CONFIG = {
  brandName: "LayaninWeb",
  tagline: "Solusi Cepat, Rapi & Bergaransi Tugas Coding Anda",
  email: {
    address: "layaninweb@gmail.com",
    href: "mailto:layaninweb@gmail.com?subject=Order%20Tugas%20Coding%20-%20JokiCoding",
    status: "configured" as const,
    ctaText: "Kirim File Soal via Email",
    note: "Kirimkan file panduan tugas, soal PDF, atau repository projek untuk dianalisis tim kami.",
  },
  whatsapp: {
    numberFormatted: "+62 812-3184-7789",
  rawNumber: "6281231847789",

  href: `https://wa.me/6281231847789?text=${encodeURIComponent(
    "Halo LayaninWeb, saya mau konsultasi pengerjaan tugas coding.\n\n" +
    "Bahasa/Framework: \n" +
    "Deadline: \n" +
    "Deskripsi Tugas: "
  )}`,

  status: "configured" as const,
  ctaText: "Chat WhatsApp & Kirim Soal",
  note: "Respon tercepat via WhatsApp (online setiap hari 08.00 – 23.00 WIB). Fast deal & konsultasi gratis.",
},
  social: {
    instagram: {
      handle: "@layaninweb.id",
      href: "https://www.instagram.com/jokicoding.id",
      status: "configured" as const,
      ctaText: "Kunjungi Instagram",
      note: "Lihat testimoni pengerjaan, tips koding mahasiswa, dan promo tugas mepet.",
    },
    linkedin: {
      handle: "JokiCoding Dev Network",
      href: "https://www.linkedin.com/company/jokicoding",
      status: "configured" as const,
      ctaText: "Kunjungi LinkedIn",
      note: "Jejaring developer profesional dan portofolio projek software development.",
    },
  },
  operationalHours: {
    days: "Setiap Hari (Senin – Minggu)",
    hours: "08:00 – 23:00 WIB",
    timezone: "WIB (Layanan Fast Response Deadline Mepet)",
  },
  location: {
    address: "Jl. Sidosermo Airdas",
    city: "Indonesia",
    description: "Layanan pengerjaan tugas & projek pemrograman daring seluruh Indonesia.",
    mapsHref: "https://www.google.com/maps/search/?api=1&query=Jl.+Sidosermo+Airdas",
    mapsEmbedHref: "https://www.google.com/maps?q=Jl.+Sidosermo+Airdas&output=embed",
  },
} as const;
