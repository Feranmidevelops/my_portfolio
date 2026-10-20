/* ==========================================================================
   Central content for the portfolio.
   Edit here to update the whole site.
   ========================================================================== */

export const profile = {
  name: "Feranmi Oyetunde",
  location: "Lagos, Nigeria",
  email: "feranmioyetunde@gmail.com",
  github: "https://github.com/feranmidevelops",
  githubHandle: "Feranmidevelops",
  linkedin: "https://www.linkedin.com/in/oyetunde-feranmi-1ab00a264",
  linkedinHandle: "oyetunde-feranmi-1ab00a264",
  photo: "/feranmi.webp",
  banner: "/feranmi-banner.webp",
  availability: "Open to new opportunities",
};

/* ---- Hero and About copy ---------------------------------------------- */
export const intro = {
  roleLabel: "Full Stack Software Engineer",
  tagline: "I work across the whole request, browser to database.",
  taglineAccent: "Most of what I build moves money or decides who sees what, so I put the rules first.",
  // The résumé PDF in public/. The Résumé button hides itself if this is empty.
  resume: "/Feranmi_Oyetunde_SWE.pdf",
  summary:
    "I am a full stack engineer at TotalEnergies Staff Housing Cooperative (TEHC) and ACUOP in Lagos, building finance software: an expense system that handles about 80 claims a month, averaging 10 million naira in transaction volume, and a loan and mortgage calculator API live with six products for property developers. In 2026 I merged 205 pull requests across six repositories, including 18 production releases in three weeks.",
  about2:
    "Right now that means a loan pricing engine in FastAPI, kept honest by 1,645 tests behind a 90% coverage gate, and an expense system where the approval rules live in Postgres rather than the interface, so a check skipped in the UI still fails in the database. Before that I built an online store end to end during a remote UK internship, including the Paystack settlement flow that makes charging a customer twice impossible.",
};

/* ---- Experience ----------------------------------------------------------- */
export const experience = [
  {
    company: "TotalEnergies Staff Housing Cooperative (TEHC)",
    location: "Lagos",
    period: "Oct 2025 to Present",
    title: "Software Engineer & IT Systems Administrator",
    team: "Technical and Innovation team, reporting to the COO",
    work: [
      {
        name: "Expense Tracker",
        tech: ["Next.js 16", "Supabase", "Dynamics 365 Business Central"],
        points: [
          "Handles about 80 claims a month, averaging 10 million naira in transaction volume. About 50 staff raise claims against the chart of accounts with a live budget check; approvals route by department and level, Accounts checks VAT and withholding tax, Treasury pays, the COO approves budgets, and every paid claim posts to Dynamics 365 Business Central.",
          "Authorization lives in Postgres through row level security and RPCs that reject illegal state changes, so a check skipped in the UI still fails in the database. Edge Functions sync vendors from Business Central over OAuth2 every six hours, send ZeptoMail email and read receipts with Gemini OCR, so staff no longer type figures by hand.",
          "Merged 22 pull requests in under two weeks for Finance and Treasury: beneficiary banks from a Paystack mirrored list, entity splits that Accounts can correct in review, a collated payment schedule emailed to Accounts and Treasury, Excel exports and a live status tracker for staff.",
        ],
      },
    ],
  },
  {
    company: "ACUOP",
    location: "Lagos",
    period: "Jan 2026 to Present",
    title: "Web Systems Administrator & Software Developer",
    work: [
      {
        name: "Loan Calculator Platform",
        tech: ["FastAPI", "PostgreSQL", "Alembic", "Azure App Service"],
        points: [
          "Top contributor to the calculator API that prices ACUOP's loans and mortgages, live with ACUOP as its first financier and six loan products that property developers call with their own API keys. Merged 135 pull requests in six weeks and shipped 18 production releases in three.",
          "Wrote the amortization engine in pure Python with Decimal money and no database, clock or network access. It handles staged drawdowns tied to construction milestones, a repayment that never drops below its peak, overpayments credited to the next milestone, moratoriums and an exact final payment, and golden file tests hold it to Finance's spreadsheets.",
          "Designed the three tier tenancy (system, financier, project): invite only onboarding, a two signature approval bound to a content hash so an approved rate cannot quietly change, per project API keys, idempotent writes and an append only audit trail across 90 endpoints.",
          "Kept it releasable with 1,645 tests behind a 90% coverage floor, mypy, an import linter that isolates the engine, an OpenAPI snapshot check and a generated TypeScript client that fails CI on drift. Merges to main migrate and deploy to Azure.",
        ],
      },
      {
        name: "Member Portal",
        tech: ["React 19", "TypeScript", "TanStack Query", "Zustand"],
        points: [
          "Set up the codebase and built the multi step membership application (validation, joint owners, prefill for Louisville clients) that has onboarded 80 members, with BVN and NIN verified through Qore.id.",
          "Merged 37 pull requests in all, including the member dashboard, shares and profile, the Relationship Manager module, and the admin projects, products, transactions and analytics screens.",
        ],
      },
    ],
  },
  {
    company: "Drevad Ltd. (UK)",
    location: "Remote",
    period: "Jan 2025 to Mar 2025",
    title: "Software Engineering Intern",
    work: [
      {
        name: "Online store",
        tech: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "Paystack"],
        points: [
          "Built the store end to end on my own: catalog, cart, coupons, reviews, wishlist, checkout, order management and an admin dashboard with separate super, sales and finance permissions.",
          "Integrated Paystack with a settlement flow that confirms each payment through both the webhook and the client, checks the amount on the server and ignores repeats, so no customer is charged or fulfilled twice.",
          "Replaced long lived tokens with short JWTs, rotating httpOnly refresh cookies and CSRF protection, so logging out really ends the session. Added CSV bulk import with per row validation, Helmet, rate limiting, Sentry, and Vitest and Supertest suites around payments, coupons and auth.",
        ],
      },
    ],
  },
];

/* ---- Featured projects ---------------------------------------------------- */
export const projects = [
  {
    id: "spinmedical",
    title: "Spinmedical",
    category: "Full Stack · HealthTech",
    year: "2026",
    description:
      "A medical crowdfunding platform. Donors pay into one shared pool and a weighted draw, based on urgency and time waiting, pays a verified patient's bill in full. Each draw stores its seed and candidate list, so any past result can be recomputed and audited.",
    highlights: [
      "Pool balance is derived from the ledger rather than a cached counter, money is stored in kobo, and five roles cover patients, helpers, donors, verifiers and admins.",
      "Built around Nigeria's NDPA.",
    ],
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Auth.js"],
    accent: "purple",
    image: "/projects/spinmedical.webp",
    imageSize: [1400, 694],
    mobileImage: "/projects/spinmedical-mobile.webp",
    liveUrl: "",
    githubUrl: "",
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
    imageSize: [1400, 703],
    mobileImage: "/projects/expense-tracker-mobile.webp",
    liveUrl: "",
    githubUrl: "",
    private: true,
    featured: true,
  },
  {
    id: "mr-feranmi",
    title: "Mr Feranmi",
    category: "AI · Voice",
    year: "2026",
    status: "Hackathon Build",
    description:
      "A voice based mock interviewer. Candidates speak their answers and hear the interviewer reply. One model runs live turns through a strict tool schema; a second scores at the end and must quote the transcript for every score.",
    highlights: [
      "Model and speech calls stay on the server and the marking scheme never reaches the browser.",
      "Sessions persist under RLS and survive a refresh or restart.",
    ],
    tech: ["Next.js 16", "TypeScript", "Supabase", "Claude API", "Deepgram", "ElevenLabs"],
    accent: "indigo",
    image: "/projects/mr-feranmi.webp",
    imageSize: [1400, 875],
    mobileImage: "/projects/mr-feranmi-mobile.webp",
    liveUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    id: "jada-finds",
    title: "Jada Finds",
    category: "Client Site · Small Business",
    year: "2026",
    description:
      "A live client site for a Lagos personal shopper. A tested fee calculator and invoice builder give clients a price before they commit. The request form takes up to five reference photos, budget and sizes, saves the enquiry, then opens WhatsApp with the details already filled in.",
    tech: ["HTML", "CSS", "JavaScript", "Netlify Forms"],
    accent: "gold",
    image: "/projects/jada.webp",
    imageSize: [1400, 726],
    mobileImage: "/projects/jada-mobile.webp",
    liveUrl: "https://jadafinds.netlify.app/",
    githubUrl: "https://github.com/Feranmidevelops/jada-finds",
    featured: true,
  },
  {
    id: "hocks",
    title: "HOCKS",
    category: "Real Time · Multiplayer",
    year: "2026",
    description:
      "Real time multiplayer air hockey. An authoritative 60Hz server with a deterministic fixed timestep simulation, snapshot interpolation, client side prediction and server reconciliation, so your own paddle responds instantly at a 240ms round trip.",
    highlights: [
      "A self sizing interpolation buffer cut opponent lag from Lagos to Frankfurt from about 220ms to 155ms.",
      "Deployed to two regions and measured through a live overlay of RTT, jitter and replayed ticks.",
    ],
    tech: ["TypeScript", "Node.js", "WebSockets", "Vite", "Vitest", "Docker", "Render", "Fly.io"],
    accent: "indigo",
    image: "/projects/hocks.webp",
    imageSize: [1400, 726],
    liveUrl: "https://hocks-frankfurt.onrender.com/",
    githubUrl: "https://github.com/Feranmidevelops/HOCKS",
    featured: true,
  },
  {
    id: "mydrobe",
    title: "MYDROBE",
    category: "3D · Local First",
    year: "2026",
    status: "In Development",
    description:
      "A 3D virtual wardrobe in the browser. It turns a photo of your own shirt or trousers into a garment on a 3D mannequin, with no account, backend or paid AI. A web worker cuts the garment from its background, and FFT autocorrelation finds the repeat in checks and plaids so the back and sleeves tile seamlessly.",
    highlights: [
      "Took it from first commit to a working MVP in four days: 232 commits across 34 pull requests, 346 unit tests, and a Playwright journey that reads the rendered WebGL pixels and confirms no photo leaves the device.",
    ],
    tech: ["React 19", "TypeScript", "Three.js (React Three Fiber)", "Web Workers", "IndexedDB (Dexie)", "Zustand", "Vitest", "Playwright"],
    accent: "gold",
    image: "/projects/mydrobe.webp",
    imageSize: [1400, 875],
    mobileImage: "/projects/mydrobe-mobile.webp",
    liveUrl: "",
    githubUrl: "https://github.com/Feranmidevelops/mydrobe",
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
    imageSize: [1400, 737],
    mobileImage: "/projects/drevad-mobile.webp",
    liveUrl: "https://drevad.netlify.app/",
    githubUrl: "https://github.com/Feranmidevelops/Drevad",
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
    imageSize: [1400, 726],
    mobileImage: "/projects/tickety-mobile.webp",
    liveUrl: "https://tickety-navy.vercel.app/",
    githubUrl: "https://github.com/Feranmidevelops/Tickety",
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
    imageSize: [1000, 585],
    liveUrl: "",
    githubUrl: "https://github.com/Feranmidevelops/SNAPAROUND",
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
    imageSize: [1400, 726],
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
    image: "/projects/sofalia.webp",
    imageSize: [1400, 875],
    mobileImage: "/projects/sofalia-mobile.webp",
    liveUrl: "",
    githubUrl: "https://github.com/Feranmidevelops/sofaliacakesandevents",
    featured: true,
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
    image: "/projects/audiophile.webp",
    imageSize: [1400, 875],
    mobileImage: "/projects/audiophile-mobile.webp",
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
