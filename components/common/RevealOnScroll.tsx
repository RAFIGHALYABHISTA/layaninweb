"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface RevealOnScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number; // delay in milliseconds (e.g. 100, 200)
  direction?: "up" | "down" | "none";
}

export function RevealOnScroll({
  children,
  className,
  delay = 0,
  direction = "up",
  ...props
}: RevealOnScrollProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // If reduced motion is preferred, reveal immediately
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      ref.current?.classList.add("motion-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const currentEl = ref.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) observer.unobserve(currentEl);
    };
  }, []);

  const translateClass =
    direction === "up"
      ? "translate-y-6"
      : direction === "down"
      ? "-translate-y-6"
      : "";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu",
        isVisible
          ? "opacity-100 translate-y-0"
          : `opacity-0 ${translateClass}`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
