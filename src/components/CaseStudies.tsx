"use client";

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRef, useCallback } from "react";
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
  video?: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  featureSections: FeatureSectionProps[];
};

export type Layout409Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout409 = (props: Layout409Props) => {
  const { tagline, heading, description, featureSections } = {
    ...Layout409Defaults,
    ...props,
  };

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl max-w-[42rem] mx-auto">{heading}</h1>
          <p className="md:text-md max-w-xl mx-auto">{description}</p>
        </div>
        <div ref={containerRef} className="relative grid grid-cols-1 gap-6 md:h-[320vh] md:gap-0">
          {featureSections.map((featureSection, index) => (
            <FeatureSection
              key={index}
              {...featureSection}
              scrollYProgress={scrollYProgress}
              index={index}
              total={featureSections.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureSection = ({
  scrollYProgress,
  index,
  total,
  ...featureSection
}: FeatureSectionProps & {
  scrollYProgress: MotionValue<number>;
  index: number;
  total: number;
}) => {
  const isEven = index % 2 === 0;
  const sectionFraction = 1 / total;
  const start = sectionFraction * index;
  const end = sectionFraction * (index + 1);
  const scale = useTransform(scrollYProgress, [start, end], [1, index < total - 1 ? 0.88 : 1]);
  const y = useTransform(scrollYProgress, [start, end], ["0vh", index < total - 1 ? "-4vh" : "0vh"]);

  return (
    <React.Fragment>
      <div className="static grid grid-cols-1 content-center overflow-hidden border border-border-primary bg-neutral-white rounded-2xl md:hidden">
        <FeatureSectionContent isEven={isEven} {...featureSection} />
      </div>
      <motion.div
        className="hidden grid-cols-1 content-center overflow-hidden border border-border-primary bg-neutral-white rounded-2xl md:sticky md:top-[10vh] md:grid md:h-[80vh] md:grid-cols-2 md:gap-x-6 lg:gap-x-8"
        style={{ scale, y, zIndex: index + 1 }}
      >
        <FeatureSectionContent isEven={isEven} {...featureSection} />
      </motion.div>
    </React.Fragment>
  );
};

const HoverVideoImage = ({ image, video }: { image: ImageProps; video?: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  if (!video) {
    return <img src={image.src} alt={image.alt} className="size-full object-cover rounded-2xl" />;
  }

  return (
    <div
      className="group relative size-full overflow-hidden rounded-2xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={image.src} alt={image.alt} className="size-full object-cover" />
      <video
        ref={videoRef}
        src={video}
        muted
        playsInline
        loop
        preload="metadata"
        className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </div>
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
        {featureSection.buttons
          .filter((button) => button.title !== "View Details")
          .map((button, index) => (
          <Button key={index} {...button} asChild>
            <a href="/case-studies">{button.title}</a>
          </Button>
        ))}
      </div>
    </div>
    <div
      className={clsx(
        "order-last flex flex-col items-center justify-center overflow-hidden rounded-2xl p-0 md:m-3 lg:m-4",
        isEven ? "md:order-last" : "md:order-first",
      )}
    >
      <HoverVideoImage image={featureSection.image} video={featureSection.video} />
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
        { title: "Read Case Study" },
      ],
      image: {
        src: "/assets/poster-case-study-flowbird.jpg",
        alt: "Flowbird civic technology case study",
      },
      video: "/assets/video-case-study-flowbird.mp4",
    },
    {
      tagline: "FINANCIAL TECHNOLOGY",
      heading: "Estate planning platform in the $124T generational wealth transfer market.",
      description:
        "Where workflow errors have legal consequences and every design decision carries operational weight. 35% task completion improvement. 50% reduction in user errors.",
      buttons: [
        { title: "Read Case Study" },
      ],
      image: {
        src: "/assets/poster-case-study-estateguru.jpg",
        alt: "EstateGuru financial technology case study",
      },
      video: "/assets/video-case-study-estateguru.mp4",
    },
    {
      tagline: "INSTITUTIONAL FINANCE",
      heading: "Fund administration infrastructure serving $150M to $20B AUM.",
      description:
        "Where design decisions carry compliance risk and the consequences of getting it wrong are measurable. 150+ funds onboarded. $20B maximum AUM per fund.",
      buttons: [
        { title: "Read Case Study" },
      ],
      image: {
        src: "/assets/poster-case-study-euvic.jpg",
        alt: "Euvic institutional finance case study",
      },
      video: "/assets/video-case-study-euvic.mp4",
    },
  ],
};
