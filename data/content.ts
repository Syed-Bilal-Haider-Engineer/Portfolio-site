// ────────────────────────────────────────────────────────────
// Edit everything here. This is the only file most people
// will ever need to touch to make the site their own.
// ────────────────────────────────────────────────────────────

export const profile = {
  name: "Bilal Haider",
  role: "Software Engineer",
  tagline: "full-stack · frontend specialist · AI software engineer",

  paragraphs: [
    "I’m a Software Engineer with nearly 3 years of experience building web products across frontend and backend engineering.",

    "Experience to turned complex product requirements into clear, reliable interfaces and scalable frontend and backend services. My experience spans React, Next.js, TypeScript, Node.js, PostgreSQL, MongoDB, REST APIs, GraphQL, Docker, CI/CD, and AI-powered applications.",

    "Currently, I’m pursuing an M.Sc. in Web Engineering at Technische Universität Chemnitz, where I’m exploring modern web architecture, software services, advanced data management, and AI-assisted development.",
  ],

  email: "syedbilal.haider049@gmail.com",

  location: "Chemnitz, Germany",

  socials: [
    {
      label: "Email",
      href: "mailto:syedbilal.haider049@gmail.com",
    },
    {
      label: "GitHub",
      href: "https://github.com/Syed-Bilal-Haider-Engineer",
    },
    {
      label: "Medium",
      href: "https://medium.com/@BilalEngineer",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/bilalsoftwaredeveloper/",
    },
    {
      label: "Leetcode",
      href: "https://leetcode.com/u/BilalEng/",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@WebEngineering-r7n",
    },
  ],
};

// ────────────────────────────────────────────────────────────
// Navigation
// ────────────────────────────────────────────────────────────

export const nav = [
  {
    label: "Projects",
    href: "#work",
  },
  {
    label: "Courses",
    href: "#courses",
  },
  {
    label: "Blog",
    href: "#writing",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Hackathon",
    href: "#hackathon",
  },
  {
    label: "Github",
    href: "https://github.com/Syed-Bilal-Haider-Engineer",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bilalsoftwaredeveloper/",
  },
];

// ────────────────────────────────────────────────────────────
// Hero Actions
// ────────────────────────────────────────────────────────────

export const heroActions = [
  {
    label: "Read writing",
    href: "#writing",
    style: "solid" as const,
  },
  {
    label: "Projects",
    href: "#work",
    style: "outline" as const,
  },
  {
    label: "Email",
    href: "mailto:syedbilal.haider049@gmail.com",
    style: "outline" as const,
  },
];

// ────────────────────────────────────────────────────────────
// Experience
// ────────────────────────────────────────────────────────────

export const experience = [
  {
    logo: "https://www.opennms.com/wp-content/uploads/2021/05/OpenNMS-Core.png",

    role: "Software Engineer",

    badge: null,

    org: "Wiseman Innovation",

    location: "United States · Remote",

    period: "01/2024 — 09/2024",

    description:
      "Worked on OpenNMS, a network monitoring platform, building scalable frontend functionality and improving data-heavy monitoring dashboards.",

    bullets: [
      "Reduced GraphQL API latency by 40% through reusable query patterns, intelligent caching, and optimized request orchestration across OpenNMS monitoring dashboards.",

      "Built reusable React and Material UI components with interactive charts, transforming complex network telemetry into analytics that contributed to a 15% increase in user retention.",

      "Reviewed 20+ pull requests, standardized TypeScript best practices, documented reusable UI architecture, and helped minimize frontend regression defects.",

      "Delivered scalable frontend functionality as part of a cross-functional Agile team of 25+ engineers.",
    ],

    link: {
      label: "OpenNMS",
      href: "https://www.opennms.com/",
    },
  },

  {
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGzD6xGTB5n0A/company-logo_200_200/company-logo_200_200/0/1724075900897/cloudpacer_logo?e=1788998400&v=beta&t=tAfQeDCFPOkq3lwZ5qiAyDPXmYjP9YSakCct4FGMzOw",

    role: "Software Engineer",

    badge: null,

    org: "CloudPacer",

    location: "Lahore, Pakistan",

    period: "01/2023 — 12/2023",

    description:
      "Built end-to-end MERN features for customer-facing applications, working across React interfaces, Node.js services, MongoDB data models, APIs, dashboards, and payment workflows.",

    bullets: [
      "Delivered scalable React interfaces, Node.js services, and MongoDB data models for customer-facing applications.",

      "Built interactive dashboards and reusable visualization components that simplified complex business metrics and supported data-driven decision-making.",

      "Designed and integrated RESTful APIs with standardized request validation, error handling, and data serialization.",

      "Automated recurring backend workflows with cron jobs, reducing manual operational processes.",

      "Implemented secure Stripe payment integration for checkout, payment confirmation, and transaction processing.",

      "Improved MongoDB performance through schema design, indexing, and query optimization.",
    ],

    link: {
      label: "CloudPacer",
      href: "https://www.cloudpacer.com/",
    },
  },

  {
    logo: "https://www.topdevelopers.co/upload/thumb_new/202107132140441190515802.png",

    role: "Junior Software Engineer",

    badge: null,

    org: "Bloctech Solutions",

    location: "Faisalabad, Pakistan",

    period: "01/2022 — 12/2022",

    description:
      "Built responsive React interfaces from Figma designs and developed Web3 functionality including NFT minting, staking, and wallet integration.",

    bullets: [
      "Converted Figma designs into responsive, pixel-perfect React components for desktop and mobile devices.",

      "Developed Web3 features including NFT minting, staking, and wallet integration using modern blockchain libraries.",

      "Worked with React, Material UI, Tailwind CSS, Web3.js, and blockchain technologies.",
    ],

    link: {
      label: "Bloctech Solutions",
      href: "https://www.linkedin.com/company/bloctech-solution",
    },
  },
];

// ────────────────────────────────────────────────────────────
// Projects
// ────────────────────────────────────────────────────────────

export const projects = [
  {
    category: "UNIVERSITY PROJECT",

    title: "PlanSpiel",

    description:
      "A Web Architecture Model (WAM) diagram editor where users can create, edit, generate, and save architecture diagrams through an interactive visual workspace.",

    stats: [
      "AI-powered diagram generation",
      "React Flow editor",
    ],

    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "React Flow",
      "Gemini AI",
    ],

    link: {
      label: "Project",
      href: "#",
    },
  },

  {
    category: "GEOSPATIAL",

    title: "DataBenken",

    description:
      "A geospatial web platform for exploring and analyzing location-based datasets through an interactive mapping interface.",

    stats: [
      "GeoJSON",
      "PostGIS",
      "JWT Authentication",
    ],

    tags: [
      "Next.js",
      "React",
      "PostGIS",
      "Node.js",
      "JWT",
    ],

    link: {
      label: "Project",
      href: "#",
    },
  },
];

// ────────────────────────────────────────────────────────────
// Education
// ────────────────────────────────────────────────────────────

export const education = [
  {
    logo: "https://autex.org/sites/default/files/portfolio-images/Members_Technische_Universitat_Chemnitz_900_675d.png",

    title: "M.Sc. Web Engineering",

    org: "Technische Universität Chemnitz",

    location: "Chemnitz, Germany",

    period: "2024 — Present",

    description:
      "Relevant coursework includes Current Trends of Web Engineering, Software Service Engineering, and Advanced Data Management.",

    link: {
      label: "TU Chemnitz",
      href: "https://www.tu-chemnitz.de/",
    },
  },

  {
    logo: "https://gcuf.edu.pk/wp-content/uploads/2024/12/logo-3.png",

    title: "B.Sc. Computer Science",

    org: "Government College University Faisalabad",

    location: "Faisalabad, Pakistan",

    period: "Graduated 2022",

    description:
      "Relevant coursework included Web Engineering, Object-Oriented Programming, Data Structures & Algorithms, and Database Management.",

    link: {
      label: "GCUF",
      href: "https://gcuf.edu.pk/",
    },
  },
];

// ────────────────────────────────────────────────────────────
// Courses
// ────────────────────────────────────────────────────────────

export const courses = [
  {
    title: "Web Engineering",

    gradient:
      "linear-gradient(135deg, #4338CA, #7C3AED 55%, #DB2777)",

    badges: [
      "UNIVERSITY COURSE",
      "Web Engineering",
    ],

    description:
      "Notes, explanations, and practical material around modern web architecture, Web Services, REST, SOAP, performance, accessibility, WebAssembly, and emerging web technologies.",

    stats: [
      {
        value: "MS",
        label: "Program",
      },
      {
        value: "Web",
        label: "Engineering",
      },
      {
        value: "TU",
        label: "Chemnitz",
      },
    ],
  },

  {
    title: "Software Service Engineering",

    gradient:
      "linear-gradient(135deg, #0EA5E9, #22D3EE 55%, #4ADE80)",

    badges: [
      "UNIVERSITY COURSE",
      "Software Services",
    ],

    description:
      "Practical and theoretical notes covering Web Architecture, WWW fundamentals, SOA, Web Services, REST, SOAP, WSDL, middleware, message passing, and service-oriented systems.",

    stats: [
      {
        value: "MS",
        label: "Program",
      },
      {
        value: "Web",
        label: "Services",
      },
      {
        value: "TU",
        label: "Chemnitz",
      },
    ],
  },
];

// ────────────────────────────────────────────────────────────
// Skills
// ────────────────────────────────────────────────────────────

export const skills = {
  Languages: [
    "TypeScript",
    "JavaScript",
    "Python",
    "SQL",
  ],

  Frontend: [
    "HTML5",
    "CSS3",
    "React.js",
    "Next.js",
    "Material UI",
    "Tailwind CSS",
  ],

  "Backend & Data": [
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "REST APIs",
    "GraphQL",
  ],

  "State & API": [
    "Redux Toolkit",
    "TanStack Query",
    "GraphQL API Integration",
    "FormData",
  ],

  "AI Development": [
    "Prompt Engineering",
    "LLM API Integration",
    "Gemini AI",
    "Cursor",
    "GitHub Copilot",
  ],

  "Testing & Delivery": [
    "GitHub Actions",
    "CI/CD",
    "Docker",
    "Vercel",
  ],

  "UI Engineering": [
    "Responsive UI",
    "Figma",
    "Accessibility",
    "Performance Optimization",
    "Component Architecture",
  ],
};

// ────────────────────────────────────────────────────────────
// Hackathon
// ────────────────────────────────────────────────────────────

export const hackathon = [
  {
    logo: "https://www.tum.de/favicon.ico",

    title: "Fenners-LBEnergy - 2nd Place — TUM × LB.systems GmbH Hackathon",

    org: "Technische Universität München",

    location: "Munich, Germany",

    period: "06/2026",

    description:
      "Built an Model physics-informed thermal model that determines the exact moment heat pumps should start preheating. The system uses a grey-box RC model calibrated for each building from its own telemetry, making it applicable to different building types, from canvas tents to concrete lecture halls.",

    bullets: [
      "Integrated APIs to connect the dashboard with the underlying thermal-model.",

      "Built dashboard functionality and interactive charts to visualize building data, thermal behavior, and model results.",

      "Cleaned, prepared, and validated data to ensure reliable inputs for analysis and visualization.",

      "Researched AI models and evaluated potential approaches for integrating AI into the solution.",

      "Investigated and validated AI-generated outputs and identified potential issues during development.",

      "Contributed to technical documentation, testing, and API integration throughout the project.",

      "Collaborated with an international team to develop and present the final solution, achieving 2nd place.",
    ],

    organizationLink: {
      label: "TUM",
      href: "https://www.tum.de/",
    },

    link: {
      label: "View Project",
      href: "https://github.com/Syed-Bilal-Haider-Engineer/Fenners-LBEnergy",
    },
  },
];

// ────────────────────────────────────────────────────────────
// Writing / Blog
// ────────────────────────────────────────────────────────────

export const writing = [
  {
    title:
      "Keeping Your TypeScript Codebase Clean: ESLint, Prettier, and the Rules",

    date: "2026",

    link:
      "https://medium.com/@BilalEngineer/keeping-your-typescript-codebase-clean-eslint-prettier-and-the-rules-50eb4eefe6ae",
  },

  {
    title:
      "Design Thinking & Human-Centered Design (HCD)",

    date: "2026",

    link:
      "https://medium.com/@BilalEngineer/design-thinking-human-centered-design-hcd-d8927bed9062",
  },

  {
    title:
      "How to Integrate Localization with React-i18next in a React App",

    date: "2024",

    link:
      "https://medium.com/@BilalEngineer/how-to-integrate-localization-with-react-i18next-in-a-react-app-5eba75456203",
  },

  {
    title:
      "Remove a Property from an Object in TypeScript",

    date: "2024",

    link:
      "https://medium.com/@BilalEngineer/remove-a-property-from-an-object-in-typescript-bf7763fdb62e",
  },

  {
    title:
      "Mastering React: Top 5 Tips and Tricks for Success and Code Improvement",

    date: "2023",

    link:
      "https://medium.com/@BilalEngineer/mastering-react-top-5-tips-and-tricks-for-success-and-code-improvement-d7ad9afdd066",
  },
];

export const openSource = [
  {
    logo: "https://www.voiceybill.com/logo.png",

    title: "VoiceyBill",

    project: "Open source",

    type: "Contribution",

    period: "01.03.2026",

    description:
      "Contributed to VoiceyBill across both the web and server repositories, working on UI fixes, report workflows, API endpoints, database schema improvements, loading states, and developer tooling.",

    contributions: [
      {
        title:
          "fix: Fixed category dropdown menu stays open when you click outside of it",
        href: "https://github.com/voiceyBill/voiceyBill-web/pull/170",
        number: "#170",
      },

      {
        title:
          "fix: The skeleton height not match the component size",
        href: "https://github.com/voiceyBill/voiceyBill-web/pull/64",
        number: "#64",
      },

      {
        title:
          "feat(resend-report): Add resend report email action with RTK mutation and row-level loading",
        href: "https://github.com/voiceyBill/voiceyBill-web/pull/54",
        number: "#54",
      },

      {
        title:
          "fix(web): Reduce table skeleton rows to improve loading UX",
        href: "https://github.com/voiceyBill/voiceyBill-web/pull/49",
        number: "#49",
      },

      {
        title:
          "fix(report-schema): Update report schema and add startDate/endDate fields",
        href: "https://github.com/voiceyBill/voiceyBill-server/pull/83",
        number: "#83",
      },

      {
        title:
          "chore: Configure ESLint with TypeScript, import order, Node.js, and Prettier integration",
        href: "https://github.com/voiceyBill/voiceyBill-server/pull/120",
        number: "#120",
      },

      {
        title:
          "feat(/report/resend): Implement resend report email endpoint with error handling and email data transformation",
        href: "https://github.com/voiceyBill/voiceyBill-server/pull/49",
        number: "#49",
      },
    ],

    link: {
      label: "View all PRs",
      href: "https://github.com/voiceyBill/voiceyBill-web/pulls?q=is%3Apr+is%3Aclosed+Bilal",
    },
  },
];