"use client";

import { Navbar2 } from "@/components/Navbar";
import { Header62 } from "@/components/ServiceHero";
import { Cta7 } from "@/components/Cta";
import { Footer12 } from "@/components/Footer";
import { RxChevronRight } from "react-icons/rx";

const insights = [
  {
    title: "Understanding the True Cost of Unvalidated Product Development",
    category: "Product Strategy",
    description:
      "Why product risk compounds when teams commit to features before validating the market, ecosystem, and workflow assumptions behind them.",
  },
  {
    title: "AI in Product Design: A Strategic Guide for Leaders Who Want Results, Not Hype",
    category: "AI Product Design",
    description:
      "How to use AI as a force multiplier for research synthesis, product clarity, and design-system execution without outsourcing the thinking.",
  },
  {
    title: "When Design Systems Fail, The Product System Is Usually The Problem",
    category: "Product Systems",
    description:
      "A design system cannot repair unclear workflows, fragmented product architecture, or missing governance. The system underneath has to come first.",
  },
];

export default function InsightsPage() {
  return (
    <>
      <Navbar2 />

      <div className="section-white">
        <Header62
          tagline="Insights"
          heading="Practical thinking for complex product decisions."
          description="Notes on product strategy, UX architecture, design systems, and AI-enabled design operations for teams building at scale."
        />
      </div>

      <div className="section-gray">
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
              {insights.map((insight) => (
                <article
                  key={insight.title}
                  className="flex min-h-[24rem] flex-col justify-between rounded-lg border border-border-primary bg-white p-6 md:p-8"
                >
                  <div>
                    <p className="mb-4 font-semibold">{insight.category}</p>
                    <h2 className="mb-4 text-3xl leading-[1.15] md:text-4xl">
                      {insight.title}
                    </h2>
                    <p className="text-sm text-neutral">{insight.description}</p>
                  </div>
                  <a
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary"
                  >
                    Discuss this topic <RxChevronRight />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="section-dark">
        <Cta7 />
      </div>

      <div className="section-dark">
        <Footer12 />
      </div>
    </>
  );
}
