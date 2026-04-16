"use client";

import { Navbar2 } from "@/components/Navbar";
import { Header3 } from "@/components/Hero";
import { Stats8 } from "@/components/Stats";
import { Timeline9 } from "@/components/Timeline";
import { Layout351 } from "@/components/Features";
import { Layout409 } from "@/components/CaseStudies";
import { Layout232 } from "@/components/Benefits";
import { Layout495 } from "@/components/Audience";
import { Pricing13 } from "@/components/Pricing";
import { Testimonial21 } from "@/components/Testimonials";
import { Faq1 } from "@/components/Faq";
import { Cta7 } from "@/components/Cta";
import { Footer12 } from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Navbar — white */}
      <div className="section-white">
        <Navbar2 />
      </div>

      {/* Hero — white */}
      <div className="section-white">
        <Header3 />
      </div>

      {/* Stats — gradient red */}
      <div className="section-cta">
        <Stats8 />
      </div>

      {/* Timeline — white */}
      <div className="section-white">
        <Timeline9 />
      </div>

      {/* CTA after method — gray */}
      <div className="section-gray">
        <Cta7
          heading="The first conversation is a diagnosis, not a pitch."
          description=""
          buttons={[
            { title: "Schedule a discovery call" },
            { title: "See engagement options", variant: "secondary" },
          ]}
        />
      </div>

      {/* Features — gray */}
      <div className="section-gray">
        <Layout351 />
      </div>

      {/* CTA — gradient red */}
      <div className="section-cta">
        <Cta7 />
      </div>

      {/* Case Studies — white */}
      <div className="section-white">
        <Layout409 />
      </div>

      {/* CTA — gradient red */}
      <div className="section-cta">
        <Cta7 />
      </div>

      {/* Benefits — gray */}
      <div className="section-gray">
        <Layout232 />
      </div>

      {/* Audience — white */}
      <div className="section-white">
        <Layout495 />
      </div>

      {/* CTA — gradient red */}
      <div className="section-cta">
        <Cta7 />
      </div>

      {/* Pricing — gray */}
      <div className="section-gray">
        <Pricing13 />
      </div>

      {/* Testimonials — white */}
      <div className="section-white">
        <Testimonial21 />
      </div>

      {/* FAQ — gray */}
      <div className="section-gray">
        <Faq1 />
      </div>

      {/* Footer — dark */}
      <div className="section-dark">
        <Footer12 />
      </div>
    </>
  );
}
