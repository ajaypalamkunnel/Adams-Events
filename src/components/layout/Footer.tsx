import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Heart,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { siteConfig, servicesData } from "@/config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-plumDark border-t border-brand-purpleLight/20 pt-16 pb-12 overflow-hidden text-purple-200/80">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-purpleLight/60 shadow-lg bg-brand-plumDark/80">
                <Image
                  src="/assets/Adams_logo.png"
                  alt="Adams Events"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-white block">
                  {siteConfig.business_name}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-medium">
                  {siteConfig.tagline}
                </span>
              </div>
            </div>

            <p className="text-sm text-purple-200/70 leading-relaxed pr-4">
              Thiruvalla & Pathanamthitta&apos;s complete wedding and event planning company, specializing in creative stage setups, elegant floral decorations, and memorable celebrations across Kerala.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {siteConfig.social_links.instagram && (
                <a
                  href={siteConfig.social_links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-brand-purple/20 hover:bg-brand-purple hover:text-white transition-all duration-300 border border-brand-purpleLight/30 text-brand-gold"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-serif text-white font-bold text-base tracking-wide flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-purple-200/70">
              <li>
                <a href="#about" className="hover:text-brand-goldLight transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-goldLight transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-brand-goldLight transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#video-reel" className="hover:text-brand-goldLight transition-colors">
                  Video Reels
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-brand-goldLight transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-brand-goldLight transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-brand-goldLight transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-goldLight transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services List */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif text-white font-bold text-base tracking-wide flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              Our Services
            </h3>
            <ul className="space-y-2 text-sm text-purple-200/70">
              {servicesData.slice(0, 6).map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={`/services/${srv.slug}`}
                    className="hover:text-brand-goldLight transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{srv.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-brand-gold" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif text-white font-bold text-base tracking-wide flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              Reach Us
            </h3>
            <ul className="space-y-3 text-sm text-purple-200/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>
                  {siteConfig.location.address}, {siteConfig.location.city},{" "}
                  {siteConfig.location.state_country}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <div className="flex flex-col">
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="hover:text-brand-goldLight transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-brand-goldLight transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-purple-300/60">
                <Clock className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>{siteConfig.contact.business_hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-300/60">
          <p>© {currentYear} {siteConfig.business_name}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-brand-gold fill-brand-gold" />
            <span>for memorable celebrations across Kerala</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
