export const profileMeta = {
  name: "Bilal Haider",
  email: "syedbilal.haider049@gmail.com",
  socials: [
    { id: "email", href: "mailto:syedbilal.haider049@gmail.com" },
    { id: "github", href: "https://github.com/Syed-Bilal-Haider-Engineer" },
    { id: "medium", href: "https://medium.com/@BilalEngineer" },
    { id: "linkedin", href: "https://www.linkedin.com/in/bilalsoftwaredeveloper/" },
    { id: "leetcode", href: "https://leetcode.com/u/BilalEng/" },
    { id: "youtube", href: "https://www.youtube.com/@WebEngineering-r7n" },
  ],
} as const;

export const navItems = [
  { id: "projects", href: "/projects" },
  { id: "skills", href: "/#stack" },
  // { id: "courses", href: "/course" },
  { id: "writing", href: "/#writing" },
  { id: "experience", href: "/#experience" },
  { id: "opensource", href: "/#opensource" },
  { id: "hackathon", href: "/#hackathon" },
] as const;

export const skillGroups = [
  {
    id: "ai",
    items: [
      { id: "llm", icon: "huggingface" },
      { id: "rag", icon: "langchain" },
      { id: "assistant", icon: "openai" },
      { id: "prompt", icon: "openai" },
      { id: "gemini", icon: "googlegemini" },
      { id: "cursor", icon: "cursor" },
      { id: "copilot", icon: "githubcopilot" },
    ],
  },
  {
    id: "languages",
    items: [
      { id: "typescript", icon: "typescript" },
      { id: "javascript", icon: "javascript" },
      { id: "python", icon: "python" },
      { id: "sql", icon: "mysql" },
    ],
  },
  {
    id: "frontend",
    items: [
      { id: "html5", icon: "html5" },
      { id: "css3", icon: "css3" },
      { id: "react", icon: "react" },
      { id: "nextjs", icon: "nextdotjs" },
      { id: "mui", icon: "mui" },
      { id: "tailwind", icon: "tailwindcss" },
    ],
  },
  {
    id: "backend",
    items: [
      { id: "nodejs", icon: "nodedotjs" },
      { id: "express", icon: "express" },
      { id: "postgresql", icon: "postgresql" },
      { id: "mongodb", icon: "mongodb" },
      { id: "rest", icon: "openapiinitiative" },
      { id: "graphql", icon: "graphql" },
    ],
  },
  {
    id: "state",
    items: [
      { id: "redux", icon: "redux" },
      { id: "tanstack", icon: "reactquery" },
      { id: "graphql-api", icon: "graphql" },
      { id: "formdata", icon: "javascript" },
    ],
  },
  {
    id: "delivery",
    items: [
      { id: "actions", icon: "githubactions" },
      { id: "cicd", icon: "githubactions" },
      { id: "docker", icon: "docker" },
      { id: "vercel", icon: "vercel" },
    ],
  },
  {
    id: "ui",
    items: [
      { id: "responsive", icon: "css3" },
      { id: "figma", icon: "figma" },
      { id: "a11y", icon: "w3c" },
      { id: "perf", icon: "lighthouse" },
      { id: "components", icon: "react" },
    ],
  },
] as const;

export const writingItems = [
  {
    id: "ts-clean",
    icon: "typescript",
    date: "2026",
    href: "https://medium.com/@BilalEngineer/keeping-your-typescript-codebase-clean-eslint-prettier-and-the-rules-50eb4eefe6ae",
  },
  {
    id: "design-thinking",
    icon: "figma",
    date: "2026",
    href: "https://medium.com/@BilalEngineer/design-thinking-human-centered-design-hcd-d8927bed9062",
  },
  {
    id: "i18n",
    icon: "react",
    date: "2024",
    href: "https://medium.com/@BilalEngineer/how-to-integrate-localization-with-react-i18next-in-a-react-app-5eba75456203",
  },
  {
    id: "ts-omit",
    icon: "typescript",
    date: "2024",
    href: "https://medium.com/@BilalEngineer/remove-a-property-from-an-object-in-typescript-bf7763fdb62e",
  },
  {
    id: "react-tips",
    icon: "react",
    date: "2023",
    href: "https://medium.com/@BilalEngineer/mastering-react-top-5-tips-and-tricks-for-success-and-code-improvement-d7ad9afdd066",
  },
] as const;

export const experienceMeta = [
  {
    id: "wiseman",
    logo: "https://www.opennms.com/wp-content/uploads/2021/05/OpenNMS-Core.png",
    period: "01/2024 — 09/2024",
    linkHref: "https://www.opennms.com/",
  },
  {
    id: "cloudpacer",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGzD6xGTB5n0A/company-logo_200_200/company-logo_200_200/0/1724075900897/cloudpacer_logo?e=1788998400&v=beta&t=tAfQeDCFPOkq3lwZ5qiAyDPXmYjP9YSakCct4FGMzOw",
    period: "01/2023 — 12/2023",
    linkHref: "https://www.cloudpacer.com/",
  },
  {
    id: "bloctech",
    logo: "https://www.topdevelopers.co/upload/thumb_new/202107132140441190515802.png",
    period: "01/2022 — 12/2022",
    linkHref: "https://www.linkedin.com/company/bloctech-solution",
  },
] as const;

export const projectMeta = [
  {
    id: "planspiel",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "React Flow",
      "Gemini AI",
    ],
    href: "#",
  },
  {
    id: "databenken",
    tags: ["Next.js", "React", "PostGIS", "Node.js", "JWT"],
    href: "#",
  },
  {
    id: "fenners",
    tags: ["React", "TypeScript", "APIs", "Charts", "Python"],
    href: "https://github.com/Syed-Bilal-Haider-Engineer/Fenners-LBEnergy",
  },
  {
    id: "voiceybill",
    tags: ["React", "TypeScript", "RTK Query", "Node.js", "ESLint"],
    href: "https://github.com/voiceyBill/voiceyBill-web/pulls?q=is%3Apr+is%3Aclosed+Bilal",
  },
  {
    id: "monitoring",
    tags: ["React", "Material UI", "GraphQL", "TypeScript", "Charts"],
    href: "https://www.opennms.com/",
  },
  {
    id: "web3",
    tags: ["React", "Web3.js", "Tailwind CSS", "Material UI"],
    href: "https://www.linkedin.com/company/bloctech-solution",
  },
] as const;

export const educationMeta = [
  {
    id: "msc",
    logo: "https://autex.org/sites/default/files/portfolio-images/Members_Technische_Universitat_Chemnitz_900_675d.png",
    period: "2024 — Present",
    href: "https://www.tu-chemnitz.de/",
  },
  {
    id: "bsc",
    logo: "https://gcuf.edu.pk/wp-content/uploads/2024/12/logo-3.png",
    period: "2022",
    href: "https://gcuf.edu.pk/",
  },
] as const;

export const courseCardsMeta = [
  {
    id: "http-rest",
    href: "/course/http-rest",
    gradient: "linear-gradient(135deg, #0F766E, #2563EB 55%, #7C3AED)",
  },
  {
    id: "web-engineering",
    href: "/course/web-engineering",
    gradient: "linear-gradient(135deg, #4338CA, #7C3AED 55%, #DB2777)",
  },
  {
    id: "sse",
    href: "/course/sse",
    gradient: "linear-gradient(135deg, #0EA5E9, #22D3EE 55%, #4ADE80)",
  },
] as const;

export const hackathonMeta = [
  {
    id: "tum",
    logo: "https://www.tum.de/favicon.ico",
    period: "06/2026",
    orgHref: "https://www.tum.de/",
    projectHref: "https://github.com/Syed-Bilal-Haider-Engineer/Fenners-LBEnergy",
  },
] as const;

export const openSourceMeta = [
  {
    id: "voiceybill",
    logo: "https://www.voiceybill.com/logo.png",
    period: "01.03.2026",
    allPrsHref:
      "https://github.com/voiceyBill/voiceyBill-web/pulls?q=is%3Apr+is%3Aclosed+Bilal",
    contributions: [
      {
        id: "pr-170",
        href: "https://github.com/voiceyBill/voiceyBill-web/pull/170",
        number: "#170",
      },
      {
        id: "pr-64",
        href: "https://github.com/voiceyBill/voiceyBill-web/pull/64",
        number: "#64",
      },
      {
        id: "pr-54",
        href: "https://github.com/voiceyBill/voiceyBill-web/pull/54",
        number: "#54",
      },
      {
        id: "pr-49-web",
        href: "https://github.com/voiceyBill/voiceyBill-web/pull/49",
        number: "#49",
      },
      {
        id: "pr-83",
        href: "https://github.com/voiceyBill/voiceyBill-server/pull/83",
        number: "#83",
      },
      {
        id: "pr-120",
        href: "https://github.com/voiceyBill/voiceyBill-server/pull/120",
        number: "#120",
      },
      {
        id: "pr-49-server",
        href: "https://github.com/voiceyBill/voiceyBill-server/pull/49",
        number: "#49",
      },
    ],
  },
] as const;

export const httpRestCourse = {
  slug: "http-rest",
  modules: [
    {
      id: "http",
      lessons: [
        "what-is-http",
        "request-response",
        "methods",
        "status-codes",
        "headers",
      ],
    },
    {
      id: "rest-arch",
      lessons: [
        "constraints",
        "resources",
        "uniform-interface",
        "stateless-cache",
      ],
    },
    {
      id: "rest-api",
      lessons: [
        "design",
        "status-errors",
        "versioning",
        "auth",
        "pagination",
      ],
    },
    {
      id: "practice",
      lessons: ["checklist", "notes"],
    },
  ],
} as const;
