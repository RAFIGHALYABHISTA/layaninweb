import * as React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheckIcon, CodeIcon, UsersIcon, ClockIcon } from "@/components/ui/icons";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";

export function Benefits() {
  const benefits = [
    {
      icon: ShieldCheckIcon,
      title: "Kerahasiaan 100% Terjamin",
      description:
        "Data diri, asal universitas, dan dokumen tugasmu kami jaga kerahasiaannya secara ketat tanpa pernah dipublikasikan.",
      delay: 100,
    },
    {
      icon: CodeIcon,
      title: "Original Code & Bebas Plagiasi",
      description:
        "Source code diketik khusus berdasarkan instruksi modul dan studi kasus yang diberikan, bukan hasil copy-paste massal.",
      delay: 200,
    },
    {
      icon: UsersIcon,
      title: "Bimbingan Alur & Siap Presentasi",
      description:
        "Dilengkapi dokumentasi alur kerja dan penjelasan logika kode agar kamu percaya diri dan paham saat ditanya oleh dosen penguji.",
      delay: 300,
    },
    {
      icon: ClockIcon,
      title: "Tarif Mahasiswa & Transparan",
      description:
        "Biaya pengerjaan fleksibel dan transparan disesuaikan dengan skala kerumitan soal dan deadline, tanpa ada biaya siluman.",
      delay: 400,
    },
  ];

  return (
    <section id="benefits" className="py-20 md:py-28 bg-[#F4FAF7] border-y border-black/[0.04]">
      <Container>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Keunggulan LayaninWeb"
            title="Mengapa Memilih LayaninWeb?"
            description="Kami memprioritaskan keamanan privasi, kualitas clean code, dan kepuasan mahasiswa agar kamu meraih nilai maksimal tanpa stres."
          />
        </RevealOnScroll>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <RevealOnScroll key={index} delay={benefit.delay}>
                <Card
                  shape="sm"
                  className="bg-white p-2 border border-black/[0.05] card-hover-effect group h-full"
                >
                  <CardHeader className="flex flex-row items-start gap-5 space-y-0 p-6">
                    <div className="w-13 h-13 rounded-2xl bg-[#00A870]/10 text-[#00A870] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#00A870] group-hover:text-white group-hover:shadow-xs">
                      <Icon size={26} />
                    </div>
                    <div className="flex flex-col">
                      <CardTitle className="text-xl md:text-2xl mb-2 group-hover:text-[#00A870] transition-colors duration-200">
                        {benefit.title}
                      </CardTitle>
                      <p className="text-sm sm:text-base text-[#646464] leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </CardHeader>
                </Card>
              </RevealOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
