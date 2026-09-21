"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Target, Compass, HeartHandshake, CheckCircle2 } from "lucide-react";
import { siteConfig, timelineMilestones } from "@/config/site";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import ScrollReveal from "../ui/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden bg-brand-plumDark/60">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Our Story & Philosophy"
          title="A Complete Event Solution in"
          highlight="Thiruvalla & Across Kerala"
          description="Adams Events is a complete wedding and event planning company specializing in elegant decorations, creative stage setups, and memorable celebrations handled with creativity, professionalism, and care."
        />

        {/* Editorial Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Visual Showcase (Overlapping Images) */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal direction="right" duration={0.8}>
              <div className="relative w-full h-[380px] sm:h-[460px] rounded-3xl overflow-hidden border-2 border-brand-purpleLight/30 shadow-2xl">
                <Image
                  src="/assets/Image-14019.jpg"
                  alt="Adams Events Grand Stage Setup in Thiruvalla"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-plumDark/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
                    Master Stage Craftsmanship
                  </span>
                  <p className="text-white font-serif text-lg font-bold">
                    Creative stage setups and elegant floral backdrops tailored to your vision.
                  </p>
                </div>
              </div>

              {/* Floating Overlap Card */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-48 sm:w-60 h-44 sm:h-52 rounded-2xl overflow-hidden border-2 border-brand-purpleLight/50 shadow-purple-glow hidden sm:block">
                <Image
                  src="/assets/Image-21063.jpg"
                  alt="Adams Events Lighting and Stage Details"
                  fill
                  className="object-cover"
                  sizes="240px"
                />
              </div>

              {/* Years of Experience Badge */}
              <div className="absolute -top-6 -left-4 sm:-left-6 px-5 py-4 rounded-2xl bg-gradient-to-br from-brand-purple via-brand-purpleDark to-brand-plumDark text-white font-bold shadow-2xl border border-brand-purpleLight/50">
                <div className="font-serif text-3xl sm:text-4xl leading-none text-brand-goldLight">
                  10+
                </div>
                <div className="text-[11px] uppercase tracking-wider text-purple-200 font-semibold mt-1">
                  Years Heritage
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Story Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="left" duration={0.8}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple/20 border border-brand-purpleLight/30 text-xs font-semibold text-brand-goldLight">
                <Sparkles className="w-3.5 h-3.5" />
                <span>10+ Years of Proven Event Excellence</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
                Turning Every Celebration into a Memorable Experience
              </h3>

              <p className="text-purple-100/90 text-sm sm:text-base leading-relaxed">
                Based in <strong className="text-brand-goldLight">Thiruvalla, Pathanamthitta</strong>, Adams Events offers a complete event solution under one roof. We combine creative decoration, elegant designs, professional planning, and personalized execution to make every occasion unforgettable.
              </p>

              <p className="text-purple-100/80 text-sm sm:text-base leading-relaxed">
                From intimate family functions and birthdays to grand weddings, stage & mandap setups, and corporate milestones, our dedicated on-ground team manages every nuance with passion, precision, and heartfelt hospitality.
              </p>

              {/* Checklist points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Complete Event Planning & Coordination",
                  "Custom Stage & Mandap Architecture",
                  "Fresh Floral & Ceiling Installations",
                  "Intelligent Venue Lighting & SFX",
                  "Thiruvalla & Pathanamthitta Specialists",
                  "100% On-Time Venue Delivery",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-purple-100">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <ScrollReveal delay={0.1}>
            <GlassCard variant="elevated" className="p-8 h-full bg-brand-plumSurface/70 border-brand-purpleLight/20">
              <div className="w-12 h-12 rounded-xl bg-brand-purple/20 border border-brand-purpleLight/40 flex items-center justify-center text-brand-gold mb-5 shadow-md">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-bold text-white mb-2">Our Mission</h4>
              <p className="text-sm text-purple-200/80 leading-relaxed">
                To provide end-to-end event planning and breathtaking decoration services that reflect each client&apos;s unique vision, delivering seamless execution with warmth and professionalism.
              </p>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <GlassCard variant="elevated" className="p-8 h-full bg-brand-plumSurface/70 border-brand-purpleLight/20">
              <div className="w-12 h-12 rounded-xl bg-brand-purple/20 border border-brand-purpleLight/40 flex items-center justify-center text-brand-gold mb-5 shadow-md">
                <Compass className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-bold text-white mb-2">Our Vision</h4>
              <p className="text-sm text-purple-200/80 leading-relaxed">
                To be Central Kerala&apos;s most trusted complete event company, renowned for artistic innovation, client-first coordination, and creating timeless memories.
              </p>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <GlassCard variant="elevated" className="p-8 h-full bg-brand-plumSurface/70 border-brand-purpleLight/20">
              <div className="w-12 h-12 rounded-xl bg-brand-purple/20 border border-brand-purpleLight/40 flex items-center justify-center text-brand-gold mb-5 shadow-md">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-bold text-white mb-2">Our Promise</h4>
              <p className="text-sm text-purple-200/80 leading-relaxed">
                Transparent proposals, genuine care for every detail, punctual completion well ahead of guest arrival, and an effortless celebration for you and your family.
              </p>
            </GlassCard>
          </ScrollReveal>
        </div>

        {/* 10+ Year Evolution Timeline */}
        <div className="pt-4">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-gold block mb-2">
              Our Journey
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              10+ Years of Crafting Memorable Events
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {timelineMilestones.map((milestone, idx) => (
              <ScrollReveal key={milestone.year} delay={idx * 0.1}>
                <GlassCard className="p-6 h-full relative group hover:border-brand-purpleLight/60 bg-brand-plumSurface/60 border-brand-purpleLight/20">
                  <div className="text-xs font-mono font-bold text-brand-goldLight px-2.5 py-1 rounded-md bg-brand-purple/30 inline-block mb-3 border border-brand-purpleLight/40">
                    {milestone.year}
                  </div>
                  <h5 className="font-serif text-base font-bold text-white mb-2 group-hover:text-brand-goldLight transition-colors">
                    {milestone.title}
                  </h5>
                  <p className="text-xs text-purple-200/70 leading-relaxed">
                    {milestone.desc}
                  </p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
