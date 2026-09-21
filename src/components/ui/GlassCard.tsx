import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "gold-tint" | "purple-tint";
  hoverEffect?: boolean;
}

export default function GlassCard({
  children,
  className,
  variant = "default",
  hoverEffect = true,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl backdrop-blur-md transition-all duration-300 relative overflow-hidden",
        variant === "default" && "bg-brand-plumDark/70 border border-brand-purpleLight/15 shadow-xl",
        variant === "elevated" && "bg-brand-plumSurface/85 border border-brand-purpleLight/30 shadow-2xl",
        variant === "gold-tint" && "bg-gradient-to-br from-brand-purple/15 via-brand-plumSurface/85 to-brand-plumDark/90 border border-brand-purpleLight/40 shadow-purple-glow/20",
        variant === "purple-tint" && "bg-gradient-to-br from-brand-purple/20 via-brand-plumSurface/90 to-brand-plumDark/95 border border-brand-purpleLight/50 shadow-purple-glow/30",
        hoverEffect && "hover:border-brand-purpleLight/60 hover:shadow-purple-glow/30 hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {/* Subtle top edge highlight */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand-purpleLight/50 to-transparent pointer-events-none" />
      {children}
    </div>
  );
}
