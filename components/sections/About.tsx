import * as React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CodeIcon, ClockIcon, ShieldCheckIcon } from "@/components/ui/icons";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";

export function About() {
  const pillars = [
    {
      icon: CodeIcon,
      title: "Clean Code & Komentar Rapi",
      description:
        "Setiap baris kode ditulis rapi dan dilengkapi komentar penjelasan di fungsi-fungsi krusial. Kamu tidak akan kebingungan saat ditanya alur program oleh dosen.",
      delay: 100,
    },
    {
      icon: ClockIcon,
      title: "Pengerjaan Cepat & Tepat Waktu",
      description:
        "Deadline mepet hitungan jam atau hari? Kami terbiasa menangani tugas mendesak dengan penjadwalan ketat sehingga tugas selalu selesai sebelum batas pengumpulan.",
      delay: 200,
    },
    {
      icon: ShieldCheckIcon,
      title: "Garansi Revisi & Panduan Run",
      description:
        "Dapatkan panduan instalasi/setup step-by-step sampai program berjalan mulus di laptopmu, ditambah garansi revisi gratis bila terdapat catatan perbaikan dari penguji.",
      delay: 300,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#F4FAF7] border-y border-black/[0.04]">
      <Container>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Tentang JokiCoding"
            title="Solusi Pengerjaan Tugas & Projek Coding Bebas Pusing"
            description="JokiCoding hadir sebagai partner terpercaya bagi mahasiswa dan pelajar untuk menyelesaikan tugas praktikum, ujian akhir semester, hingga skripsi IT dengan standar profesional."
          />
        </RevealOnScroll>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <RevealOnScroll key={index} delay={pillar.delay}>
                <Card
                  shape="sm"
                  className="bg-white card-hover-effect group h-full"
                >
                  <CardHeader className="pb-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#00A870]/10 text-[#00A870] flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#00A870] group-hover:text-white group-hover:shadow-sm">
                      <Icon size={28} />
                    </div>
                    <CardTitle className="text-xl md:text-2xl group-hover:text-[#00A870] transition-colors duration-200">
                      {pillar.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm md:text-base text-[#646464] leading-relaxed">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Supporting Quote / Mission Banner */}
        <RevealOnScroll delay={350}>
          <div className="mt-14 p-8 sm:p-10 rounded-card-lg bg-white border border-black/[0.05] shadow-sainsin-card text-center max-w-4xl mx-auto hover:shadow-sainsin-ambient transition-all duration-300">
            <p className="font-heading font-bold text-lg sm:text-xl text-[#222222] leading-relaxed mb-3">
              &ldquo;Tugas coding bukan lagi beban. Dapatkan source code rapi berstandar industri dengan penjelasan alur yang siap kamu presentasikan.&rdquo;
            </p>
            <span className="text-xs sm:text-sm font-medium text-[#00A870] tracking-wide uppercase">
              — Standar Kualitas Pengerjaan JokiCoding
            </span>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
