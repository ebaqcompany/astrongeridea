"use client";

import { Navbar2 } from "@/components/Navbar";
import { Header62 } from "@/components/ServiceHero";
import { Layout495 } from "@/components/Audience";
import { Faq1 } from "@/components/Faq";
import { Cta7 } from "@/components/Cta";
import { Footer12 } from "@/components/Footer";

export default function ProcessPage() {
  return (
    <>
      {/* Navbar */}
      <Navbar2 />

      {/* Hero */}
      <div className="section-white">
        <Header62
          tagline="Process"
          heading="Reduce risk & accelerate results"
          description="A flexible, evidence-driven process designed to reduce risk, improve decision-making, and support long-term product success."
        />
      </div>

      {/* Working Principles */}
      <div className="section-gray">
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container">
            <div className="mb-12 max-w-xl md:mb-18">
              <p className="mb-3 font-semibold md:mb-4">Working Principles</p>
              <h2 className="mb-5 text-4xl md:text-5xl lg:text-6xl">How decisions get made.</h2>
              <p className="md:text-md">The process is guided by a small set of principles that shape how decisions are made throughout an engagement.</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {[
                { title: "Evidence before opinion", description: "Decisions are grounded in user insight, data, and real constraints, not assumptions or preferences." },
                { title: "Clarity over speed", description: "Moving fast matters, but only when direction is clear. We slow down when uncertainty creates risk." },
                { title: "Systems over artifacts", description: "We design systems that scale, not just screens or features." },
                { title: "Collaboration over handoff", description: "We work closely with product, engineering, and stakeholders to ensure solutions are adopted and maintained." },
              ].map((item, index) => (
                <div key={index} className="rounded-2xl border border-border-primary bg-white p-6 md:p-8">
                  <h3 className="mb-3 text-xl md:text-2xl">{item.title}</h3>
                  <p className="text-sm text-neutral">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Core Phases */}
      {/* TODO: Needs a timeline/process component (Timeline or Layout component from Relume) for the 4 core phases with detailed activities, deliverables, and outcomes */}
      <div className="section-white">
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container">
            <div className="mb-12 max-w-xl md:mb-18">
              <p className="mb-3 font-semibold md:mb-4">Core Phases</p>
              <h2 className="mb-5 text-4xl md:text-5xl lg:text-6xl">Structure without rigidity.</h2>
              <p className="md:text-md">These phases provide structure without forcing work into a linear sequence. Depending on the engagement, phases may overlap, repeat, or vary in depth.</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {[
                {
                  phase: "01",
                  title: "Discover",
                  subtitle: "Uncover Insights. Validate Assumptions. Define Strategy.",
                  description: "We align on users, goals, and the market -- using research and workshops to uncover opportunities and risks before development, reducing risk and creating clarity.",
                  outcomes: "Validated direction, aligned stakeholders, clear roadmap",
                },
                {
                  phase: "02",
                  title: "Define",
                  subtitle: "Align Vision. Establish Structure. Plan Execution.",
                  description: "We transform insights into actionable design strategy. Information architecture, user flows, and wireframes establish the foundation for intuitive experiences aligned with business objectives.",
                  outcomes: "Clear structure, validated flows, technical alignment",
                },
                {
                  phase: "03",
                  title: "Design",
                  subtitle: "Create Experiences. Refine Details. Test with Users.",
                  description: "We bring strategy to life through high-fidelity design, motion, and interaction. Every pixel serves a purpose. Every decision is validated through testing and iteration.",
                  outcomes: "Polished design, validated experiences, production-ready assets",
                },
                {
                  phase: "04",
                  title: "Deliver & Support",
                  subtitle: "Launch with Confidence. Enable Your Team. Measure Success.",
                  description: "Great design means nothing if it is not implemented well. We ensure seamless handoff to development, provide ongoing support, and measure success against established KPIs.",
                  outcomes: "Successful launch, enabled team, measurable results",
                },
              ].map((item, index) => (
                <div key={index} className="rounded-2xl border border-border-primary p-6 md:p-8">
                  <p className="mb-4 font-mono text-sm font-light uppercase tracking-wider text-primary">{item.phase}</p>
                  <h3 className="mb-1 text-2xl md:text-3xl">{item.title}</h3>
                  <p className="mb-4 text-sm font-medium text-neutral">{item.subtitle}</p>
                  <p className="mb-4 text-sm text-neutral">{item.description}</p>
                  <p className="text-xs"><span className="font-medium">Outcomes: </span>{item.outcomes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* 6 Critical Product Design Challenges */}
      <div className="section-gray">
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container">
            <div className="mb-12 max-w-xl md:mb-18">
              <p className="mb-3 font-semibold md:mb-4">Critical Challenges</p>
              <h2 className="mb-5 text-4xl md:text-5xl lg:text-6xl">6 critical product design challenges.</h2>
              <p className="md:text-md">Most product design problems are not design problems. They are architecture problems.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Building before validating", description: "Rushing to features before the product system is understood creates expensive rework and products that solve the wrong problems at scale." },
                { title: "Designing screens, not systems", description: "Features that work in isolation break when the product grows. Consistency, handoff, and governance become impossible without system architecture underneath." },
                { title: "Scaling without a foundation", description: "Teams grow faster than the systems that support them. Design debt compounds. Velocity drops." },
                { title: "Compliance as an afterthought", description: "Accessibility, privacy, and regulatory requirements retrofitted late cost 3-5x more to implement and introduce legal exposure." },
                { title: "Design disconnected from outcomes", description: "When design work is not tied to measurable objectives from the start, its value becomes subjective -- and the first thing cut when priorities shift." },
                { title: "Handoff as a failure point", description: "Gaps between design and engineering compound at scale. Without clear specs, shared systems, and governance, what ships differs from what was designed." },
              ].map((item, index) => (
                <div key={index} className="rounded-2xl border border-border-primary bg-white p-6 md:p-8">
                  <h3 className="mb-3 text-xl md:text-2xl">{item.title}</h3>
                  <p className="text-sm text-neutral">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Adapting the Process */}
      <div className="section-white">
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container max-w-3xl">
            <h2 className="mb-5 text-4xl md:text-5xl lg:text-6xl">Adapting the process to your needs.</h2>
            <p className="mb-8 md:text-md text-neutral">The way we apply this process depends on your needs.</p>
            <div className="space-y-6">
              {[
                { title: "Early-stage or new initiatives", description: "Greater emphasis on discovery and definition to reduce risk." },
                { title: "Scaling products and teams", description: "Focus on design systems, consistency, and operational efficiency." },
                { title: "Ongoing partnerships or leadership support", description: "Continuous iteration, guidance, and decision support embedded within your team." },
              ].map((item, index) => (
                <div key={index} className="rounded-2xl border border-border-primary p-6 md:p-8">
                  <h3 className="mb-2 text-xl md:text-2xl">{item.title}</h3>
                  <p className="text-sm text-neutral">{item.description}</p>
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
          heading="Let's talk about your challenges."
          buttons={[
            { title: "Schedule a Discovery Call" },
            { title: "See Our Services", variant: "secondary" as const },
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
