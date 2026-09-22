import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "purple" | "gold" | "secondary" | "outline" | "outline-gold" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-wide";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-base px-8 py-3.5 gap-2.5 shadow-lg",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#8B2FC9] via-[#A855F7] to-[#F4D58D] text-white font-bold hover:brightness-110 hover:shadow-purple-glow hover:-translate-y-0.5 relative overflow-hidden group shadow-lg transition-all",
    purple:
      "bg-gradient-to-r from-brand-purple via-brand-purpleLight to-brand-purpleDark text-white font-semibold hover:shadow-purple-glow hover:-translate-y-0.5 relative overflow-hidden group border border-purple-400/40",
    gold:
      "bg-gradient-to-r from-[#FDE68A] via-[#F4D58D] to-[#E5B85C] text-[#12002B] font-bold shadow-gold-glow hover:shadow-gold-glow-lg hover:-translate-y-0.5 relative overflow-hidden group border border-[#FDE68A]/60",
    secondary:
      "bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5 font-medium",
    outline:
      "bg-transparent border border-brand-purpleLight/60 text-purple-200 hover:bg-brand-purple/20 hover:border-brand-purpleLight hover:shadow-purple-glow/40 hover:-translate-y-0.5 font-medium",
    "outline-gold":
      "bg-transparent border border-brand-gold/60 text-brand-goldLight hover:bg-brand-gold/15 hover:border-brand-gold hover:shadow-gold-glow/40 hover:-translate-y-0.5 font-medium",
    ghost:
      "bg-transparent text-purple-200 hover:text-white hover:bg-white/5 font-medium",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClasses}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
