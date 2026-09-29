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
    badge: "Full Stack Software Engineer",
    roleLabel: "Full Stack Software Engineer",
    stack: "React · Next.js · TypeScript · Node.js · Python · .NET · PostgreSQL",
    tagline: "I work across the whole request, browser to database.",
    taglineAccent: "Most of what I build moves money or decides who sees what, so I put the rules first.",
    intro:
      "Loan pricing, expense approvals, payments, and a real time game server. React and Next.js in the browser, Node.js, FastAPI and ASP.NET Core behind them, PostgreSQL underneath.",
    resume: "/Feranmi_Oyetunde_Resume_SoftwareDeveloper.pdf",
    summary:
      "I am a full stack engineer building production software for two Lagos cooperatives, after an internship with a UK startup. I work across the whole request: React and Next.js in the browser, Node.js, FastAPI and ASP.NET Core on the server, PostgreSQL underneath, deployed on Azure, Vercel and Render.",
    about2:
      "Right now that means a loan pricing engine in FastAPI, kept honest by 1,645 tests behind a 90% coverage gate, and an expense system where the approval rules live in Postgres rather than the interface, so a check skipped in the UI still fails in the database. Before that I built an online store end to end during a remote UK internship, including the Paystack settlement flow that makes charging a customer twice impossible.",
    focus: [
      { icon: FiShield, title: "Rules in the database", text: "Row level security and functions that reject illegal changes, so a check skipped in the interface still fails underneath." },
      { icon: FiZap, title: "Tested where it counts", text: "1,645 tests behind a 90% coverage floor on the loan engine, held to the finance team's own spreadsheets by golden files." },
      { icon: FiLayers, title: "The whole request", text: "React and Next.js in the browser, Node.js, FastAPI and ASP.NET Core on the server, PostgreSQL underneath." },
      { icon: FiCpu, title: "Real time and AI", text: "WebSockets and SignalR for live state, plus vision and voice models kept server side where the keys belong." },
    ],
    skills: [
      { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "C#", "SQL"] },
      { group: "Frontend", items: ["React", "Next.js", "React Native (Expo)", "TanStack Query", "Zustand", "React Hook Form", "Zod", "Tailwind CSS"] },
      { group: "Backend", items: ["Node.js", "Express", "FastAPI", "ASP.NET Core", "SignalR", "WebSockets", "REST", "OpenAPI"] },
      { group: "Databases", items: ["PostgreSQL", "Supabase", "Prisma", "Alembic", "EF Core", "MongoDB"] },
      { group: "Auth and Security", items: ["JWT", "Refresh Token Rotation", "CSRF Protection", "OTP Sign In", "Role Based Access", "API Keys", "Rate Limiting", "Audit Logs"] },
      { group: "Testing", items: ["Vitest", "pytest", "xUnit", "Supertest", "React Testing Library", "mypy", "Ruff"] },
      { group: "Deployment", items: ["Docker", "GitHub Actions", "Azure App Service", "Vercel", "Render", "Netlify"] },
      { group: "Integrations", items: ["Paystack", "Dynamics 365 Business Central", "Gemini", "OpenAI Vision", "Claude API", "Deepgram", "ElevenLabs", "Power Automate"] },
    ],
    stats: [
      { value: "300K+", label: "Records processed", icon: FiZap },
      { value: "13", label: "Products shipped", icon: FiTrendingUp },
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
      title: "Software Engineer and IT Systems Administrator",
      points: [
        "Built the TEHC and ACUOP Expense Tracker (Next.js 16, Supabase) for about 50 staff. Claims route through an approval chain based on department and level, Accounts checks VAT and withholding tax, Treasury pays, and paid claims post to Dynamics 365 Business Central.",
        "Put authorization in Postgres with row level security and RPCs that reject illegal state changes, so a check skipped in the UI still fails in the database.",
        "Wrote the integrations as Supabase Edge Functions: vendor sync with Business Central every six hours, ZeptoMail email, and Gemini receipt OCR so staff no longer type figures by hand.",
        "Turn Figma designs into responsive React and TypeScript screens, and test each REST endpoint in Swagger and Postman before it ships.",
        "Automated inventory renewal alerts and boardroom booking with Power Automate and SharePoint.",
      ],
      tags: ["Next.js", "Supabase", "PostgreSQL", "Dynamics 365", "React"],
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
      title: "Web Systems Administrator and Software Developer",
      points: [
        "Backend engineer on the ACUOP Loan Platform, a FastAPI and PostgreSQL service that prices loans and mortgages for ACUOP and the property developments it finances.",
        "Built the calculation engine as pure Python with Decimal money and no database, clock or network access, so the same inputs always return the same schedule. Golden file tests hold it to the finance team's spreadsheets.",
        "Designed the three tier tenancy (system, financier, project) with invite only onboarding, a two signature approval bound to a content hash, per project API keys, idempotent writes and an append only audit trail across 90 endpoints.",
        "Shipped behind a CI gate of 1,645 tests with a 90% coverage floor. Merges to main run Alembic migrations, then deploy to Azure App Service.",
        "Built the Relationship Manager dashboard and the projects, products and transactions screens in the member portal (React 19, TypeScript, TanStack Query, Zustand).",
      ],
      tags: ["Python", "FastAPI", "PostgreSQL", "Azure", "React"],
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
        "Built an online store end to end on my own: catalog, cart, coupons, reviews, wishlist, checkout, order management and an admin dashboard. React and Vite on the front, Node.js and Express over PostgreSQL behind it.",
        "Integrated Paystack with a settlement flow that confirms each payment through both the webhook and the client, checks the amount on the server, and ignores repeats, so no customer is charged or fulfilled twice.",
        "Replaced long lived tokens with short JWTs, rotating httpOnly refresh cookies and CSRF protection, so logging out really ends the session. Super, sales and finance admins each get their own permissions.",
        "Added CSV bulk import with per row validation, Helmet, rate limiting and Sentry, plus Vitest and Supertest suites around payments, coupons and auth.",
      ],
      tags: ["React", "Node.js", "Express", "Paystack", "PostgreSQL", "Vitest"],
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
    id: "hocks",
    title: "HOCKS",
    category: "Real Time · Multiplayer",
    year: "2026",
    description:
      "Two player air hockey in the browser, built to learn the netcode real multiplayer games use. The server owns the game and runs it at 60Hz. Each client predicts its own paddle, draws the opponent from buffered snapshots, and corrects itself when the server disagrees, so the game still feels instant between Lagos and a server in Frankfurt.",
    highlights: [
      "Deterministic fixed timestep physics shared by client and server, with a test that proves both produce the same result",
      "Client side prediction and server reconciliation, so your paddle moves the moment you do at a 240ms round trip",
      "An interpolation buffer that sizes itself from measured jitter, cutting opponent lag from about 220ms to 155ms",
      "Only the server can score a goal, so a save the client had not seen yet never flashes a point on and off",
      "Pause on disconnect, reconnect mid rally, rematches, and a live overlay showing RTT, jitter and replayed ticks",
    ],
    tech: ["TypeScript", "Node.js", "WebSockets", "Vite", "Vitest", "Docker", "Render", "Fly.io"],
    accent: "indigo",
    image: "/projects/hocks.webp",
    liveUrl: "https://hocks-frankfurt.onrender.com/",
    githubUrl: "https://github.com/Feranmidevelops/HOCKS",
    featured: true,
  },
  {
    id: "acuop-loan-platform",
    title: "ACUOP Loan Platform",
    category: "Fintech · Backend",
    year: "2026",
    description:
      "The pricing service behind ACUOP's loans and mortgages. A financier sets up lending products and grants them to the property developments it finances, and each development prices loans for its buyers through a console or its own software. Given a product's terms and a borrower's inputs, it returns the exact repayment schedule, every fee on its own line, and a fingerprint of the terms that produced it.",
    highlights: [
      "Calculation engine in pure Python with Decimal money and no database, clock or network access, checked against the finance team's spreadsheets",
      "Three tiers of tenants (system, financier, project), each onboarded by invitation",
      "Product approvals need two people and are tied to a content hash, so an approved rate cannot quietly change",
      "Per project API keys, idempotent writes and an append only audit trail across 90 endpoints",
      "1,645 tests with a 90% coverage floor, and every merge runs database migrations before deploying to Azure App Service",
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "pytest", "Docker", "GitHub Actions", "Azure App Service"],
    accent: "purple",
    liveUrl: "",
    githubUrl: "",
    private: true,
    featured: true,
  },
  {
    id: "tickety",
    title: "Tickety",
    category: "Real Time · Full Stack",
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
    liveUrl: "https://tickety-navy.vercel.app/",
    githubUrl: "https://github.com/Feranmidevelops/Tickety",
    featured: true,
  },
  {
    id: "interim-expense",
    title: "Interim Expense Tracker",
    category: "Enterprise · Full Stack",
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
    id: "spinmedical",
    title: "Spinmedical",
    category: "Full Stack · HealthTech",
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
    id: "drevad",
    title: "Drevad Commerce",
    category: "Ecommerce · Payments",
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
    id: "mr-feranmi",
    title: "Mr Feranmi",
    category: "AI · Voice",
    year: "2026",
    status: "Hackathon Build",
    description:
      "A mock interviewer you talk to. Pick a track and a level, answer out loud, and it listens, asks follow up questions and speaks back. Like a real interview there is no feedback along the way. At the end you get a debrief with a score for each skill and reading chosen for your weak spots.",
    highlights: [
      "One model runs the live conversation through a strict tool schema and can probe at most twice per question",
      "A second model scores once at the end and has to quote the transcript for every score it gives",
      "Deepgram for speech to text and ElevenLabs for the voice, all called from the server so no key reaches the browser",
      "The marking scheme never leaves the server, and study links come from a hand picked list rather than the model",
      "Sessions are saved under row level security and pick up where they left off after a refresh or restart",
    ],
    tech: ["Next.js 16", "TypeScript", "Supabase", "PostgreSQL", "Claude API", "Deepgram", "ElevenLabs", "Three.js"],
    accent: "indigo",
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
    githubUrl: "https://github.com/Feranmidevelops/SNAPAROUND",
    featured: true,
  },
  {
    id: "jada-finds",
    title: "Jada Finds",
    category: "Client Site · Small Business",
    year: "2026",
    description:
      "The website for a Lagos personal shopping and styling business, plus the quote, invoice and receipt builder the owner uses to bill clients. There is no framework and no build step, so it loads quickly on a phone and costs nothing to host.",
    highlights: [
      "The fee maths lives in one module shared by the site's estimator and the invoice builder, so the two can never quote different prices",
      "That module is covered by tests on Node's built in test runner",
      "Invoices download as PDFs, and bank details are entered at billing time instead of being stored in the code",
      "CI checks that both pages still load and that no account number has been committed",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Node Test Runner", "Netlify"],
    accent: "gold",
    image: "/projects/jada.webp",
    mobileImage: "/projects/jada-mobile.webp",
    liveUrl: "https://jadafinds.netlify.app/",
    githubUrl: "https://github.com/Feranmidevelops/jada-finds",
    featured: true,
  },
  {
    id: "feranmi-restaurant",
    title: "Feranmi Restaurant",
    category: "Frontend · Ordering",
    year: "2026",
    description:
      "An ordering app for a fictional Lagos burger restaurant, built in TypeScript from a Figma file and taken well past it. Browse the menu, build a cart, check out for delivery or pickup, or book a table. Orders are handed off over WhatsApp, which is how most Lagos restaurants take them.",
    highlights: [
      "Menu filters live in the URL, so a filtered menu is a link you can share and the back button works",
      "Eight Lagos delivery zones with their own fees and delivery times, plus Nigerian phone number validation",
      "Opening hours are worked out in Lagos time rather than the visitor's, with a live open or closed badge",
      "Every order produces a one page PDF invoice, with the PDF library loaded only when it is needed",
      "165 tests with Vitest",
    ],
    tech: ["TypeScript", "React", "Vite", "Vitest", "jsPDF", "GitHub Pages"],
    accent: "gold",
    image: "/projects/burger.webp",
    mobileImage: "/projects/burger-mobile.webp",
    liveUrl: "https://feranmidevelops.github.io/feranmi-burger-repo/",
    githubUrl: "https://github.com/Feranmidevelops/feranmi-burger-repo",
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
    githubUrl: "https://github.com/Feranmidevelops/sofaliacakesandevents",
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
    category: "Ecommerce",
    year: "2025",
    description:
      "An audio gear shop with a catalog, cart, and checkout, which emails the customer a confirmation once the order goes through.",
    highlights: ["Catalog and cart", "Checkout with confirmation emails", "Responsive storefront"],
    tech: ["React", "Node.js", "Nodemailer", "Vite"],
    accent: "gold",
    liveUrl: "",
    githubUrl: "https://github.com/Feranmidevelops/Audiophile",
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
