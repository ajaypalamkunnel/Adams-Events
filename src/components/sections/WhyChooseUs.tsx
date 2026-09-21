"use client";

import React from "react";
import {
  Award,
  Sparkles,
  Flower2,
  Clock,
  ShieldCheck,
  Layers,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { whyChooseUsData } from "@/config/site";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import ScrollReveal from "../ui/ScrollReveal";

const iconMap = {
  Award,
  Sparkles,
  Flower2,
  Clock,
  ShieldCheck,
  Layers,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-20 sm:py-28 overflow-hidden bg-brand-plumDark/70">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-purple/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="The Adams Events Advantage"
          title="Why Clients & Families Choose"
          highlight="Adams Events"
          description="A complete event solution under one roof, combining creative decoration, elegant designs, professional planning, and personalized execution to turn every celebration into a memorable experience."
        />

        {/* 6 Key Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {whyChooseUsData.map((item, idx) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Sparkles;

            return (
              <ScrollReveal key={idx} delay={idx * 0.08}>
                <GlassCard
                  variant="elevated"
                  className="p-8 h-full flex flex-col justify-between group hover:border-brand-purpleLight/60 bg-brand-plumSurface/70 border-brand-purpleLight/20"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-brand-purple/20 border border-brand-purpleLight/30 flex items-center justify-center text-brand-gold group-hover:bg-brand-purple group-hover:text-white transition-all duration-300 shadow-md mb-6">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-brand-goldLight transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-purple-200/80 mt-3 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-brand-gold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Unmatched Quality Standard</span>
                  </div>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Comparison Table / Strip */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <GlassCard variant="elevated" className="p-6 sm:p-10 border-brand-purpleLight/40 bg-brand-plumSurface/80 shadow-2xl">
              <div className="text-center mb-8">
                <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">
                  Transparent Comparison
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                  How We Elevate Above Standard Vendors
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  {
                    aspect: "Service Scope",
                    adams: "Complete event solution under one roof: planning, decor, lighting, AV & coordination",
                    others: "Fragmented vendors requiring stressful multi-party coordination",
                  },
                  {
                    aspect: "Stage & Mandap Design",
                    adams: "Bespoke creative concepts tailored to your wedding theme and venue dimensions",
                    others: "Generic catalog templates or outdated stock setups",
                  },
                  {
                    aspect: "Floral & Decor Quality",
                    adams: "Fresh, premium blossoms sourced directly and assembled hours ahead of time",
                    others: "Prone to wilting blooms, plastic materials, or hurried last-minute setups",
                  },
                  {
                    aspect: "Pricing & Trust",
                    adams: "Transparent itemized packages starting from clear entry tiers with zero hidden fees",
                    others: "Surprise last-minute surcharges for transport, overtime, and labor",
                  },
                ].map((row, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-1 md:grid-cols-12 gap-3 p-4 rounded-xl bg-white/5 border border-white/5 items-center"
                  >
                    <div className="md:col-span-4 font-semibold text-sm text-white">
                      {row.aspect}
                    </div>
                    <div className="md:col-span-4 flex items-start gap-2 text-xs text-brand-goldLight font-medium">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{row.adams}</span>
                    </div>
                    <div className="md:col-span-4 flex items-start gap-2 text-xs text-purple-300/60">
                      <XCircle className="w-4 h-4 text-rose-400/80 shrink-0 mt-0.5" />
                      <span>{row.others}</span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
