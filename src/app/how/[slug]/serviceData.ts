export type ServiceCard = {
  heading: string;
  description: string;
};

export type ServiceChallenge = {
  number: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  relevantFor: string;
};

export type CaseStudy = {
  tags: string[];
  eyebrow: string;
  heading: string;
  description: string;
  stats: { value: string; label: string }[];
  buttonText: string;
  buttonHref: string;
};

export type ServicePageData = {
  slug: string;
  eyebrow: string;
  heading: string;
  description: string;
  cardsHeading: string;
  cards: ServiceCard[];
  challenges: ServiceChallenge[];
  caseStudy: CaseStudy;
};

export const servicePages: Record<string, ServicePageData> = {
  "product-strategy": {
    slug: "product-strategy",
    eyebrow: "Product Strategy",
    heading: "Strategy that starts with the market.",
    description:
      "Most product strategy starts with the product. What features to build, what problems to solve, what the roadmap looks like. Market Inward starts earlier. We map the full ecosystem first — so every strategic decision is grounded in what the market actually requires.",
    cardsHeading: "What product strategy produces",
    cards: [
      {
        heading: "Ecosystem Map",
        description: "The full competitive and user landscape, documented.",
      },
      {
        heading: "Market Opportunity Definition",
        description: "The specific gap your product is positioned to fill.",
      },
      {
        heading: "User Taxonomy",
        description:
          "Every user type, their goals, their constraints, their relationships.",
      },
      {
        heading: "Product Architecture",
        description:
          "The validated structural decisions that every downstream choice depends on.",
      },
      {
        heading: "Roadmap",
        description:
          "Sequenced by market dependency, not feature excitement.",
      },
    ],
    challenges: [
      {
        number: "1",
        title: "Validate the right ideas, fast",
        subtitle: "Validate the right ideas",
        problem:
          "Rushing to launch without validation leads to wasted runway, bloated features, and products users do not actually need.",
        solution:
          "A focused Discovery Sprint using workshops, research, rapid prototyping, and AI-assisted testing to validate ideas early, prioritize with confidence, and reduce costly rework.",
        relevantFor:
          "Pre-seed to Series A startups, new product teams, and agencies scoping complex work.",
      },
      {
        number: "2",
        title: "Scaling design without scaling costs",
        subtitle: "Scale design efficiently",
        problem:
          "Building in-house design teams is slow, costly, and can add $200K+ per hire.",
        solution:
          "Instant access to senior design leadership and execution through flexible, scalable engagement models.",
        relevantFor:
          "Series A–C startups, growing companies, and agencies with fluctuating workloads.",
      },
      {
        number: "3",
        title: "Proving design ROI to stakeholders",
        subtitle: "Prove design ROI",
        problem:
          "Design gets undervalued when its impact isn't tied to business results—and budgets suffer.",
        solution:
          "We define success metrics upfront and design directly toward KPIs like conversion, task completion, retention, and revenue.",
        relevantFor:
          "Teams needing to justify design spend, agencies proving value, and startups reporting to investors.",
      },
      {
        number: "4",
        title: "Maintaining consistency at scale",
        subtitle: "Maintain consistency",
        problem:
          "Growing companies face fragmented experiences, inconsistent design, and confused users.",
        solution:
          "We create scalable systems with clear governance, resulting in faster development, design consistency, quicker onboarding, less design debt.",
        relevantFor:
          "Multi-product businesses, enterprise-focused agencies, and scaling startups.",
      },
      {
        number: "5",
        title: "Designing in regulated environments",
        subtitle: "Design for compliance",
        problem:
          "Accessibility, privacy, and compliance requirements are often addressed too late, increasing legal risk and creating expensive rework.",
        solution:
          "We integrate accessibility and compliance considerations into product design from the start, supporting standards like ADA, WCAG, and GDPR without compromising usability or velocity.",
        relevantFor:
          "Enterprise teams, regulated industries, scaling startups, and agencies serving compliance-heavy clients.",
      },
      {
        number: "6",
        title: "Bridge creative vision with feasibility",
        subtitle: "Align vision and feasibility",
        problem:
          "Design development can lack clarity on what's feasible, what's priority, and what are viable alternatives.",
        solution:
          "We craft developer-ready and AI-leveraged designs with clear specs and handoff process, resulting in fewer surprises and smoother collaboration.",
        relevantFor:
          "Agencies, distributed teams, and startups with limited dev resources.",
      },
    ],
    caseStudy: {
      tags: ["Urban mobility", "Product design", "Design system", "Team enablement"],
      eyebrow: "Flowbird: Civic Technology",
      heading: "Driving Downtown Detroit Engagement Through Strategic Design",
      description:
        "Five distinct user types. Real-time operational requirements. City-level stakes.",
      stats: [
        { value: "200K+", label: "Monthly transactions" },
        { value: "4.6", label: "App Store rating" },
      ],
      buttonText: "View case study",
      buttonHref: "/case-studies/flowbird-park-detroit",
    },
  },

  "product-ux-design": {
    slug: "product-ux-design",
    eyebrow: "Product UX Design",
    heading: "Design the workflows, not just the screens.",
    description:
      "We design the workflows, interfaces, and systems that make the strategy real. Every screen grounded in the ecosystem map that preceded it.",
    cardsHeading: "What UX design produces",
    cards: [
      {
        heading: "Workflow Architecture",
        description: "How users move through the product, mapped end-to-end.",
      },
      {
        heading: "Interface Design",
        description: "Screens designed from workflow context, not feature lists.",
      },
      {
        heading: "Interaction Patterns",
        description: "Consistent behaviors that users learn once and apply everywhere.",
      },
      {
        heading: "Usability Validation",
        description: "Tested with real users before engineering begins.",
      },
      {
        heading: "Design Specifications",
        description: "Developer-ready documentation that eliminates ambiguity.",
      },
    ],
    challenges: [],
    caseStudy: {
      tags: ["Fintech", "Dashboard", "UX Design"],
      eyebrow: "EstateGuru: Fintech",
      heading: "Transforming Estate Planning for Financial Advisors",
      description:
        "Complex financial data. Multiple user roles. High-stakes decisions.",
      stats: [
        { value: "$20B", label: "AUM on platform" },
        { value: "50%", label: "Reduction in user errors" },
      ],
      buttonText: "View case study",
      buttonHref: "/case-studies/estate-guru-dashboard",
    },
  },

  "product-systems": {
    slug: "product-systems",
    eyebrow: "Product Systems",
    heading: "The design system follows the product system.",
    description:
      "We build the design systems, component libraries, and documentation that make products scalable, consistent, and maintainable.",
    cardsHeading: "What product systems produce",
    cards: [
      {
        heading: "Design System",
        description: "Components, tokens, and patterns that scale with the product.",
      },
      {
        heading: "Component Library",
        description: "Production-ready, documented, and version-controlled.",
      },
      {
        heading: "Design Governance",
        description: "Rules and processes that maintain consistency as teams grow.",
      },
      {
        heading: "Documentation",
        description: "Usage guidelines that make the system self-serve.",
      },
      {
        heading: "Migration Strategy",
        description: "A plan to adopt the system without stopping delivery.",
      },
    ],
    challenges: [],
    caseStudy: {
      tags: ["Enterprise", "Design System", "Financial"],
      eyebrow: "Euvic / Alter Domus: Institutional Finance",
      heading: "Scaling Design for Institutional Asset Management",
      description:
        "Complex financial workflows. Institutional-grade requirements. Global scale.",
      stats: [
        { value: "$124T", label: "Market served" },
        { value: "3x", label: "Faster feature delivery" },
      ],
      buttonText: "View case study",
      buttonHref: "/case-studies/euvic-alterdomus",
    },
  },

  "ai-product-design": {
    slug: "ai-product-design",
    eyebrow: "AI Product Design",
    heading: "AI amplifies the methodology. It doesn't replace it.",
    description:
      "We design AI-native products and features that users actually trust and use. The UX layer that makes AI capability into product value.",
    cardsHeading: "What AI product design produces",
    cards: [
      {
        heading: "AI Interaction Patterns",
        description: "How users interact with AI features — prompts, outputs, feedback loops.",
      },
      {
        heading: "Trust Architecture",
        description: "Transparency, explainability, and user control designed in from the start.",
      },
      {
        heading: "Human-AI Workflow",
        description: "Where AI assists, where humans decide, and how they hand off.",
      },
      {
        heading: "Evaluation Framework",
        description: "How to measure whether AI features are actually creating value.",
      },
      {
        heading: "Integration Design",
        description: "AI features that feel native to the product, not bolted on.",
      },
    ],
    challenges: [],
    caseStudy: {
      tags: ["Urban mobility", "Product design", "Design system"],
      eyebrow: "Flowbird: Civic Technology",
      heading: "Driving Downtown Detroit Engagement Through Strategic Design",
      description:
        "Five distinct user types. Real-time operational requirements. City-level stakes.",
      stats: [
        { value: "200K+", label: "Monthly transactions" },
        { value: "4.6", label: "App Store rating" },
      ],
      buttonText: "View case study",
      buttonHref: "/case-studies/flowbird-park-detroit",
    },
  },
};

export const serviceSlugs = Object.keys(servicePages);
