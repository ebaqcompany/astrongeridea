"use client";

import React from "react";
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionStyle } from "framer-motion";
import { RxChevronRight } from "react-icons/rx";
import clsx from "clsx";

type TimelineCircleProps = {
  backgroundColor: MotionStyle;
  className?: string;
};

type TimelineItem = {
  heading: string;
  title: string;
  description: string;
  buttons: ButtonProps[];
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  timelineItems: TimelineItem[];
};

export type Timeline9Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Timeline9 = (props: Timeline9Props) => {
  const { tagline, heading, description, buttons, timelineItems } = {
    ...Timeline9Defaults,
    ...props,
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="relative z-10 w-full max-w-xxl">
              <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
              <p className="md:text-md">{description}</p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                {buttons.map((button, index) => (
                  <Button key={index} {...button}>
                    {button.title}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="relative grid grid-cols-1 justify-items-center gap-12 md:gap-20">
            <div className="absolute flex h-full w-8 flex-col items-center justify-self-start md:justify-self-auto">
              <div className="absolute z-10 h-16 w-1 bg-gradient-to-b from-background-primary to-transparent" />
              <div className="sticky top-0 mt-[-50vh] h-[50vh] w-[3px] bg-[#E04834]" />
              <div className="h-full w-[3px] bg-neutral-lighter" />
              <div className="absolute bottom-0 z-0 h-16 w-1 bg-gradient-to-b from-transparent to-background-primary" />
              <div className="absolute top-[-50vh] h-[50vh] w-full bg-background-primary" />
            </div>
            <React.Fragment>
              {timelineItems.map((item, index) => (
                <TimelineItem key={index} index={index} item={item} />
              ))}
            </React.Fragment>
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ item, index }: { item: TimelineItem; index: number }) => {
  const isEven = index % 2 === 0;
  const circleRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["end end", "end center"],
  });

  const backgroundColor = {
    backgroundColor: useTransform(scrollYProgress, [0.85, 1], ["#ccc", "#E04834"]),
  };

  return (
    <div className="grid grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
      {isEven ? (
        <React.Fragment>
          <div className="hidden w-full md:block" />
          <TimelineCircle ref={circleRef} backgroundColor={backgroundColor} />
          <TimelineContent item={item} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <TimelineContent item={item} alignment="right" />
          <TimelineCircle
            ref={circleRef}
            backgroundColor={backgroundColor}
            className="order-first md:order-none"
          />
          <div className="hidden w-full md:block" />
        </React.Fragment>
      )}
    </div>
  );
};

const TimelineCircle = React.forwardRef<HTMLDivElement, TimelineCircleProps>(
  ({ backgroundColor, className }, ref) => (
    <div className={clsx("flex h-full w-8 justify-center", className)}>
      <motion.div
        ref={ref}
        style={backgroundColor}
        className="z-20 mt-7 size-[0.9375rem] rounded-full shadow-[0_0_0_8px_white] md:mt-8"
      />
    </div>
  ),
);

const TimelineContent = ({
  item,
  alignment = "left",
}: {
  item: TimelineItem;
  alignment?: "left" | "right";
}) => (
  <div
    className={clsx(
      "z-20 mt-4 flex w-full flex-col md:w-auto",
      alignment === "right" && "items-start text-left md:items-end md:text-right",
    )}
  >
    <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
      {item.heading}
    </h3>
    <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">{item.title}</h4>
    <p>{item.description}</p>
    <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
      {item.buttons.map((button, index) => (
        <Button key={index} {...button}>
          {button.title}
        </Button>
      ))}
    </div>
  </div>
);

export const Timeline9Defaults: Props = {
  tagline: "THE METHOD",
  heading: "Design from the market inward, not the feature outward.",
  description:
    "Market Inward sequences every decision from the outermost layer in. The market defines the opportunity. The ecosystem defines what it requires. The product delivers it.",
  buttons: [
    { title: "See Our Method", variant: "secondary" },
    {
      title: "Start a Conversation",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
  timelineItems: [
    {
      heading: "01",
      title: "Market and Ecosystem First",
      description:
        "Map the full context before anything is designed. Every user type. Every constraint. Every adjacent system. What the market actually requires — before a single resource is committed to execution.",
      buttons: [
        { title: "Learn More", variant: "secondary" },
        {
          title: "See Case Studies",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
    {
      heading: "02",
      title: "Workflows Before Features",
      description:
        "Design how users move through the product before designing what they see. The layer most processes skip. The layer where most problems live. Workflows designed in ecosystem context hold together at scale.",
      buttons: [
        { title: "Learn More", variant: "secondary" },
        {
          title: "See Case Studies",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
    {
      heading: "03",
      title: "Product and System Last",
      description:
        "Features built on a foundation that makes them coherent. From the first decision to the final iteration. Not assembled from assumptions. Designed from validated ground.",
      buttons: [
        { title: "Learn More", variant: "secondary" },
        {
          title: "See Case Studies",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
  ],
};
