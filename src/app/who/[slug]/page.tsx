"use client";

import { use } from "react";
import { Navbar2 } from "@/components/Navbar";
import { Header62 } from "@/components/ServiceHero";
import { Cta7 } from "@/components/Cta";
import { Footer12 } from "@/components/Footer";
import { clientPages } from "./clientData";

export default function ClientPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const data = clientPages[slug];

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

      {/* Middle sections — waiting for Relume components */}

      {/* CTA */}
      <div className="section-cta">
        <Cta7 />
      </div>

      {/* Footer */}
      <div className="section-dark">
        <Footer12 />
      </div>
    </>
  );
}
