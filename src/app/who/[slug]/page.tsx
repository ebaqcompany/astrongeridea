"use client";

import { use } from "react";
import { Navbar2 } from "@/components/Navbar";
import { Header62 } from "@/components/ServiceHero";
import { Layout495 } from "@/components/Audience";
import { Pricing13 } from "@/components/Pricing";
import { Portfolio11 } from "@/components/SelectedWork";
import { Cta7 } from "@/components/Cta";
import { Footer12 } from "@/components/Footer";
import { ChallengeCards } from "@/components/ChallengeCards";
import {
  clientPages,
  startupPricing,
  startupMetrics,
  productOrgChallenges,
  productOrgPricing,
  productOrgMetrics,
  agencyChallenges,
  agencyPricing,
  agencyMetrics,
} from "./clientData";

const challengeCardsData: Record<string, { tagline: string; heading: string; cards: typeof productOrgChallenges.cards } | undefined> = {
  "product-organizations": productOrgChallenges,
  agencies: agencyChallenges,
};

const pricingData: Record<string, { tagline: string; heading: string; description: string; pricingPlans: typeof startupPricing }> = {
  startups: {
    tagline: "Stage-Appropriate Design",
    heading: "Design for every phase",
    description: "Different funding stages have different design needs. Here's how we help at each stage of your journey.",
    pricingPlans: startupPricing,
  },
  "product-organizations": {
    tagline: "Standard Solutions",
    heading: "Scalable design solutions",
    description: "Different challenges require different approaches. Here's how we help product organizations succeed.",
    pricingPlans: productOrgPricing,
  },
  agencies: {
    tagline: "Partnership Models",
    heading: "Flexible partnership models",
    description: "Different agencies need different models. Here's how we work together.",
    pricingPlans: agencyPricing,
  },
};

const metricsData: Record<string, { label: string; heading: string; metrics: typeof startupMetrics }> = {
  startups: {
    label: "Results",
    heading: "Startup & Scale-Up Success Metrics",
    metrics: startupMetrics,
  },
  "product-organizations": {
    label: "Results",
    heading: "Product Organization Success Metrics",
    metrics: productOrgMetrics,
  },
  agencies: {
    label: "Results",
    heading: "Agency Partnership Success Metrics",
    metrics: agencyMetrics,
  },
};

const ctaHeadings: Record<string, { first: string; second: string }> = {
  startups: {
    first: "Let's talk about your challenges.",
    second: "Let's make your runway longer.",
  },
  "product-organizations": {
    first: "Let's talk about your challenges.",
    second: "Let's talk about your challenges.",
  },
  agencies: {
    first: "Let's talk about your challenges.",
    second: "Real partnerships delivering real results",
  },
};

export default function ClientPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const data = clientPages[slug];

  if (!data) {
    return <div className="p-20 text-center text-2xl">Page not found</div>;
  }

  const challengeProps = challengeCardsData[slug];
  const pricing = pricingData[slug];
  const metrics = metricsData[slug];
  const cta = ctaHeadings[slug] ?? { first: "Let's talk about your challenges.", second: "The first conversation is a diagnosis, not a pitch." };

  return (
    <>
      {/* Navbar */}
      <Navbar2 />

      {/* Hero */}
      <div className="section-white">
        <Header62
          tagline={data.eyebrow}
          heading={data.heading}
          description={data.description}
        />
      </div>

      {/* Challenge cards — expandable accordion */}
      <div className="section-white">
        <ChallengeCards {...(challengeProps ?? {})} />
      </div>

      {/* CTA */}
      <div className="section-dark">
        <Cta7
          heading={cta.first}
          buttons={[
            { title: "Schedule a discovery call" },
            { title: "See engagement options", variant: "secondary" as const },
          ]}
        />
      </div>

      {/* Pricing */}
      {pricing && (
        <div className="section-gray">
          <Pricing13
            tagline={pricing.tagline}
            heading={pricing.heading}
            description={pricing.description}
            pricingPlans={pricing.pricingPlans}
          />
        </div>
      )}

      {/* Success Metrics */}
      {metrics && (
        <div className="section-white">
          <section className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
              <div className="mb-12 md:mb-18 max-w-xl">
                <p className="mb-3 font-semibold md:mb-4">{metrics.label}</p>
                <h2 className="mb-5 text-5xl md:text-7xl lg:text-8xl">{metrics.heading}</h2>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {metrics.metrics.map((metric, index) => (
                  <div key={index} className="rounded-2xl border border-border-primary bg-white p-6 md:p-8">
                    <h3 className="mb-4 text-2xl md:text-3xl">{metric.title}</h3>
                    <ul className="mb-6 space-y-2">
                      {metric.stats.map((stat, i) => (
                        <li key={i} className="text-sm text-neutral">{stat}</li>
                      ))}
                    </ul>
                    <p className="text-sm"><span className="font-medium">Impact: </span>{metric.impact}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* CTA */}
      <div className="section-dark">
        <Cta7
          heading={cta.second}
          buttons={[
            { title: "Schedule a discovery call" },
          ]}
        />
      </div>

      {/* Selected Work */}
      <div className="section-white">
        <Portfolio11 />
      </div>

      {/* Footer */}
      <div className="section-dark">
        <Footer12 />
      </div>
    </>
  );
}
