import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, SparklesIcon } from "@/components/ui/icons";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";

export function CTA() {
  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden">
      <Container>
        <RevealOnScroll>
          <div className="relative rounded-card-lg bg-gradient-to-br from-[#00A870] to-[#008f5f] text-white p-10 sm:p-14 lg:p-16 text-center shadow-xl overflow-hidden group">
            {/* Subtle decorative floating circles */}
            <div
              className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 rounded-full bg-white/10 blur-2xl pointer-events-none animate-pulse-soft"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-black/10 blur-xl pointer-events-none animate-float-slow"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-xs sm:text-sm font-semibold mb-6 backdrop-blur-xs shadow-xs">
                <SparklesIcon size={14} className="animate-pulse-soft" />
                <span>Fast Response & Konsultasi Gratis</span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15] mb-6">
                Deadline Tugas Coding Sudah Di Depan Mata?
              </h2>

              <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed mb-10 max-w-2xl">
                Kirimkan modul atau soal tugasmu sekarang ke tim LayaninWeb. Dapatkan review teknis cepat, estimasi durasi pengerjaan, dan tarif mahasiswa tanpa ribet.
              </p>

              <Link href="#contact">
                <Button
                  variant="primary"
                  size="default"
                  className="bg-white text-[#00A870] border-2 border-white hover:bg-white/95 hover:text-[#008f5f] h-[60px] px-8 text-base font-bold shadow-lg group btn-hover-shine"
                >
                  <span>Kirim Tugas via WhatsApp</span>
                  <ArrowRightIcon
                    size={18}
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </Button>
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
