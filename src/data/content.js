/* ==========================================================================
   Central content for the portfolio.
   Role-aware copy (Software Engineer vs IT Systems Engineer) + shared data.
   Edit here to update the whole site.
   ========================================================================== */

import {
  FiZap, FiLayers, FiShield, FiCpu, FiTrendingUp, FiGrid,
  FiCloud, FiTool, FiServer, FiActivity,
} from "react-icons/fi";

export const profile = {
  name: "Feranmi Oyetunde",
  location: "Lagos, Nigeria",
  email: "feranmioyetunde@gmail.com",
  phone: "+234 903 616 1857",
  github: "https://github.com/feranmidevelops",
  githubHandle: "Feranmidevelops",
  linkedin: "https://www.linkedin.com/in/oyetunde-feranmi-1ab00a264",
  linkedinHandle: "oyetunde-feranmi-1ab00a264",
  photo: "/feranmi.jpeg",
  banner: "/feranmi-banner.png",
  availability: "Open to new opportunities",
};

/* ---- Role-specific content ---------------------------------------------- */
export const roleContent = {
  swe: {
    badge: "Software Engineer",
    roleLabel: "Software Engineer",
    stack: "React · TypeScript · Next.js · MERN · React Native",
    tagline: "I build production grade web & mobile applications",
    taglineAccent: "that feel fast, clear, and finished.",
    intro:
      "Frontend-focused software engineer shipping real products across cooperative finance, e-commerce, analytics, and mobile — from complex Figma builds to full-stack apps and AI-powered features.",
    resume: "/Feranmi_Oyetunde_Resume_SoftwareDeveloper.pdf",
    summary:
      "I'm a software engineer with hands-on experience building production grade web and mobile applications across cooperative finance, e-commerce, analytics, and workflow automation. I care about interfaces that feel clear on the surface and stay reliable underneath, with a strong focus on performance, security, and consistency as products grow.",
    about2:
      "My work spans admin platforms, financial calculators, analytics dashboards, secure payment and settlement systems, and Python pipelines that have processed over 300,000 records. I enjoy turning complex Figma designs and messy business problems into experiences that feel simple and finished. Right now I'm building internal tools at TEHC and ACUOP, and before that I shipped a full-stack e-commerce platform during a remote UK internship at Drevad.",
    focus: [
      { icon: FiZap, title: "Performance", text: "Fast, responsive interfaces tuned for real devices and real networks." },
      { icon: FiLayers, title: "Scalable Frontends", text: "Reusable component systems that accelerate delivery across modules." },
      { icon: FiCpu, title: "API & AI Integration", text: "REST APIs, OCR, and vision-AI features wired into clean product flows." },
      { icon: FiShield, title: "Clean UI / UX", text: "Accessible, delightful experiences with a strong eye for detail." },
    ],
    skills: [
      { group: "Frontend", items: ["React.js", "TypeScript", "JavaScript (ES6+)", "Next.js", "React Native / Expo", "Vite", "Tailwind CSS", "HTML5 / CSS3"] },
      { group: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Convex", "Python", "Supabase"] },
      { group: "Auth & Payments", items: ["JWT", "httpOnly Refresh Tokens", "CSRF Protection", "RBAC", "Paystack"] },
      { group: "Databases", items: ["PostgreSQL", "MongoDB", "Appwrite", "Supabase"] },
      { group: "Automation & AI", items: ["Selenium", "Web Scraping", "Nodemailer", "Vision AI", "Gemini OCR"] },
      { group: "Testing & Tools", items: ["Vitest", "Git / GitHub", "Postman", "Swagger", "Vercel", "Netlify", "Render", "Agile / Scrum"] },
    ],
    stats: [
      { value: "15+", label: "Projects delivered", icon: FiTrendingUp },
      { value: "300K+", label: "Records processed", icon: FiZap },
      { value: "50+", label: "Figma screens shipped", icon: FiGrid },
    ],
  },

  it: {
    badge: "IT Systems Engineer",
    roleLabel: "IT Systems Engineer",
    stack: "Microsoft 365 · SharePoint · Power Automate · Networking · Security",
    tagline: "I run Microsoft 365 environments & automate the work",
    taglineAccent: " backed by real software engineering.",
    intro:
      "IT Systems Engineer administering M365 for 60+ staff, automating workflows with Power Automate & SharePoint, and managing enterprise infrastructure — with a developer's edge to build the bespoke tools M365 can't.",
    resume: "/Feranmi_Oyetunde_Resume_ITEngineer.pdf",
    summary:
      "I'm an IT systems engineer administering Microsoft 365 for 60+ staff, driving digital transformation through SharePoint and Power Automate, and managing enterprise IT infrastructure like networking, hardware provisioning, backups, and cybersecurity awareness. I care about systems that stay dependable, and about removing manual work wherever a workflow can do it instead.",
    about2:
      "My real edge is software development. Where standard M365 capabilities stop, I can build the bespoke tool that fills the gap, from automated financial calculators to data pipelines that process over 300,000 records. I currently run IT for TEHC and manage web systems for ACUOP, and before that I shipped a full-stack platform during a remote UK internship at Drevad.",
    focus: [
      { icon: FiCloud, title: "M365 Administration", text: "Teams, SharePoint, OneDrive, Exchange, and user access provisioning for 60+ staff." },
      { icon: FiActivity, title: "Workflow Automation", text: "Power Automate & SharePoint flows that replace manual tracking end-to-end." },
      { icon: FiServer, title: "Infrastructure & Security", text: "Networking, hardware, backups, and cybersecurity awareness across the org." },
      { icon: FiTool, title: "Custom Tooling", text: "Developer skills to build tools M365 alone can't — a genuine edge." },
    ],
    skills: [
      { group: "Microsoft 365", items: ["SharePoint", "Power Automate", "Teams", "OneDrive", "Exchange", "User Provisioning"] },
      { group: "Infrastructure & Security", items: ["Network Configuration", "Hardware Procurement", "Cybersecurity Awareness", "Data Backups", "First-Line Support"] },
      { group: "Web Management", items: ["WordPress", "Website Administration", "Digital Comms Platforms"] },
      { group: "Automation & Scripting", items: ["Python", "Selenium", "Web Scraping", "Nodemailer", "Workflow Automation"] },
      { group: "Software Dev (bonus)", items: ["React.js", "TypeScript", "Node.js", "Express.js", "REST APIs", "Tailwind CSS"] },
    ],
    stats: [
      { value: "60+", label: "Staff supported (M365)", icon: FiCloud },
      { value: "300K+", label: "Records automated", icon: FiZap },
      { value: "2", label: "Orgs administered", icon: FiServer },
    ],
  },
};

/* ---- Experience (role-aware titles/bullets, shared timeline) ------------- */
export const experience = [
  {
    company: "TEHC — Total Energies Housing Cooperative",
    period: "Oct 2025 – Present",
    swe: {
      title: "Frontend Software Engineer & IT Systems Associate",
      points: [
        "Converted 50+ complex Figma screens into responsive React + Tailwind interfaces.",
        "Built a reusable UI component library that accelerated delivery across modules.",
        "Integrated backend REST APIs, validated endpoints with Swagger, and wrote technical docs.",
        "Designed SharePoint workflow automations for inventory alerts and boardroom scheduling.",
      ],
      tags: ["React", "Tailwind", "REST APIs", "Swagger"],
    },
    it: {
      title: "IT Systems Administrator & Software Engineer",
      points: [
        "Administered the Microsoft 365 environment for 60+ staff — Teams, OneDrive, SharePoint, Exchange, and access provisioning.",
        "Automated inventory management with Power Automate — proactive renewal-alert emails that eliminated manual tracking.",
        "Managed procurement of IT worktools (smartboards, printers, laptops) and configured network infrastructure.",
        "Provided first-line support, ran cybersecurity-awareness practices, and prepared monthly IT reports for leadership.",
      ],
      tags: ["Microsoft 365", "Power Automate", "SharePoint", "Networking"],
    },
  },
  {
    company: "ACUOP.com",
    period: "Jan 2026 – Present",
    swe: {
      title: "Frontend Developer",
      points: [
        "Architected a multi-role admin platform with role-based access control.",
        "Developed real-time analytics dashboards for business transaction metrics.",
        "Engineered automated financial calculators that replaced manual processes.",
        "Built onboarding, verification, and approval workflows.",
      ],
      tags: ["React", "RBAC", "Analytics", "Dashboards"],
    },
    it: {
      title: "Web Systems Administrator & SME Support",
      points: [
        "Developed and maintained the proprietary ACUOP website (WordPress), owning web management and digital comms.",
        "Architected a multi-role admin portal with role-based access control integrated with backend systems.",
        "Engineered automated financial calculators that reduced turnaround on business calculations.",
        "Built real-time analytics dashboards supporting data-driven decisions for SME leadership.",
      ],
      tags: ["WordPress", "RBAC", "Analytics", "Web Management"],
    },
  },
  {
    company: "Drevad Ltd. (UK) — Remote",
    period: "Jan 2025 – Mar 2025",
    swe: {
      title: "Software Engineering Intern",
      points: [
        "Designed and built a full-stack e-commerce platform end-to-end product catalog, cart, checkout, order management, and a role-based admin dashboard — with React/Vite/Tailwind and Node/Express on a PostgreSQL (Supabase) backend.",
        "Integrated Paystack for online payments, architecting an idempotent settlement flow (webhook + client-verify reconciliation) that structurally prevents double charge and double fulfillment race conditions.",
        "Engineered secure auth with short-lived JWT access tokens, rotating httpOnly refresh cookies, and CSRF protection enabling true server-side session revocation on logout.",
        "Built granular RBAC (super / sales / finance admin) with permission-scoped API routes, a CSV bulk import pipeline with per row validation, and a Vitest suite covering money critical logic.",
      ],
      tags: ["React", "Node/Express", "Paystack", "JWT Auth", "PostgreSQL", "Vitest"],
    },
    it: {
      title: "Software Engineering Intern",
      points: [
        "Built a full-stack e-commerce platform end-to-end (catalog, cart, checkout, order management, admin dashboard) with React and Node/Express on PostgreSQL.",
        "Integrated Paystack payments with an idempotent settlement flow, and engineered secure JWT + httpOnly-refresh-token authentication with CSRF protection.",
        "Implemented granular role-based access control and a validated CSV bulk-import pipeline, with a Vitest suite covering payment-critical logic.",
      ],
      tags: ["React", "Node/Express", "Paystack", "JWT Auth", "PostgreSQL"],
    },
  },
];

/* ---- Featured projects (shared across roles) ----------------------------- */
export const projects = [
  {
    id: "interim-expense",
    title: "Interim Expense Tracker",
    category: "Enterprise · Full-Stack",
    year: "2026",
    description:
      "Enterprise expense-management system for TEHC & ACUOP (~50 staff): multi-level, level-based approval chains, AI receipt OCR, in-app notifications, budgets, and a full audit log — all enforced with Postgres Row-Level Security.",
    highlights: ["Level-based parallel approval routing", "Gemini 2.5 Flash receipt OCR", "RLS-first authorization", "Analytics with Recharts"],
    tech: ["Next.js 16", "TypeScript", "Supabase", "PostgreSQL", "Gemini AI", "Tailwind"],
    accent: "indigo",
    image: "/projects/expense-tracker.png",
    mobileImage: "/projects/expense-tracker-mobile.png",
    liveUrl: "",
    githubUrl: "",
    private: true,
    featured: true,
  },
  {
    id: "drevad",
    title: "Drevad Commerce",
    category: "E-Commerce · Payments",
    year: "2025",
    description:
      "A full-stack e-commerce platform I designed and built end-to-end during a UK software engineering internship — product catalog, cart, checkout, order management, and a role-based admin dashboard, with Paystack payments and hardened security.",
    highlights: [
      "Paystack payments with idempotent settlement (webhook + client-verify) that prevents double-charge",
      "Secure JWT + rotating httpOnly refresh tokens with CSRF protection",
      "Granular RBAC (super / sales / finance admin) with permission-scoped routes",
      "CSV bulk-import pipeline + Vitest suite over money-critical logic",
    ],
    tech: ["React", "Vite", "Node/Express", "PostgreSQL", "Paystack", "JWT Auth", "Vitest"],
    accent: "purple",
    image: "/projects/drevad.png",
    mobileImage: "/projects/drevad-mobile.png",
    liveUrl: "https://drevad.netlify.app/",
    githubUrl: "https://github.com/Feranmidevelops/Drevad",
    featured: true,
  },
  {
    id: "sofalia",
    title: "Sofalia Cakes & Events",
    category: "Business · Booking Platform",
    year: "2025",
    description:
      "A polished storefront and booking platform for a cakes & events business & customer booking flow, admin dashboard for managing bookings, and content management, backed by Supabase.",
    highlights: ["Customer booking system", "Admin dashboard & auth", "Supabase backend", "Fully responsive"],
    tech: ["React", "TypeScript", "Supabase", "Tailwind", "Vite"],
    accent: "gold",
    liveUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    id: "snaparound",
    title: "SNAPAROUND",
    category: "Mobile Game · AI",
    year: "2026",
    mobile: true,
    status: "In Development",
    description:
      "A cross-platform mobile game: a daily camera-only photo challenge that a vision AI verifies as a match, daily streaks, an endless arcade mode, and a per-state Nigerian leaderboard (\"you're #2 in Lagos\"). Vision-AI runs server side via a Supabase Edge Function.",
    highlights: ["Camera-only AI photo verification", "Daily streaks + shared global challenge", "Per-state live leaderboard", "Arcade mode with scoring & unlocks"],
    tech: ["React Native", "Expo", "TypeScript", "Supabase", "Vision AI", "Edge Functions"],
    accent: "indigo",
    image: "/projects/snaparound.png",
    liveUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    id: "audience-scraper",
    title: "Audience Intelligence Scraper",
    category: "Automation · Data",
    year: "2025",
    description:
      "An automated Python scraping pipeline that collected and processed 300,000+ audience profiles resilient crawling, structured extraction, and clean data output for analysis.",
    highlights: ["300,000+ profiles processed", "Resilient Selenium crawling", "Structured data pipeline"],
    tech: ["Python", "Selenium", "Web Scraping", "Automation"],
    accent: "purple",
    liveUrl: "",
    githubUrl: "",
    featured: false,
  },
  {
    id: "audiophile",
    title: "Audiophile Commerce",
    category: "E-Commerce",
    year: "2025",
    description:
      "A full-stack audio-gear e-commerce app with product catalog, cart, checkout, and a transactional email flow for order confirmations.",
    highlights: ["Product catalog & cart", "Checkout + transactional email", "Responsive storefront"],
    tech: ["React", "Node.js", "Nodemailer", "Vite"],
    accent: "gold",
    liveUrl: "",
    githubUrl: "",
    featured: false,
  },
];

/* ---- Testimonials --------------------------------------------------------
   NOTE: Replace these with real quotes before going live. Attributions are
   generic placeholders — swap in real names/roles you have permission to use.
   -------------------------------------------------------------------------- */
export const testimonials = [
  {
    quote:
      "Feranmi turns complex requirements into clean, working software fast. He shipped our admin dashboards ahead of schedule and the code was a pleasure to build on.",
    name: "Team Lead",
    role: "TEHC — Total Energies Housing Cooperative",
  },
  {
    quote:
      "Rare combination: he can administer our Microsoft 365 stack and automate the workflows around it, then build a custom tool when M365 falls short.",
    name: "Operations Lead",
    role: "ACUOP.com",
  },
  {
    quote:
      "Reliable, detail-oriented, and genuinely curious. During his internship he picked up our codebase quickly and delivered features that made it to production.",
    name: "Engineering Manager",
    role: "Drevad Ltd. (UK)",
  },
];

export const education = {
  degree: "B.Sc. Educational Technology",
  institution: "University of Ilorin, Nigeria",
  year: "2024",
  gpa: "4.0 / 5.0",
};

export const certifications = [
  "CS50 Web Development with Python & JavaScript — Harvard University",
  "React — The Complete Guide",
  "Responsive Web Design",
  "Backend Development with Django",
  "Web Scraping with Python",
  "Microsoft Azure Fundamentals",
  "Cloud Security Fundamentals",
];
