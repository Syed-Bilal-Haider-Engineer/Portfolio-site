// ────────────────────────────────────────────────────────────
// Edit everything here. This is the only file most people
// will ever need to touch to make the site their own.
// ────────────────────────────────────────────────────────────

export const profile = {
  name: "Bilal Haider",
  role: "Software Engineer",
  tagline: "full-stack · frontend Spieclist · AI Software Engineer",
  paragraphs: [
    "I build and write about product engineering, design systems, and developer tools for people who like shipping.",
    "Right now my work sits around design systems, developer tooling, and internal platform work. I like turning messy UI problems into components, docs, and patterns other engineers can reuse.",
    "I currently lead the design-systems team at Northwind Labs, and spend spare time on small open-source tools and side projects.",
    "This site is my home base: projects I ship, notes from building, and the occasional write-up when something's worth sharing.",
  ],
  email: "syedbilal.haider049@gmail.com",
  location: "Berlin, Germany",
  socials: [
    { label: "Email", href: "mailto:syedbilal.haider049@gmail.com" },
    { label: "GitHub", href: "https://github.com/" },
    { label: "Medium", href: "https://medium.com/@BilalEngineer" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/bilalsoftwaredeveloper/" },
    {label: "Leetcode", href:"https://leetcode.com/u/BilalEng/"},
    {label: "Youtube", href:"https://www.youtube.com/@WebEngineering-r7n"}
  ],
};

export const nav = [
  { label: "projects", href: "#work" },
  { label: "courses", href: "#courses" },
  { label: "blog", href: "#writing" },
  { label: "experience", href: "#experience" },
  { label: "github", href: "https://github.com/Syed-Bilal-Haider-Engineer" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bilalsoftwaredeveloper/" },
];

export const heroActions = [
  { label: "Read writing", href: "#writing", style: "solid" as const },
  { label: "Projects", href: "#work", style: "outline" as const },
  { label: "Email", href: "mailto:hello@alexrivera.dev", style: "outline" as const },
];

export const experience = [
  {
    icon: "🧩",
    role: "Senior Product Engineer",
    badge: "Lead",
    org: "Northwind Labs",
    location: "Remote",
    period: "2024 — Present",
    description:
      "Lead engineer on the design-systems team. Rebuilt the shared component library from the ground up and cut new-feature build time by roughly a third across four product teams.",
    bullets: [
      "Owns the design-system roadmap and component API decisions",
      "Rebuilt the token pipeline shared across web and native",
      "Mentors two engineers rotating through the platform team",
    ],
    link: { label: "northwindlabs.dev", href: "#" },
  },
  {
    icon: "📊",
    role: "Frontend Engineer",
    badge: null,
    org: "Palette Studio",
    location: "Berlin, DE",
    period: "2022 — 2024",
    description:
      "Shipped customer-facing dashboards for a B2B analytics product used by 200+ teams, and led the migration from a class-component codebase to hooks.",
    bullets: [],
    link: null,
  },
  {
    icon: "🛠️",
    role: "Freelance Developer",
    badge: null,
    org: "Self-employed",
    location: "Remote",
    period: "2020 — 2022",
    description:
      "Built marketing sites and small web apps for startups and independent studios, from first client call through launch and handoff.",
    bullets: [],
    link: null,
  },
];

export const projects = [
  {
    category: "SAAS",
    title: "Fieldnote",
    description:
      "A minimal note-taking app for researchers, with offline-first sync and citation-aware search. Used daily by a few dozen research teams.",
    stats: ["2,300 monthly users", "12k npm downloads"],
    tags: ["Next.js", "Postgres", "Tailwind"],
    link: { label: "Website", href: "#" },
  },
  {
    category: "OPEN SOURCE",
    title: "Loom Kit",
    description:
      "An open-source component library used by three small design teams to ship consistent UI faster, with accessibility baked into every primitive.",
    stats: ["640 stars", "28 contributors"],
    tags: ["React", "TypeScript", "Storybook"],
    link: { label: "GitHub", href: "#" },
  },
  {
    category: "SELF-HOSTED",
    title: "Nightly",
    description:
      "A self-hosted status page and uptime monitor built for indie developers who don't want a monthly subscription.",
    stats: ["Used by 40+ teams"],
    tags: ["Node.js", "Docker", "SQLite"],
    link: { label: "Download", href: "#" },
  },
];

export const education = [
  {
    icon: "🎓",
    title: "B.Sc. Computer Science",
    org: "Technical University of Munich",
    location: "Munich, DE",
    period: "2016 — 2020",
    description:
      "Focused on distributed systems and human-computer interaction. Thesis on low-latency state sync for collaborative editors.",
  },
  {
    icon: "📜",
    title: "AWS Certified Solutions Architect",
    org: "Amazon Web Services",
    location: "",
    period: "2022",
    description: "",
  },
];

export const courses = [
  {
    title: "Modern Design Systems From Scratch",
    gradient: "linear-gradient(135deg, #4338CA, #7C3AED 55%, #DB2777)",
    badges: ["FREE COURSE", "Beginner → Advanced"],
    description:
      "A 10-lesson, 60-topic course on how design systems actually work — tokens and primitives through component APIs, theming, documentation, and shipping a library real teams adopt.",
    stats: [
      { value: "8", label: "Modules" },
      { value: "10", label: "Lessons" },
      { value: "60", label: "Topics" },
      { value: "~4 h", label: "Read time" },
    ],
  },
  {
    title: "Shipping Fast with Next.js",
    gradient: "linear-gradient(135deg, #0EA5E9, #22D3EE 55%, #4ADE80)",
    badges: ["FREE COURSE", "Intermediate"],
    description:
      "A practical course on the App Router, server components, and the deployment decisions that actually matter when you're trying to ship, not just demo.",
    stats: [
      { value: "6", label: "Modules" },
      { value: "9", label: "Lessons" },
      { value: "42", label: "Topics" },
      { value: "~3 h", label: "Read time" },
    ],
  },
];

export const skills = {
  Languages: ["TypeScript", "JavaScript", "Python", "SQL"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "Vite"],
  "Backend & data": ["Node.js", "PostgreSQL", "REST APIs", "Redis"],
  Tooling: ["Docker", "Git", "Figma", "Vercel"],
};

export const writing = [
  { title: "Notes on building a fast component library", date: "2026-06-29" },
  { title: "Why I moved my side projects off subscriptions", date: "2025-11-14" },
  { title: "A small case for boring technology", date: "2025-08-02" },
];
