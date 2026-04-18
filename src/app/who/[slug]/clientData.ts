export type ClientPageData = {
  slug: string;
  eyebrow: string;
  heading: string;
  description: string;
};

export type MetricBlock = {
  title: string;
  stats: string[];
  impact: string;
};

export const clientPages: Record<string, ClientPageData> = {
  "startups": {
    slug: "startups",
    eyebrow: "Startups & Scale-ups",
    heading: "We Want You To Succeed.",
    description:
      "Every startup faces the same pressure: proving your vision works before the runway runs out. The answer is less risk, higher quality, and the momentum to move from idea to investor-ready, fast enough to raise, launch, and scale.",
  },
  "product-organizations": {
    slug: "product-organizations",
    eyebrow: "Product Organizations",
    heading: "Design that scales with your product.",
    description:
      "You need design that scales — improving conversion, reducing churn, and delivering measurable ROI without the complexity of large internal teams.",
  },
  "agencies": {
    slug: "agencies",
    eyebrow: "Agencies & Delivery Partners",
    heading: "Strategic product depth your team can't provide in-house.",
    description:
      "If you're a development shop needing UX, a marketing agency expanding services, or a design studio managing overflow, we become a seamless extension of your team.",
  },
};

export const clientSlugs = Object.keys(clientPages);

// Placeholder for the expandable challenge cards (waiting for Relume component)
export const startupChallengesPlaceholder = true;

export const startupPricing = [
  {
    icon: { src: "", alt: "" },
    planName: "Pre-seed & Seed",
    description: "Validation, MVP Design, Fundraising Support",
    price: "$8.5K",
    discount: "Discovery Sprint → MVP Design Project",
    features: [
      "Validate concepts before development (2 weeks)",
      "User research & testing",
      "MVP design & prototyping",
      "Pitch deck design support",
      "Investor-ready prototypes",
      "Clear roadmap to MVP launch",
    ],
    button: { title: "Book a discovery call" },
  },
  {
    icon: { src: "", alt: "" },
    planName: "Series A–B",
    description: "Product-Market Fit, Scaling, Multi-Platform",
    price: "$8K",
    discount: "Monthly Retainer or Project-Based",
    features: [
      "Product-market fit optimization",
      "Design system foundation",
      "Multi-platform design strategy",
      "User testing programs",
      "Team augmentation",
      "Feature design & iteration",
    ],
    button: { title: "Book a discovery call" },
  },
  {
    icon: { src: "", alt: "" },
    planName: "Series C+",
    description: "Design Operations, Enterprise Scale, Strategic Leadership",
    price: "$12K",
    discount: "Fractional Leadership or Comprehensive Project",
    features: [
      "Design operations frameworks",
      "Fractional design leadership",
      "Enterprise design systems",
      "Team building & hiring",
      "Design maturity assessment",
      "Cross-functional leadership",
    ],
    button: { title: "Book a discovery call" },
  },
];

export const startupMetrics: MetricBlock[] = [
  {
    title: "Validation & risk reduction",
    stats: [
      "~40%+ reduction in development risk through proper discovery",
      "2 weeks to validated roadmap (vs. 3-6 months of guessing)",
      "Evidence-backed decisions that increase investor confidence",
      "Early detection of product-market fit issues",
    ],
    impact: "Save months of development time and tens of thousands in wasted resources by building the right product from the start.",
  },
  {
    title: "Speed & efficiency",
    stats: [
      "25-30% faster time to market with proper planning",
      "20-30% reduction in development time with design systems",
      "30% faster design-to-development handoff",
      "50% fewer design revisions during development",
    ],
    impact: "Hit critical milestones faster—whether that's first users, product launch, or funding rounds.",
  },
  {
    title: "Quality & user experience",
    stats: [
      "35%+ improvement in task completion rates",
      "50% reduction in user errors and confusion",
      "40% decrease in support tickets and inquiries",
      "Higher user satisfaction scores (CSAT/NPS)",
    ],
    impact: "Products that users actually love and recommend—the foundation of organic growth.",
  },
  {
    title: "Business impact",
    stats: [
      "Increased investor confidence and funding success rates",
      "Higher user adoption and activation rates",
      "Improved unit economics through better UX",
      "Stronger competitive positioning in market",
    ],
    impact: "Design becomes a competitive advantage that drives growth, funding, and market position.",
  },
];
