import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TerminalIcon, CodeIcon, BugIcon, CheckIcon, ArrowRightIcon } from "@/components/ui/icons";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";

export function Services() {
  const services = [
    {
      icon: TerminalIcon,
      title: "Tugas Algoritma & Dasar Pemrograman",
      description:
        "Pengerjaan tugas praktikum mingguan, pemrograman berorientasi objek (OOP), dan struktur data tingkat lanjut.",
      features: [
        "Bahasa: Python, C, C++, Java, C#, Golang",
        "Struktur Data: Stack, Queue, Linked List, Tree, Graph",
        "Kompilasi bersih bebas error & lengkap dokumentasi",
      ],
      badge: "Tugas Kuliah & Praktikum",
      delay: 100,
    },
    {
      icon: CodeIcon,
      title: "Web & Mobile App Development",
      description:
        "Pembuatan aplikasi web responsif dan mobile app mulai dari tugas besar (tubes) hingga portofolio projek interaktif.",
      features: [
        "Frontend: React.js, Next.js, Vue, Tailwind CSS",
        "Backend: Laravel, Node.js, Express, PHP, Django, Flask",
        "Mobile: Flutter, React Native, REST API & MySQL/PostgreSQL",
      ],
      badge: "Tugas Besar & Projek",
      delay: 200,
    },
    {
      icon: BugIcon,
      title: "Skripsi IT, AI & Bug Fixing",
      description:
        "Bantuan pembuatan sistem skripsi, model kecerdasan buatan (Machine Learning), serta perbaikan error/bug pada kode yang buntu.",
      features: [
        "Sistem Informasi, E-Commerce, GIS, & IoT",
        "AI / Data Science: CNN, SVM, Random Forest, NLP, YOLO",
        "Garansi bimbingan run aplikasi & sesi tanya-jawab",
      ],
      badge: "Skripsi & Tugas Akhir",
      delay: 300,
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <Container>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Layanan Kami"
            title="Cakupan Bahasa Pemrograman & Jenis Projek"
            description="Apapun bahasa dan framework yang digunakan di kampusmu, tim developer JokiCoding siap menyelesaikannya secara tuntas dan rapi."
          />
        </RevealOnScroll>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <RevealOnScroll key={index} delay={service.delay}>
                <Card
                  shape="lg"
                  className="flex flex-col justify-between card-hover-effect border border-black/[0.06] bg-white group h-full"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#00A870]/10 text-[#00A870] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#00A870] group-hover:text-white group-hover:shadow-sm">
                        <Icon size={28} />
                      </div>
                      <span className="max-w-[65%] text-right text-xs font-semibold px-3 py-1 rounded-full bg-[#F4FAF7] text-[#00A870] border border-[#00A870]/20 transition-colors group-hover:bg-[#00A870]/10">
                        {service.badge}
                      </span>
                    </div>
                    <CardTitle className="text-2xl mb-2 group-hover:text-[#00A870] transition-colors duration-200">
                      {service.title}
                    </CardTitle>
                    <p className="text-sm text-[#646464] leading-relaxed">
                      {service.description}
                    </p>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <div className="pt-4 border-t border-[#E2E2E2]/70 space-y-3">
                      <p className="text-xs font-bold text-[#222222] uppercase tracking-wider">
                        Keunggulan Pengerjaan:
                      </p>
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#444444]">
                          <div className="w-4 h-4 rounded-full bg-[#00A870]/15 flex items-center justify-center text-[#00A870] shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110">
                            <CheckIcon size={10} />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="pt-4">
                    <Link href="#contact" className="w-full">
                      <Button
                        variant="primary"
                        size="sm"
                        className="w-full h-12 text-sm font-semibold group-hover:bg-[#00A870] group-hover:text-white transition-all duration-300 flex items-center justify-center gap-1.5"
                      >
                        <span>Konsultasikan Tugas Ini</span>
                        <ArrowRightIcon size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </RevealOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
