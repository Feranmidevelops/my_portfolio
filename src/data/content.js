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
  github: "https://github.com/feranmidevelops",
  githubHandle: "Feranmidevelops",
  linkedin: "https://www.linkedin.com/in/oyetunde-feranmi-1ab00a264",
  linkedinHandle: "oyetunde-feranmi-1ab00a264",
  photo: "/feranmi.jpeg",
  banner: "/feranmi-banner.webp",
  availability: "Open to new opportunities",
};

/* ---- Role-specific content ---------------------------------------------- */
export const roleContent = {
  swe: {
    badge: "Software Engineer",
    roleLabel: "Software Engineer",
    stack: "React · TypeScript · Next.js · Node · React Native",
    tagline: "I build the web and mobile apps businesses run on every day.",
    taglineAccent: "React and TypeScript up front, Node and Postgres behind.",
    intro:
      "Most of my work sits close to money and approvals, where being roughly right is not good enough. Payments, admin platforms, dashboards, and one photo game that uses AI to judge your snapshots.",
    resume: "/Feranmi_Oyetunde_Resume_SoftwareDeveloper.pdf",
    summary:
      "I have spent the last year and a half building web and mobile apps for two Lagos cooperatives and a UK startup. Most of it is the unglamorous kind of software that simply has to be correct: money moving without double charges, approvals reaching the right person, dashboards that agree with the database.",
    about2:
      "Along the way I have built admin platforms, financial calculators, analytics dashboards, a Paystack payment and settlement flow, and a Python scraper that worked through more than 300,000 profiles. What I enjoy most is taking a messy manual process and turning it into something a non-technical person can use without being trained first.",
    focus: [
      { icon: FiZap, title: "Speed", text: "Pages that stay quick on mid-range Android phones and patchy networks, because that is what people actually use." },
      { icon: FiLayers, title: "Reusable UI", text: "Component libraries that make the next feature faster to build than the last one was." },
      { icon: FiCpu, title: "APIs and AI", text: "REST APIs, receipt OCR, and vision models, joined up so the user never sees the seams." },
      { icon: FiShield, title: "The small things", text: "Keyboard access, sensible empty states, and the details people notice without being able to name them." },
    ],
    skills: [
      { group: "Frontend", items: ["React.js", "TypeScript", "JavaScript (ES6+)", "Next.js", "React Native / Expo", "Vite", "Tailwind CSS", "HTML5 / CSS3"] },
      { group: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Convex", "Python", "Supabase"] },
      { group: "Auth and Payments", items: ["JWT", "httpOnly Refresh Tokens", "CSRF Protection", "RBAC", "Paystack"] },
      { group: "Databases", items: ["PostgreSQL", "MongoDB", "Appwrite", "Supabase"] },
      { group: "Automation and AI", items: ["Selenium", "Web Scraping", "Nodemailer", "Vision AI", "Gemini OCR"] },
      { group: "Testing and Tools", items: ["Vitest", "Git / GitHub", "Postman", "Swagger", "Vercel", "Netlify", "Render", "Agile / Scrum"] },
    ],
    stats: [
      { value: "300K+", label: "Records processed", icon: FiZap },
      { value: "7", label: "Products shipped", icon: FiTrendingUp },
      { value: "50+", label: "Screens built from Figma", icon: FiGrid },
    ],
  },

  it: {
    badge: "IT Systems Engineer",
    roleLabel: "IT Systems Engineer",
    stack: "Microsoft 365 · SharePoint · Power Automate · Networking · Security",
    tagline: "I keep Microsoft 365 running for a 60 person office.",
    taglineAccent: "Then I automate the parts nobody should be doing by hand.",
    intro:
      "Day to day that means accounts, access, laptops, network points, backups, and the steady work of stopping small problems from becoming outages. When the tooling runs out, I write my own.",
    resume: "/Feranmi_Oyetunde_Resume_ITEngineer.pdf",
    summary:
      "I run the Microsoft 365 environment for more than 60 staff, covering Teams, SharePoint, OneDrive, Exchange, and who is allowed to see what. Alongside that I look after the network, hardware, and backups, and I spend a fair amount of time making sure people know what a phishing email looks like.",
    about2:
      "The part that sets me apart is that I can also build. Where Microsoft 365 stops, I write the tool that fills the gap, from the financial calculators the team used to do by hand to data pipelines that handle over 300,000 records. Most IT problems I meet are really process problems, and a short workflow usually beats another spreadsheet.",
    focus: [
      { icon: FiCloud, title: "Microsoft 365", text: "Teams, SharePoint, OneDrive, and Exchange for 60+ staff, including who gets access to what and when it is taken away." },
      { icon: FiActivity, title: "Automation", text: "Power Automate and SharePoint flows that replaced tracking renewals and bookings in spreadsheets." },
      { icon: FiServer, title: "Infrastructure", text: "Network setup, hardware procurement, backups, and keeping the intranet on its feet." },
      { icon: FiTool, title: "Building tools", text: "When Microsoft 365 cannot do the job, I can write the thing that can. Not many IT people can." },
    ],
    skills: [
      { group: "Microsoft 365", items: ["SharePoint", "Power Automate", "Teams", "OneDrive", "Exchange", "User Provisioning"] },
      { group: "Infrastructure and Security", items: ["Network Configuration", "Hardware Procurement", "Security Awareness", "Data Backups", "First-Line Support"] },
      { group: "Web Management", items: ["WordPress", "Website Administration", "Digital Comms Platforms"] },
      { group: "Automation and Scripting", items: ["Python", "Selenium", "Web Scraping", "Nodemailer", "Workflow Automation"] },
      { group: "Software Development", items: ["React.js", "TypeScript", "Node.js", "Express.js", "REST APIs", "Tailwind CSS"] },
    ],
    stats: [
      { value: "60+", label: "Staff supported", icon: FiCloud },
      { value: "300K+", label: "Records automated", icon: FiZap },
      { value: "2", label: "Organisations", icon: FiServer },
    ],
  },
};

/* ---- Experience (role-aware titles/bullets, shared timeline) ------------- */
export const experience = [
  {
    company: "TotalEnergies Staff Housing Cooperative Multipurpose Society Limited (TEHC)",
    period: "Oct 2025 to now",
    employment: "Full-time",
    swe: {
      title: "Frontend Software Engineer and IT Systems Associate",
      points: [
        "Turned more than 50 Figma screens into responsive React and Tailwind pages.",
        "Built a shared component library, which meant later modules took days rather than weeks.",
        "Connected the frontend to REST APIs, checked every endpoint in Swagger, and wrote the documentation.",
        "Set up SharePoint automations for inventory alerts and boardroom booking.",
      ],
      tags: ["React", "Tailwind", "REST APIs", "Swagger"],
    },
    it: {
      title: "IT Systems Administrator and Software Engineer",
      points: [
        "Run Microsoft 365 for 60+ staff: Teams, OneDrive, SharePoint, Exchange, and access provisioning.",
        "Replaced manual inventory tracking with a Power Automate flow that emails renewal alerts before things expire.",
        "Handle procurement of smartboards, printers, and laptops, and set up network access for offices and conference rooms.",
        "First line of support for hardware, software, and network faults. Run security awareness sessions and write the monthly IT report for management.",
      ],
      tags: ["Microsoft 365", "Power Automate", "SharePoint", "Networking"],
    },
  },
  {
    company: "Atlantic City Savings and Credit Cooperative Society Limited",
    period: "Jan 2026 to now",
    employment: "Part-time",
    swe: {
      title: "Web Systems Administrator",
      points: [
        "Built a multi-role admin platform with role-based access control.",
        "Built real-time dashboards for transaction metrics.",
        "Replaced manual spreadsheet work with automated financial calculators.",
        "Built the onboarding, verification, and approval flows.",
      ],
      tags: ["React", "RBAC", "Analytics", "Dashboards"],
    },
    it: {
      title: "Web Systems Administrator and SME Support",
      points: [
        "Run and maintain the company WordPress site and its digital channels.",
        "Built a multi-role admin portal with role-based access control on top of the existing backend.",
        "Automated the financial calculations the team used to work out by hand.",
        "Built real-time dashboards so management can see transactions without asking anyone for a report.",
      ],
      tags: ["WordPress", "RBAC", "Analytics", "Web Management"],
    },
  },
  {
    company: "Drevad Ltd. (UK), remote",
    period: "Jan 2025 to Mar 2025",
    employment: "Internship",
    swe: {
      title: "Software Engineering Intern",
      points: [
        "Designed and built a full-stack e-commerce platform on my own: catalog, cart, checkout, order management, and a role-based admin dashboard. React and Vite on the front, Node and Express over Postgres behind it.",
        "Added Paystack payments with an idempotent settlement flow, webhook plus client verification, so a customer cannot be charged twice or an order fulfilled twice.",
        "Swapped long-lived tokens for short-lived JWTs with rotating httpOnly refresh cookies and CSRF protection, so logging out actually ends the session on the server.",
        "Built role-based access for super, sales, and finance admins, a CSV bulk import with per-row validation, and a Vitest suite around the money logic.",
      ],
      tags: ["React", "Node/Express", "Paystack", "JWT Auth", "PostgreSQL", "Vitest"],
    },
    it: {
      title: "Software Engineering Intern",
      points: [
        "Built a full-stack e-commerce platform end to end: catalog, cart, checkout, order management, and an admin dashboard, using React with Node and Express over Postgres.",
        "Added Paystack payments with an idempotent settlement flow, and secure sign-in using short-lived JWTs, rotating refresh cookies, and CSRF protection.",
        "Built role-based access control, a validated CSV bulk import, and a test suite around the payment logic.",
      ],
      tags: ["React", "Node/Express", "Paystack", "JWT Auth", "PostgreSQL"],
    },
  },
];

/* ---- Featured projects (shared across roles) ----------------------------- */
export const projects = [
  {
    id: "spinmedical",
    title: "Spinmedical",
    category: "Full-Stack · HealthTech",
    year: "2026",
    description:
      "Medical crowdfunding for Nigeria, done differently. Instead of every patient running their own campaign and the loudest story winning, donors pay into one shared pool and verified patients join a public queue. On a set schedule the system picks one patient by weighted draw and pays their bill in full, either to them or straight to the hospital.",
    highlights: [
      "One shared pool and a public queue, so nobody has to out-market a stranger to get treated",
      "Weighted draw with a full audit snapshot, and the random element can be turned down to zero",
      "Four separate consoles for patients, helpers, verifiers, and admins",
      "Scheduled payouts through GitHub Actions that refuse to run without the right secret",
      "Built around Nigerian fintech and data protection rules, so the platform never holds donor money itself",
    ],
    tech: ["Next.js 16", "TypeScript", "React Server Components", "Prisma 6", "PostgreSQL (Neon)", "Auth.js v5", "Tailwind v4", "Vercel", "GitHub Actions"],
    accent: "purple",
    image: "/projects/spinmedical.webp",
    mobileImage: "/projects/spinmedical-mobile.webp",
    liveUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    id: "tickety",
    title: "Tickety",
    category: "Real-Time · Full-Stack",
    year: "2026",
    description:
      "A small IT support desk that updates live. Staff raise tickets, agents pick them up, and anyone watching a ticket sees the status change the moment it happens. Sign-up is invite only, so nobody wanders in.",
    highlights: [
      "The ticket lifecycle is enforced on the server, so an invalid status jump is rejected even if the UI allows it",
      "Two SignalR channels push queue and ticket updates over WebSockets",
      "Three roles, requester, agent, and admin, each seeing only what they should",
      "Every assignment and status change is written to a timeline you can read back",
    ],
    tech: [".NET 10", "ASP.NET Core", "C#", "SignalR", "EF Core", "PostgreSQL", "React", "TypeScript"],
    accent: "indigo",
    image: "/projects/tickety.webp",
    mobileImage: "/projects/tickety-mobile.webp",
    liveUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    id: "interim-expense",
    title: "Interim Expense Tracker",
    category: "Enterprise · Full-Stack",
    year: "2026",
    description:
      "An expense and reimbursement system used by around 50 staff across both cooperatives. Claims travel through approval levels, receipts are read automatically instead of typed in, and every action is logged. Access is enforced in the database itself, not just in the app.",
    highlights: [
      "Approvals routed by level, so several people can review at once without blocking each other",
      "Receipts read by Gemini, which saves the finance team retyping them",
      "Permissions enforced by Postgres row-level security",
      "Spending charts built with Recharts",
    ],
    tech: ["Next.js 16", "TypeScript", "Supabase", "PostgreSQL", "Gemini AI", "Tailwind"],
    accent: "indigo",
    image: "/projects/expense-tracker.webp",
    mobileImage: "/projects/expense-tracker-mobile.webp",
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
      "A full e-commerce platform I designed and built on my own during a UK internship. Catalog, cart, checkout, order management, and a role-based admin dashboard, with Paystack payments and the security work that has to come with taking money online.",
    highlights: [
      "Paystack payments with an idempotent settlement flow, so a customer cannot be charged twice",
      "Short-lived JWTs with rotating httpOnly refresh cookies and CSRF protection",
      "Separate admin roles for super, sales, and finance, each scoped to its own routes",
      "CSV bulk import with per-row validation, and a Vitest suite over the money logic",
    ],
    tech: ["React", "Vite", "Node/Express", "PostgreSQL", "Paystack", "JWT Auth", "Vitest"],
    accent: "purple",
    image: "/projects/drevad.webp",
    mobileImage: "/projects/drevad-mobile.webp",
    liveUrl: "https://drevad.netlify.app/",
    githubUrl: "https://github.com/Feranmidevelops/Drevad",
    featured: true,
  },
  {
    id: "sofalia",
    title: "Sofalia Cakes and Events",
    category: "Business · Booking Platform",
    year: "2025",
    description:
      "A storefront and booking site for a cakes and events business. Customers book through the site, and the owner manages those bookings and updates her own content from an admin dashboard, with Supabase behind it.",
    highlights: [
      "Customers book without phoning or messaging first",
      "Admin dashboard with sign-in, so the owner updates the site herself",
      "Supabase for data and auth",
      "Works properly on a phone, which is where nearly all her customers arrive",
    ],
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
      "A phone game built around one daily challenge. You get a colour or an object, you have to photograph it with the camera rather than the gallery, and a vision model decides whether you found it. Keep it up and you build a streak, then see where that puts you against everyone else in your state.",
    highlights: [
      "Camera only, no gallery uploads, so the photo has to be taken there and then",
      "One shared challenge a day for everyone, plus an endless arcade mode",
      "Live leaderboard for each Nigerian state, so you are ranked against people nearby",
      "The AI key stays on the server in a Supabase function, never in the app",
    ],
    tech: ["React Native", "Expo", "TypeScript", "Supabase", "Vision AI", "Edge Functions"],
    accent: "indigo",
    image: "/projects/snaparound.webp",
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
      "A Python pipeline that collected and cleaned more than 300,000 audience profiles. It had to keep going through timeouts and layout changes without losing its place, and hand back data that was actually usable.",
    highlights: [
      "Over 300,000 profiles processed",
      "Crawling with Selenium that recovers instead of falling over",
      "Structured, cleaned output ready for analysis",
    ],
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
      "An audio gear shop with a catalog, cart, and checkout, which emails the customer a confirmation once the order goes through.",
    highlights: ["Catalog and cart", "Checkout with confirmation emails", "Responsive storefront"],
    tech: ["React", "Node.js", "Nodemailer", "Vite"],
    accent: "gold",
    liveUrl: "",
    githubUrl: "",
    featured: false,
  },
];

export const education = {
  degree: "B.Sc. Educational Technology",
  institution: "University of Ilorin, Nigeria",
  year: "2024",
  gpa: "4.0 / 5.0",
};

export const certifications = [
  { name: "CS50 Web Development with Python and JavaScript", issuer: "Harvard University" },
  { name: "Microsoft Azure Fundamentals", issuer: "Microsoft" },
  { name: "Cloud Security Fundamentals", issuer: "" },
  { name: "React, The Complete Guide", issuer: "" },
  { name: "Backend Development with Django", issuer: "" },
  { name: "Web Scraping with Python", issuer: "" },
  { name: "Responsive Web Design", issuer: "" },
];
