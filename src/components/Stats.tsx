"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import type { ButtonProps } from "@relume_io/relume-ui";
import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

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
  const { image, tagline, heading, description, buttons, cards } = {
    ...Layout518Defaults,
    ...props,
  };

  const isMobile = useMediaQuery("(max-width: 991px)");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroWidth = useTransform(scrollYProgress, [0, 1], ["100vw", "55vw"]);
  const scaleHeight = useTransform(scrollYProgress, [0, 1], ["100vh", "90vh"]);
  const position = useTransform(scrollYProgress, [0, 1], ["-5%", "0%"]);
  const cardsXPosition = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const cardsWidth = useTransform(scrollYProgress, [0, 1], ["100vw", "35vw"]);

  const motionHeroStyles = {
    width: heroWidth,
    height: scaleHeight,
    y: position,
    x: position,
  };

  const motionCardsStyles = {
    width: cardsWidth,
    height: scaleHeight,
    y: position,
    x: cardsXPosition,
  };

  if (isMobile) {
    return (
      <section id="relume" className="relative px-[5%] py-16 md:py-24">
        <div className="relative mb-6 flex items-center justify-center rounded-2xl px-6 py-16 md:mb-8 md:px-8 md:py-24">
          <HeroContent
            tagline={tagline}
            heading={heading}
            description={description}
            buttons={buttons}
            image={image}
          />
        </div>
        <div className="grid grid-cols-1 gap-y-6 md:gap-y-8">
          {cards.map((card, index) => (
            <div key={index} className="flex border border-border-primary rounded-2xl p-8 text-center">
              <CardContent card={card} variant="mobile" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      id="relume"
      ref={containerRef}
      className="relative py-16 md:py-24 lg:h-[250vh] lg:py-0"
    >
      <div className="mx-auto w-[90vw] lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-full lg:items-center lg:justify-center lg:overflow-hidden">
        <div className="grid grid-cols-1 gap-y-6 md:gap-y-8 lg:h-[90vh] lg:w-[90vw] lg:grid-cols-[55vw_35vw] lg:gap-y-0">
          <motion.div
            style={motionHeroStyles}
            className="relative flex items-center justify-center rounded-2xl px-6 py-16 md:px-8 md:py-24 lg:p-3"
          >
            <HeroContent
              tagline={tagline}
              heading={heading}
              description={description}
              buttons={buttons}
              image={image}
            />
          </motion.div>
          <motion.div
            style={motionCardsStyles}
            className="grid grid-cols-1 gap-y-6 md:gap-y-8 lg:pl-8"
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
  );
};

const HeroContent = ({
  tagline,
  heading,
  description,
  buttons,
}: Pick<Props, "tagline" | "heading" | "description" | "buttons" | "image">) => (
  <>
    <div className="relative z-10 max-w-md text-left">
      <h2 className="mb-5 text-5xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
        {heading}
      </h2>
      <p className="text-text-alternative md:text-md">{description}</p>
    </div>
    <div className="absolute inset-0 z-0 rounded-2xl" style={{ background: "linear-gradient(160deg, #FF5744, #C0392B)" }} />
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
  const x = useTransform(
    scrollYProgress,
    [0, index * 0.01, 0.2 + index * 0.5, 1],
    ["100%", "100%", "0%", "0%"],
  );

  const isLastCard = index === 2;

  return (
    <motion.div
      style={{ x, ...(isLastCard ? { background: "#1B2126" } : {}) }}
      className={`flex rounded-2xl p-8 text-left lg:max-w-[640px] ${
        isLastCard ? "text-white" : "border border-border-primary"
      }`}
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
