"use client";

import { use } from "react";
import { Navbar2 } from "@/components/Navbar";
import { Header62 } from "@/components/ServiceHero";
import { Layout1 } from "@/components/CaseStudyCard";
import { Portfolio23 } from "@/components/Challenges";
import { Portfolio11 } from "@/components/SelectedWork";
import { Cta7 } from "@/components/Cta";
import { Footer12 } from "@/components/Footer";
import { RxChevronRight } from "react-icons/rx";
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
      <Navbar2 />

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
      {data.challenges && data.challenges.length > 0 && (
        <div className="section-white">
          <Portfolio23
            tagline={data.challengesTagline || "Common Challenges"}
            title={data.challengesHeading || "Problems we solve"}
            description={data.challengesDescription || ""}
            projects={data.challenges.map((c) => ({
              heading: c.heading,
              tags: c.tags || [],
              description: c.description,
              buttons: [
                {
                  title: "Learn More",
                  variant: "link" as const,
                  size: "link" as const,
                  iconRight: <RxChevronRight />,
                },
              ],
              image: c.image || {
                src: "/assets/poster-research-user-testing.jpg",
                alt: c.heading,
              },
            }))}
          />
        </div>
      )}

      {/* Case Study */}
      <div className="section-white">
        <Layout1
          tagline={data.caseStudy.eyebrow}
          heading={data.caseStudy.heading}
          description={data.caseStudy.description}
          buttons={[{ title: data.caseStudy.buttonText, url: "/case-studies" }]}
          image={{ src: data.caseStudy.image || "/assets/poster-case-study-flowbird.jpg", alt: data.caseStudy.heading }}
        />
      </div>

      {/* CTA */}
      <div className="section-dark">
        <Cta7 />
      </div>

      {/* Selected Work */}
      <div className="section-gray">
        <Portfolio11 />
      </div>

      {/* Footer */}
      <div className="section-dark">
        <Footer12 />
      </div>
    </>
  );
}
