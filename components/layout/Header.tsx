"use client";

import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/MobileNav";
import { SITE_CONFIG } from "@/config/site";
import { CodeIcon, MenuIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 h-[73px] w-full transition-all duration-300 border-b",
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-black/[0.08] shadow-xs"
            : "bg-white border-black/[0.04]"
        )}
      >
        <Container className="h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#00A870] rounded-lg p-1"
            aria-label="LayaninWeb Beranda"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2">
              <img
              src="/images/logo.png"
              alt="LayaninWeb Logo"
              className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-2xl text-[#222222] tracking-tight leading-none">
                Layanin<span className="text-[#00A870]">Web</span>
              </span>
              <span className="text-[10px] font-medium tracking-widest text-[#646464] uppercase mt-0.5">
                Dev & Task Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navigasi Utama">
            {SITE_CONFIG.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-base font-medium text-[#222222] hover:text-[#00A870] transition-colors duration-200 py-1 group/nav"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A870] transition-all duration-300 group-hover/nav:w-full rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link href="#contact">
              <Button
                variant="solid"
                size="sm"
                className="h-[44px] px-6 text-sm font-semibold btn-hover-shine shadow-xs hover:shadow-md"
              >
                Konsultasi Tugas
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-full text-[#222222] hover:bg-[#F4FAF7] hover:text-[#00A870] focus:outline-none focus:ring-2 focus:ring-[#00A870] transition-colors"
              aria-label="Buka menu navigasi"
              aria-expanded={mobileMenuOpen}
            >
              <MenuIcon size={24} />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileNav open={mobileMenuOpen} onOpenChange={setMobileMenuOpen} />
    </>
  );
}
