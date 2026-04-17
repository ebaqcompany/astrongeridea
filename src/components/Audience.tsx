"use client";

import clsx from "clsx";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Dialog, DialogContent, DialogTrigger, VideoIframe } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { FaCirclePlay } from "react-icons/fa6";

type ImageProps = {
  src: string;
  alt?: string;
};

type VideoProps = {
  image: ImageProps;
  url: string;
};

type TabProps = {
  icon: ImageProps;
  heading: string;
  description: string;
  image?: ImageProps;
  video?: VideoProps;
  buttons?: ButtonProps[];
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  tabs: TabProps[];
};

export type Layout495Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout495 = (props: Layout495Props) => {
  const { tagline, heading, description, buttons, tabs } = {
    ...Layout495Defaults,
    ...props,
  };
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-xl text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
          <p className="md:text-md">{description}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            {buttons.map((button, index) => (
              <Button key={index} {...button}>
                {button.title}
              </Button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 items-center gap-x-12 md:grid-cols-2 lg:gap-x-20">
          <div className="relative mb-8 grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] items-start md:mb-0 md:items-stretch">
            {tabs.map((tab, index) => (
              <div
                key={index}
                onClick={() => setActiveTab(index)}
                className={clsx(
                  "flex cursor-pointer items-center gap-4 border-b border-border-primary py-6",
                  {
                    "opacity-100": activeTab === index,
                    "opacity-50": activeTab !== index,
                  },
                )}
              >
                <div>
                  <h2 className="text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
                    {tab.heading}
                  </h2>
                  <motion.div
                    initial={false}
                    animate={{
                      height: activeTab === index ? "auto" : 0,
                      opacity: activeTab === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 md:mt-4">{tab.description}</p>
                    {tab.buttons && tab.buttons.length > 0 && (
                      <div className="mt-4 flex flex-wrap items-center gap-4">
                        {tab.buttons.map((button, btnIndex) => (
                          <Button key={btnIndex} {...button}>
                            {button.title}
                          </Button>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex max-h-full w-full items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              {tabs.map((tab, index) => {
                if (activeTab !== index) return null;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    exit={{ opacity: 0 }}
                  >
                    {tab.image && (
                      <img
                        src={tab.image.src}
                        alt={tab.image.alt}
                        className="size-full object-cover"
                      />
                    )}
                    {tab.video && (
                      <Dialog>
                        <DialogTrigger className="relative flex w-full items-center justify-center">
                          <img
                            src={tab.video.image.src}
                            alt={tab.video.image.alt}
                            className="size-full object-cover"
                          />
                          <span className="absolute inset-0 z-10 bg-black/50" />
                          <FaCirclePlay className="absolute z-20 size-16 text-white" />
                        </DialogTrigger>
                        <DialogContent>
                          <VideoIframe video={tab.video.url} />
                        </DialogContent>
                      </Dialog>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout495Defaults: Props = {
  tagline: "WHO WE HELP",
  heading: "We work with companies at the inflection point.",
  description:
    "The trigger is always the same: something changed and the current approach is no longer sufficient.",
  buttons: [
    { title: "Schedule a Discovery Call" },
    {
      title: "See Engagement Options",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
  tabs: [
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "Startups icon",
      },
      heading: "Startups & Scale-ups",
      description:
        "You have a product hypothesis and runway to build. Before you commit, make sure you're building the right thing in the right sequence.",
      buttons: [{ title: "Learn More" }],
      image: {
        src: "/assets/case-studies-all.avif",
        alt: "Startups and scale-ups",
      },
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "Product organizations icon",
      },
      heading: "Product Organizations",
      description:
        "Your product is growing but coherence is degrading. More design investment isn't fixing it. The sequence needs to change.",
      buttons: [{ title: "Learn More" }],
      image: {
        src: "/assets/case-study-estateguru.avif",
        alt: "Product organizations",
      },
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "Agencies icon",
      },
      heading: "Agencies & Partners",
      description:
        "You have a client project that needs strategic product depth your team can't provide in-house.",
      buttons: [{ title: "Learn More" }],
      image: {
        src: "/assets/poster-case-study-euvic.jpg",
        alt: "Agencies and delivery partners",
      },
    },
  ],
};
