"use client";

import { Navbar2 } from "@/components/Navbar";
import { Header62 } from "@/components/ServiceHero";
import { Contact1 } from "@/components/ContactForm";
import { Cta7 } from "@/components/Cta";
import { Footer12 } from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      {/* Navbar */}
      <div className="section-white">
        <Navbar2 />
      </div>

      {/* Hero */}
      <div className="section-white">
        <Header62
          tagline="Contact"
          heading="Start the conversation. Build the future."
          description="Whether you need strategic insight, a trusted partner, or end-to-end design support -- let's explore how we can help bring your vision to life."
        />
      </div>

      {/* What to Expect */}
      <div className="section-gray">
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
              <div>
                <h2 className="mb-5 text-4xl md:text-5xl lg:text-6xl">What to Expect</h2>
                <p className="mb-6 md:text-md">
                  A Stronger Idea Design partners with teams that value clarity, collaboration, and outcomes. Whether you are exploring a focused engagement or a longer-term partnership, the first step is a simple conversation.
                </p>
                <p className="mb-4 font-medium">When you reach out, you can expect:</p>
                <ul className="mb-8 space-y-2 text-sm text-neutral">
                  <li>A thoughtful review of your goals and context</li>
                  <li>An honest perspective on fit and next steps</li>
                  <li>Clear recommendations, even if we are not the right partner</li>
                </ul>
                <p className="mb-4 font-medium">This conversation is a good fit if you:</p>
                <ul className="space-y-2 text-sm text-neutral">
                  <li>Are building or scaling a digital product, platform, or website</li>
                  <li>Need senior UX, product design, or design leadership support</li>
                  <li>Want to reduce risk before investing heavily in development</li>
                </ul>
              </div>
              <div>
                <h2 className="mb-5 text-4xl md:text-5xl lg:text-6xl">Get in Touch</h2>
                <p className="mb-6 md:text-md">
                  Schedule a discovery call or reach out directly. We would love to hear from you.
                </p>
                <div className="rounded-2xl border border-border-primary bg-white p-6 md:p-8">
                  <div className="mb-6">
                    <p className="mb-2 font-medium">Email</p>
                    <a href="mailto:hello@astrongeridea.design" className="text-sm text-neutral hover:text-foreground">
                      hello@astrongeridea.design
                    </a>
                  </div>
                  <div className="mb-6">
                    <p className="mb-2 font-medium">Location</p>
                    <p className="text-sm text-neutral">Austin, Texas (working with teams worldwide)</p>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#FF5744] to-[#C0392B] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                    >
                      Schedule a Discovery Call
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Form */}
      <div className="section-white">
        <Contact1
          tagline="Send a Message"
          heading="Contact us"
          description="Fill out the form below and we will get back to you within one business day."
          button={{ title: "Send Message" }}
        />
      </div>

      {/* CTA */}
      <div className="section-dark">
        <Cta7
          heading="Great design solves real problems."
          buttons={[
            { title: "View Case Studies" },
            { title: "See Our Process", variant: "secondary" as const },
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
