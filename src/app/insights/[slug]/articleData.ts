export type Article = {
  slug: string;
  title: string;
  tag: string;
  description: string;
  date: string;
  readTime: string;
  content: string[];
};

export const articles: Article[] = [
  {
    slug: "design-entropy-and-the-sequencing-problem",
    title: "Design Entropy and the Sequencing Problem",
    tag: "Product Strategy",
    description:
      "Why products degrade over time and what sequencing decisions cause it.",
    date: "March 2025",
    readTime: "6 min read",
    content: [
      "Every digital product degrades over time. Not because the technology fails, but because the design decisions that hold a product together start pulling in different directions. This is design entropy -- the gradual loss of coherence that happens when features are added without a unifying system.",
      "The root cause is almost always a sequencing problem. Teams build the feature before they build the system the feature lives in. They design the screen before they design the workflow. They ship the workflow before they understand the ecosystem.",
      "When you reverse the sequence -- ecosystem first, workflow second, feature third -- entropy slows dramatically. The product holds together longer, scales more predictably, and requires less rework.",
    ],
  },
  {
    slug: "discovery-sprint-why-it-comes-first",
    title: "Discovery Sprint: Why It Comes First",
    tag: "Discovery",
    description:
      "The case for validating before building -- and what a focused sprint actually produces.",
    date: "February 2025",
    readTime: "5 min read",
    content: [
      "The most expensive mistake in product development is building the wrong thing well. A discovery sprint exists to prevent that mistake by compressing weeks of ambiguity into a focused period of structured learning.",
      "A good discovery sprint produces three things: a validated understanding of the problem space, a set of design hypotheses worth testing, and a clear recommendation for what to build first.",
      "The sprint is not about generating ideas. It is about eliminating bad ones early, before they consume engineering resources and organizational momentum.",
    ],
  },
  {
    slug: "outside-in-product-design-the-asid-method",
    title: "Outside-In Product Design: The ASID Method",
    tag: "Methodology",
    description:
      "How designing from the market inward produces more coherent, scalable products.",
    date: "January 2025",
    readTime: "7 min read",
    content: [
      "Most product teams design from the inside out. They start with what they can build, then work outward toward the user. The ASID method reverses this sequence entirely.",
      "Outside-in design starts with the market -- who the product serves, what ecosystem it operates in, and what forces shape adoption. Only after mapping the external context does the process move inward to workflows, information architecture, and interface design.",
      "This reversal produces products that are more coherent at launch and more resilient as they scale. The market context acts as a constraint system that keeps every downstream decision aligned.",
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug);
}
