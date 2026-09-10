import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "solid" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "solid",
      size = "default",
      type = "button",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A870] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-full active:scale-[0.98] select-none";

    const variantStyles = {
      // Solid Emerald fill with white text (Text Button in DESIGN.md)
      solid:
        "bg-[#00A870] text-white hover:bg-[#009262] shadow-sm border border-transparent hover:shadow-md",
      // White fill with 2px emerald border and emerald text (Primary Button in DESIGN.md)
      primary:
        "bg-white text-[#00A870] border-2 border-[#00A870] hover:bg-[#00A870]/5 hover:border-[#009262] hover:text-[#009262]",
      // Secondary subtle outline
      outline:
        "bg-white text-[#222222] border border-[#E2E2E2] hover:bg-[#F4FAF7] hover:border-[#00A870]/40",
      // Ghost transparent
      ghost:
        "bg-transparent text-[#222222] hover:bg-[#F4FAF7] hover:text-[#00A870]",
      // Simple link
      link:
        "bg-transparent text-[#00A870] hover:underline underline-offset-4 p-0 h-auto",
    };

    const sizeStyles = {
      default: "h-[60px] px-7 text-base font-semibold",
      sm: "h-[44px] px-5 text-sm font-semibold",
      lg: "h-[64px] px-8 text-lg font-bold",
      icon: "h-11 w-11 p-0 rounded-full",
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
