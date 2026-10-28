// Site-wide settings. Edit these in one place.
export const site = {
  name: "Sulaimon Yusuf",
  handle: "codewithemperor",
  role: "Full-Stack & Mobile Engineer",
  url: "https://codewithemperor.github.io",
  email: "codewithemperor@gmail.com",
  phone: "+234 805 419 4279",
  whatsapp: "https://wa.me/message/U7TZMCQ57NGPJ1",
  calendly: "https://calendly.com/codewithemperor/schedule-a-call",
  // Your old site said "Lagos", your GitHub says "Ibadan". Pick one.
  location: "Lagos, Nigeria",
  available: true,
  // TODO: drop your CV into /public (e.g. /public/Sulaimon_Yusuf_CV.pdf) and set the path here.
  // The "Résumé" buttons only show once this is set.
  resumeUrl: "",
  formspree: "https://formspree.io/f/mzzvpywb",
  description:
    "Sulaimon Yusuf is a full-stack and mobile engineer building production web and mobile products with React, React Native, Node.js and TypeScript.",
};

export const socials = [
  { name: "GitHub", url: "https://github.com/codewithemperor" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/codewithemperor/" },
  { name: "X / Twitter", url: "https://x.com/codewithemperor" },
  { name: "Instagram", url: "https://www.instagram.com/codewithemperor/" },
];

export const services = [
  {
    title: "Mobile Product Build",
    description:
      "A cross-platform iOS & Android app taken from idea or Figma file to store-ready build.",
    includes: [
      "React Native / Expo",
      "API integration & auth",
      "Real-time & location features",
      "Play Store & App Store release",
    ],
  },
  {
    title: "Full-Stack Web Platform",
    description:
      "Admin dashboards, internal tools and customer-facing web apps with the backend to power them.",
    includes: [
      "React / Next.js frontends",
      "Node.js & REST APIs",
      "MongoDB / MySQL data modelling",
      "Role-based admin panels",
    ],
  },
  {
    title: "Embedded Engineer",
    description:
      "I join your team as an extra engineer: shipping features, fixing what's fragile, and reviewing code.",
    includes: [
      "Contract or full-time",
      "Works inside your sprint process",
      "Clear async communication",
      "Ownership from ticket to release",
    ],
  },
];

export const stack = [
  { group: "Mobile", items: ["React Native", "Expo", "Expo Router", "Zustand", "Redux Toolkit"] },
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { group: "Backend", items: ["Node.js", "NestJS", "Express", "Socket.IO", "REST APIs", "PHP"] },
  { group: "Data", items: ["PostgreSQL", "Prisma", "MongoDB", "Redis", "MySQL", "Firebase"] },
  { group: "Design & Tools", items: ["Figma", "Photoshop", "Illustrator", "Git & GitHub", "Jest"] },
];

// About-section progress bars. These are self-ratings: adjust them to taste.
export const skills = [
  { name: "React Native", value: 95, color: "bg-sky" },
  { name: "React / Next.js", value: 95, color: "bg-lime" },
  { name: "Node.js", value: 85, color: "bg-blush" },
  { name: "TypeScript", value: 85, color: "bg-lavender" },
  { name: "UI Design / Figma", value: 90, color: "bg-mint" },
  { name: "SQL & NoSQL", value: 80, color: "bg-butter" },
];

export const principles = [
  {
    title: "The user comes first.",
    body: "Before writing code I ask who is going to use this, on what phone, on what network. A driver accepting a trip on a cheap Android phone has very different needs from an admin on a laptop.",
  },
  {
    title: "\u201cIt works\u201d is not the finish line.",
    body: "Loading states, empty states, failed requests, slow connections. The happy path is half the job; the rest is what makes people trust the product.",
  },
  {
    title: "Build for the next engineer.",
    body: "Readable code, predictable folder structure and sensible naming, so whoever touches it next, including me in six months, can move fast without breaking things.",
  },
  {
    title: "Design and engineering are one job.",
    body: "I started as a graphic designer in 2010. That background means I can read a design file properly, catch what's missing, and build interfaces that feel finished.",
  },
];

export const journey = [
  {
    year: "2026",
    title: "Full-Stack Engineer",
    org: "Achievers Cooperative",
    body: "Built the cooperative's whole platform for 30+ members: a NestJS + PostgreSQL API, an installable member PWA for savings, loans and wallets, and the admin portal.",
  },
  {
    year: "2024 — Now",
    title: "Full-Stack & Mobile Engineer",
    org: "Kero Technologies",
    body: "Building the Kero ride-hailing platform: rider and driver apps in React Native and Expo with live maps, in-app calls and payments, the Node.js / MongoDB real-time backend, and the operations dashboard.",
  },
  {
    year: "2023 — Now",
    title: "Full-Stack & Mobile Engineer",
    org: "Independent / Freelance",
    body: "Building mobile and web products for rewards, delivery and payments businesses, plus my own product, Rekordly.",
  },
  {
    year: "2024",
    title: "IT Support (NYSC)",
    org: "Ministry of Communication, Kwara State",
    body: "Technical support, systems maintenance, digital documents and graphics during national service.",
  },
  {
    year: "2023",
    title: "HND, Computer Science",
    org: "Adeseun Ogundoyin Polytechnic",
    body: "Higher National Diploma focused on software engineering and system design.",
  },
  {
    year: "2021",
    title: "Backend Developer Intern",
    org: "Rotosoft Technologies, Eruwa",
    body: "Built REST APIs with Node.js and PHP, managed databases and wired APIs into React frontends.",
  },
  {
    year: "2017",
    title: "Frontend Developer Intern",
    org: "Techathom, Ibadan",
    body: "Built responsive interfaces with React, HTML and Bootstrap alongside designers and backend engineers.",
  },
  {
    year: "2010",
    title: "Graphic Designer",
    org: "Assalam Multimedia Business Center, Ibadan",
    body: "Where it started: logos, flyers and UI elements in Photoshop, Illustrator and CorelDRAW.",
  },
];
