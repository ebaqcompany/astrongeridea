"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { MotionValue, useMotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RxChevronRight } from "react-icons/rx";
import clsx from "clsx";
import React from "react";

type ImageProps = {
  src: string;
  alt?: string;
};

type FeatureSectionProps = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  featureSections: FeatureSectionProps[];
};

export type Layout409Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

const calculateScales = (totalSections: number, scrollYProgress: MotionValue<number>) => {
  return Array.from({ length: totalSections }, (_, index) => {
    const sectionFraction = 1 / totalSections;
    const start = sectionFraction * index;
    const end = sectionFraction * (index + 1);

    return index < totalSections - 1
      ? useTransform(scrollYProgress, [start, end], [1, 0.8])
      : useMotionValue(1);
  });
};

export const Layout409 = (props: Layout409Props) => {
  const { tagline, heading, description, featureSections } = {
    ...Layout409Defaults,
    ...props,
  };

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end 60%"],
  });

  const scales = calculateScales(featureSections.length, scrollYProgress);

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
          <p className="md:text-md">{description}</p>
        </div>
        <div ref={containerRef} className="sticky top-0 grid grid-cols-1 gap-6 md:gap-0">
          {featureSections.map((featureSection, index) => (
            <FeatureSection key={index} {...featureSection} scale={scales[index]} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureSection = ({
  scale,
  index,
  ...featureSection
}: FeatureSectionProps & {
  scale: MotionValue<number>;
  index: number;
}) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isEven = index % 2 === 0;

  return (
    <React.Fragment>
      {isMobile ? (
        <div className="static grid grid-cols-1 content-center overflow-hidden border border-border-primary bg-neutral-white">
          <FeatureSectionContent isEven={isEven} {...featureSection} />
        </div>
      ) : (
        <motion.div
          className="static grid grid-cols-1 content-center overflow-hidden border border-border-primary bg-neutral-white md:sticky md:top-[10%] md:mb-[10vh] md:h-[80vh] md:grid-cols-2"
          style={{ scale }}
        >
          <FeatureSectionContent isEven={isEven} {...featureSection} />
        </motion.div>
      )}
    </React.Fragment>
  );
};

const FeatureSectionContent = ({
  isEven,
  ...featureSection
}: FeatureSectionProps & { isEven: boolean }) => (
  <React.Fragment>
    <div
      className={clsx(
        "order-first flex flex-col justify-center p-6 md:p-8 lg:p-12",
        isEven ? "md:order-first" : "md:order-last",
      )}
    >
      <p className="mb-2 font-semibold">{featureSection.tagline}</p>
      <h2 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
        {featureSection.heading}
      </h2>
      <p>{featureSection.description}</p>
      <div className="mt-6 flex items-center gap-x-4 md:mt-8">
        {featureSection.buttons.map((button, index) => (
          <Button key={index} {...button}>
            {button.title}
          </Button>
        ))}
      </div>
    </div>
    <div
      className={clsx(
        "order-last flex flex-col items-center justify-center",
        isEven ? "md:order-last" : "md:order-first",
      )}
    >
      <img src={featureSection.image.src} alt={featureSection.image.alt} />
    </div>
  </React.Fragment>
);

export const Layout409Defaults: Props = {
  tagline: "THE WORK",
  heading: "The methodology applied to real products at scale.",
  description: "Complex problems. Structured approaches. Measurable results.",
  featureSections: [
    {
      tagline: "CIVIC TECHNOLOGY",
      heading: "A municipal parking platform serving the entire population of Detroit.",
      description:
        "Five distinct user types. Real-time operational requirements. City-level stakes. 200K+ monthly transactions. 4.6 App Store rating.",
      buttons: [
        { title: "Read Case Study", variant: "secondary" },
        {
          title: "View Details",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
      image: {
        src: "/assets/poster-case-study-flowbird.jpg",
        alt: "Flowbird civic technology case study",
      },
    },
    {
      tagline: "FINANCIAL TECHNOLOGY",
      heading: "Estate planning platform in the $124T generational wealth transfer market.",
      description:
        "Where workflow errors have legal consequences and every design decision carries operational weight. 35% task completion improvement. 50% reduction in user errors.",
      buttons: [
        { title: "Read Case Study", variant: "secondary" },
        {
          title: "View Details",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
      image: {
        src: "/assets/poster-case-study-estateguru.jpg",
        alt: "EstateGuru financial technology case study",
      },
    },
    {
      tagline: "INSTITUTIONAL FINANCE",
      heading: "Fund administration infrastructure serving $150M to $20B AUM.",
      description:
        "Where design decisions carry compliance risk and the consequences of getting it wrong are measurable. 150+ funds onboarded. $20B maximum AUM per fund.",
      buttons: [
        { title: "Read Case Study", variant: "secondary" },
        {
          title: "View Details",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
      image: {
        src: "/assets/poster-case-study-euvic.jpg",
        alt: "Euvic institutional finance case study",
      },
    },
  ],
};
