import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col mb-12 md:mb-16",
        align === "center" ? "items-center text-center mx-auto max-w-3xl" : "items-start text-left max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <Badge variant="default" className="mb-4">
          {eyebrow}
        </Badge>
      )}
      <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#222222] tracking-tight leading-[1.15] mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-[#646464] font-normal leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
