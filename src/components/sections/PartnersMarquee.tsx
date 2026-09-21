"use client";

import React from "react";
import { Sparkles, Building2 } from "lucide-react";
import { partnerVenues } from "@/config/site";

export default function PartnersMarquee() {
  const repeatedVenues = [...partnerVenues, ...partnerVenues];

  return (
    <section className="relative py-12 bg-brand-plumDark border-y border-brand-purpleLight/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-brand-gold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Trusted at Premier Venues Across Thiruvalla & Kerala</span>
          <Sparkles className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Infinite Marquee Track */}
      <div className="relative w-full overflow-hidden flex items-center group">
        {/* Left & Right gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-plumDark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-plumDark to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap gap-6 py-2">
          {repeatedVenues.map((venue, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-brand-plumSurface/70 border border-brand-purpleLight/20 hover:border-brand-purpleLight/60 text-sm font-medium text-purple-200/90 hover:text-white transition-all backdrop-blur-md shadow-sm"
            >
              <Building2 className="w-4 h-4 text-brand-gold shrink-0" />
              <span>{venue}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
