import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon, SparklesIcon, CheckIcon, TerminalIcon } from "@/components/ui/icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 lg:pt-24 lg:pb-32 bg-white">
      {/* Subtle radial emerald background glow */}
      <div
        className="absolute top-0 right-1/4 -z-10 w-[500px] h-[500px] rounded-full bg-[#00A870]/6 blur-3xl pointer-events-none animate-pulse-soft"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <Badge variant="default" className="mb-6 flex items-center gap-1.5 shadow-xs">
              <SparklesIcon size={14} className="text-[#00A870] animate-pulse-soft" />
              <span>Jasa Joki & Bantuan Tugas Coding Terpercaya</span>
            </Badge>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[58px] text-[#222222] tracking-tight leading-[1.1] mb-6">
              Selesaikan Tugas Coding Cepat, Rapi & Bergaransi Bersama{" "}
              <span className="text-[#00A870] inline-block hover:scale-[1.02] transition-transform duration-200">
                LayaninWeb
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-[18px] text-[#646464] font-normal leading-[1.7] mb-8 max-w-xl">
              Buntu dengan bug dan deadline mepet? Kami bantu selesaikan tugas pemrograman dasar,
              pembuatan web, aplikasi mobile, hingga skripsi IT dengan clean code dan penjelasan alur program.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <Link href="#contact" className="w-full sm:w-auto">
                <Button
                  variant="solid"
                  size="default"
                  className="w-full sm:w-auto min-w-[200px] h-[58px] sm:h-[60px] text-base font-semibold group btn-hover-shine shadow-sm hover:shadow-md"
                >
                  <span>Kirim Tugas Sekarang</span>
                  <ArrowRightIcon
                    size={18}
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </Button>
              </Link>
              <Link href="#services" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="default"
                  className="w-full sm:w-auto min-w-[180px] h-[58px] sm:h-[60px] text-base font-semibold transition-all duration-200 hover:shadow-sm"
                >
                  Lihat Layanan
                </Button>
              </Link>
            </div>

            {/* Value Highlights */}
            <div className="pt-6 border-t border-[#E2E2E2] w-full flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-[#444444]">
              <div className="flex items-center gap-2 group cursor-default">
                <div className="w-5 h-5 rounded-full bg-[#00A870]/10 flex items-center justify-center text-[#00A870] transition-transform duration-200 group-hover:scale-110">
                  <CheckIcon size={12} />
                </div>
                <span className="group-hover:text-[#222222] transition-colors">100% Clean Code & Komentar</span>
              </div>
              <div className="flex items-center gap-2 group cursor-default">
                <div className="w-5 h-5 rounded-full bg-[#00A870]/10 flex items-center justify-center text-[#00A870] transition-transform duration-200 group-hover:scale-110">
                  <CheckIcon size={12} />
                </div>
                <span className="group-hover:text-[#222222] transition-colors">Bisa Deadline Kilat / Mepet</span>
              </div>
              <div className="flex items-center gap-2 group cursor-default">
                <div className="w-5 h-5 rounded-full bg-[#00A870]/10 flex items-center justify-center text-[#00A870] transition-transform duration-200 group-hover:scale-110">
                  <CheckIcon size={12} />
                </div>
                <span className="group-hover:text-[#222222] transition-colors">Garansi Revisi Sampai ACC</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column (5 cols) with subtle floating effect */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[540px] aspect-[4/3] rounded-card-lg overflow-hidden shadow-sainsin-ambient border border-black/[0.06] bg-[#F4FAF7] animate-float-slow group">
              <Image
                src="/images/joki-coding-hero.jpg"
                alt="Tim programmer LayaninWeb sedang menyelesaikan tugas pemrograman dengan clean code"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Floating interactive badge */}
              <div className="absolute bottom-4 left-4 z-10 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full border border-black/[0.06] shadow-md flex items-center gap-2.5 animate-float-subtle">
                <div className="w-7 h-7 rounded-full bg-[#00A870] text-white flex items-center justify-center shadow-xs">
                  <TerminalIcon size={14} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#222222] leading-tight">
                    Kode Siap Demo
                  </span>
                  <span className="text-[10px] text-[#646464] font-medium leading-none">
                    Lengkap README & Panduan Run
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
