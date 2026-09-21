import { ServiceItem, ProjectItem, TestimonialItem, GalleryMediaItem } from "@/types";

export const siteConfig = {
  business_name: "Adams Events",
  short_name: "Adams Events",
  tagline: "A Complete Event Company",
  category: "Wedding and Event Planner and Decorations",
  description:
    "Adams Events is a complete wedding and event planning company specializing in elegant decorations, creative stage setups, and memorable celebrations. From intimate family functions to grand weddings and special occasions, we handle every detail with creativity, professionalism, and care.",
  target_audience:
    "Couples, families, corporate clients, and organizations looking for professional wedding planning, event decoration, stage design, and complete event management services.",
  unique_value_proposition:
    "A complete event solution under one roof, combining creative decoration, elegant designs, professional planning, and personalized execution to turn every celebration into a memorable experience.",
  years_of_experience: "10+",
  stats: [
    { label: "Years Experience", value: "10+", numeric: 10, suffix: "+" },
    { label: "Celebrations Crafted", value: "500+", numeric: 500, suffix: "+" },
    { label: "Delighted Families", value: "1200+", numeric: 1200, suffix: "+" },
    { label: "Client Satisfaction", value: "100%", numeric: 100, suffix: "%" },
  ],
  location: {
    address: "Thiruvalla, Pathanamthitta",
    city: "Pathanamthitta",
    state_country: "Kerala, India",
    google_maps_embed_url:
      "https://www.google.com/maps?q=Thiruvalla,+Pathanamthitta,+Kerala&output=embed",
  },
  contact: {
    phone: "+91 73568 48171",
    altPhone: "+91 73568 48171",
    whatsapp: "https://wa.me/917356848171",
    whatsappNumber: "+91 73568 48171",
    email: "adamseventplanners@gmail.com",
    business_hours: "Mon–Sat: 9:00 AM – 6:00 PM, Sun: By Appointment",
  },
  social_links: {
    instagram: "https://www.instagram.com/adams_event_planners",
    facebook: "",
    youtube: "",
  },
  theme: "dark",
  brand_colors: {
    primary: "#8B2FC9", // Royal Purple
    secondary: "#12002B", // Deep Plum / Purple Black
    accent: "#F4D58D", // Champagne Gold
    purpleLight: "#A855F7",
    purpleDark: "#6B21A8",
    goldDark: "#D97706",
  },
  primary_cta: "Get a Quote",
  secondary_cta: "View Our Work",
  domain: "https://www.adamsevents.in",
  seo_keywords: [
    "wedding planners in Thiruvalla",
    "wedding decorators in Pathanamthitta",
    "wedding event planners Kerala",
    "wedding stage decoration Thiruvalla",
    "event decorators Pathanamthitta",
    "wedding decoration Kerala",
    "event management Thiruvalla",
    "Adams Events",
    "stage and mandap design Kerala",
    "birthday event planners Thiruvalla",
    "corporate event managers Pathanamthitta",
    "reception decorations Thiruvalla",
  ],
};

export const servicesData: ServiceItem[] = [
  {
    id: "wedding-planning",
    slug: "wedding-planning",
    name: "Wedding Planning",
    summary:
      "Complete wedding planning and coordination from concept to celebration.",
    fullDescription:
      "From the initial conceptualization to the final bridal send-off, Adams Events orchestrates every single detail with creativity, precision, and heartfelt care. We oversee vendor alignment, schedule curating, budget tracking, and day-of execution so you and your family can immerse yourselves in the joy of the day.",
    features: [
      "Full Wedding Planning & Concept Direction",
      "Vendor Coordination & Matchmaking",
      "Day-of Event Management & Itinerary Control",
      "Guest Hospitality & On-ground Assistance",
      "Budget Tracking & Timeline Supervision",
    ],
    benefits: [
      "Completely stress-free celebration for families and couples",
      "Access to premium verified vendor networks in Central Kerala",
      "Smooth coordination tailored to traditional rituals and modern celebrations",
    ],
    processSteps: [
      { title: "Consultation & Vision", desc: "Understanding your vision, family traditions, event dates, and budget parameters." },
      { title: "Theme & Vendor Planning", desc: "Developing cohesive design boards and securing elite catering, photo, and audio-visual teams." },
      { title: "Itinerary & Rehearsal", desc: "Detailing run-of-show cues and venue logistics across Thiruvalla and Pathanamthitta." },
      { title: "Flawless Execution", desc: "Our on-site directors manage every movement with seamless professionalism." },
    ],
    faqs: [
      {
        question: "How far in advance should we book Adams Events for our wedding?",
        answer: "We recommend reserving our team 3 to 6 months in advance, especially for auspicious wedding seasons in Kerala (November to January and April to May).",
      },
      {
        question: "Do you provide event management across Kerala?",
        answer: "Yes, while our headquarters is in Thiruvalla, Pathanamthitta, we regularly execute grand weddings and private events across Kottayam, Alappuzha, Kollam, Kochi, and all across Kerala.",
      },
    ],
    pricing: "Request Quote",
    image: "/assets/Image-14019.jpg",
    badge: "Most Popular",
  },
  {
    id: "wedding-decorations",
    slug: "wedding-decorations",
    name: "Wedding Decorations",
    summary:
      "Elegant and customized decorations designed around your unique wedding theme.",
    fullDescription:
      "Transform your wedding venue into an awe-inspiring spectacle. Our design team creates bespoke entrance arches, illuminated walkways, aisle treatments, and ambient lighting that harmoniously complement your personal style and traditions.",
    features: [
      "Stage Decoration & Customized Backdrops",
      "Floral & Hanging Ceiling Installations",
      "Entrance & Venue Styling with Ambient Lighting",
      "Aisle Decor & Red Carpet Walkways",
      "Photo Booths & Thematic Selfie Zones",
    ],
    benefits: [
      "Breathtaking visual aesthetics for photographic and cinematic memories",
      "Fresh, premium-grade florals sourced for long-lasting fragrance and beauty",
      "Complete venue harmonization from entrance gates to VIP banquets",
    ],
    processSteps: [
      { title: "Venue Inspection", desc: "Assessing space dimensions, lighting acoustics, and venue layout." },
      { title: "Theme Customization", desc: "Tailoring color themes, floral palettes, and structural elements." },
      { title: "Workshop Pre-Assembly", desc: "Crafting custom fabrication, drapery, and floral frames." },
      { title: "On-Site Installation", desc: "Setting up hours ahead of the ceremony for a spotless reveal." },
    ],
    faqs: [
      {
        question: "Can you customize wedding decor to our specific color scheme?",
        answer: "Yes, every decoration package is fully personalized to your attire, preference, and the venue ambiance.",
      },
    ],
    pricing: "Request Quote",
    image: "/assets/Image-37523.jpg",
    badge: "Signature Craft",
  },
  {
    id: "stage-mandap-design",
    slug: "stage-mandap-design",
    name: "Stage & Mandap Design",
    summary:
      "Creative stage and mandap setups that create a stunning focal point.",
    fullDescription:
      "Your wedding stage is the centerpiece of the entire ceremony. We design and construct awe-inspiring stages—from royal floral Mandapams and cathedral-style arches to modern minimalist geometric backdrops with dynamic lighting.",
    features: [
      "Custom Stage Concepts & 3D Previews",
      "Traditional Mandapams & Contemporary Arches",
      "Intelligent Lighting Integration & Spotlights",
      "Luxury Couple Seating & Designer Sofa Arrangements",
      "Layered Backdrops with Hanging Crystal Chandeliers",
    ],
    benefits: [
      "Magnificent focal point that elevates the grandeur of your ceremony",
      "Built with robust structural materials and flawless finishing",
      "Perfect lighting angles configured specifically for professional photography",
    ],
    processSteps: [
      { title: "Concept Selection", desc: "Choosing between classical Kerala, royal floral, or contemporary geometric styles." },
      { title: "Structural Planning", desc: "Engineering stage dimensions to comfortably fit family photo groups." },
      { title: "Floral & Light Framing", desc: "Hand-wiring fresh blossoms and soft ambient backlighting." },
      { title: "Final Detailing", desc: "Adding seating, floral pedestals, and carpet runners for a royal finish." },
    ],
    faqs: [
      {
        question: "What is the starting price for stage decoration?",
        answer: "Our customized stage and mandap packages start at ₹25,000 and can be scaled according to dimensions, floral volume, and lighting effects.",
      },
    ],
    pricing: "Starting at ₹25,000",
    image: "/assets/Image-21063.jpg",
    badge: "Starting at ₹25,000",
  },
  {
    id: "reception-engagement-decoration",
    slug: "reception-engagement-decoration",
    name: "Reception & Engagement Decoration",
    summary:
      "Beautiful setups for engagements, receptions, and pre-wedding celebrations.",
    fullDescription:
      "Celebrate your betrothal and evening reception in style. We craft enchanting atmospheres with romantic mood lighting, shimmering backdrops, customized couple monogram displays, and lush botanical arrangements.",
    features: [
      "Backdrop Design with Personalized Monograms",
      "Floral Arrangements & Cascading Garlands",
      "Theme-Based Styling for Ring Ceremonies & Receptions",
      "Ambient Up-lighting & Fairy Light Canopies",
      "VIP & Family Table Decor Accents",
    ],
    benefits: [
      "Warm, romantic ambiance tailored for evening gatherings",
      "Compact and grand options suited for halls, lawns, and auditoriums",
      "Quick setup and teardown handled with absolute discretion",
    ],
    processSteps: [
      { title: "Ceremony Planning", desc: "Understanding the flow of the engagement or reception program." },
      { title: "Moodboard Design", desc: "Selecting color themes (pastels, royal tones, or jewel hues)." },
      { title: "Installation", desc: "Precise assembly of backdrops, sound integration, and floral styling." },
    ],
    faqs: [
      {
        question: "Do you handle both church betrothals and banquet hall receptions?",
        answer: "Yes, we provide decor and coordination for church rituals, prayer halls, outdoor lawns, and banquet receptions.",
      },
    ],
    pricing: "Starting at ₹15,000",
    image: "/assets/Image-52654.jpg",
    badge: "Starting at ₹15,000",
  },
  {
    id: "birthday-private-events",
    slug: "birthday-private-events",
    name: "Birthday & Private Events",
    summary:
      "Creative decorations and event setups for birthdays and private celebrations.",
    fullDescription:
      "From milestone 1st birthdays and sweet sixteen celebrations to golden jubilees and intimate family anniversaries, Adams Events brings vibrant themes, delightful balloon styling, creative photo booths, and fun setups to life.",
    features: [
      "Theme Decorations for Kids & Adults",
      "Balloon Garlands & Floral Arch Styling",
      "Photo Booths, 3D Cutouts & Thematic Backdrops",
      "Cake Table Styling & Treat Pedestals",
      "Party Lighting & Sound Systems",
    ],
    benefits: [
      "Fun, personalized themes customized to any character, color, or hobby",
      "Affordable packages designed for family homes, restaurants, or community halls",
      "Memorable photo-ready setups that delight guests of all ages",
    ],
    processSteps: [
      { title: "Theme Selection", desc: "Brainstorming age-appropriate themes, colors, and balloon styling." },
      { title: "Custom Props", desc: "Designing personalized name boards, neon signs, and photo props." },
      { title: "Same-Day Setup", desc: "Prompt installation ready well before guests arrive." },
    ],
    faqs: [
      {
        question: "Can you set up birthday decor at our residence in Thiruvalla?",
        answer: "Yes, we specialize in both home setups and external venue decorations across Thiruvalla and Pathanamthitta.",
      },
    ],
    pricing: "Starting at ₹8,000",
    image: "/assets/Image-37523.jpg",
    badge: "Starting at ₹8,000",
  },
  {
    id: "corporate-special-events",
    slug: "corporate-special-events",
    name: "Corporate & Special Events",
    summary:
      "Professional event planning and decoration for corporate and special occasions.",
    fullDescription:
      "Adams Events provides polished corporate event solutions for product launches, annual galas, conferences, inaugurations, and institutional milestones with punctuality and brand consistency.",
    features: [
      "Corporate Stage Setup & LED Screen Backdrops",
      "Venue Decoration & Signage Branding",
      "Audio-Visual & Lighting Coordination",
      "Guest Registration & Hospitality Management",
      "Dignitary & VIP Protocol Assistance",
    ],
    benefits: [
      "Impeccable professional impression for clients, leadership, and partners",
      "Strict adherence to schedules and technical requirements",
      "All-inclusive turnkey execution from AV to decor",
    ],
    processSteps: [
      { title: "Briefing & Objectives", desc: "Aligning on corporate guidelines, attendee count, and AV requirements." },
      { title: "Venue & Tech Planning", desc: "Stage design, acoustics, projection mapping, and branded backdrops." },
      { title: "Seamless Execution", desc: "Punctual stage management and live cue coordination." },
    ],
    faqs: [
      {
        question: "Do you supply sound, lighting, and LED walls for conferences?",
        answer: "Yes, we provide complete corporate AV integration along with stage production.",
      },
    ],
    pricing: "Request Quote",
    image: "/assets/Image-21063.jpg",
  },
  {
    id: "lighting-special-effects",
    slug: "lighting-special-effects",
    name: "Lighting & Special Effects",
    summary:
      "Atmospheric lighting and visual effects that elevate the entire venue.",
    fullDescription:
      "Lighting is the soul of every event. We deploy architectural venue washes, intelligent moving heads, gentle warm fairy lights, cold pyro sparklers, dry-ice fog clouds, and confetti cannons for unforgettable celebratory climaxes.",
    features: [
      "Architectural Venue Uplighting & Tree Illuminations",
      "Dynamic Intelligent Stage Lighting & Spotlights",
      "Special Effects (Cold Pyro, Low Fog & Confetti Cannons)",
      "Fairy Light Canopies & Edison Bulb Installations",
      "Custom Laser & Gobo Projection Mapping",
    ],
    benefits: [
      "Cinematic ambiance for evening photography and videography",
      "Safe, indoor-approved cold pyrotechnics and low fog effects",
      "Transform plain halls into magical illuminated landscapes",
    ],
    processSteps: [
      { title: "Lighting Plotting", desc: "Surveying venue power loads and prime focal areas." },
      { title: "Effect Programming", desc: "Synchronizing lights and pyro for couple entrances and cake-cutting." },
      { title: "Live Show Control", desc: "Trained lighting operators running the console throughout the event." },
    ],
    faqs: [
      {
        question: "Are cold pyros and fog effects safe for indoor banquet halls?",
        answer: "Yes, we use 100% smokeless, firework-free cold sparks and odorless dry-ice low fog that are safe for indoor venues.",
      },
    ],
    pricing: "Request Quote",
    image: "/assets/Hero-section-desktop-screen.png",
  },
  {
    id: "floral-venue-styling",
    slug: "floral-venue-styling",
    name: "Floral & Venue Styling",
    summary:
      "Premium floral arrangements and venue styling tailored to your occasion.",
    fullDescription:
      "Flowers evoke emotions like nothing else. Our master florists curate fresh, fragrant floral installations—including imported Dutch roses, orchids, lilies, carnations, and native jasmine—styled into hanging clouds, arches, and banquet centerpieces.",
    features: [
      "Fresh & Premium Floral Concept Designs",
      "Ceiling & Hanging Chandelier Floral Installations",
      "Table Centerpieces & Dining Venue Styling",
      "Bridal Bouquets, Boutonnieres & Car Decorations",
      "Entrance Toran & Traditional Floral Rangoli",
    ],
    benefits: [
      "Long-lasting freshness preserved through cold-chain handling",
      "Unmatched artistic craftsmanship customized to your floral theme",
      "Sustainably sourced botanicals with zero compromise on luxury",
    ],
    processSteps: [
      { title: "Floral Consultation", desc: "Selecting species, seasonal blooms, and color gradients." },
      { title: "Cold-chain Sourcing", desc: "Procuring blooms right before event day for peak blossom." },
      { title: "Master Arrangement", desc: "Artisanal handcrafting on-site by experienced florists." },
    ],
    faqs: [
      {
        question: "Can we combine exotic imported flowers with traditional Kerala blooms?",
        answer: "Absolutely! Fusion arrangements blending roses, baby's breath, orchids, and traditional jasmine are our specialty.",
      },
    ],
    pricing: "Request Quote",
    image: "/assets/Image-14019.jpg",
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "proj-1",
    slug: "thiruvalla-royal-grand-wedding",
    title: "Grand Royal Wedding & Reception Stage",
    category: "Weddings",
    client: "Rohan & Meera",
    location: "Thiruvalla, Pathanamthitta",
    date: "February 2026",
    summary:
      "A majestic royal wedding stage design featuring layered purple and champagne gold floral arches, hanging crystal chandeliers, and ambient warm illumination.",
    challenge:
      "Transforming a wide convention hall into an intimate yet regal wedding setting accommodating over 800 guests without blocking sightlines.",
    solution:
      "Constructed a wide 60-foot tiered stage frame with curved floral wings, integrated soft spotlights, and deep royal plum drapery with champagne gold accents.",
    result:
      "A breathtaking focal stage that earned glowing praise from the families and provided an unforgettable backdrop for photography.",
    image: "/assets/Image-14019.jpg",
    gallery: [
      "/assets/Image-14019.jpg",
      "/assets/Image-21063.jpg",
      "/assets/Image-37523.jpg",
      "/assets/Image-52654.jpg",
    ],
    tags: ["Royal Wedding", "Grand Stage", "Thiruvalla"],
  },
  {
    id: "proj-2",
    slug: "pathanamthitta-engagement-stage",
    title: "Enchanted Betrothal & Engagement Setup",
    category: "Betrothals",
    client: "Justin & Sandra",
    location: "Pathanamthitta",
    date: "January 2026",
    summary:
      "A romantic engagement backdrop with bespoke typography, cascading floral garlands, and ambient mood uplighting.",
    challenge:
      "Creating an elegant, photogenic stage within a compact auditorium stage area.",
    solution:
      "Used slimline vertical lighting trusses, pastel floral rings, and warm backlights to maximize depth and photographic clarity.",
    result:
      "Flawless evening celebration with picture-perfect ring ceremony photos and high client satisfaction.",
    image: "/assets/Image-52654.jpg",
    gallery: [
      "/assets/Image-52654.jpg",
      "/assets/Image-14019.jpg",
      "/assets/Image-37523.jpg",
    ],
    tags: ["Betrothal", "Pastel Floral", "Pathanamthitta"],
  },
  {
    id: "proj-3",
    slug: "central-kerala-stage-illumination",
    title: "Luminous Stage & Mandap Architecture",
    category: "Floral & Stage",
    client: "Abhishek & Divya",
    location: "Adoor, Pathanamthitta",
    date: "December 2025",
    summary:
      "A grand celebratory stage with customized lighting effects, royal seating, and elaborate floral crowns.",
    challenge:
      "Coordinating multi-tier lighting changes synchronously with live music and couple entry cues.",
    solution:
      "Programmed an automated DMX light console connected to cold pyrotechnics and soft spot fixtures.",
    result:
      "An electric entrance moment and stunning stage visual that set a new benchmark in event grandeur.",
    image: "/assets/Image-21063.jpg",
    gallery: [
      "/assets/Image-21063.jpg",
      "/assets/Image-14019.jpg",
      "/assets/Hero-section-desktop-screen.png",
    ],
    tags: ["Stage Design", "Intelligent Lighting", "Adoor"],
  },
  {
    id: "proj-4",
    slug: "thiruvalla-floral-styling",
    title: "Botanical Entrance Arch & Floral Styling",
    category: "Receptions",
    client: "Deepak & Anjali",
    location: "Thiruvalla",
    date: "November 2025",
    summary:
      "Lush fresh floral tunnel and entrance styling with warm fairy lights welcoming arriving guests.",
    challenge:
      "Maintaining complete bloom freshness during a warm afternoon pre-ceremony schedule.",
    solution:
      "Utilized cold-sponge moisture retention frames and placed arrangements shortly before guest arrival.",
    result:
      "Vibrant, fragrant floral entrance that captivated all arriving guests.",
    image: "/assets/Image-37523.jpg",
    gallery: [
      "/assets/Image-37523.jpg",
      "/assets/Image-14019.jpg",
      "/assets/Image-52654.jpg",
    ],
    tags: ["Floral Arch", "Entrance Styling", "Thiruvalla"],
  },
];

export const galleryMedia: GalleryMediaItem[] = [
  {
    id: "vid-1",
    title: "Cinematic Event Highlights & Stage Reel 1",
    category: "videos",
    type: "video",
    src: "/assets/Adams_reel-1.mp4",
    poster: "/assets/Hero-section-desktop-screen.png",
    caption: "Dynamic live showcase of Adams Events stage production, lighting ambiance, and couple celebrations.",
  },
  {
    id: "vid-2",
    title: "Grand Celebration & Floral Artistry Reel 2",
    category: "videos",
    type: "video",
    src: "/assets/Adams-reel-2.mp4",
    poster: "/assets/Image-14019.jpg",
    caption: "Magnificent floral decor, entrance walkthrough, and grand evening reception styling.",
  },
  {
    id: "img-1",
    title: "Royal Grand Nuptial Stage",
    category: "stages",
    type: "image",
    src: "/assets/Image-14019.jpg",
    caption: "Signature Adams Events wedding stage with hanging chandeliers and royal floral arches in Thiruvalla.",
  },
  {
    id: "img-2",
    title: "Celebration Stage & Intelligent Illumination",
    category: "stages",
    type: "image",
    src: "/assets/Image-21063.jpg",
    caption: "Layered illuminated stage with golden accents and royal couple seating.",
  },
  {
    id: "img-3",
    title: "Lush Botanical Floral Styling",
    category: "floral",
    type: "image",
    src: "/assets/Image-37523.jpg",
    caption: "Fresh botanical floral installations and photo-ready ceremony backdrop.",
  },
  {
    id: "img-4",
    title: "Enchanted Betrothal Backdrop",
    category: "photos",
    type: "image",
    src: "/assets/Image-52654.jpg",
    caption: "Bespoke floral styling for engagement celebrations and evening receptions.",
  },
  {
    id: "img-5",
    title: "Signature Adams Events Hero Stage",
    category: "photos",
    type: "image",
    src: "/assets/Hero-section-desktop-screen.png",
    caption: "Award-winning stage and venue decor by Adams Events Thiruvalla.",
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "t-1",
    name: "Mathew & Sneha Varghese",
    role: "Bride & Groom",
    event: "Wedding & Reception",
    location: "Thiruvalla, Pathanamthitta",
    rating: 5,
    content:
      "Adams Events made our wedding day look like a dream! From the first discussion in Thiruvalla to the actual stage setup, their professionalism and creativity were exceptional. The stage decor with purple and gold accents was stunning, and our guests haven't stopped complimenting it!",
    date: "February 2026",
  },
  {
    id: "t-2",
    name: "Dr. Arun & Divya Nair",
    role: "Bride & Groom",
    event: "Engagement & Reception",
    location: "Pathanamthitta",
    rating: 5,
    content:
      "Finding a complete event planner who delivers exactly what they promise is rare. The Adams Events team managed the stage decor, floral installations, and lighting flawlessly. 10/10 recommendation to anyone in Pathanamthitta and Central Kerala!",
    date: "January 2026",
  },
  {
    id: "t-3",
    name: "Thomas K. George",
    role: "Father of the Bride",
    event: "Daughter's Grand Wedding",
    location: "Chengannur / Thiruvalla",
    rating: 5,
    content:
      "As a family, we were worried about coordinating such a large gathering. Adams Events took care of everything under one roof with utmost responsibility and care. The venue looked magical and everything ran right on schedule.",
    date: "December 2025",
  },
  {
    id: "t-4",
    name: "Reny & Ancy Philip",
    role: "Bride & Groom",
    event: "Church Betrothal & Evening Gala",
    location: "Adoor, Pathanamthitta",
    rating: 5,
    content:
      "The floral artistry and lighting effects were breathtaking. The team arrived well ahead of time and completed everything with remarkable finesse. Thank you Adams Events for creating wonderful memories for us!",
    date: "November 2025",
  },
];

export const whyChooseUsData = [
  {
    title: "10+ Years of Proven Excellence",
    desc: "Over a decade of creating magnificent weddings, stages, and milestone events across Thiruvalla, Pathanamthitta, and Kerala.",
    icon: "Award",
  },
  {
    title: "A Complete Event Company",
    desc: "Everything you need under one roof—event planning, creative decorations, stage design, floral styling, sound, and lighting.",
    icon: "Layers",
  },
  {
    title: "Customized Creative Concepts",
    desc: "Every stage, floral arch, and backdrop is uniquely designed around your personal theme, traditions, and venue architecture.",
    icon: "Sparkles",
  },
  {
    title: "Master Fresh Floral Styling",
    desc: "Direct sourcing of premium fresh blooms and exotic botanicals for vibrant, all-day fragrance and beauty.",
    icon: "Flower2",
  },
  {
    title: "Dedicated On-Ground Coordination",
    desc: "Our professional event directors manage all timeline cues, vendor flow, and guest logistics with calm efficiency.",
    icon: "Clock",
  },
  {
    title: "Transparent & Value-Driven",
    desc: "Clear, itemized packages with zero hidden costs, structured to deliver maximum grandeur within your budget.",
    icon: "ShieldCheck",
  },
];

export const partnerVenues = [
  "Pushpagiri Convention Centre, Thiruvalla",
  "Believers Convention Centre, Thiruvalla",
  "River Retreat Banquets, Thiruvalla",
  "Maramon Retreat Centre Auditorium",
  "Travancore Heritage Halls, Pathanamthitta",
  "Royal Auditorium, Adoor",
  "Municipal Town Hall, Pathanamthitta",
  "St. George Parish Hall, Kozhencherry",
  "Chengannur Christian Convention Banquets",
];

export const timelineMilestones = [
  {
    year: "2014",
    title: "Inception in Thiruvalla",
    desc: "Founded with a passion for creative event decoration and elegant stage design across Pathanamthitta.",
  },
  {
    year: "2018",
    title: "Expansion to Complete Event Management",
    desc: "Scaled in-house capabilities to include full turnkey wedding coordination, sound, dynamic lighting, and custom mandap fabrication.",
  },
  {
    year: "2021",
    title: "Master Floral & Special Effects",
    desc: "Introduced cold pyrotechnics, atmospheric low-fog, and exotic floral sourcing for premium Kerala weddings.",
  },
  {
    year: "2024",
    title: "500+ Landmark Celebrations",
    desc: "Celebrated milestone of over 500 successful weddings, corporate summits, and private galas.",
  },
  {
    year: "Present",
    title: "10+ Years & Central Kerala's Premier Choice",
    desc: "Adams Events continues to lead with creativity, elegance, and complete peace of mind for every client.",
  },
];
