export const de = {
  meta: {
    title: "Bilal Haider — Softwareentwickler",
    description:
      "Softwareentwickler mit rund 3 Jahren Erfahrung. Standort Chemnitz. Offen für Stellen in Deutschland und der EU.",
  },
  nav: {
    projects: "Projekte",
    skills: "Kenntnisse",
    courses: "Kurse",
    writing: "Artikel",
    experience: "Erfahrung",
    opensource: "Open Source",
    hackathon: "Hackathon",
    menu: "Menü",
    backHome: "Zur Startseite",
  },
  socials: {
    email: "E-Mail",
    github: "GitHub",
    medium: "Medium",
    linkedin: "LinkedIn",
    leetcode: "LeetCode",
    youtube: "YouTube",
  },
  hero: {
    tagline: "Full-Stack · Frontend-Spezialist · KI-Softwareentwickler",
    name: "Bilal Haider",
    role: "Softwareentwickler",
    location: "Berlin, Deutschland",
    availability: "Offen für Vollzeitstellen in Deutschland & der EU",
    years: "≈ 3 Jahre Erfahrung",
    highlights: [
      "TypeScript · React · Next.js · Node.js",
      "LLM · RAG · AI assistant · Prompt engineering · AI development",
      "API · REST APIs · GraphQL"
    ],
    paragraphs: [
      "Ich bin Softwareentwickler mit rund 3 Jahren Erfahrung in der Entwicklung von Webprodukten — Frontend und Backend.",
      "Ich setze komplexe Produktanforderungen in klare Oberflächen und skalierbare Dienste um. Mein Stack umfasst React, Next.js, TypeScript, Node.js, PostgreSQL, MongoDB, REST APIs, GraphQL, Docker, CI/CD und KI-gestützte Anwendungen.",
      "Ich studiere M.Sc. Web Engineering an der Technischen Universität Chemnitz mit Fokus auf moderne Webarchitektur, Software Services, Datenmanagement und KI-gestützte Entwicklung.",
    ],
    actions: {
      writing: "Artikel lesen",
      projects: "Projekte",
      email: "E-Mail",
      course: "Kurse",
    },
  },
  sections: {
    experience: "erfahrung",
    opensource: "open source",
    hackathon: "hackathon",
    projects: "projekte",
    education: "ausbildung",
    courses: "kurse",
    stack: "kenntnisse",
    writing: "artikel",
    contact: "kontakt",
  },
  experience: {
    wiseman: {
      role: "Software Engineer",
      org: "Wiseman Innovation",
      location: "USA · Remote",
      description:
        "Arbeit an OpenNMS, einer Netzwerk-Monitoring-Plattform: skalierbares Frontend und datenintensive Dashboards.",
      bullets: [
        "GraphQL-API-Latenz um 40 % gesenkt durch wiederverwendbare Query-Muster, Caching und orchestrierte Requests in den OpenNMS-Dashboards.",
        "Wiederverwendbare React- und Material-UI-Komponenten mit Charts gebaut; komplexe Telemetrie in Analytics übersetzt — Beitrag zu 15 % höherer Nutzerbindung.",
        "20+ Pull Requests reviewed, TypeScript-Praktiken standardisiert, UI-Architektur dokumentiert und Frontend-Regressionen reduziert.",
        "Skalierbares Frontend in einem agilen Team mit 25+ Engineers geliefert.",
      ],
      link: "OpenNMS",
    },
    cloudpacer: {
      role: "Software Engineer",
      org: "CloudPacer",
      location: "Lahore, Pakistan",
      description:
        "End-to-End-MERN-Features für kundennahe Anwendungen: React, Node.js, MongoDB, APIs, Dashboards und Zahlungsabläufe.",
      bullets: [
        "Skalierbare React-Oberflächen, Node.js-Services und MongoDB-Modelle für kundennahe Anwendungen geliefert.",
        "Interaktive Dashboards und Visualisierungen für komplexe Geschäftskennzahlen gebaut.",
        "RESTful APIs mit Validierung, Fehlerbehandlung und Serialisierung entworfen und integriert.",
        "Wiederkehrende Backend-Workflows mit Cron-Jobs automatisiert.",
        "Sichere Stripe-Integration für Checkout und Transaktionen umgesetzt.",
        "MongoDB-Performance durch Schema, Indizes und Query-Optimierung verbessert.",
      ],
      link: "CloudPacer",
    },
    bloctech: {
      role: "Junior Software Engineer",
      org: "Bloctech Solutions",
      location: "Faisalabad, Pakistan",
      description:
        "Responsive React-Oberflächen aus Figma und Web3-Funktionen: NFT-Minting, Staking und Wallet-Integration.",
      bullets: [
        "Figma-Designs in responsive React-Komponenten für Desktop und Mobil umgesetzt.",
        "Web3-Features inkl. NFT-Minting, Staking und Wallet-Integration entwickelt.",
        "Gearbeitet mit React, Material UI, Tailwind CSS, Web3.js und Blockchain-Technologien.",
      ],
      link: "Bloctech Solutions",
    },
  },
  projects: {
    planspiel: {
      category: "Universitätsprojekt",
      title: "PlanSpiel",
      description:
        "Ein Editor für Web-Architecture-Model-(WAM)-Diagramme: erstellen, bearbeiten, generieren und speichern in einem interaktiven Workspace.",
      stats: ["KI-gestützte Diagrammgenerierung", "React-Flow-Editor"],
      link: "Projekt",
    },
    databenken: {
      category: "Geospatial",
      title: "DataBenken",
      description:
        "Eine geospatiale Webplattform zum Erkunden und Analysieren standortbezogener Datensätze über eine interaktive Karte.",
      stats: ["GeoJSON", "PostGIS", "JWT-Authentifizierung"],
      link: "Projekt",
    },
    fenners: {
      category: "Hackathon",
      title: "Fenners-LBEnergy",
      description:
        "Physik-informiertes Thermomodell und Dashboard, das bestimmt, wann Wärmepumpen mit dem Vorheizen starten — kalibriert pro Gebäude aus Telemetrie.",
      stats: ["2. Platz · TUM", "APIs & Charts", "Grey-Box-RC-Modell"],
      link: "GitHub",
    },
    voiceybill: {
      category: "Open Source",
      title: "VoiceyBill",
      description:
        "Open-Source-Beiträge in Web- und Server-Repos: Report-Workflows, API-Endpunkte, Schema, Ladezustände und TypeScript-Tooling.",
      stats: ["Gemergte PRs", "Web + Server", "RTK Query"],
      link: "PRs",
    },
    monitoring: {
      category: "Produkt",
      title: "OpenNMS-Dashboards",
      description:
        "Datenintensives Netzwerk-Monitoring-UI: wiederverwendbare React- und Material-UI-Komponenten, GraphQL-Caching und Charts für Telemetrie.",
      stats: ["GraphQL", "40 % weniger Latenz", "Wiederverwendbares UI"],
      link: "OpenNMS",
    },
    web3: {
      category: "Web3",
      title: "NFT- & Wallet-Flows",
      description:
        "Responsive React-Oberflächen aus Figma mit NFT-Minting, Staking und Wallet-Integration über Web3.js.",
      stats: ["Minting", "Staking", "Wallet-Connect"],
      link: "Unternehmen",
    },
  },
  education: {
    msc: {
      title: "M.Sc. Web Engineering",
      org: "Technische Universität Chemnitz",
      location: "Chemnitz, Deutschland",
      description:
        "u. a. Current Trends of Web Engineering, Software Service Engineering und Advanced Data Management.",
      link: "TU Chemnitz",
    },
    bsc: {
      title: "B.Sc. Informatik",
      org: "Government College University Faisalabad",
      location: "Faisalabad, Pakistan",
      description:
        "u. a. Web Engineering, objektorientierte Programmierung, Datenstrukturen & Algorithmen und Datenbanken.",
      link: "GCUF",
    },
  },
  courses: {
    "http-rest": {
      title: "HTTP, REST-Architektur & REST APIs",
      badges: ["Kurs", "Notizen ergänzen"],
      description:
        "Eine strukturierte Seite zu HTTP, REST-Constraints und REST-API-Design. Kurs öffnen und jede Lektion ausfüllen.",
      stats: [
        { value: "4", label: "Module" },
        { value: "HTTP", label: "Grundlagen" },
        { value: "REST", label: "Architektur" },
      ],
      open: "Kurs öffnen",
    },
    "web-engineering": {
      title: "Web Engineering",
      badges: ["Universitätskurs", "Web Engineering"],
      description:
        "Notizen zu moderner Webarchitektur, Web Services, REST, SOAP, Performance, Barrierefreiheit, WebAssembly und neuen Webtechnologien.",
      stats: [
        { value: "MS", label: "Studiengang" },
        { value: "Web", label: "Engineering" },
        { value: "TU", label: "Chemnitz" },
      ],
    },
    sse: {
      title: "Software Service Engineering",
      badges: ["Universitätskurs", "Software Services"],
      description:
        "Notizen zu Webarchitektur, WWW-Grundlagen, SOA, Web Services, REST, SOAP, WSDL, Middleware und serviceorientierten Systemen.",
      stats: [
        { value: "MS", label: "Studiengang" },
        { value: "Web", label: "Services" },
        { value: "TU", label: "Chemnitz" },
      ],
    },
  },
  skills: {
    groups: {
      languages: "Sprachen",
      frontend: "Frontend",
      backend: "Backend & Daten",
      state: "State & API",
      ai: "KI-Entwicklung",
      delivery: "Testing & Delivery",
      ui: "UI Engineering",
    },
    items: {
      typescript: "TypeScript",
      javascript: "JavaScript",
      python: "Python",
      sql: "SQL",
      html5: "HTML5",
      css3: "CSS3",
      react: "React.js",
      nextjs: "Next.js",
      mui: "Material UI",
      tailwind: "Tailwind CSS",
      nodejs: "Node.js",
      express: "Express.js",
      postgresql: "PostgreSQL",
      mongodb: "MongoDB",
      rest: "REST APIs",
      graphql: "GraphQL",
      redux: "Redux Toolkit",
      tanstack: "TanStack Query",
      "graphql-api": "GraphQL-API-Integration",
      formdata: "FormData",
      prompt: "Prompt Engineering",
      llm: "LLM",
      rag: "RAG",
      assistant: "KI-Assistent",
      gemini: "Gemini AI",
      cursor: "Cursor",
      copilot: "GitHub Copilot",
      actions: "GitHub Actions",
      cicd: "CI/CD",
      docker: "Docker",
      vercel: "Vercel",
      responsive: "Responsive UI",
      figma: "Figma",
      a11y: "Barrierefreiheit",
      perf: "Performance",
      components: "Komponentenarchitektur",
    },
  },
  writing: {
    "ts-clean":
      "TypeScript-Codebase sauber halten: ESLint, Prettier und die Regeln",
    "design-thinking": "Design Thinking & Human-Centered Design (HCD)",
    i18n: "Lokalisierung mit React-i18next in einer React-App",
    "ts-omit": "Eine Property aus einem Objekt in TypeScript entfernen",
    "react-tips":
      "React meistern: 5 Tipps für besseren Code und mehr Erfolg",
  },
  hackathon: {
    tum: {
      title: "Fenners-LBEnergy — 2. Platz, TUM × LB.systems GmbH Hackathon",
      org: "Technische Universität München",
      location: "München, Deutschland",
      description:
        "Physik-informiertes Thermomodell, das bestimmt, wann Wärmepumpen mit dem Vorheizen starten sollen. Ein Grey-Box-RC-Modell wird pro Gebäude aus eigener Telemetrie kalibriert — von Zelten bis Hörsälen.",
      bullets: [
        "APIs integriert, um Dashboard und Thermomodell zu verbinden.",
        "Dashboard und interaktive Charts für Gebäudedaten und Modellergebnisse gebaut.",
        "Daten bereinigt, vorbereitet und validiert.",
        "KI-Modelle recherchiert und Integrationsansätze bewertet.",
        "KI-Ausgaben validiert und Probleme in der Entwicklung identifiziert.",
        "Dokumentation, Tests und API-Integration mitgestaltet.",
        "Mit einem internationalen Team zusammengearbeitet — 2. Platz.",
      ],
      link: "Projekt ansehen",
    },
  },
  openSource: {
    voiceybill: {
      title: "VoiceyBill",
      project: "Open Source",
      type: "Beitrag",
      description:
        "Beiträge zu VoiceyBill in Web- und Server-Repos: UI-Fixes, Report-Workflows, API-Endpunkte, Schema, Ladezustände und Tooling.",
      link: "Alle PRs",
      contributions: {
        "pr-170":
          "fix: Kategorie-Dropdown bleibt offen, wenn außerhalb geklickt wird",
        "pr-64": "fix: Skeleton-Höhe passte nicht zur Komponentengröße",
        "pr-54":
          "feat(resend-report): Report-E-Mail erneut senden mit RTK-Mutation und Zeilen-Loading",
        "pr-49-web":
          "fix(web): Weniger Tabellen-Skeleton-Zeilen für besseres Loading-UX",
        "pr-83":
          "fix(report-schema): Report-Schema aktualisiert, startDate/endDate ergänzt",
        "pr-120":
          "chore: ESLint mit TypeScript, Import-Reihenfolge, Node.js und Prettier",
        "pr-49-server":
          "feat(/report/resend): Endpunkt zum erneuten Senden der Report-E-Mail",
      },
    },
  },
  contact: {
    body: "Am besten erreichen Sie mich per E-Mail oder LinkedIn. Ich spreche gerne über Softwareentwicklung, Open Source, technische Artikel und ernsthafte Zusammenarbeit. Senden Sie Kontext, Links, Rahmenbedingungen oder ein grobes Problem — je konkreter, desto besser kann ich antworten.",
    email: "E-Mail",
    linkedin: "LinkedIn",
  },
  coursePage: {
    kicker: "Kurs",
    title: "HTTP, REST-Architektur & REST APIs",
    subtitle:
      "Fülle jede Lektion aus. Überschriften und Navigation stehen; ersetze die Hinweisblöcke durch deine Erklärungen, Diagramme und Beispiele.",
    back: "Zu den Kursen",
    toc: "Inhalt",
    placeholder:
      "Schreibe deine Notizen hier. Erkläre die Idee in eigenen Worten, ergänze ein kurzes Beispiel und verlinke weiterführende Quellen.",
    modules: {
      http: "HTTP-Grundlagen",
      "rest-arch": "REST-Architektur",
      "rest-api": "REST APIs in der Praxis",
      practice: "Checkliste & eigene Notizen",
    },
    lessons: {
      "what-is-http": "Was ist HTTP?",
      "request-response": "Request und Response",
      methods: "HTTP-Methoden (GET, POST, PUT, PATCH, DELETE)",
      "status-codes": "Statuscodes",
      headers: "Header, Cookies und Content-Types",
      constraints: "REST-Constraints (Fielding)",
      resources: "Ressourcen und URIs",
      "uniform-interface": "Uniform Interface",
      "stateless-cache": "Zustandslosigkeit und Caching",
      design: "Endpunkte entwerfen",
      "status-errors": "Fehler und Statuscodes in APIs",
      versioning: "Versionierung",
      auth: "Authentifizierung und Autorisierung",
      pagination: "Paginierung, Filter und Sortierung",
      checklist: "API-Design-Checkliste",
      notes: "Eigene Extra-Notizen",
    },
  },
  language: {
    en: "English",
    de: "Deutsch",
    switch: "Sprache",
  },
};
