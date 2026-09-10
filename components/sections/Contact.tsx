import * as React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CONTACT_CONFIG } from "@/config/contact";
import {
  WhatsAppIcon,
  MailIcon,
  InstagramIcon,
  ClockIcon,
  ArrowRightIcon,
} from "@/components/ui/icons";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F4FAF7] border-t border-black/[0.04]">
      <Container>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Hubungi & Order"
            title="Kirimkan Detail Tugas Coding Anda"
            description="Hubungi tim kami via WhatsApp untuk respon instan dan estimasi pengerjaan, atau kirimkan lampiran dokumen soal lengkap melalui Email."
          />
        </RevealOnScroll>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12 max-w-4xl mx-auto">
          {/* WhatsApp Card */}
          <RevealOnScroll delay={100}>
            <Card
              shape="lg"
              className="flex flex-col justify-between p-6 sm:p-8 bg-white border border-black/[0.06] card-hover-effect h-full group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#00A870]/10 text-[#00A870] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#00A870] group-hover:text-white group-hover:shadow-xs">
                    <WhatsAppIcon size={28} />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#00A870]/10 text-[#00A870] transition-colors group-hover:bg-[#00A870]/20">
                    Respon Cepat (Recommended)
                  </span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-[#222222] mb-1 group-hover:text-[#00A870] transition-colors duration-200">
                  WhatsApp Direct
                </h3>
                <p className="text-sm text-[#00A870] font-semibold mb-3">
                  {CONTACT_CONFIG.whatsapp.numberFormatted}
                </p>
                <p className="text-sm text-[#646464] leading-relaxed mb-6">
                  {CONTACT_CONFIG.whatsapp.note}
                </p>
              </div>
              <a
                href={CONTACT_CONFIG.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  variant="solid"
                  size="default"
                  className="w-full h-14 text-sm sm:text-base font-semibold group/btn btn-hover-shine flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon size={20} />
                  <span>{CONTACT_CONFIG.whatsapp.ctaText}</span>
                  <ArrowRightIcon
                    size={16}
                    className="transition-transform duration-200 group-hover/btn:translate-x-1"
                  />
                </Button>
              </a>
            </Card>
          </RevealOnScroll>

          {/* Email Card */}
          <RevealOnScroll delay={200}>
            <Card
              shape="lg"
              className="flex flex-col justify-between p-6 sm:p-8 bg-white border border-black/[0.06] card-hover-effect h-full group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#00A870]/10 text-[#00A870] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#00A870] group-hover:text-white group-hover:shadow-xs">
                    <MailIcon size={28} />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#F4FAF7] text-[#646464] border border-[#E2E2E2]">
                    Kirim Lampiran File
                  </span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-[#222222] mb-1 group-hover:text-[#00A870] transition-colors duration-200">
                  Email Lampiran Tugas
                </h3>
                <p className="text-sm text-[#00A870] font-semibold mb-3">
                  {CONTACT_CONFIG.email.address}
                </p>
                <p className="text-sm text-[#646464] leading-relaxed mb-6">
                  {CONTACT_CONFIG.email.note}
                </p>
              </div>
              <a href={CONTACT_CONFIG.email.href} className="w-full">
                <Button
                  variant="primary"
                  size="default"
                  className="w-full h-14 text-sm sm:text-base font-semibold group/btn flex items-center justify-center gap-2 group-hover:border-[#00A870] transition-all"
                >
                  <MailIcon size={20} />
                  <span>{CONTACT_CONFIG.email.ctaText}</span>
                  <ArrowRightIcon
                    size={16}
                    className="transition-transform duration-200 group-hover/btn:translate-x-1"
                  />
                </Button>
              </a>
            </Card>
          </RevealOnScroll>
        </div>

        {/* Operational & Social Info Band */}
        <RevealOnScroll delay={300}>
          <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Operational Hours */}
            <div className="p-6 rounded-card-sm bg-white border border-black/[0.05] flex items-start gap-4 hover:shadow-sm transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#00A870]/10 text-[#00A870] flex items-center justify-center shrink-0">
                <ClockIcon size={20} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-base text-[#222222] mb-1">
                  Jam Operasional Layanan
                </h4>
                <p className="text-sm text-[#646464] leading-relaxed">
                  {CONTACT_CONFIG.operationalHours.days} • {CONTACT_CONFIG.operationalHours.hours}
                </p>
                <p className="text-xs text-[#888888] mt-1">
                  Tersedia slot prioritas untuk tugas dengan deadline kilat hari yang sama (same-day delivery).
                </p>
              </div>
            </div>

            {/* Social Channels */}
            <div className="p-6 rounded-card-sm bg-white border border-black/[0.05] flex items-start gap-4 hover:shadow-sm transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#00A870]/10 text-[#00A870] flex items-center justify-center shrink-0">
                <InstagramIcon size={20} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-base text-[#222222] mb-1">
                  Kanal Sosial & Portofolio
                </h4>
                <div className="flex items-center gap-4 text-sm pt-1">
                  <a
                    href={CONTACT_CONFIG.social.instagram.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00A870] hover:underline font-medium"
                  >
                    Instagram ({CONTACT_CONFIG.social.instagram.handle})
                  </a>
                  <span>•</span>
                  <a
                    href={CONTACT_CONFIG.social.linkedin.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00A870] hover:underline font-medium"
                  >
                    LinkedIn
                  </a>
                </div>
                <p className="text-xs text-[#888888] mt-1">
                  {CONTACT_CONFIG.location.description}
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
