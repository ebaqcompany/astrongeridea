"use client";

import { use } from "react";
import { Navbar2 } from "@/components/Navbar";
import { Header62 } from "@/components/ServiceHero";
import { Cta7 } from "@/components/Cta";
import { Footer12 } from "@/components/Footer";
import { Button } from "@relume_io/relume-ui";
import { servicePages } from "./serviceData";

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const data = servicePages[slug];

  if (!data) {
    return <div className="p-20 text-center text-2xl">Page not found</div>;
  }

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

      {/* What it produces — cards */}
      <div className="section-gray">
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container">
            <h2 className="mb-12 text-4xl md:mb-18 md:text-5xl lg:text-6xl">
              {data.cardsHeading}
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {data.cards.map((card, index) => (
                <div
                  key={index}
                  className="flex flex-col border border-border-primary bg-white p-6 rounded-2xl md:p-8"
                >
                  <h3 className="mb-3 text-xl md:text-2xl">{card.heading}</h3>
                  <p className="text-sm text-neutral">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Challenges */}
      {data.challenges.length > 0 && (
        <div className="section-white">
          <section className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
              <div className="grid grid-cols-1 gap-12 md:gap-16">
                {data.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 gap-8 border-t border-border-primary pt-8 md:grid-cols-[auto_1fr] md:gap-12 md:pt-12"
                  >
                    <p className="font-mono text-5xl font-light text-[#E04834] md:text-6xl">
                      {challenge.number}.
                    </p>
                    <div>
                      <h3 className="mb-4 text-2xl md:text-3xl">
                        {challenge.title}
                      </h3>
                      <p className="mb-4 text-neutral">{challenge.problem}</p>
                      <p className="mb-2 font-semibold">Our solution</p>
                      <p className="mb-4">{challenge.solution}</p>
                      <p className="text-sm text-neutral">
                        <span className="font-medium">Relevant for: </span>
                        {challenge.relevantFor}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Case Study */}
      <div className="section-gray">
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
              <div>
                <div className="mb-4 flex flex-wrap gap-2">
                  {data.caseStudy.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-border-primary px-3 py-1 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mb-2 font-semibold">{data.caseStudy.eyebrow}</p>
                <h2 className="mb-5 text-4xl md:mb-6 md:text-5xl lg:text-6xl">
                  {data.caseStudy.heading}
                </h2>
                <p className="mb-8 md:text-md">{data.caseStudy.description}</p>
                <div className="mb-8 flex gap-8">
                  {data.caseStudy.stats.map((stat, i) => (
                    <div key={i}>
                      <p className="font-mono text-4xl font-light text-[#E04834]">
                        {stat.value}
                      </p>
                      <p className="text-sm text-neutral">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <Button>{data.caseStudy.buttonText}</Button>
              </div>
              <div className="aspect-video rounded-lg bg-neutral-lightest" />
            </div>
          </div>
        </section>
      </div>

      {/* CTA */}
      <div className="section-cta">
        <Cta7 />
      </div>

      {/* Selected Work — placeholder */}
      <div className="section-white">
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container">
            <h2 className="mb-12 text-4xl md:text-5xl lg:text-6xl">Selected work</h2>
            <p className="text-neutral">
              Relume component will be added here.
            </p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="section-dark">
        <Footer12 />
      </div>
    </>
  );
}
