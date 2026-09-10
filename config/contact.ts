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
    href: "https://wa.me/6282123456780?text=Halo%20JokiCoding%2C%20saya%20mau%20konsultasi%20pengerjaan%20tugas%20coding.%0A%0ABahasa%2FFramework%3A%20%0ADeadline%3A%20%0ADeskripsi%20Tugas%3A%20",
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
    city: "Indonesia",
    description: "Layanan pengerjaan tugas & projek pemrograman daring seluruh Indonesia.",
  },
} as const;
