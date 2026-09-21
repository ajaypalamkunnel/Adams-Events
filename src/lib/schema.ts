import { siteConfig } from "@/config/site";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    "@id": `${siteConfig.domain}/#organization`,
    name: siteConfig.business_name,
    alternateName: "Adams Events Thiruvalla",
    url: siteConfig.domain,
    logo: `${siteConfig.domain}/assets/Adams_logo.png`,
    image: `${siteConfig.domain}/assets/Hero-section-desktop-screen.png`,
    description: siteConfig.description,
    telephone: "+917356848171",
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.location.address,
      addressLocality: "Thiruvalla",
      addressRegion: "Pathanamthitta, Kerala",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 9.3835,
      longitude: 76.5741,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "₹₹",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "185",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      siteConfig.social_links.instagram,
    ].filter(Boolean),
  };
}

export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
