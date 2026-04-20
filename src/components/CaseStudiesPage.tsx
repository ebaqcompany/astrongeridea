import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

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
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <header className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
          <p className="md:text-md">{description}</p>
        </header>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-y-20">
          {projects.map((project, index) => (
            <Project key={index} index={index} {...project} />
          ))}
        </div>
        <footer className="mt-12 flex justify-center md:mt-18 lg:mt-20">
          <Button {...button} asChild>
            <a href="https://calendly.com/eric-astrongeridea/project_discussion">{button.title}</a>
          </Button>
        </footer>
      </div>
    </section>
  );
};

const Project: React.FC<ProjectProps & { index: number }> = ({ title, description, image, url, button, tags, index }) => (
  <article className={`md:col-span-2 ${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}>
    <div className="mb-5 md:mb-6">
      <a href={url}>
        <img src={image.src} className="w-full object-cover rounded-2xl" alt={image.alt} />
      </a>
    </div>
    <h3 className="mb-2 text-xl font-bold md:text-2xl">
      <a href={url}>{title}</a>
    </h3>
    <p>{description}</p>
    <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
      {tags.map((tag, index) => (
        <li key={index} className="flex">
          <a href={tag.url} className="bg-background-secondary px-2 py-1 text-sm font-semibold rounded-full">
            {tag.label}
          </a>
        </li>
      ))}
    </ul>
    <Button {...button} asChild className="mt-5 md:mt-6">
      <a href={url}>{button.title}</a>
    </Button>
  </article>
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
