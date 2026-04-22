"use client";

import { Navbar2 } from "@/components/Navbar";
import { Header62 } from "@/components/ServiceHero";
import { Portfolio7 } from "@/components/CaseStudiesPage";
import { Cta7 } from "@/components/Cta";
import { Footer12 } from "@/components/Footer";

export default function CaseStudiesPage() {
  return (
    <>
      {/* Navbar */}
      <Navbar2 />

      {/* Hero */}
      <div className="section-white">
        <Header62
          tagline="Work"
          heading="Solve problems & drive growth"
          description="These case studies show how A Stronger Idea Design helps organizations solve complex product challenges, improve adoption, and scale design effectively through research, design, and leadership."
        />
      </div>

      {/* Case Studies Grid */}
      <div className="section-gray">
        <Portfolio7 />
      </div>

      {/* CTA */}
      <div className="section-dark">
        <Cta7 />
      </div>

      {/* Footer */}
      <div className="section-dark">
        <Footer12 />
      </div>
    </>
  );
}
