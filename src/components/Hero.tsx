"use client";

import { useState } from "react";
import { Button, Dialog, DialogContent, DialogTrigger } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { FaCirclePlay } from "react-icons/fa6";
import { CgSpinner } from "react-icons/cg";
import clsx from "clsx";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  video: string;
  image: ImageProps;
};

export type Header3Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header3 = (props: Header3Props) => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const { tagline, heading, description, buttons, video, image } = {
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
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <button className="relative flex w-full items-center justify-center" style={{borderRadius: 0, background: 'transparent', border: 'none'}}>
                <img src={image.src} alt={image.alt} className="size-full object-cover" />
                <span className="absolute inset-0 z-10 bg-black/50" />
                <FaCirclePlay className="absolute z-20 size-16 text-white inset-0 m-auto" />
              </button>
            </DialogTrigger>
            <DialogContent>
              {!isIframeLoaded && <CgSpinner className="mx-auto size-16 animate-spin text-white" />}
              <iframe
                className={clsx("z-0 mx-auto aspect-video size-full md:w-[738px] lg:w-[940px]", {
                  visible: isIframeLoaded,
                  hidden: !isIframeLoaded,
                })}
                src={video}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                onLoad={() => setIsIframeLoaded(true)}
              ></iframe>
            </DialogContent>
          </Dialog>
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
  video: "https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW",
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg",
    alt: "A Stronger Idea Design work showcase",
  },
};
