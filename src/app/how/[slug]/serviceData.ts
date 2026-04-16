export type ServiceCard = {
  heading: string;
  description: string;
};

export type CaseStudy = {
  tags: string[];
  eyebrow: string;
  heading: string;
  description: string;
  stats: { value: string; label: string }[];
  buttonText: string;
  buttonHref: string;
  image: string;
};

export type ServicePageData = {
  slug: string;
  eyebrow: string;
  heading: string;
  description: string;
  cardsHeading: string;
  cards: ServiceCard[];
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
      image: "/assets/poster-case-study-flowbird.jpg",
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
      image: "/assets/poster-case-study-estateguru.jpg",
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
      image: "/assets/poster-case-study-euvic.jpg",
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
      image: "/assets/poster-case-study-flowbird.jpg",
    },
  },
};

export const serviceSlugs = Object.keys(servicePages);
