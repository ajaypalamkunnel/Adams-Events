"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Calendar, Play, Star, MapPin, ChevronDown, Award, Eye } from "lucide-react";
import { siteConfig } from "@/config/site";
import Button from "../ui/Button";
import GlassCard from "../ui/GlassCard";
import Counter from "../ui/Counter";
import Lightbox from "../ui/Lightbox";
import { galleryMedia } from "@/config/site";

export default function Hero() {
  const [videoIndex, setVideoIndex] = useState<number | null>(null);

  return (
    <section className="relative min-h-[92svh] sm:min-h-[100svh] flex items-center justify-center pt-28 pb-8 sm:pt-40 sm:pb-10 overflow-hidden">
      {/* Background Images: Dedicated Mobile Image for mobile screens & Desktop Image for tablet/desktop */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Mobile Background Image */}
        <div className="relative w-full h-full block sm:hidden">
          <Image
            src="/assets/Hero-section-mobile-screen.png"
            alt="Adams Events Wedding Stage & Decoration Mobile"
            fill
            priority
            className="object-cover object-center filter brightness-[0.85] contrast-[1.05]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-plumDark via-brand-plumDark/40 to-brand-plumDark/60" />
        </div>

        {/* Desktop / Tablet Background Image */}
        <div className="relative w-full h-full hidden sm:block">
          <Image
            src="/assets/Hero-section-desktop-screen.png"
            alt="Adams Events Grand Stage Decoration in Thiruvalla Pathanamthitta"
            fill
            priority
            className="object-cover object-center filter brightness-[0.78] contrast-[1.08]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-plumDark via-brand-plumDark/45 to-brand-plumDark/70" />
        </div>

        {/* Radial Vignette */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-brand-plumDark/30 to-brand-plumDark/85 pointer-events-none" />
      </div>

      {/* Subtle Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-60 sm:w-72 h-60 sm:h-72 bg-brand-purple/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-brand-gold/15 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center mt-6 sm:mt-8">
        {/* Tagline Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/20 border border-brand-purpleLight/40 backdrop-blur-md mb-3 text-[11px] sm:text-xs font-semibold text-brand-goldLight tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
          <span>A Complete Event Company</span>
        </div>

        {/* Headline - Balanced Typography */}
        <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.18] max-w-4xl drop-shadow-md">
          Creative Stage Designs &{" "}
          <span className="text-purple-gold-gradient block sm:inline mt-0.5 sm:mt-0">
            Complete Event Planning
          </span>
        </h1>

        {/* Subtitle - Clean & Punchy */}
        <p className="mt-2 sm:mt-3.5 text-xs sm:text-base md:text-lg text-purple-100/90 max-w-xl sm:max-w-2xl leading-relaxed font-normal drop-shadow">
          From intimate family functions to grand weddings and celebrations, we handle every detail with creativity, professionalism, and care across Thiruvalla & Kerala.
        </p>

        {/* Location & Rating Badge - Sleek Single Row */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mt-3 sm:mt-4 text-[11px] sm:text-xs text-purple-100">
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-plumDark/80 backdrop-blur-md border border-brand-purpleLight/20">
            <MapPin className="w-3 h-3 text-brand-gold" />
            <span>Thiruvalla • Pathanamthitta</span>
          </div>
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-plumDark/80 backdrop-blur-md border border-brand-purpleLight/20">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-amber-400" />
              ))}
            </div>
            <span className="text-white ml-0.5 font-semibold">5.0/5</span>
          </div>
        </div>

        {/* Actions for Mobile */}
        <div className="w-full sm:hidden mt-5 space-y-2.5 max-w-sm">
          <div className="grid grid-cols-2 gap-2">
            <Button
              href="#contact"
              variant="primary"
              size="sm"
              className="w-full text-xs py-2.5 px-3 rounded-xl"
            >
              <Calendar className="w-3.5 h-3.5 mr-1 text-white" />
              {siteConfig.primary_cta}
            </Button>

            <Button
              href="#portfolio"
              variant="secondary"
              size="sm"
              className="w-full text-xs py-2.5 px-3 rounded-xl border-brand-purpleLight/30"
            >
              <Eye className="w-3.5 h-3.5 mr-1 text-brand-gold" />
              {siteConfig.secondary_cta}
            </Button>
          </div>

          {/* Clean small video reel trigger button */}
          <button
            onClick={() => setVideoIndex(0)}
            className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-brand-purple/15 hover:bg-brand-purple/30 border border-brand-purpleLight/30 text-brand-goldLight text-[11px] font-medium transition-colors"
          >
            <Play className="w-3 h-3 fill-brand-gold text-brand-gold" />
            <span>Watch Live Event Reel</span>
          </button>
        </div>

        {/* Actions for Desktop */}
        <div className="hidden sm:flex items-center justify-center gap-3 sm:gap-4 mt-6 w-auto">
          <Button
            href="#contact"
            variant="primary"
            size="md"
            className="text-sm px-6 py-2.5"
          >
            <Calendar className="w-4 h-4 mr-2 text-white" />
            {siteConfig.primary_cta}
          </Button>

          <Button
            href="#portfolio"
            variant="secondary"
            size="md"
            className="text-sm px-6 py-2.5 border-brand-purpleLight/30"
          >
            {siteConfig.secondary_cta}
          </Button>

          <button
            onClick={() => setVideoIndex(0)}
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-brand-plumDark/80 hover:bg-brand-purple/30 border border-brand-purpleLight/40 text-brand-goldLight text-sm font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-md"
          >
            <div className="w-5 h-5 rounded-full bg-gradient-to-r from-brand-purple to-brand-gold text-white flex items-center justify-center shadow">
              <Play className="w-2.5 h-2.5 fill-white ml-0.5" />
            </div>
            <span>Watch Live Event Reel</span>
          </button>
        </div>

        {/* Quick Stats Card */}
        <div className="mt-20 sm:mt-8 w-full max-w-2xl">
          <GlassCard variant="elevated" className="py-3 px-1.5 sm:py-4 sm:px-6 border-brand-purpleLight/30 shadow-2xl bg-brand-plumSurface/80">
            <div className="grid grid-cols-4 gap-1 sm:gap-4 divide-x divide-white/10">
              {siteConfig.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center px-0.5 sm:px-1">
                  <div className="font-serif text-base sm:text-2xl font-bold text-purple-gold-gradient leading-none">
                    <Counter end={stat.numeric} suffix={stat.suffix} />
                  </div>
                  <div className="text-[8.5px] sm:text-xs text-purple-200 mt-1 font-medium text-center line-clamp-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="mt-3 sm:mt-6 inline-flex flex-col items-center text-purple-300 hover:text-brand-gold transition-colors group"
          aria-label="Scroll to About Section"
        >
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-medium mb-0.5 text-purple-300/70 group-hover:text-brand-gold">
            Explore Details
          </span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce group-hover:text-brand-gold" />
        </a>
      </div>

      {/* Video Reel Lightbox Modal */}
      {videoIndex !== null && (
        <Lightbox
          items={galleryMedia.filter((m) => m.type === "video")}
          currentIndex={videoIndex}
          onClose={() => setVideoIndex(null)}
          onNavigate={(newIdx) => setVideoIndex(newIdx)}
        />
      )}
    </section>
  );
}
