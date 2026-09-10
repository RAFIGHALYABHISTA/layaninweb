import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "emerald" | "outline" | "surface";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-[#00A870]/10 text-[#00A870] border border-[#00A870]/20",
    emerald: "bg-[#00A870] text-white border border-transparent",
    outline: "bg-white text-[#222222] border border-[#E2E2E2]",
    surface: "bg-[#F4FAF7] text-[#222222] border border-[#E2E2E2]/60",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wide uppercase font-sans select-none",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}
