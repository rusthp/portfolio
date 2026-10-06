export const translations = {
  en: {
    meta: {
      title: "Backend Developer | Node.js, TypeScript & Observability",
      description:
        "Portfolio of Allyson Freitas — backend developer (Node.js, TypeScript, PostgreSQL, Redis) with production monitoring experience for 15+ internet providers, founder of Korvian and Community Manager at UZMI Games.",
    },
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
    },
    hero: {
      greeting: "Hello!",
      titlePrefix: "I'm",
    },
    sections: {
      about: "About Me",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
    },
    aboutMe:
      "Backend developer working with Node.js and TypeScript on services that run in production: PostgreSQL with Prisma, queues and cache on Redis, integrations with external APIs, and scheduled jobs. In my day job as a network analyst I handle monitoring and logs for 15+ internet providers (Zabbix, Grafana, Graylog), so I'm used to finding what broke in production and fixing it. I founded Korvian, a multi-tenant NOC platform, and I'm the Community Manager of Tales of Shadowland, an MMORPG by UZMI Games. I use Claude Code every day and integrate LLM APIs into real products. Background in Linguistics (Portuguese and English).",
    projects: [
      {
        description:
          "Multi-tenant NOC platform I founded and develop — Fastify API with PostgreSQL and Prisma, BullMQ/Redis jobs for health checks and backups of Zabbix, Grafana and Graylog through their APIs, log-retention and agent-heartbeat alerts, and an AI chat that answers questions from live database data. Running for 15+ regional internet providers.",
      },
      {
        description:
          "Affiliate offer automation: collects deals from Amazon, Shopee, Mercado Livre and AliExpress, writes the copy with LLMs and publishes automatically to WhatsApp, Telegram, Instagram, Facebook and X — BullMQ/Redis queues and Stripe/Mercado Pago billing.",
      },
      {
        description:
          "Games and esports news portal. I built the ProPlayNews theme on top of the open-source CMMV blog platform and ContentMind, a Python pipeline that writes articles with LLMs and blocks publication when a fact isn't backed by the source news.",
      },
      {
        description:
          "SaaS that monitors public procurement notices: scheduled worker pulling from Brazil's PNCP API, per-company data isolation with Postgres RLS, recurring billing, and an AI chat grounded in each notice's text with answer caching.",
      },
      {
        description:
          "Website and storefront I developed and maintain for this dropshipping footwear brand (coramoda.com.br) — Node.js zero-dependency stack.",
      },
    ],
    experience: [
      {
        title: "Network Analyst",
        bullets: [
          "Monitoring and observability for 15+ internet providers: metrics (Zabbix, Grafana), logs (Graylog/OpenSearch) and alerts",
          "Diagnose and fix production incidents, from broken dashboards to log pipelines dropping legally required CGNAT records",
          "Python automation (SSH/Paramiko, Grafana API) to diagnose and fix dozens of servers in bulk",
        ],
      },
      {
        title: "Community Manager",
        bullets: [
          "Run the community for Tales of Shadowland, a free-to-play MMORPG on Steam, on Discord and WhatsApp",
          "Bring player bugs and feedback to the development team",
        ],
      },
      {
        title: "Founder & Lead Developer",
        bullets: [
          "Built a multi-tenant NOC platform from the ground up (Fastify, Prisma, PostgreSQL, Vue 3)",
          "Rolled out monitoring (Zabbix Proxy + Agent, Graylog) across 15+ internet providers",
          "Production alerts and watchdogs routed to Discord",
        ],
      },
      {
        title: "Theme & Content Pipeline Developer",
        bullets: [
          "Built the ProPlayNews theme on the open-source CMMV blog platform",
          "Built ContentMind, an LLM content pipeline with a fact-checking gate before publishing",
          "Run deployment and operations of the site",
        ],
      },
      {
        title: "Website Developer",
        bullets: [
          "Developed and maintain the storefront for a dropshipping footwear brand (coramoda.com.br)",
          "Diagnosed and fixed a checkout bug causing duplicate orders",
          "Deployed and operate the site's production infrastructure",
        ],
      },
      {
        title: "Full Stack Developer — Personal Project",
        bullets: [
          "Built affiliate marketing automation with AI-generated copy, scraping and multi-channel publishing",
        ],
      },
      {
        title: "QA & Data Reviewer (Audio/Text)",
        bullets: [
          "Critical review, editing, and QA of audio and textual content — processes directly applicable to Speech-to-Text AI training",
          "Timing adjustments, narration fluency, and validation of semantic and grammatical coherence",
        ],
      },
      {
        title: "Content Specialist & Educational Data Evaluator",
        bullets: [
          "Developed interactive digital materials for remote and hybrid learning, focused on UX and user journey",
          "Rigorous text analysis providing standardized feedback — directly applicable to evaluating and rating AI outputs",
        ],
      },
      {
        title: "Digital Materials Developer & Instructor",
        bullets: [
          "Developed and implemented interactive lesson plans and learning logic using digital resources and active methodologies, with a strong focus on EdTech",
        ],
      },
    ],
    education: [
      {
        degree: "B.A. in Linguistics and Literature (Portuguese and English)",
        achievements: [
          "Hybrid foundation bridging language analysis and software development",
        ],
      },
      {
        degree: "Back-End Development — Digital Trail",
        achievements: [
          "Backend concepts applied to architect data solutions and automation flows",
        ],
      },
      {
        degree:
          "Front-End Programming — JS Logic, Functions & Lists, HTML/CSS",
        achievements: [],
      },
      {
        degree: "Version Control & Code — Git and GitHub",
        achievements: [],
      },
    ],
  },
  pt: {
    meta: {
      title: "Desenvolvedor Back-End | Node.js, TypeScript & Observabilidade",
      description:
        "Portfólio de Allyson Freitas — desenvolvedor back-end (Node.js, TypeScript, PostgreSQL, Redis) com experiência em monitoramento de produção para mais de 15 provedores de internet, fundador do Korvian e Community Manager na UZMI Games.",
    },
    nav: {
      about: "Sobre",
      projects: "Projetos",
      experience: "Experiência",
      education: "Formação",
    },
    hero: {
      greeting: "Olá!",
      titlePrefix: "Eu sou",
    },
    sections: {
      about: "Sobre Mim",
      projects: "Projetos",
      experience: "Experiência",
      education: "Formação",
    },
    aboutMe:
      "Desenvolvedor back-end com Node.js e TypeScript, trabalhando em serviços que rodam em produção: PostgreSQL com Prisma, filas e cache no Redis, integrações com APIs externas e jobs agendados. No meu trabalho como analista de redes cuido do monitoramento e dos logs de mais de 15 provedores de internet (Zabbix, Grafana, Graylog), então estou acostumado a achar o que quebrou em produção e corrigir. Fundei o Korvian, uma plataforma de NOC multi-tenant, e sou Community Manager do Tales of Shadowland, MMORPG da UZMI Games. Uso Claude Code todos os dias e integro APIs de LLM em produtos reais. Formado em Letras (Português e Inglês).",
    projects: [
      {
        description:
          "Plataforma de NOC multi-tenant que fundei e desenvolvo — API em Fastify com PostgreSQL e Prisma, jobs em BullMQ/Redis de health check e backup de Zabbix, Grafana e Graylog pelas APIs, alertas de retenção de logs e de agentes sem sinal, e um chat com IA que responde a partir dos dados do banco. Rodando para mais de 15 provedores de internet regionais.",
      },
      {
        description:
          "Automação de ofertas de afiliados: coleta promoções na Amazon, Shopee, Mercado Livre e AliExpress, gera a copy com LLM e publica sozinha no WhatsApp, Telegram, Instagram, Facebook e X — filas em BullMQ/Redis e cobrança via Stripe/Mercado Pago.",
      },
      {
        description:
          "Portal de notícias de games e esports. Desenvolvi o tema do ProPlayNews sobre a plataforma open source CMMV blog e o ContentMind, pipeline em Python que escreve matérias com LLM e bloqueia a publicação quando um fato não está nas notícias de origem.",
      },
      {
        description:
          "SaaS de monitoramento de editais públicos: worker agendado que coleta da API do PNCP, isolamento de dados por empresa com RLS no Postgres, assinatura recorrente e chat com IA baseado no texto de cada edital, com cache de respostas.",
      },
      {
        description:
          "Site e loja que desenvolvo e mantenho para esta marca de calçados em dropshipping (coramoda.com.br) — stack Node.js zero-dependency.",
      },
    ],
    experience: [
      {
        title: "Analista de Redes",
        bullets: [
          "Monitoramento e observabilidade de mais de 15 provedores de internet: métricas (Zabbix, Grafana), logs (Graylog/OpenSearch) e alertas",
          "Diagnóstico e correção de incidentes em produção, de painéis quebrados a pipelines de log descartando registros de CGNAT exigidos por lei",
          "Automação em Python (SSH/Paramiko, API do Grafana) para diagnosticar e corrigir dezenas de servidores em lote",
        ],
      },
      {
        title: "Community Manager",
        bullets: [
          "Cuido da comunidade do Tales of Shadowland, MMORPG free-to-play na Steam, no Discord e no WhatsApp",
          "Levo bugs e feedback dos jogadores para o time de desenvolvimento",
        ],
      },
      {
        title: "Fundador & Desenvolvedor Principal",
        bullets: [
          "Construí uma plataforma de NOC multi-tenant do zero (Fastify, Prisma, PostgreSQL, Vue 3)",
          "Implantei monitoramento (Zabbix Proxy + Agent, Graylog) em mais de 15 provedores de internet",
          "Alertas e watchdogs de produção enviados para o Discord",
        ],
      },
      {
        title: "Desenvolvedor do Tema e do Pipeline de Conteúdo",
        bullets: [
          "Desenvolvi o tema do ProPlayNews sobre a plataforma open source CMMV blog",
          "Criei o ContentMind, pipeline de conteúdo com LLM e checagem de fatos antes de publicar",
          "Cuido do deploy e da operação do site",
        ],
      },
      {
        title: "Desenvolvedor do Site",
        bullets: [
          "Desenvolvo e mantenho o site desta marca de calçados em dropshipping (coramoda.com.br)",
          "Diagnostiquei e corrigi um bug de checkout que causava pedidos duplicados",
          "Realizo o deploy e a operação da infraestrutura de produção do site",
        ],
      },
      {
        title: "Desenvolvedor Full Stack — Projeto Pessoal",
        bullets: [
          "Construí automação de marketing de afiliados com copy gerada por IA, scraping e publicação em vários canais",
        ],
      },
      {
        title: "QA & Revisor de Dados (Áudio/Texto)",
        bullets: [
          "Revisão crítica, edição e QA de conteúdo em áudio e texto — processos diretamente aplicáveis ao treinamento de IA de Speech-to-Text",
          "Ajustes de tempo, fluência de narração e validação de coerência semântica e gramatical",
        ],
      },
      {
        title: "Especialista em Conteúdo & Avaliador de Dados Educacionais",
        bullets: [
          "Desenvolvi materiais digitais interativos para ensino remoto e híbrido, com foco em UX e jornada do usuário",
          "Análise rigorosa de textos com feedback padronizado — diretamente aplicável à avaliação de saídas de IA",
        ],
      },
      {
        title: "Desenvolvedor de Materiais Digitais & Instrutor",
        bullets: [
          "Desenvolvi e implementei planos de aula interativos e lógica de aprendizagem usando recursos digitais e metodologias ativas, com forte foco em EdTech",
        ],
      },
    ],
    education: [
      {
        degree: "Bacharelado em Letras (Português e Inglês)",
        achievements: [
          "Base híbrida que une análise linguística e desenvolvimento de software",
        ],
      },
      {
        degree: "Desenvolvimento Back-End — Trilha Digital",
        achievements: [
          "Conceitos de back-end aplicados para arquitetar soluções de dados e fluxos de automação",
        ],
      },
      {
        degree:
          "Programação Front-End — Lógica em JS, Funções e Listas, HTML/CSS",
        achievements: [],
      },
      {
        degree: "Controle de Versão e Código — Git e GitHub",
        achievements: [],
      },
    ],
  },
} as const;

export type Lang = keyof typeof translations;
