"use client";

import { Navbar2 } from "@/components/Navbar";
import { Header62 } from "@/components/ServiceHero";
import { Layout495 } from "@/components/Audience";
import { Layout1 } from "@/components/CaseStudyCard";
import { Cta7 } from "@/components/Cta";
import { Footer12 } from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      {/* Navbar */}
      <Navbar2 />

      {/* Hero */}
      <div className="section-white">
        <Header62
          tagline="About"
          heading="Let's Build Momentum"
          description="Combining strategy, product design, and design operations to help teams move faster, reduce risk, and deliver digital experiences that hold up at scale."
        />
      </div>

      {/* What ASID Is */}
      <div className="section-gray">
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
              <div>
                <h2 className="mb-5 text-4xl md:text-5xl lg:text-6xl">What ASID Is</h2>
                <p className="mb-4 md:text-md">
                  A Stronger Idea Design is a product design consultancy founded to do one thing well: help companies design complex digital systems that hold together as they scale -- using a structured methodology that starts with the product ecosystem, not the feature list.
                </p>
                <p className="md:text-md">
                  ASID is not an agency. It is not a staffing solution. It is a consultancy built around a proprietary framework -- the ASID Framework -- developed and refined across 25 years of complex product work. Every engagement follows the framework. Every engagement produces something measurable.
                </p>
              </div>
              <div>
                <h2 className="mb-5 text-4xl md:text-5xl lg:text-6xl">Why Choose ASID</h2>
                <p className="mb-6 md:text-md">
                  Great design is not just how something looks. It is how it works, who it serves, and what it enables. We focus on clarity, adoption, and scalability, so teams can ship confidently and sustain quality over time.
                </p>
                <ul className="space-y-3 text-sm text-neutral">
                  <li><span className="font-medium text-foreground">Senior-Level Expertise:</span> Across strategy, UX/UI, and design operations.</li>
                  <li><span className="font-medium text-foreground">Seamless Integration:</span> We adapt to your team&apos;s processes -- or lead our own -- without friction.</li>
                  <li><span className="font-medium text-foreground">Purposeful AI Use:</span> To improve speed and insight without sacrificing quality.</li>
                  <li><span className="font-medium text-foreground">Flexible Partnership:</span> Serving startups, businesses, and agencies with equal focus and dedication.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Mission, Vision, Values */}
      <div className="section-white">
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 mb-16">
              <div>
                <p className="mb-3 font-semibold md:mb-4">Mission</p>
                <p className="md:text-md">
                  To deliver design that matters. From research and strategy to UX/UI and design operations, we help teams simplify complexity, improve adoption, and scale delivery with confidence.
                </p>
              </div>
              <div>
                <p className="mb-3 font-semibold md:mb-4">Vision</p>
                <p className="md:text-md">
                  To set a higher standard for digital design, where strategy, usability, and craft work together to create measurable impact.
                </p>
              </div>
            </div>

            <div>
              <p className="mb-3 font-semibold md:mb-4">Core Values</p>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Clarity", description: "We simplify complexity to create experiences that are intuitive, meaningful, and effective." },
                  { title: "Collaboration", description: "We work as true partners, bridging teams, disciplines, and perspectives." },
                  { title: "Craft", description: "Every detail matters -- from microinteractions to macro design systems." },
                  { title: "Integrity", description: "Transparency, accountability, and trust guide everything we do." },
                  { title: "Innovation", description: "We harness emerging tools, including AI, responsibly to amplify creativity and results." },
                ].map((value, index) => (
                  <div key={index} className="rounded-2xl border border-border-primary bg-white p-6 md:p-8">
                    <h3 className="mb-3 text-xl md:text-2xl">{value.title}</h3>
                    <p className="text-sm text-neutral">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Founder — using Layout1 as a bio section */}
      <div className="section-gray">
        <Layout1
          tagline="The Founder"
          heading="Eric Tomlinson"
          description="I founded ASID to practice a specific kind of product design — one that starts with the full system before it touches a single screen. Twenty-five years of building complex products taught me that the methodology matters more than the tools. Across roles at PayPal, Flowbird Group, Estate Guru, and KIRU, I have led large-scale redesigns, unified fragmented product ecosystems, and introduced design systems and DesignOps practices that reduced development friction and improved organizational UX maturity."
          buttons={[{ title: "Connect on LinkedIn", url: "https://www.linkedin.com/in/erictomlinson/" }]}
          image={{ src: "/assets/eric-tomlinson.avif", alt: "Eric Tomlinson — Founder & Principal Designer" }}
        />
      </div>

      {/* Partners / Who We Help */}
      <div className="section-white">
        <Layout495 />
      </div>

      {/* CTA */}
      <div className="section-dark">
        <Cta7
          heading="Most design problems are architecture problems in disguise."
          buttons={[{ title: "Schedule a Discovery Call" }]}
          headingWrapperClassName="w-full max-w-[48rem]"
          headingClassName="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-4xl xl:text-5xl"
        />
      </div>

      {/* Footer */}
      <div className="section-dark">
        <Footer12 />
      </div>
    </>
  );
}
