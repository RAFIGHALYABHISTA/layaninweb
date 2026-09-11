import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { SITE_CONFIG } from "@/config/site";
import { CONTACT_CONFIG } from "@/config/contact";
import {
  WhatsAppIcon,
  MailIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#E2E2E2] text-[#222222]">
      <Container className="py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-[#E2E2E2]">
          {/* Brand Col */}
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-[#00A870] rounded-lg w-fit"
              aria-label="JokiCoding Beranda"
            >
              <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center shadow-xs">
                <Image
                  src="/images/logo.png"
                  alt={`${SITE_CONFIG.name} logo`}
                  width={40}
                  height={40}
                  sizes="40px"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-2xl text-[#222222] tracking-tight leading-none">
                  Joki<span className="text-[#00A870]">Coding</span>
                </span>
                <span className="text-[10px] font-medium tracking-widest text-[#646464] uppercase mt-0.5">
                  Dev & Task Solutions
                </span>
              </div>
            </Link>
            <p className="text-sm text-[#646464] leading-relaxed">
              Layanan bantuan pengerjaan tugas coding, projek web, mobile app, struktur data & algoritma, hingga bimbingan skripsi IT dengan clean code dan garansi revisi.
            </p>
          </div>

          {/* Nav Col */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-heading font-bold text-base text-[#222222]">
              Navigasi Halaman
            </h3>
            <ul className="space-y-2.5 text-sm text-[#646464]">
              {SITE_CONFIG.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#00A870] transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-heading font-bold text-base text-[#222222]">
              Kontak & Order Cepat
            </h3>
            <ul className="space-y-2.5 text-sm text-[#646464]">
              <li>
                <a
                  href={CONTACT_CONFIG.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#00A870] transition-colors"
                >
                  <WhatsAppIcon size={16} className="text-[#00A870] shrink-0" />
                  <span>WhatsApp: {CONTACT_CONFIG.whatsapp.numberFormatted}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_CONFIG.email.href}
                  className="flex items-center gap-2 hover:text-[#00A870] transition-colors"
                >
                  <MailIcon size={16} className="text-[#00A870] shrink-0" />
                  <span>{CONTACT_CONFIG.email.address}</span>
                </a>
              </li>
              <li className="text-xs text-[#888888] pt-1">
                Jam Layanan: {CONTACT_CONFIG.operationalHours.days} ({CONTACT_CONFIG.operationalHours.hours})
              </li>
            </ul>
          </div>

          {/* Social Channels Col */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-heading font-bold text-base text-[#222222]">
              Kanal Sosial & Portofolio
            </h3>
            <p className="text-xs text-[#646464] leading-relaxed">
              Ikuti update tips pemrograman, review projek, dan promo tugas mepet.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CONTACT_CONFIG.social.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#E2E2E2] flex items-center justify-center text-[#222222] hover:text-[#00A870] hover:border-[#00A870] hover:bg-[#F4FAF7] transition-all"
                aria-label="Instagram JokiCoding"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={CONTACT_CONFIG.social.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#E2E2E2] flex items-center justify-center text-[#222222] hover:text-[#00A870] hover:border-[#00A870] hover:bg-[#F4FAF7] transition-all"
                aria-label="LinkedIn JokiCoding"
              >
                <LinkedInIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-6 lg:gap-10 py-10 border-b border-[#E2E2E2]">
          <div className="flex flex-col justify-center gap-3">
            <h3 className="font-heading font-bold text-base text-[#222222]">
              Lokasi Kami
            </h3>
            <p className="text-sm text-[#646464] leading-relaxed">
              {CONTACT_CONFIG.location.address}
            </p>
            <a
              href={CONTACT_CONFIG.location.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-sm font-semibold text-[#00A870] hover:text-[#008f5f] transition-colors"
            >
              Buka di Google Maps &rarr;
            </a>
          </div>
          <div className="overflow-hidden rounded-xl border border-[#E2E2E2] bg-[#F4FAF7] shadow-xs">
            <iframe
              src={CONTACT_CONFIG.location.mapsEmbedHref}
              title={`Peta lokasi ${CONTACT_CONFIG.location.address}`}
              className="h-64 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#646464]">
          <p>© {SITE_CONFIG.year} LayaninWeb. Hak Cipta Dilindungi Undang-Undang.</p>
          <p className="text-center sm:text-right">
            Layanan Pengerjaan Tugas & Bimbingan Pemrograman Bergaransi
          </p>
        </div>
      </Container>
    </footer>
  );
}
