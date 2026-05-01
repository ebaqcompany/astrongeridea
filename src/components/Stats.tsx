"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import type { ButtonProps } from "@relume_io/relume-ui";

export type ImageProps = {
  src: string;
  alt?: string;
};

export type CardProps = {
  image: ImageProps;
  heading: string;
  description: string;
  button: ButtonProps;
};

export type Props = {
  image: ImageProps;
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  cards: CardProps[];
};

export type Layout518Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Stats8 = (props: Layout518Props) => {
  const { heading, description, cards } = {
    ...Layout518Defaults,
    ...props,
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroWidth = useTransform(scrollYProgress, [0, 0.5, 1], ["100vw", "52vw", "52vw"]);
  const heroHeight = useTransform(scrollYProgress, [0, 0.5, 1], ["100vh", "78vh", "78vh"]);
  const heroX = useTransform(scrollYProgress, [0, 0.5, 1], ["0vw", "5vw", "5vw"]);
  const heroY = useTransform(scrollYProgress, [0, 0.5, 1], ["0vh", "11vh", "11vh"]);
  const heroRadius = useTransform(scrollYProgress, [0, 0.5, 1], ["0px", "16px", "16px"]);
  const cardsXPosition = useTransform(scrollYProgress, [0, 0.18, 0.96, 1], ["120%", "120%", "0%", "0%"]);
  const motionHeroStyles = {
    width: heroWidth,
    height: heroHeight,
    x: heroX,
    y: heroY,
    borderRadius: heroRadius,
  };

  const motionCardsStyles = {
    x: cardsXPosition,
  };

  return (
    <>
      <section className="relative px-[5%] py-16 md:py-24 lg:hidden">
        <div className="relative mb-6 flex items-center justify-center overflow-hidden rounded-2xl px-6 py-16 md:mb-8 md:px-8 md:py-24">
          <HeroContent
            heading={heading}
            description={description}
          />
        </div>
        <div className="grid grid-cols-1 gap-y-6 md:gap-y-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex rounded-2xl p-8 text-center ${
                index === cards.length - 1
                  ? "bg-[#1B2126] text-white"
                  : "border border-border-primary bg-white"
              }`}
            >
              <CardContent card={card} variant="mobile" />
            </div>
          ))}
        </div>
      </section>
      <section
        id="relume"
        ref={containerRef}
        className="relative isolate hidden py-16 md:py-24 lg:block lg:h-[420vh] lg:bg-white lg:py-0"
      >
        <div className="mx-auto w-[90vw] lg:sticky lg:top-0 lg:h-screen lg:w-full lg:overflow-hidden">
          <div className="relative h-screen w-full overflow-hidden bg-white">
            <motion.div
              style={motionHeroStyles}
              className="absolute left-0 top-0 z-10 flex items-center justify-center overflow-hidden px-6 py-16 md:px-8 md:py-24 lg:px-[5vw] lg:py-0"
            >
              <HeroContent
                heading={heading}
                description={description}
              />
            </motion.div>
            <motion.div
              style={motionCardsStyles}
              className="absolute right-[5vw] top-[11vh] z-20 grid h-[78vh] w-[34vw] grid-cols-1 gap-y-6"
            >
              {cards.map((card, index) => (
                <AnimatedCard
                  key={index}
                  card={card}
                  index={index}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

const HeroContent = ({
  heading,
  description,
}: Pick<Props, "heading" | "description">) => (
  <>
    <div className="relative z-10 max-w-xl text-left px-8 lg:px-12">
      <h2 className="mb-5 text-5xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
        {heading}
      </h2>
      <p className="text-text-alternative md:text-md">{description}</p>
    </div>
    <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(160deg, #FF5744, #C0392B)" }} />
  </>
);

const CardContent = ({
  card,
  variant = "mobile",
}: {
  card: CardProps;
  variant?: "mobile" | "desktop";
}) => (
  <div className="mx-auto flex max-w-md flex-col items-start justify-center text-left lg:max-w-full">
    <h3
      className={
        variant === "desktop"
          ? "mb-3 text-4xl font-light leading-[1.2] font-mono md:mb-4 md:text-5xl lg:text-6xl"
          : "mb-3 text-4xl font-light leading-[1.2] font-mono md:mb-4 md:text-5xl"
      }
    >
      {card.heading}
    </h3>
    <p>{card.description}</p>
  </div>
);

const AnimatedCard = ({
  card,
  index,
  scrollYProgress,
}: {
  card: CardProps;
  index: number;
  scrollYProgress: MotionValue<number>;
}) => {
  const startDelay = 0.2 + index * 0.18;
  const slideIn = 0.54 + index * 0.14;
  const x = useTransform(
    scrollYProgress,
    [0, startDelay, slideIn, 1],
    ["32%", "32%", "0%", "0%"],
  );
  const y = useTransform(scrollYProgress, [startDelay, slideIn], [28, 0]);

  const isLastCard = index === 2;

  return (
    <motion.div
      className={`flex min-h-0 rounded-2xl p-8 text-left lg:max-w-[640px] ${
        isLastCard ? "text-white" : "border border-border-primary bg-white"
      }`}
      layout={false}
      style={{
        x,
        y,
        ...(isLastCard ? { background: "#1B2126" } : {}),
      }}
    >
      <CardContent card={card} variant="desktop" />
    </motion.div>
  );
};

export const Layout518Defaults: Props = {
  image: {
    src: "",
    alt: "",
  },
  tagline: "",
  heading: "You Invested In Your Product. Something Still Isn't Working.",
  description: "",
  buttons: [],
  cards: [
    {
      image: { src: "", alt: "" },
      heading: "31%",
      description:
        "of software projects are cancelled before completion due to requirements failures, not technical ones.",
      button: { title: "" },
    },
    {
      image: { src: "", alt: "" },
      heading: "53%",
      description:
        "cost nearly double their original estimate for the same reason.",
      button: { title: "" },
    },
    {
      image: { src: "", alt: "" },
      heading: "The Cause Is Usually The Sequence.",
      description: "",
      button: { title: "" },
    },
  ],
};

export const StatsScroll = Stats8;
