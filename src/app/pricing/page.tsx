"use client";

import { Navbar2 } from "@/components/Navbar";
import { Header62 } from "@/components/ServiceHero";
import { Pricing13 } from "@/components/Pricing";
import { Cta7 } from "@/components/Cta";
import { Footer12 } from "@/components/Footer";
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { BiCheck } from "react-icons/bi";

/* ── Layout1 (Relume Feature Section) ─────────────────────── */
type ImageProps = {
  src: string;
  alt?: string;
};

type Layout1Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
  reverse?: boolean;
  children?: React.ReactNode;
};

const Layout1 = ({
  tagline,
  heading,
  description,
  buttons,
  image,
  reverse = false,
  children,
}: Layout1Props) => {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div
          className={`grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20 ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div>
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h2 className="rb-5 mb-5 text-4xl md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h2>
            <p className="mb-6 md:text-md">{description}</p>
            {children}
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {buttons.map((button, index) => {
                const t = button.title?.toLowerCase() || "";
                const href = t.includes("schedule") || t.includes("discovery call") || t.includes("let's talk") || t.includes("book")
                  ? "https://calendly.com/eric-astrongeridea/project_discussion"
                  : t.includes("case stud") ? "/case-studies"
                  : t.includes("method") ? "/method/market-inward"
                  : t.includes("services") || t.includes("about our services") ? "/how/product-strategy"
                  : t.includes("about eric") ? "/about"
                  : "https://calendly.com/eric-astrongeridea/project_discussion";
                return (
                  <Button key={index} {...button} asChild>
                    <a href={href}>{button.title}</a>
                  </Button>
                );
              })}
            </div>
          </div>
          <div>
            <img
              src={image.src}
              className="w-full rounded-2xl object-cover"
              alt={image.alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Includes List Component ──────────────────────────────── */
const IncludesList = ({ items }: { items: string[] }) => (
  <div className="mt-4 grid grid-cols-1 gap-y-3">
    {items.map((item, index) => (
      <div key={index} className="flex items-start">
        <div className="mr-3 flex-none">
          <BiCheck className="size-5 text-[#E04834]" />
        </div>
        <p className="text-sm">{item}</p>
      </div>
    ))}
  </div>
);

export default function PricingPage() {
  return (
    <>
      {/* Navbar */}
      <div className="section-white">
        <Navbar2 />
      </div>

      {/* Hero */}
      <div className="section-white">
        <Header62
          tagline="Engagement Options"
          heading="Flexible Partnerships That Match Your Stage and Needs"
          description="The methodology is the differentiator. The engagement model is the flexibility. Not sure which model fits? Let's sort it out with a call. No pressure. No obligation. Just clarity."
        />
      </div>

      {/* ── Detailed Pricing Sections ─────────────────────── */}

      {/* Discovery Sprint */}
      <div className="section-white">
        <Layout1
          tagline="Popular for Startups"
          heading="Discovery Sprint"
          description="A focused 2-week engagement to validate your concept, understand your users, and define a clear product roadmap before you invest in full development. Perfect for reducing risk and increasing investor confidence."
          buttons={[
            { title: "Schedule a Discovery Call" },
            {
              title: "Learn more about our method",
              variant: "link",
              size: "link",
              iconRight: <RxChevronRight />,
            },
          ]}
          image={{
            src: "/assets/poster-research-user-testing.jpg",
            alt: "Discovery Sprint — user research and validation",
          }}
        >
          <div className="mb-4">
            <p className="font-mono text-2xl font-light text-[#E04834] md:text-3xl">
              $8,500 &ndash; $12,500
            </p>
            <p className="mt-1 text-sm text-neutral-500">
              ~2 weeks, one-time project
            </p>
          </div>
          <p className="mb-2 text-sm font-semibold">What&apos;s Included:</p>
          <IncludesList
            items={[
              "Validate concept with user insights",
              "Roadmap reducing development risk",
              "Budget clarity for next phases",
              "Confidence to proceed (or pivot)",
            ]}
          />
          <div className="mt-4">
            <p className="text-sm text-neutral-500">
              <span className="font-medium text-foreground">Typical path:</span>{" "}
              Discovery Sprint leads into a Project-Based or Monthly Retainer engagement.
            </p>
          </div>
        </Layout1>
      </div>

      {/* Project-Based */}
      <div className="section-gray">
        <Layout1
          tagline="Best for Defined Scope"
          heading="Project-Based"
          description="Fixed scope, schedule, and budget. This model works well for specific initiatives like redesigns, websites, MVP development, or design system builds — where outcomes and timelines are known from the start."
          reverse
          buttons={[
            { title: "Schedule a Discovery Call" },
            {
              title: "See case studies",
              variant: "link",
              size: "link",
              iconRight: <RxChevronRight />,
            },
          ]}
          image={{
            src: "/assets/poster-uiux.jpg",
            alt: "Project-Based — complete design delivery",
          }}
        >
          <div className="mb-4">
            <p className="font-mono text-2xl font-light text-[#E04834] md:text-3xl">
              From $25K+
            </p>
            <p className="mt-1 text-sm text-neutral-500">
              6&ndash;16 weeks typical
            </p>
          </div>
          <p className="mb-2 text-sm font-semibold">What&apos;s Included:</p>
          <IncludesList
            items={[
              "Launch-ready product",
              "Complete design system/documentation",
              "Trained team ready to maintain",
              "Measurable success metrics",
            ]}
          />
          <div className="mt-4">
            <p className="text-sm text-neutral-500">
              <span className="font-medium text-foreground">Typical path:</span>{" "}
              Often starts with a Discovery Sprint. Transitions to a Retainer for ongoing evolution.
            </p>
          </div>
        </Layout1>
      </div>

      {/* Monthly Retainer */}
      <div className="section-white">
        <Layout1
          tagline="Best for Ongoing Momentum"
          heading="Monthly Retainer"
          description="Dedicated design hours each month with flexibility for shifting priorities. Ideal for product evolution, continuous optimization, team augmentation, or maintaining design momentum without permanent hires."
          buttons={[
            { title: "Schedule a Discovery Call" },
            {
              title: "Learn about our services",
              variant: "link",
              size: "link",
              iconRight: <RxChevronRight />,
            },
          ]}
          image={{
            src: "/assets/poster-marketing-ecommerce.jpg",
            alt: "Monthly Retainer — continuous design capacity",
          }}
        >
          <div className="mb-4">
            <p className="font-mono text-2xl font-light text-[#E04834] md:text-3xl">
              $8,000+/month
            </p>
            <p className="mt-1 text-sm text-neutral-500">
              40&ndash;120 hrs/month
            </p>
          </div>
          <p className="mb-2 text-sm font-semibold">What&apos;s Included:</p>
          <IncludesList
            items={[
              "Continuous product improvement",
              "Faster feature delivery",
              "Flexible capacity without hiring",
              "Strategic partnership that grows with you",
            ]}
          />
          <div className="mt-4">
            <p className="text-sm text-neutral-500">
              <span className="font-medium text-foreground">Typical path:</span>{" "}
              Teams often begin with a Discovery Sprint or Project, then transition to a Retainer for sustained momentum.
            </p>
          </div>
        </Layout1>
      </div>

      {/* Fractional Leadership */}
      <div className="section-gray">
        <Layout1
          tagline="Leadership Expertise"
          heading="Fractional Leadership"
          description="Access senior design leadership (20+ years experience) to shape vision, scale operations, mentor talent, and ensure your product delivers real user value — without the $200K+ cost, equity, and complexity of a full-time Director of Design hire."
          reverse
          buttons={[
            { title: "Schedule a Discovery Call" },
            {
              title: "About Eric Tomlinson",
              variant: "link",
              size: "link",
              iconRight: <RxChevronRight />,
            },
          ]}
          image={{
            src: "/assets/poster-team-design-ops.jpg",
            alt: "Fractional Leadership — strategic design leadership",
          }}
        >
          <div className="mb-4">
            <p className="font-mono text-2xl font-light text-[#E04834] md:text-3xl">
              From $12,000+/month
            </p>
            <p className="mt-1 text-sm text-neutral-500">
              2&ndash;4 days a week
            </p>
          </div>
          <p className="mb-2 text-sm font-semibold">What&apos;s Included:</p>
          <IncludesList
            items={[
              "Clear design vision & strategy",
              "Build or scale design team",
              "Operational frameworks that work",
              "Measurable improvement in design maturity",
              "Reduced hiring risk & faster time-to-value",
            ]}
          />
          <div className="mt-4">
            <p className="text-sm text-neutral-500">
              <span className="font-medium text-foreground">Typical path:</span>{" "}
              Ideal for organizations needing sustained design leadership to shape strategy, build teams, and drive operational maturity.
            </p>
          </div>
        </Layout1>
      </div>

      {/* CTA */}
      <div className="section-dark">
        <Cta7
          heading="Great design means shaping technology to serve purpose and value."
          description=""
          buttons={[
            { title: "Schedule a Discovery Call" },
            { title: "Read more about services", variant: "secondary" },
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
