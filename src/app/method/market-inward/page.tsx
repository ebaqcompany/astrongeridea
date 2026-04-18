"use client";

import { Navbar2 } from "@/components/Navbar";
import { Header62 } from "@/components/ServiceHero";
import { Stats8 } from "@/components/Stats";
import { Layout495 } from "@/components/Audience";
import { Cta7 } from "@/components/Cta";
import { Footer12 } from "@/components/Footer";

export default function MarketInwardPage() {
  return (
    <>
      {/* Navbar */}
      <div className="section-white">
        <Navbar2 />
      </div>

      {/* Hero */}
      <div className="section-white">
        <Header62
          tagline="The Methodology"
          heading="Market Inward"
          description="The design methodology that starts where every product decision should -- with the market and the user needs."
        />
      </div>

      {/* The Problem */}
      <div className="section-gray">
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container max-w-3xl">
            <h2 className="mb-5 text-4xl md:text-5xl lg:text-6xl">Most products are designed from the inside out.</h2>
            <p className="mb-4 text-xl text-neutral">Features first. Systems discovered later. Incoherence appears.</p>
            <p className="md:text-md text-neutral">
              Products don't fail at launch. They fail at the kickoff meeting -- when the team starts building before they understand what the market and their users actually need. What follows is atrophy. Each decision made without a validated foundation pulls the product slightly further from coherence.
            </p>
          </div>
        </section>
      </div>

      {/* Three Steps of Market Inward */}
      <div className="section-white">
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container">
            <div className="mb-12 max-w-xl md:mb-18">
              <p className="mb-3 font-semibold md:mb-4">The Sequence</p>
              <h2 className="mb-5 text-4xl md:text-5xl lg:text-6xl">Market Inward reverses the sequence.</h2>
              <p className="md:text-md">Start from the market. Design inward from there. Let the product emerge from what the market actually requires.</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Market and ecosystem first.",
                  description: "Map the full context before anything is designed. Who are all the users. What are all the constraints. What does the market actually require.",
                },
                {
                  step: "02",
                  title: "Workflows and strategy before features.",
                  description: "Design how users move through the product before designing what they see. The layer most processes skip. The layer where most problems live.",
                },
                {
                  step: "03",
                  title: "Product and systems.",
                  description: "Features, website, and marketing built on a foundation that makes them coherent from the first decision to the final iteration. Not assembled. Designed.",
                },
              ].map((item, index) => (
                <div key={index} className="rounded-2xl border border-border-primary bg-white p-6 md:p-8">
                  <p className="mb-4 font-mono text-sm font-light uppercase tracking-wider text-primary">{item.step}</p>
                  <h3 className="mb-3 text-xl md:text-2xl">{item.title}</h3>
                  <p className="text-sm text-neutral">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* It doesn't end at launch */}
      <div className="section-gray">
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container max-w-3xl text-center">
            <h2 className="mb-5 text-4xl md:text-5xl lg:text-6xl">It doesn't end at launch.</h2>
            <p className="md:text-md text-neutral">
              The market responds. Users behave. Those signals refine the ecosystem map, update the workflows, improve the product. The market that informed the design at the beginning continues to inform it at every stage after.
            </p>
          </div>
        </section>
      </div>

      {/* Why It Matters - Stats */}
      {/* TODO: Needs a custom stats/proof-points component for the 31%, 53%, 2 wks data points */}
      <div className="section-white">
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container">
            <div className="mb-12 max-w-xl md:mb-18">
              <p className="mb-3 font-semibold md:mb-4">Why It Matters</p>
              <h2 className="mb-5 text-4xl md:text-5xl lg:text-6xl">The numbers speak for themselves.</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                { stat: "31%", description: "of projects cancelled due to requirements failures. Not technical ones. -- Standish Group" },
                { stat: "53%", description: "cost double the estimate. Same cause. -- Standish Group" },
                { stat: "2 wks", description: "is what a Discovery Sprint costs in time. Versus months of rework." },
              ].map((item, index) => (
                <div key={index} className="rounded-2xl border border-border-primary p-6 md:p-8 text-center">
                  <p className="mb-4 font-mono text-5xl font-light text-primary md:text-6xl">{item.stat}</p>
                  <p className="text-sm text-neutral">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* The Playbook Phases */}
      <div className="section-gray">
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container">
            <div className="mb-12 max-w-xl md:mb-18">
              <p className="mb-3 font-semibold md:mb-4">The Playbook</p>
              <h2 className="mb-5 text-4xl md:text-5xl lg:text-6xl">The methodology runs on a structured playbook.</h2>
              <p className="md:text-md">The methodology is the thinking. The playbook is how it gets done.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { phase: "01", title: "Market Analysis", description: "Understanding the opportunity, the competitive landscape, and the forces shaping the space before any design begins." },
                { phase: "02", title: "Discovery and Validation", description: "Ecosystem mapping, stakeholder research, user definition, and constraint inventory. The full context, documented." },
                { phase: "03", title: "Definition and Strategy", description: "Workflow architecture, information architecture, and product strategy. The structural decisions every downstream choice depends on." },
                { phase: "04", title: "Design Engineering and Systems", description: "Interface design, prototyping, design system, and component library. Built on the architecture established in Phase 03." },
                { phase: "05", title: "Delivery and Go to Market", description: "Build readiness, handoff, launch support, and go-to-market integration. The product and the market, connected." },
                { phase: "06", title: "Performance and Iteration", description: "Measurement, learning, and refinement. The market continues to inform the product long after launch." },
              ].map((item, index) => (
                <div key={index} className="rounded-2xl border border-border-primary bg-white p-6 md:p-8">
                  <p className="mb-4 font-mono text-sm font-light uppercase tracking-wider text-primary">{item.phase}</p>
                  <h3 className="mb-3 text-xl md:text-2xl">{item.title}</h3>
                  <p className="text-sm text-neutral">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Entry Points */}
      <div className="section-white">
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container">
            <div className="mb-12 max-w-xl md:mb-18">
              <p className="mb-3 font-semibold md:mb-4">Entry Points</p>
              <h2 className="mb-5 text-4xl md:text-5xl lg:text-6xl">Three entry points based on your needs.</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  title: "Foundation Mode",
                  description: "Applied before the product is built. The full arc from ecosystem mapping through product system.",
                  entry: "Entry point: Discovery Sprint",
                },
                {
                  title: "Diagnostic Mode",
                  description: "Applied to a product already in motion. The same sequence run as an audit -- identifying where the inside-out pattern created entropy and restoring coherence.",
                  entry: "Entry point: Product Architecture Audit within a Fractional or Project Engagement",
                },
                {
                  title: "Embedded Mode",
                  description: "You need ongoing strategic design leadership integrated into your team's process. The playbook runs as a continuous discipline, informing decisions as they are made, not after.",
                  entry: "Entry point: Fractional Design Leadership",
                },
              ].map((item, index) => (
                <div key={index} className="rounded-2xl border border-border-primary p-6 md:p-8">
                  <h3 className="mb-3 text-xl md:text-2xl">{item.title}</h3>
                  <p className="mb-4 text-sm text-neutral">{item.description}</p>
                  <p className="text-xs font-medium text-primary">{item.entry}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Who We Help */}
      <div className="section-gray">
        <Layout495 />
      </div>

      {/* CTA */}
      <div className="section-dark">
        <Cta7
          heading="The first conversation is a diagnosis, not a pitch."
          buttons={[
            { title: "Schedule a Discovery Call" },
          ]}
        />
      </div>

      {/* Footer */}
      <div className="section-dark">
        <Footer12 />
      </div>
    </>
  );
}
