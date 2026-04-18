"use client";

import { Navbar2 } from "@/components/Navbar";
import { Header62 } from "@/components/ServiceHero";
import { Cta7 } from "@/components/Cta";
import { Footer12 } from "@/components/Footer";

export default function InsightsPage() {
  return (
    <>
      {/* Navbar */}
      <div className="section-white">
        <Navbar2 />
      </div>

      {/* Hero */}
      <div className="section-white">
        <Header62
          tagline="Insights"
          heading="Thinking about product design"
          description="Perspectives on product strategy, design systems, and building digital products that hold together at scale."
        />
      </div>

      {/* Articles listing */}
      {/* TODO: Needs a blog/article listing component (Blog grid or Blog list from Relume) to display article cards with title, date, excerpt, and thumbnail */}
      <div className="section-gray">
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Design Entropy and the Sequencing Problem",
                  description: "Why products degrade over time and what sequencing decisions cause it.",
                  tag: "Product Strategy",
                },
                {
                  title: "Discovery Sprint: Why It Comes First",
                  description: "The case for validating before building -- and what a focused sprint actually produces.",
                  tag: "Discovery",
                },
                {
                  title: "Outside-In Product Design: The ASID Method",
                  description: "How designing from the market inward produces more coherent, scalable products.",
                  tag: "Methodology",
                },
              ].map((article, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-2xl border border-border-primary bg-white p-6 md:p-8"
                >
                  <p className="mb-4 font-mono text-xs font-light uppercase tracking-wider text-primary">{article.tag}</p>
                  <h3 className="mb-3 text-xl md:text-2xl">{article.title}</h3>
                  <p className="text-sm text-neutral">{article.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* CTA */}
      <div className="section-dark">
        <Cta7
          heading="The first conversation is a diagnosis, not a pitch."
          buttons={[{ title: "Schedule a Discovery Call" }]}
        />
      </div>

      {/* Footer */}
      <div className="section-dark">
        <Footer12 />
      </div>
    </>
  );
}
