/*
 * CASE STUDIES
 * ------------
 * Every project here gets its own page at /projects/<slug>.
 *
 * IMPORTANT — the "challenge", "approach" and "outcome" text below is a DRAFT
 * written from the short descriptions on your old site. It deliberately avoids
 * inventing numbers or technical details I couldn't verify. Rewrite it in your
 * own words with the real story: what broke, what you decided, what changed.
 *
 * `metrics` is optional. Add real numbers only, e.g.
 *   metrics: [{ value: "10k+", label: "Trips completed" }]
 * Empty fields (year, metrics, links) are hidden automatically.
 */

const img = (file) => `/images/projects/${file}`;

export const projects = [
  {
    slug: "kero-ride",
    featured: true,
    title: "Kero Ride",
    tagline: "A complete ride-hailing platform: rider app, driver app and operations dashboard.",
    category: "Mobile & Web Platform",
    client: "Kero Technologies (via Atom's Hub Technologies)",
    year: "2025 — 2026",
    role: "Frontend & Mobile Developer",
    platforms: ["iOS", "Android", "Web"],
    stack: [
      "React Native",
      "Expo Router",
      "NativeWind",
      "Zustand",
      "React Native Maps",
      "Socket.IO",
      "Agora (in-app calls)",
      "Firebase Cloud Messaging",
      "Paystack",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "BullMQ",
      "React",
      "Recharts",
    ],
    cover: img("kero-app.jpg"),
    gallery: [img("kero-app.jpg"), img("kero-app2.jpg"), img("kero-web.jpg")],
    links: [{ label: "Website", url: "http://kerotechnologies.com" }],
    summary:
      "A rider app, a driver app, the real-time backend that connects them, and the operations dashboard that keeps it all running.",
    overview:
      "Kero is a ride-hailing product made up of four connected pieces: a rider app for booking trips and tracking the driver live on the map, a driver app for accepting, managing and completing trip requests, a Node.js backend that matches riders to drivers in real time, and a web dashboard where the team manages users, drivers and ride analytics. I worked on Kero from 2025 to 2026 through Atom's Hub Technologies, across the mobile apps, the admin dashboard and website, and the real-time backend.",
    challenge:
      "Ride-hailing is unforgiving. A rider wants to see their driver moving on the map, a driver needs a new request to appear the moment it's assigned, and riders and drivers need to reach each other without sharing phone numbers. Most users are on mid-range Android phones and patchy mobile data, and four separate surfaces all have to agree on the state of every trip.",
    approach: [
      "Built the rider and driver apps with React Native, Expo Router and NativeWind, with Zustand for state, so iOS and Android ship together and behave the same.",
      "Live trip tracking with React Native Maps, Google Places autocomplete and route directions, kept in sync over Socket.IO.",
      "In-app voice calls between rider and driver using Agora, with CallKeep and VoIP push so calls ring like a normal phone call.",
      "Push notifications through Firebase Cloud Messaging, Google sign-in, and card payments with Paystack.",
      "A Node.js + Express backend on MongoDB, with Socket.IO scaled through a Redis adapter, BullMQ queues and cron jobs for background work.",
      "A React operations dashboard with Google Maps / Leaflet views and Recharts analytics for managing riders, drivers and trips.",
    ],
    outcome:
      "Kero runs as a full platform rather than a single app: riders, drivers and the operations team each have a tool designed for how they actually work, connected by one real-time backend.",
    metrics: [],
  },
  {
    slug: "achievers-cooperative",
    featured: true,
    title: "Achievers Cooperative",
    tagline: "A digital home for a registered savings and credit cooperative: member app, admin portal and API.",
    category: "Fintech Platform",
    client: "Achievers Cooperative",
    year: "2026",
    role: "Full-Stack Engineer",
    platforms: ["Web", "PWA"],
    stack: [
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "JWT / Passport",
      "Swagger / OpenAPI",
      "Next.js",
      "HeroUI",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "Serwist (PWA)",
      "Turborepo",
    ],
    cover: img("achievers.png"),
    gallery: [img("achievers.png")],
    links: [{ label: "Website", url: "https://www.achieverscooperative.com.ng/" }],
    summary:
      "One platform for a member-owned cooperative's savings, loans, wallets and weekly contributions, used by its 30+ members and the admins who run it.",
    overview:
      "Achievers Cooperative is a savings and credit cooperative registered in Oyo State, Nigeria. I built its whole digital platform as a Turborepo monorepo: a public landing site, an installable member PWA, an admin operations portal and a NestJS API on PostgreSQL. Members fund their wallets, track savings and weekly contributions, apply for zero-interest loans and see every transaction; admins review, approve and report on it all.",
    challenge:
      "This is people's money, so every naira has to be traceable. Wallet top-ups arrive as bank transfers with uploaded receipts that need checking, weekly deductions have to run on schedule without double-charging anyone, and loan decisions need a clear review trail. Members also expect it to work on any phone without installing an app from a store.",
    approach: [
      "Designed a NestJS API with Prisma and PostgreSQL, split into modules for members, KYC, wallets, savings, loans, investments, weekly deductions, transactions, reports, notifications and audit.",
      "Built a receipt-upload and admin-approval workflow for wallet funding, so balances only change once a payment is verified.",
      "Automated weekly contribution deductions with scheduled jobs, logged as transactions members can see.",
      "Shipped the member experience as an installable PWA (Next.js + Serwist) with offline support, so it works like an app without an app store.",
      "Generated the API contract from NestJS with Swagger/OpenAPI and shared TypeScript types across the landing site, member app and admin portal.",
    ],
    outcome:
      "The cooperative now runs on one system: members see their savings, loans and contributions in real time, and admins handle approvals and reporting from a single dashboard.",
    metrics: [{ value: "30+", label: "Active members" }],
  },
  {
    slug: "rekordly",
    featured: true,
    title: "Rekordly",
    tagline: "My own bookkeeping platform: organize your business, know your profit.",
    category: "SaaS · Personal Product",
    client: "Rekordly (my product)",
    year: "2025 — Now",
    role: "Founder & Engineer",
    platforms: ["Web"],
    stack: [
      "Next.js",
      "TypeScript",
      "HeroUI",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Zustand",
      "Zod",
      "Recharts",
      "Cloudinary",
      "jsPDF",
    ],
    cover: img("rekordly.png"),
    gallery: [img("rekordly.png"), img("rekordly-dashboard.jpg")],
    links: [{ label: "Website", url: "https://rekordly.com" }],
    summary:
      "An all-in-one business management app for small businesses to track sales, expenses, inventory and cash flow, and see real profit in one place.",
    overview:
      "Rekordly is a product I'm building for small business owners who keep their books in notebooks, WhatsApp chats or their heads. It brings income, sales, expenses, purchases, invoices, quotations, inventory, production, loans, customers and reports into one dashboard, so an owner can answer the only question that matters: am I actually making money?",
    challenge:
      "Most small business owners aren't accountants. The app has to speak their language (sales, what I spent, who owes me) while still producing numbers that add up properly: revenue collected versus outstanding, net profit, and margins. It also has to feel fast and simple enough that recording a sale is never a chore.",
    approach: [
      "Built v1 as a Next.js monolith with HeroUI, Prisma and PostgreSQL to move fast and validate the product.",
      "Auth with NextAuth: email and password, one-time codes and Google sign-in.",
      "Dashboard summaries for revenue collected, expenses paid, net profit and average monthly profit, with Recharts breakdowns by category.",
      "Invoices and quotations generated as PDFs, plus modules for inventory, production, purchases and loans.",
      "Planning v2 with a separate Go API, offline-friendly PWA and AI-assisted entry: type what happened and Rekordly drafts the record.",
    ],
    outcome:
      "Rekordly v1 covers the full day-to-day of a small business, and the waitlist is open at rekordly.com while v2 is in progress.",
    metrics: [],
  },
  {
    slug: "kwarafind",
    featured: true,
    title: "KwaraFind",
    tagline: "Find trusted local artisans in Ilorin. Built at Hack4Dev: Reimagining How Kwara is Seen, Mapped & Experienced.",
    category: "Hackathon Product",
    client: "Ilorin Hack4Dev",
    year: "2026",
    role: "Product Designer & Engineer",
    platforms: ["Web"],
    stack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS 4",
      "shadcn/ui",
      "Prisma",
      "NextAuth",
      "Zustand",
      "Zod",
      "Framer Motion",
      "Paystack",
    ],
    cover: img("kwarafind.png"),
    gallery: [img("kwarafind.png"), img("kwarafind-dashboard.png")],
    links: [{ label: "Live site", url: "https://kwarafind.vercel.app/" }],
    summary:
      "A discovery platform that helps people in Ilorin find, compare and contact verified tailors, electricians, carpenters and other artisans, area by area.",
    overview:
      "KwaraFind was my entry for the Ilorin Hack4Dev hackathon, themed around reimagining how Kwara is seen, mapped and experienced. Finding a good tailor or electrician in Ilorin still runs on word of mouth. KwaraFind maps artisans across Tanke, Taiwo Road, Fate, GRA and Basin, with verified profiles, portfolios, real reviews and direct WhatsApp or phone contact.",
    challenge:
      "Trust is the whole product. People need to know an artisan is real, nearby and good before they call, and artisans need to be found without paying a middleman. All of it had to be designed and built within a hackathon timeline.",
    approach: [
      "Search by service and by area, with quick suggestions like 'Tailor in Tanke' or 'Inverter install'.",
      "Verified artisan profiles with identity and shop-location checks, portfolios and reviews only from real customers.",
      "Service requests customers can post, and direct WhatsApp/phone contact with click tracking instead of escrow.",
      "A Pro plan for artisans wired to Paystack, plus an artisan dashboard.",
      "Built on Next.js 16, Tailwind 4 and shadcn/ui, with Prisma, NextAuth and seeded Ilorin data so the demo felt real on day one.",
    ],
    outcome:
      "A working, deployed product that shows how local services in Kwara could be discovered and trusted online.",
    metrics: [],
  },
  {
    slug: "virashare",
    featured: false,
    title: "ViraShare",
    tagline: "A task-and-rewards app where users earn points and redeem them for airtime or cash.",
    category: "Mobile App & Admin",
    client: "ViraShare",
    year: "", // TODO
    role: "Mobile & Frontend Engineer",
    platforms: ["iOS", "Android", "Web"],
    stack: ["React Native", "Expo", "React", "Tailwind CSS", "REST API"],
    cover: img("viraApp.jpg"),
    gallery: [img("viraApp.jpg"), img("ViraAdmin.jpg")],
    links: [{ label: "Web App", url: "https://app.virashare.io" }],
    summary:
      "A lightweight mobile app for completing tasks and earning points, plus the admin panel that oversees tasks, users and every redemption.",
    overview:
      "ViraShare rewards users for completing tasks. They earn points in the app and redeem them for airtime or cash. I built the mobile app with React Native and Expo, and the admin control panel and conversion-focused landing page with React and Tailwind CSS.",
    challenge:
      "Any product that pays out real value has to be trustworthy on both sides. Users need to see exactly how many points they have and what happened to every redemption, and the team needs full visibility to approve payouts and spot abuse. It also had to stay light and fast on budget devices.",
    approach: [
      "Kept the mobile app lightweight and focused: discover a task, complete it, watch points update, redeem.",
      "Made balances and redemption history clear so users always know where their points went.",
      "Built an admin panel to oversee tasks, users and point redemptions from one place.",
      "Designed and built the landing page with conversion in mind, turning visitors into installs.",
    ],
    outcome:
      "A complete earn-and-redeem loop: a simple app for users and the oversight tools the business needs to run it safely.",
    metrics: [],
  },
  {
    slug: "yourerrandguy",
    featured: true,
    title: "YourErrandGuy",
    tagline: "One app for food delivery, errands and laundry, backed by an API-driven admin.",
    category: "Mobile App & Admin",
    client: "YourErrandGuy",
    year: "", // TODO
    role: "Mobile & Frontend Engineer",
    platforms: ["iOS", "Android", "Web"],
    stack: ["React Native", "Expo", "React", "Tailwind CSS", "Figma", "REST API"],
    cover: img("errand-app.jpg"),
    gallery: [img("errand-app.jpg"), img("yourErrandGuy.jpg")],
    links: [{ label: "Website", url: "http://yourerrandsguy.com.ng" }],
    summary:
      "An all-in-one delivery and services app, an admin dashboard for managing services, and a landing page built for lead generation.",
    overview:
      "YourErrandGuy brings food delivery, errands and laundry into a single app. I designed flows in Figma and built the cross-platform mobile app with React Native and Expo, then built the admin dashboard and lead-generation landing page with React and Tailwind CSS.",
    challenge:
      "Three different services, each with its own ordering flow, had to feel like one coherent product, not three apps glued together. Operators also needed a single place to manage every service and order.",
    approach: [
      "Designed a shared ordering pattern in Figma that each service (food, errands, laundry) extends, so users learn the app once.",
      "Built the app on a strong API-driven backend so new services can be added without rebuilding the client.",
      "Created an admin dashboard for managing services and orders.",
      "Built a landing page focused on lead generation and user acquisition.",
    ],
    outcome:
      "A multi-service product that feels like one app, with the admin tooling to operate it.",
    metrics: [],
  },
  {
    slug: "payyourdues",
    featured: false,
    title: "PayYourDues",
    tagline: "A payment-management dashboard and landing page built for simplicity and speed.",
    category: "Web Application",
    client: "PayYourDues",
    year: "",
    role: "Frontend Engineer",
    platforms: ["Web"],
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    cover: img("payyourdues.jpg"),
    gallery: [img("payyourdues.jpg")],
    links: [{ label: "Website", url: "http://payurdues.com.ng" }],
    summary: "A clean dashboard and landing page for managing dues payments and keeping members engaged.",
    overview:
      "PayYourDues helps organisations collect and track dues. I built the admin dashboard and the public landing page.",
    challenge:
      "Payment tools have to be immediately understandable. Admins need to see who has paid at a glance, and members need to trust the page they're paying through.",
    approach: [
      "Kept the dashboard focused on the few numbers admins check every day.",
      "Built a fast, lightweight landing page with no heavy framework overhead.",
    ],
    outcome: "A simple, fast payments dashboard and a landing page that builds trust.",
    metrics: [],
  },
  {
    slug: "kunbis-unique-travels",
    featured: false,
    title: "Kunbis Unique Travels",
    tagline: "A corporate travel site for flight bookings and travel consultation.",
    category: "Full-Stack Website",
    client: "Kunbis Unique Travels",
    year: "",
    role: "Full-Stack Developer",
    platforms: ["Web"],
    stack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    cover: img("kunbis.jpg"),
    gallery: [img("kunbis.jpg")],
    links: [{ label: "Website", url: "https://kunbisunique.com" }],
    summary: "A corporate travel website for flight bookings and consultation services, built with PHP and a custom frontend.",
    overview:
      "Kunbis needed a professional online presence that turns visitors into booking and consultation enquiries. I designed and built the site end to end with PHP, MySQL and a custom frontend.",
    challenge: "Travel is a trust purchase. The site had to look credible and make enquiring effortless.",
    approach: [
      "Custom frontend design rather than a template, to match the brand.",
      "PHP and MySQL backend to handle bookings and consultation requests.",
    ],
    outcome: "A credible, custom-built travel site that the business owns and controls.",
    metrics: [],
  },
  {
    slug: "nemconsults",
    featured: false,
    title: "Nemconsults",
    tagline: "A student counselling and educational travel portal.",
    category: "Full-Stack Website",
    client: "Nemconsults",
    year: "",
    role: "Full-Stack Developer",
    platforms: ["Web"],
    stack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    cover: img("nemconsults.jpg"),
    gallery: [img("nemconsults.jpg")],
    links: [{ label: "Website", url: "https://nemconsults.com" }],
    summary: "An educational travel portal offering free consultations, a blog and university matching.",
    overview:
      "Nemconsults helps students study abroad. I built the portal with free consultation booking, a blog and university matching.",
    challenge:
      "Students arrive with very different questions. The portal had to guide each one toward the right next step.",
    approach: [
      "Consultation booking as the primary call to action throughout the site.",
      "A blog to answer common questions and bring in search traffic.",
      "University matching to help students shortlist options.",
    ],
    outcome: "A portal that educates students and turns them into consultations.",
    metrics: [],
  },
  {
    slug: "mm-charity-foundation",
    featured: false,
    title: "MM Charity Foundation",
    tagline: "A responsive NGO website for donations, missions and outreach.",
    category: "Full-Stack Website",
    client: "MM Charity Foundation",
    year: "",
    role: "Full-Stack Developer",
    platforms: ["Web"],
    stack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    cover: img("mmcharity.jpg"),
    gallery: [img("mmcharity.jpg")],
    links: [{ label: "Website", url: "https://mmcharityfoundation.org" }],
    summary: "An elegant, responsive charity website highlighting donations, missions and outreach activities.",
    overview:
      "MM Charity Foundation needed a site that tells its story and makes giving easy. I built a responsive website covering its mission, outreach activities and donations.",
    challenge: "Donors give to causes they believe in. The site had to communicate impact clearly and make donating simple.",
    approach: [
      "Story-led layout that puts missions and outreach front and centre.",
      "Clear donation paths on every page.",
    ],
    outcome: "A site that represents the foundation's work with the credibility it deserves.",
    metrics: [],
  },
  {
    slug: "swim-safe-yyc",
    featured: true,
    title: "Swim Safe YYC",
    tagline: "A WordPress website for a water-safety awareness and drowning-prevention initiative.",
    category: "WordPress Website",
    client: "Swim Safe YYC Initiative",
    year: "",
    role: "WordPress Developer",
    platforms: ["Web"],
    stack: ["WordPress", "Elementor"],
    cover: img("swim-safe-yyc.png"),
    gallery: [img("swim-safe-yyc.png")],
    links: [{ label: "Website", url: "https://swimsafeyyc.ca/" }],
    summary:
      "A website that shares the initiative's mission and story, and gives visitors one place for water-safety resources, donations, petitions and ways to get involved.",
    overview:
      "The Swim Safe YYC Initiative works to end preventable drowning through education, advocacy and community outreach. I built its WordPress website, with pages that communicate the initiative's mission, story and community impact.",
    challenge:
      "The site has to carry a personal story and practical action at the same time. Visitors arrive for different reasons, whether that's learning about water safety, downloading a resource, donating or signing a petition, and each of them needs to find their way quickly.",
    approach: [
      "Developed website pages to communicate the initiative's mission, story and community impact.",
      "Organized content covering water-safety education, downloadable resources, advocacy, donations, petitions and community participation.",
      "Created a structured website experience that helps visitors discover information, access resources and engage with the initiative.",
      "Focused on clear content presentation, navigation and responsive user experiences.",
    ],
    outcome:
      "A live website that gives the initiative a clear home for its story, its resources and the ways people can support its work.",
    metrics: [],
  },
  {
    slug: "360-quality-consulting",
    featured: false,
    title: "360 Quality Consulting",
    tagline: "Helping Canadian food businesses build strong food safety systems and maintain regulatory compliance.",
    category: "WordPress Website",
    client: "360 Quality Consulting",
    year: "",
    role: "WordPress Developer",
    platforms: ["Web"],
    stack: ["WordPress", "Elementor"],
    cover: img("360-quality-consulting.png"),
    gallery: [img("360-quality-consulting.png")],
    links: [{ label: "Website", url: "https://mrzhost.com/360qc/" }],
    summary:
      "A website for a food safety consultancy, presenting its services, its certification support and a clear way for food businesses to get in touch.",
    overview:
      "360 Quality Consulting helps food businesses meet global standards. I built its website in WordPress and Elementor, covering who the company is, the services it offers, why to choose it and how it supports certification.",
    challenge:
      "Food manufacturers choosing a compliance partner need to trust it quickly. The site had to explain specialist services plainly and lead visitors towards a consultation.",
    approach: [
      "Opened with a clear statement of who the company helps, with direct routes to get started or book a consultation.",
      "Organized the content around the company's services, reasons to choose it and certification support.",
      "Built the pages in Elementor so they stay responsive across screen sizes.",
    ],
    outcome: "A professional website that explains the company's food safety services and invites businesses to get in touch.",
    metrics: [],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
export const getProject = (slug) => projects.find((p) => p.slug === slug);
export const getNextProject = (slug) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};
