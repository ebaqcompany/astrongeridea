"use client";

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  video: string;
};

export type Header3Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header3 = (props: Header3Props) => {
  const { tagline, heading, description, buttons, video } = {
    ...Header3Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h1 className="mb-5 text-display md:mb-6">{heading}</h1>
            <p className="md:text-md">{description}</p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button} asChild>
                  <a
                    href={button.title === "Start a conversation" ? "https://calendly.com/eric-astrongeridea/project_discussion" : "/case-studies"}
                    {...(button.title === "Start a conversation" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {button.title}
                  </a>
                </Button>
              ))}
            </div>
          </div>
          <div className="relative w-full overflow-hidden rounded-lg">
            <video
              className="size-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Header3Defaults: Props = {
  tagline: "For Founders & Teams",
  heading: "Build The Right Product.",
  description:
    "A Stronger Idea Design is a product design consultancy that maps the market ecosystem before anything is designed, so every decision is built on validated ground.",
  buttons: [{ title: "Start a conversation" }, { title: "See Case Studies", variant: "secondary" }],
  video: "/hero-video.mp4",
};
