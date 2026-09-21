"use client";

import React, { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle, Sparkles } from "lucide-react";
import { testimonialsData } from "@/config/site";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import ScrollReveal from "../ui/ScrollReveal";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="relative py-20 sm:py-28 overflow-hidden bg-brand-plumDark">
      {/* Background Orbs */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-brand-purple/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Words of Gratitude"
          title="Celebrated by Couples &"
          highlight="Families Across Kerala"
          description="Read genuine experiences from families who trusted Adams Events with their once-in-a-lifetime celebrations."
        />

        {/* Aggregate Google Rating Badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-brand-plumSurface/80 border border-brand-purpleLight/30 backdrop-blur-md shadow-lg">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-white">
              <span className="text-brand-gold font-bold">5.0 / 5.0</span> Rating based on{" "}
              <span className="text-brand-goldLight underline">180+ Verified Client Reviews</span>
            </div>
          </div>
        </div>

        {/* Testimonial Carousel Card */}
        <div className="max-w-4xl mx-auto relative">
          <ScrollReveal>
            <GlassCard
              variant="elevated"
              className="p-8 sm:p-12 relative border-brand-purpleLight/40 shadow-2xl min-h-[340px] flex flex-col justify-between bg-brand-plumSurface/80"
            >
              {/* Giant Quote Icon */}
              <Quote className="absolute top-6 right-8 w-16 h-16 text-brand-purple/20 rotate-180 pointer-events-none" />

              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-serif text-base sm:text-xl md:text-2xl text-white leading-relaxed italic">
                  &ldquo;{current.content}&rdquo;
                </p>
              </div>

              {/* Author Info & Navigation Controls */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-serif text-lg font-bold text-brand-goldLight">
                      {current.name}
                    </h4>
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="text-xs text-purple-200 mt-0.5">
                    {current.event} • {current.location} ({current.date})
                  </p>
                </div>

                {/* Arrows */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevReview}
                    className="p-2.5 rounded-full bg-white/5 hover:bg-brand-purple text-white transition-all border border-white/10"
                    aria-label="Previous Review"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-xs text-purple-300 font-mono px-2">
                    {currentIndex + 1} / {testimonialsData.length}
                  </span>
                  <button
                    onClick={nextReview}
                    className="p-2.5 rounded-full bg-white/5 hover:bg-brand-purple text-white transition-all border border-white/10"
                    aria-label="Next Review"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-8 bg-gradient-to-r from-brand-purple to-brand-gold"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
