export const siteConfig = {
  name: "Allyson Freitas",
  accentColor: "#d98f2b",
  social: {
    email: "allyson.f.m@hotmail.com",
    linkedin: "https://linkedin.com/in/allysonfreitas",
    twitter: "",
    github: "https://github.com/rusthp",
  },
  skills: [
    "TypeScript",
    "Node.js (Fastify / Express)",
    "PostgreSQL / Prisma",
    "Redis / BullMQ",
    "MongoDB",
    "Python",
    "Vue 3 / React",
    "Vitest / Jest",
    "LLM API Integration",
    "Claude Code",
    "Docker / Linux",
    "Zabbix / Grafana / Graylog",
    "Proxmox",
    "Git / GitHub",
  ],
  // Order must stay in sync with translations.{en,pt}.projects in src/i18n.ts
  projects: [
    {
      name: "Korvian",
      link: "",
      skills: ["Fastify", "TypeScript", "Prisma", "PostgreSQL", "Vue 3"],
    },
    {
      name: "VoxelPromo",
      link: "https://voxelpromo.com",
      skills: ["Node.js", "Express", "MongoDB", "Redis", "React"],
    },
    {
      name: "ProPlayNews",
      link: "",
      skills: ["TypeScript", "Vue", "Python", "LLM APIs"],
    },
    {
      name: "Licita Exata",
      link: "",
      skills: ["Next.js", "Supabase", "PostgreSQL", "LLM APIs"],
    },
    {
      name: "Cora Moda",
      link: "https://coramoda.com.br",
      skills: ["Node.js", "Web Development", "SEO"],
    },
  ],
  // Order must stay in sync with translations.{en,pt}.experience in src/i18n.ts
  experience: [
    { company: "PPNetwork", dateRange: "2025 – Present" },
    { company: "UZMI Games — Tales of Shadowland", dateRange: "Present" },
    { company: "Korvian", dateRange: "2026 – Present" },
    { company: "ProPlayNews", dateRange: "2026 – Present" },
    { company: "Cora Moda", dateRange: "2026 – Present" },
    { company: "VoxelPromo", dateRange: "Personal Project" },
    { company: "Agência NovaStudio (Freelance)", dateRange: "Freelance" },
    { company: "Me Salve Reforço Escolar", dateRange: "02/2024 – 12/2024" },
    {
      company: "Residência Pedagógica – Dom Bosco",
      dateRange: "10/2022 – 01/2024",
    },
  ],
  // Order must stay in sync with translations.{en,pt}.education in src/i18n.ts
  education: [
    { school: "UFMS", dateRange: "2020 – 2024" },
    { school: "Coders 24", dateRange: "2024" },
    { school: "Alura", dateRange: "2023" },
    { school: "Alura", dateRange: "2023" },
  ],
};
