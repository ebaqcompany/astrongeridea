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
import { clientPages, startupPricing, startupMetrics } from "./clientData";

export default function ClientPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const data = clientPages[slug];

  if (!data) {
    return <div className="p-20 text-center text-2xl">Page not found</div>;
  }

  const isStartups = slug === "startups";

  return (
    <>
      {/* Navbar */}
      <div className="section-white">
        <Navbar2 />
      </div>

      {/* Hero */}
      <div className="section-white">
        <Header62
          tagline={data.eyebrow}
          heading={data.heading}
          description={data.description}
        />
      </div>

      {/* Challenge cards — expandable accordion */}
      {isStartups && (
        <div className="section-white">
          <ChallengeCards />
        </div>
      )}

      {/* Who We Help — reuse from homepage */}
      <div className="section-white">
        <Layout495 />
      </div>

      {/* CTA */}
      <div className="section-dark">
        <Cta7
          heading={isStartups ? "Let's talk about your challenges." : "The first conversation is a diagnosis, not a pitch."}
          buttons={[
            { title: "Schedule a discovery call" },
            { title: "See engagement options", variant: "secondary" as const },
          ]}
        />
      </div>

      {/* Pricing by stage — startups only */}
      {isStartups && (
        <div className="section-gray">
          <Pricing13
            tagline="Stage-Appropriate Design"
            heading="Design for every phase"
            description="Different funding stages have different design needs. Here's how we help at each stage of your journey."
            pricingPlans={startupPricing}
          />
        </div>
      )}

      {/* Success Metrics — startups only */}
      {isStartups && (
        <div className="section-white">
          <section className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
              <div className="mb-12 md:mb-18 max-w-xl">
                <p className="mb-3 font-semibold md:mb-4">Results</p>
                <h2 className="mb-5 text-5xl md:text-7xl lg:text-8xl">Startup & Scale-Up Success Metrics</h2>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {startupMetrics.map((metric, index) => (
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

      {/* Who We Help again */}
      <div className="section-gray">
        <Layout495 />
      </div>

      {/* CTA */}
      <div className="section-dark">
        <Cta7
          heading={isStartups ? "Let's make your runway longer." : "The first conversation is a diagnosis, not a pitch."}
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
