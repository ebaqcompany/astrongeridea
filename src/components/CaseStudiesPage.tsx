"use client";

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useCallback, useRef } from "react";

type ImageProps = {
  src: string;
  alt?: string;
};

type Tag = {
  label: string;
  url: string;
};

type ProjectProps = {
  title: string;
  description: string;
  image: ImageProps;
  video?: string;
  url: string;
  button: ButtonProps;
  tags: Tag[];
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  projects: ProjectProps[];
  button: ButtonProps;
};

export type Portfolio7Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Portfolio7 = (props: Portfolio7Props) => {
  const { tagline, heading, description, projects, button } = {
    ...Portfolio7Defaults,
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
        <header className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
          <p className="md:text-md">{description}</p>
        </header>
        <div ref={containerRef} className="relative grid grid-cols-1 gap-y-10 md:h-[520vh] md:gap-y-0">
          {projects.map((project, index) => (
            <Project
              key={index}
              index={index}
              total={projects.length}
              scrollYProgress={scrollYProgress}
              {...project}
            />
          ))}
        </div>
        <footer className="mt-12 flex justify-center md:mt-18 lg:mt-20">
          <Button {...button} asChild>
            <a href="https://calendly.com/eric-astrongeridea/project_discussion" target="_blank" rel="noopener noreferrer">{button.title}</a>
          </Button>
        </footer>
      </div>
    </section>
  );
};

const HoverPreview = ({ image, video }: { image: ImageProps; video?: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const play = useCallback(() => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play().catch(() => {});
  }, []);

  const pause = useCallback(() => {
    videoRef.current?.pause();
  }, []);

  return (
    <div
      className="group relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-neutral-lighter"
      onMouseEnter={play}
      onMouseLeave={pause}
    >
      <img src={image.src} className="size-full object-cover" alt={image.alt} />
      {video && (
        <video
          ref={videoRef}
          src={video}
          muted
          playsInline
          loop
          preload="metadata"
          className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      )}
    </div>
  );
};

const Project = ({
  scrollYProgress,
  index,
  total,
  ...project
}: ProjectProps & {
  scrollYProgress: MotionValue<number>;
  index: number;
  total: number;
}) => {
  const sectionFraction = 1 / total;
  const start = sectionFraction * index;
  const end = sectionFraction * (index + 1);
  const scale = useTransform(scrollYProgress, [start, end], [1, index < total - 1 ? 0.9 : 1]);
  const y = useTransform(scrollYProgress, [start, end], ["0vh", index < total - 1 ? "-4vh" : "0vh"]);

  return (
    <>
      <article className="grid grid-cols-1 overflow-hidden rounded-lg border border-border-primary bg-white md:hidden">
        <ProjectContent index={index} {...project} />
      </article>
      <motion.article
        className="hidden grid-cols-1 overflow-hidden rounded-lg border border-border-primary bg-white md:sticky md:top-[10vh] md:grid md:h-[80vh] md:grid-cols-2"
        style={{ scale, y, zIndex: index + 1 }}
      >
        <ProjectContent index={index} {...project} />
      </motion.article>
    </>
  );
};

const ProjectContent: React.FC<ProjectProps & { index: number }> = ({
  title,
  description,
  image,
  video,
  url,
  button,
  tags,
  index,
}) => (
  <>
    <a
      href={url}
      className={`${index % 2 === 0 ? "md:order-first" : "md:order-last"} flex h-full items-center justify-center p-4 md:p-6`}
    >
      <HoverPreview image={image} video={video} />
    </a>
    <div className="flex min-h-[24rem] flex-col justify-center p-6 md:p-8 lg:p-12">
      <p className="mb-3 font-semibold">{String(index + 1).padStart(2, "0")}</p>
      <h3 className="mb-4 text-3xl leading-[1.15] md:text-4xl lg:text-5xl">
        <a href={url}>{title}</a>
      </h3>
      <p className="text-neutral">{description}</p>
      <ul className="mt-5 flex flex-wrap gap-2 md:mt-6">
        {tags.map((tag, tagIndex) => (
          <li key={tagIndex} className="flex">
            <a href={tag.url} className="rounded-full bg-background-secondary px-3 py-1 text-sm">
              {tag.label}
            </a>
          </li>
        ))}
      </ul>
      <Button {...button} asChild className="mt-6 w-fit md:mt-8">
        <a href={url}>{button.title}</a>
      </Button>
    </div>
  </>
);

const caseStudies: ProjectProps[] = [
  {
    title: "Flowbird: Redefining Urban Mobility Experience for Detroit",
    description:
      "As Head of UX, led the redesign of Detroit's parking experience, achieving 200,000+ transactions per month and a 4.6/5 app store rating.",
    image: {
      src: "/assets/poster-case-study-flowbird.jpg",
      alt: "Flowbird Park Detroit case study",
    },
    video: "/assets/video-case-study-flowbird.mp4",
    url: "/case-studies",
    button: {
      title: "View project",
      variant: "link" as const,
      size: "link" as const,
      iconRight: <RxChevronRight />,
    },
    tags: [
      { label: "UX and UI Design", url: "#" },
      { label: "Operations and Scaling", url: "#" },
      { label: "Fractional Leadership", url: "#" },
    ],
  },
  {
    title: "EstateGuru: A Financial Advisor\u2019s Job Made Effortless",
    description:
      "Product redesign that brought value and useful actions to the surface, achieving 35% improvement in task completion and over 50% reduction in user errors.",
    image: {
      src: "/assets/poster-case-study-estateguru.jpg",
      alt: "EstateGuru Financial Advisor Dashboard case study",
    },
    video: "/assets/video-case-study-estateguru.mp4",
    url: "/case-studies",
    button: {
      title: "View project",
      variant: "link" as const,
      size: "link" as const,
      iconRight: <RxChevronRight />,
    },
    tags: [
      { label: "UX and UI Design", url: "#" },
      { label: "Operations and Scaling", url: "#" },
    ],
  },
  {
    title: "Flowbird: A Centralized Platform for Smarter Parking Ecosystems",
    description:
      "As Head of UX, designed a full-view platform for parking and meter activity, notifications, terminal monitoring, zone and tariff management, income tracking, tariff simulations, and comprehensive reporting with AI-assisted chat.",
    image: {
      src: "/assets/poster-case-study-flowbird-hub.jpg",
      alt: "Flowbird Urban Management Dashboard Hub case study",
    },
    video: "/assets/video-case-study-flowbird.mp4",
    url: "/case-studies",
    button: {
      title: "View project",
      variant: "link" as const,
      size: "link" as const,
      iconRight: <RxChevronRight />,
    },
    tags: [
      { label: "UX and UI Design", url: "#" },
      { label: "Operations and Scaling", url: "#" },
      { label: "Fractional Leadership", url: "#" },
    ],
  },
  {
    title: "Feathers Vintage: Elevating a Beloved Boutique into a Digital Shopping Destination",
    description:
      "As Head of UX, delivered a sophisticated eCommerce experience resulting in +24% increase in daily online sales and +13% increase in average order value.",
    image: {
      src: "/assets/poster-case-study-feathers.jpg",
      alt: "Feathers Vintage eCommerce website case study",
    },
    video: "/assets/video-marketing-ecommerce.mp4",
    url: "/case-studies",
    button: {
      title: "View project",
      variant: "link" as const,
      size: "link" as const,
      iconRight: <RxChevronRight />,
    },
    tags: [
      { label: "UX and UI Design", url: "#" },
      { label: "eCommerce/Website Design", url: "#" },
    ],
  },
  {
    title: "EUVIC: Shaping a Scalable Solution to Analyze Substantial Financial Data",
    description:
      "As Lead UX, designed a scalable financial dashboard that drove rapid adoption, onboarding over 150 funds with assets ranging from $150 million to $20 billion.",
    image: {
      src: "/assets/poster-case-study-euvic.jpg",
      alt: "Euvic AlterDomus Financial Dashboard case study",
    },
    video: "/assets/video-case-study-euvic.mp4",
    url: "/case-studies",
    button: {
      title: "View project",
      variant: "link" as const,
      size: "link" as const,
      iconRight: <RxChevronRight />,
    },
    tags: [
      { label: "Fractional Leadership", url: "#" },
      { label: "UX/UI Design", url: "#" },
    ],
  },
];

export const Portfolio7Defaults: Props = {
  tagline: "Case Studies",
  heading: "The methodology applied to real products at scale.",
  description: "",
  projects: caseStudies,
  button: {
    title: "Schedule a Discovery Call",
    variant: "secondary",
  },
};
