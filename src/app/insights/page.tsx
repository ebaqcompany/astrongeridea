"use client";

import Link from "next/link";
import { Navbar2 } from "@/components/Navbar";
import { Header62 } from "@/components/ServiceHero";
import { Cta7 } from "@/components/Cta";
import { Footer12 } from "@/components/Footer";
import { articles } from "./[slug]/articleData";

export default function InsightsPage() {
  return (
    <>
      {/* Navbar */}
      <Navbar2 />

      {/* Hero */}
      <div className="section-white">
        <Header62
          tagline="Insights"
          heading="Thinking about product design"
          description="Perspectives on product strategy, design systems, and building digital products that hold together at scale."
        />
      </div>

      {/* Articles listing */}
      <div className="section-gray">
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="flex flex-col rounded-2xl border border-border-primary bg-white p-6 transition-shadow hover:shadow-medium md:p-8"
                >
                  <p className="mb-4 font-mono text-xs font-light uppercase tracking-wider text-primary">{article.tag}</p>
                  <h3 className="mb-3 text-xl md:text-2xl">{article.title}</h3>
                  <p className="mb-4 text-sm text-neutral">{article.description}</p>
                  <p className="mt-auto text-xs text-neutral-light">{article.date} &middot; {article.readTime}</p>
                </Link>
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
