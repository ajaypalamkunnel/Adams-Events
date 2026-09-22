import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#8B2FC9",
          purpleLight: "#A855F7",
          purpleDark: "#6B21A8",
          plum: "#12002B",
          plumDark: "#090014",
          plumSurface: "#1A0538",
          gold: "#F4D58D",
          goldLight: "#FDE68A",
          goldDark: "#D97706",
          dark: "#090014",
          darker: "#05000A",
          glass: "rgba(18, 0, 43, 0.75)",
          glassLight: "rgba(255, 255, 255, 0.05)",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
        accent: ["var(--font-accent)", "Cormorant Garamond", "serif"],
      },
      backgroundImage: {
        "purple-gradient": "linear-gradient(135deg, #8B2FC9 0%, #A855F7 50%, #6B21A8 100%)",
        "gold-gradient": "linear-gradient(135deg, #FDE68A 0%, #F4D58D 50%, #D97706 100%)",
        "purple-gold": "linear-gradient(135deg, #8B2FC9 0%, #C084FC 50%, #F4D58D 100%)",
        "purple-shimmer": "linear-gradient(90deg, transparent 0%, rgba(168, 85, 247, 0.25) 50%, transparent 100%)",
        "dark-radial": "radial-gradient(circle at 50% 0%, rgba(139, 47, 201, 0.18) 0%, transparent 70%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "marquee": "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      boxShadow: {
        "purple-glow": "0 0 35px -5px rgba(139, 47, 201, 0.4)",
        "purple-glow-lg": "0 0 50px -5px rgba(139, 47, 201, 0.6)",
        "gold-glow": "0 0 35px -5px rgba(244, 213, 141, 0.35)",
        "gold-glow-lg": "0 0 50px -5px rgba(244, 213, 141, 0.5)",
        "glass-card": "0 8px 32px 0 rgba(0, 0, 0, 0.45)",
      },
    },
  },
  plugins: [],
};
export default config;
