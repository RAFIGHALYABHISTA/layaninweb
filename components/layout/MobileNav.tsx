"use client";

import * as React from "react";
import Link from "next/link";
import { Sheet, SheetHeader, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/config/site";
import { CONTACT_CONFIG } from "@/config/contact";
import { CodeIcon, WhatsAppIcon, MailIcon } from "@/components/ui/icons";

interface MobileNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MobileNav({ open, onOpenChange }: MobileNavProps) {
  const handleLinkClick = () => {
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <div>
        <SheetHeader>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-[#00A870] flex items-center justify-center text-white shadow-xs">
              <CodeIcon size={20} />
            </div>
            <span className="font-heading font-extrabold text-xl text-[#222222] tracking-tight">
              Joki<span className="text-[#00A870]">Coding</span>
            </span>
          </div>
          <SheetClose onClick={() => onOpenChange(false)} />
        </SheetHeader>

        {/* Navigation Links */}
        <nav className="flex flex-col py-6 space-y-2">
          {SITE_CONFIG.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className="px-4 py-3 text-base font-medium text-[#222222] hover:text-[#00A870] hover:bg-[#F4FAF7] rounded-xl transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Footer / Quick Actions */}
      <div className="pt-6 border-t border-[#E2E2E2] flex flex-col gap-3">
        <Link href="#contact" onClick={handleLinkClick} className="w-full">
          <Button variant="solid" className="w-full h-12 text-sm font-semibold">
            Konsultasikan Tugas
          </Button>
        </Link>
        <div className="flex items-center justify-center gap-4 pt-2 text-xs text-[#646464]">
          <a
            href={CONTACT_CONFIG.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#00A870] transition-colors p-1"
            aria-label="Chat WhatsApp LayaninWeb"
          >
            <WhatsAppIcon size={16} />
            <span>WhatsApp</span>
          </a>
          <span>•</span>
          <a
            href={CONTACT_CONFIG.email.href}
            className="flex items-center gap-1.5 hover:text-[#00A870] transition-colors p-1"
            aria-label="Kirim Email LayaninWeb"
          >
            <MailIcon size={16} />
            <span>Email</span>
          </a>
        </div>
      </div>
    </Sheet>
  );
}
