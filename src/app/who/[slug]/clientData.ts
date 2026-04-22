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
    heading: "Align Design with Measurable Outcomes",
    description:
      "Senior design leadership and execution for established product teams, improving conversion, reducing churn, and driving measurable ROI without the overhead of a large internal design team.",
  },
  "agencies": {
    slug: "agencies",
    eyebrow: "Agencies & Delivery Partners",
    heading: "Your Trusted Design Partner",
    description:
      "Senior design leadership and production-ready execution that plugs into your workflow, helping development teams, marketing agencies, and everyone in between win clients and deliver with confidence.",
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
    discount: "Discovery Sprint ($8.5K–$12.5K) → MVP Design Project ($25K–$50K)",
    features: [
      "Discovery Sprints: Validate concepts before development (2 weeks)",
      "User Research & Testing: Interviews, surveys, and usability testing",
      "MVP Design & Prototyping: Rapid, iterative design from concept to launch-ready",
      "Pitch Deck Design Support: Visual presentations that impress investors",
      "Investor-Ready Prototypes: Interactive demos showcasing product potential",
      "Validated product concept with user insights",
      "Clear roadmap to MVP launch",
      "Evidence-backed product strategy",
    ],
    button: { title: "Book a discovery call" },
  },
  {
    icon: { src: "", alt: "" },
    planName: "Series A–B",
    description: "Product-Market Fit, Scaling, Multi-Platform",
    price: "$8K",
    discount: "Monthly Retainer ($8K–$14K) or Project-Based ($50K–$100K)",
    features: [
      "Product-Market Fit Optimization: Refine based on data and user feedback",
      "Design System Foundation: Scalable components and patterns for consistency",
      "Multi-Platform Design Strategy: Consistent experience across web, iOS, Android",
      "User Testing Programs: Continuous validation and improvement cycles",
      "Team Augmentation: Fill design gaps without permanent hires",
      "Feature Design & Iteration: Continuous product enhancement",
      "Improved user engagement metrics",
      "Reduced development time and costs",
    ],
    button: { title: "Book a discovery call" },
  },
  {
    icon: { src: "", alt: "" },
    planName: "Series C+",
    description: "Design Operations, Enterprise Scale, Strategic Leadership",
    price: "$12K",
    discount: "Fractional Leadership ($12K–$20K/mo) or Comprehensive Project ($100K+)",
    features: [
      "DesignOps Frameworks: Scalable processes and systems",
      "Fractional Design Leadership: Strategic vision without VP hire cost",
      "Enterprise Design Systems: Complex, multi-product design systems",
      "Team Building & Hiring: Recruit and structure design organization",
      "Design Maturity Assessment: Benchmark and strategic improvement planning",
      "Cross-Functional Leadership: Design representation at executive level",
      "Enterprise-ready processes and governance",
      "Design as competitive advantage",
    ],
    button: { title: "Book a discovery call" },
  },
];

export type ChallengeCardData = {
  number: number;
  heading: string;
  problem: string;
  solution: string;
  youNeed: string;
  results: string;
  stat?: string;
  statDescription?: string;
  links?: { title: string; url: string }[];
};

export type ChallengeCardsData = {
  tagline: string;
  heading: string;
  cards: ChallengeCardData[];
};

export const productOrgChallenges: ChallengeCardsData = {
  tagline: "Growing Businesses reality",
  heading: "5 Challenges Facing Product Organizations",
  cards: [
    {
      number: 1,
      heading: "Scaling without scaling costs",
      problem:
        "Hiring senior design talent costs $200K+ per head, but your product demands are growing faster than your team can keep up. You need design capacity that scales without the overhead.",
      youNeed:
        "Access to senior design talent and capacity that grows with your product needs—without the cost and complexity of building a larger internal team.",
      solution:
        "We embed senior designers into your team on flexible engagements, giving you enterprise-level design capacity at a fraction of the cost of permanent hires.",
      results:
        "Scale design output without scaling headcount—maintaining quality while controlling costs.",
      stat: "$200K+",
      statDescription:
        "per hire, while design-led companies outperform the S&P 500 by 219%",
      links: [
        { title: "Design Management Institute", url: "https://www.dmi.org/" },
        { title: "Fortune Magazine", url: "https://fortune.com/" },
        { title: "McKinsey", url: "https://www.mckinsey.com/" },
        { title: "Forbes", url: "https://www.forbes.com/" },
      ],
    },
    {
      number: 2,
      heading: "Proving design ROI to stakeholders",
      problem:
        "Leadership wants hard numbers, but design impact is notoriously difficult to quantify. Without clear ROI metrics, design budgets are always the first to get cut.",
      youNeed:
        "A framework for measuring and communicating design's impact on business metrics—conversion, retention, support costs, and revenue.",
      solution:
        "We establish measurable design KPIs tied directly to business outcomes, giving you the data to justify investment and demonstrate value to stakeholders.",
      results:
        "Clear, defensible metrics that prove design's contribution to the bottom line.",
      stat: "$100",
      statDescription:
        "returned for every $1 invested in UX (ROI of 9,900%)",
      links: [
        { title: "University of Washington", url: "https://www.washington.edu/" },
        { title: "Eficode", url: "https://www.eficode.com/" },
        { title: "Interaction Design Foundation", url: "https://www.interaction-design.org/" },
      ],
    },
    {
      number: 3,
      heading: "Modernizing legacy systems",
      problem:
        "Your legacy platform works but feels dated, creates user friction, and limits growth. A complete rebuild is risky and expensive, but incremental improvements feel too slow.",
      youNeed:
        "A strategic modernization approach that reduces risk while delivering visible improvements—balancing user needs with technical constraints.",
      solution:
        "We create phased modernization roadmaps that deliver quick wins while building toward a comprehensive redesign, minimizing disruption to users and development teams.",
      results:
        "Modernized experiences that improve user satisfaction and reduce technical debt without the risk of a full rebuild.",
      stat: "~70%",
      statDescription: "of digital transformation projects fail",
      links: [
        { title: "LinkedIn", url: "https://www.linkedin.com/" },
        { title: "BCG", url: "https://www.bcg.com/" },
        { title: "DhiWise", url: "https://www.dhiwise.com/" },
      ],
    },
    {
      number: 4,
      heading: "Maintaining consistency across products",
      problem:
        "Multiple products, teams, and platforms lead to fragmented experiences. Users notice the inconsistency, and it erodes trust and increases support burden.",
      youNeed:
        "A unified design system and governance framework that ensures consistency across all touchpoints without slowing teams down.",
      solution:
        "We build comprehensive design systems with clear documentation, component libraries, and governance processes that scale across teams and products.",
      results:
        "Consistent, cohesive experiences across your entire product portfolio—reducing design debt and accelerating delivery.",
    },
    {
      number: 5,
      heading: "Balancing competing priorities",
      problem:
        "Product, engineering, marketing, and leadership all have competing demands on design resources. Without clear prioritization, everything feels urgent and nothing gets done well.",
      youNeed:
        "Strategic design leadership that can align stakeholders, prioritize effectively, and ensure design effort goes where it creates the most value.",
      solution:
        "We bring experienced design leadership that understands cross-functional dynamics, establishing clear processes for prioritization and stakeholder alignment.",
      results:
        "Focused design effort on highest-impact work, with clear communication that keeps all stakeholders aligned.",
    },
  ],
};

export const agencyChallenges: ChallengeCardsData = {
  tagline: "Agency reality",
  heading: "5 Challenges Every Agency Faces",
  cards: [
    {
      number: 1,
      heading: "Handling overflow and expertise gaps",
      problem:
        "Client demands spike unpredictably, and you can't always staff up fast enough. When you do find talent, they may lack the specialized skills certain projects require.",
      youNeed:
        "Reliable, senior-level design capacity you can tap into on demand—without the risk and overhead of permanent hires.",
      solution:
        "We become your on-call design team, providing senior talent that slots into your workflow seamlessly, scaling up or down as project demands shift.",
      results:
        "Never turn down work again—handle any project with confidence, regardless of complexity or timeline.",
      stat: "40%",
      statDescription: "of agencies cite scaling as their #1 challenge",
      links: [
        { title: "Microsourcing.com", url: "https://www.microsourcing.com/" },
        { title: "Setup.us", url: "https://setup.us/" },
        { title: "ExpertAllies.com", url: "https://www.expertallies.com/" },
      ],
    },
    {
      number: 2,
      heading: "Consistent quality that wins and retains clients",
      problem:
        "Quality varies between projects and team members. Inconsistency erodes client trust and makes retention harder—and losing clients costs far more than winning new ones.",
      youNeed:
        "A consistent standard of design excellence across every engagement, with senior oversight that ensures quality never slips.",
      solution:
        "We bring battle-tested processes and senior design leadership to every project, ensuring consistent, high-quality output that keeps clients coming back.",
      results:
        "Higher client retention and satisfaction, with quality that becomes your agency's reputation.",
      stat: "5-25x",
      statDescription:
        "Client retention is worth 5-25x more than acquisition",
      links: [
        { title: "Harvard Business Review", url: "https://hbr.org/" },
        { title: "Invesp", url: "https://www.invespcro.com/" },
        { title: "Bain & Company", url: "https://www.bain.com/" },
      ],
    },
    {
      number: 3,
      heading: "Bridging creative vision & technical execution",
      problem:
        "Beautiful designs that can't be built are worthless. The gap between what's designed and what's developed creates rework, missed deadlines, and frustrated teams.",
      youNeed:
        "Designers who understand technical constraints and can create production-ready designs that developers love to build.",
      solution:
        "With 20+ years bridging design and development, we deliver pixel-perfect designs with clear specs, component libraries, and developer-friendly handoffs that minimize back-and-forth.",
      results:
        "Faster development cycles, fewer revision rounds, and happier dev teams.",
    },
    {
      number: 4,
      heading: "Evaluating profitability & managing expectations",
      problem:
        "Scope creep, underquoting, and unclear expectations eat into margins. Without clear boundaries and pricing models, projects become unprofitable.",
      youNeed:
        "Transparent pricing, clear scope definitions, and a partner who respects your margins and client relationships.",
      solution:
        "We offer predictable pricing models—white-label, augmentation, or project-based—with clear scopes and no surprises, protecting your profitability.",
      results:
        "Healthier margins and predictable project economics.",
    },
    {
      number: 5,
      heading: "Standing out in a competitive market",
      problem:
        "Every agency claims to be full-service, but few can deliver true strategic design depth. Without differentiation, you're competing on price alone.",
      youNeed:
        "A design capability that elevates your offering beyond competitors—strategic depth, not just pixel-pushing.",
      solution:
        "We add senior product design and UX strategy to your service offering, giving you a genuine competitive advantage that wins pitches and commands premium pricing.",
      results:
        "Win more pitches and retain more clients by offering genuine design depth.",
      stat: "Most agencies cite new business sales as #1 challenge",
      links: [
        { title: "SparkToro", url: "https://sparktoro.com/" },
        { title: "Agency Analytics", url: "https://agencyanalytics.com/" },
      ],
    },
  ],
};

export const productOrgPricing = [
  {
    icon: { src: "", alt: "" },
    planName: "Product Enhancement & Optimization",
    description: "Improve existing products, increase conversion, reduce churn",
    price: "$35K",
    discount: "UX Audit → Optimization Project ($35K–$75K, 6–10 weeks)",
    features: [
      "UX Audits & Heuristic Evaluation",
      "Conversion Rate Optimization (CRO)",
      "Feature Design & A/B Testing Frameworks",
      "Customer Journey Mapping & Optimization",
      "Usability Testing & User Research",
      "Analytics Implementation & Analysis",
      "Improved conversion rates (typically 10–25%)",
      "Reduced support costs (30–40% typical)",
    ],
    button: { title: "Book a discovery call" },
  },
  {
    icon: { src: "", alt: "" },
    planName: "Platform Modernization",
    description: "Transform legacy systems, multi-platform strategy, major redesigns",
    price: "$75K",
    discount: "Discovery & Strategy (2–4 weeks) → Project ($75K–$200K+, 3–6 months)",
    features: [
      "Legacy System Redesign & Migration Strategy",
      "Multi-Platform Design Strategy",
      "Phased Rollout Planning & Change Management",
      "Accessibility Compliance & Remediation",
      "Design System Development",
      "Technical Debt Reduction",
      "Improved user satisfaction (40–50% typical)",
      "Reduced time-on-task (20–30% typical)",
    ],
    button: { title: "Book a discovery call" },
  },
  {
    icon: { src: "", alt: "" },
    planName: "Design Operations & Scaling",
    description: "Build design capabilities, establish processes, scale efficiently",
    price: "$12K",
    discount: "Fractional Leadership ($12K–$20K/mo, 3–12 months) or DesignOps Project ($100K+)",
    features: [
      "DesignOps Framework Implementation",
      "Design System Development & Governance",
      "Team Augmentation & Staff Extension",
      "Fractional Design Leadership",
      "Process Optimization & Workflow Design",
      "Quality Assurance & Design Standards",
      "Measurable improvement in design maturity",
      "Better cross-functional collaboration",
    ],
    button: { title: "Book a discovery call" },
  },
];

export const agencyPricing = [
  {
    icon: { src: "", alt: "" },
    planName: "White-Label Design Execution",
    description: "Overflow work, capacity needs, and client deliverables under your brand",
    price: "$7K",
    discount: "Project-based or retainer ($7K–$15K/month). Volume discounts available.",
    features: [
      "Complete UX/UI design for client projects",
      "User research and discovery work",
      "Prototyping and usability testing",
      "Design systems and component libraries",
      "Technical design documentation for developers",
      "Design QA and implementation review",
      "You keep client relationship and full margin",
      "Scale capacity up or down based on workload",
    ],
    button: { title: "Book a discovery call" },
  },
  {
    icon: { src: "", alt: "" },
    planName: "Team Augmentation",
    description: "Fill skill gaps, add senior expertise, meet aggressive deadlines",
    price: "$7K",
    discount: "40 hrs ($7K) · 80 hrs ($12.5K) · 120+ hrs ($18K+/mo)",
    features: [
      "Senior design expertise on-demand",
      "Strategic UX guidance and direction",
      "Mentorship for junior team members",
      "Specialized skills (design systems, research, accessibility)",
      "Design leadership and quality oversight",
      "Process improvement and efficiency",
      "No recruiting, onboarding, or training time",
      "Flexible capacity that scales with needs",
    ],
    button: { title: "Book a discovery call" },
  },
  {
    icon: { src: "", alt: "" },
    planName: "Strategic Design Partnership",
    description: "Partner on high-value client engagements with shared discovery and execution",
    price: "Custom",
    discount: "Fixed fees, revenue share, hybrid models, or long-term alliances",
    features: [
      "Discovery workshops and strategic research",
      "Design strategy and vision development",
      "Complex product design and systems",
      "Design system architecture and governance",
      "Fractional design leadership for client teams",
      "Executive presentations and stakeholder management",
      "Win work you couldn't handle alone",
      "Expand capabilities without building team",
    ],
    button: { title: "Book a discovery call" },
  },
  {
    icon: { src: "", alt: "" },
    planName: "Discovery & Research Services",
    description: "Project scoping, validation, and strategic planning (white-label or joint-branded)",
    price: "$8.5K",
    discount: "Discovery Sprints ($8.5K–$12.5K) · Extended ($15K–$25K). Agency discounts 10–20%.",
    features: [
      "2-week Discovery Sprints",
      "User research and competitive analysis",
      "Stakeholder workshops and alignment",
      "Strategic roadmaps and prioritization",
      "Concept validation and testing",
      "Technical feasibility assessment",
      "Reduce project risk dramatically",
      "Scope accurately from the start",
    ],
    button: { title: "Book a discovery call" },
  },
];

export const productOrgMetrics: MetricBlock[] = [
  {
    title: "Efficiency & cost reduction",
    stats: [
      "30-50% reduction in design costs vs. full-time hires",
      "20-30% faster design delivery with established systems",
      "40% reduction in design-development rework",
      "Significant savings through consistent design system adoption",
    ],
    impact:
      "Get more design output for less budget, with predictable costs and no hiring overhead.",
  },
  {
    title: "User experience improvements",
    stats: [
      "35%+ improvement in task completion rates",
      "50% reduction in user errors and support tickets",
      "Higher user satisfaction scores (CSAT/NPS)",
      "Reduced onboarding time for new users",
    ],
    impact:
      "Products that users love to use—reducing churn and driving organic adoption.",
  },
  {
    title: "Revenue & conversion",
    stats: [
      "15-30% improvement in conversion rates",
      "Measurable reduction in customer churn",
      "Increased customer lifetime value",
      "Higher feature adoption rates",
    ],
    impact:
      "Design that directly contributes to revenue growth and customer retention.",
  },
  {
    title: "Team impact",
    stats: [
      "Faster time-to-market for new features",
      "Reduced cross-team friction and alignment issues",
      "Scalable design processes and documentation",
      "Knowledge transfer that builds internal capabilities",
    ],
    impact:
      "Your team becomes more capable and efficient, even after the engagement ends.",
  },
];

export const agencyMetrics: MetricBlock[] = [
  {
    title: "Capacity & growth",
    stats: [
      "Scale design capacity 2-3x without hiring",
      "Handle overflow without turning down work",
      "Expand service offerings with design depth",
      "Faster onboarding than traditional hiring",
    ],
    impact:
      "Grow your agency's revenue and capabilities without the risk and overhead of hiring.",
  },
  {
    title: "Quality & reputation",
    stats: [
      "Consistent, senior-level design quality across projects",
      "Higher client satisfaction and retention rates",
      "Production-ready deliverables that developers love",
      "Award-worthy portfolio work",
    ],
    impact:
      "Build a reputation for design excellence that wins referrals and repeat business.",
  },
  {
    title: "Profitability",
    stats: [
      "Predictable project costs with transparent pricing",
      "Reduced scope creep through clear processes",
      "Higher margins on design-inclusive projects",
      "No overhead costs for idle design capacity",
    ],
    impact:
      "Healthier margins and more predictable project economics across your portfolio.",
  },
  {
    title: "Team impact",
    stats: [
      "Knowledge sharing that upskills your internal team",
      "Reduced burnout from overflow management",
      "Better developer-designer collaboration",
      "Processes and templates for future projects",
    ],
    impact:
      "Your team grows stronger through collaboration, not just delegation.",
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
