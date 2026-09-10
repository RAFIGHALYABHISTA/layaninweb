import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { CodeIcon, ArrowRightIcon } from "@/components/ui/icons";

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center py-24 md:py-32 bg-[#F4FAF7]">
      <Container className="text-center flex flex-col items-center">
        <div className="w-16 h-16 rounded-2xl bg-[#00A870]/10 text-[#00A870] flex items-center justify-center mb-6">
          <CodeIcon size={32} />
        </div>
        <span className="text-sm font-bold uppercase tracking-widest text-[#00A870] mb-2">
          Error 404: Not Found
        </span>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-[#222222] tracking-tight mb-4">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-base sm:text-lg text-[#646464] max-w-md mb-8">
          Halaman yang Anda tuju tidak ditemukan atau URL salah. Silakan kembali ke beranda JokiCoding untuk konsultasi tugas.
        </p>
        <Link href="/">
          <Button variant="solid" size="default" className="gap-2">
            <span>Kembali ke Beranda</span>
            <ArrowRightIcon size={18} />
          </Button>
        </Link>
      </Container>
    </main>
  );
}
