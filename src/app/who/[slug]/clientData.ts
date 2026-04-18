export type ClientPageData = {
  slug: string;
  eyebrow: string;
  heading: string;
  description: string;
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
