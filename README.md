# Adams Events — Luxury Wedding & Event Planning Website

A production-ready website for **Adams Events** ("A Complete Event Company"), based in Thiruvalla, Pathanamthitta, Kerala.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lenis** smooth scrolling.

---

## 🌟 Features & Highlights

- **Luxury Brand Aesthetic**: Royal Purple (`#8B2FC9`), Deep Plum (`#12002B`), and Champagne Gold (`#F4D58D`) color scheme with frosted glassmorphism cards and smooth glowing accents.
- **Dedicated Responsive Hero**: Tailored desktop and mobile hero screen representations with ambient glow and quick statistics.
- **Cinematic Video Reels**: Integrated interactive video player showcasing live event reels (`Adams_reel-1.mp4`, `Adams-reel-2.mp4`) with custom play/pause, mute, fullscreen, and playlist switching.
- **Complete Service Spectrum**: 8 services with pricing badges, key inclusions, benefits, workflows, and FAQs:
  1. Wedding Planning
  2. Wedding Decorations
  3. Stage & Mandap Design (Starting at ₹25,000)
  4. Reception & Engagement Decoration (Starting at ₹15,000)
  5. Birthday & Private Events (Starting at ₹8,000)
  6. Corporate & Special Events
  7. Lighting & Special Effects
  8. Floral & Venue Styling
- **Interactive Budget Estimator**: Dynamic calculator allowing clients to configure event scale, decor tier, and enhancements with instant WhatsApp inquiry export.
- **Interactive Transformation Slider**: Before/After draggable stage comparison.
- **Full-Screen Media Lightbox**: Swipe & keyboard-accessible lightbox supporting both high-resolution photography and video clips.
- **Real-Time Office Status**: Live "Open Now / Closed" indicator calculated in Indian Standard Time (IST).
- **SEO & Structured Data**: Built-in JSON-LD schemas (`LocalBusiness`, `EventVenue`, `FAQPage`), XML sitemap, and robots.txt.
- **Direct Lead Capturing**: Validated contact form (Zod + React Hook Form) with confetti celebration on success and direct WhatsApp click-to-chat.

---

## 📁 Project Structure

```
ADAMS-EVENTS/
├── public/
│   └── assets/                  # Images, logos, and video reels
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts # Form submission API endpoint
│   │   ├── portfolio/[slug]/    # Dynamic portfolio case study pages
│   │   ├── services/[slug]/     # Dynamic SEO service detail pages
│   │   ├── error.tsx            # Global error boundary
│   │   ├── layout.tsx           # Metadata, fonts, schemas, header/footer
│   │   ├── not-found.tsx        # Custom 404 page
│   │   ├── page.tsx             # Main single-page application
│   │   ├── robots.ts            # Dynamic robots.txt
│   │   └── sitemap.ts           # Dynamic XML sitemap
│   ├── components/
│   │   ├── layout/              # Navbar, Footer, FloatingActions, ThemeToggle
│   │   ├── providers/           # SmoothScroll (Lenis), ThemeProvider
│   │   ├── sections/            # Hero, About, Services, WhyChooseUs, Portfolio,
│   │   │                        # VideoReel, Gallery, Testimonials, Marquee, Contact, QuoteCalculator
│   │   └── ui/                  # GlassCard, Button, SectionHeading, Lightbox, BeforeAfter, Counter, ScrollReveal
│   ├── config/
│   │   └── site.ts              # Central business data & configuration
│   ├── lib/
│   │   ├── schema.ts            # JSON-LD Schema generators
│   │   ├── utils.ts             # Tailwind class merge utilities
│   │   └── validations.ts       # Contact form Zod schemas
│   ├── styles/
│   │   └── globals.css          # Theme tokens, gradients, scrollbars, glass utilities
│   └── types/
│       └── index.ts             # TypeScript interfaces & types
├── tailwind.config.ts           # Custom brand color definitions & animations
└── package.json
```

---

## 🛠️ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## ⚙️ How to Customize

- **Business Details & Content**: Modify `src/config/site.ts` to update phone numbers, address, social links, services, testimonials, or projects.
- **Brand Colors & Theme**: Modify `tailwind.config.ts` and `src/styles/globals.css`.
- **Media Assets**: Place images and videos in `public/assets/` and update references in `src/config/site.ts`.
