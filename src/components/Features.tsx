"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { RxChevronRight } from "react-icons/rx";
import { Button } from "@relume_io/relume-ui";
import { Tabs, TabsList, TabsTrigger } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

type ImageProps = {
  src: string;
  alt?: string;
};

type Section = {
  id: string;
  anchorTrigger: string;
  image: ImageProps;
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

type ObservedSectionProps = {
  section: Section;
  index: number;
  onIntersect: (index: number) => void;
  children: React.ReactNode;
};

type Props = {
  sections: Section[];
};

export type Layout350Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout351 = (props: Layout350Props) => {
  const { sections } = {
    ...Layout350Defaults,
    ...props,
  };

  const { activeSection, currentSection, scrollToSection, handleIntersection } =
    useSectionNavigation(sections);

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:gap-x-20">
          <div className="grid items-start gap-12 md:flex md:flex-col md:gap-0">
            <Tabs
              value={activeSection}
              onValueChange={scrollToSection}
              className="sticky top-24 z-10 hidden md:block"
            >
              <TabsList className="flex w-full gap-x-1 bg-transparent p-1">
                {sections.map((section) => (
                  <TabsTrigger
                    key={section.id}
                    value={section.id}
                    className="whitespace-nowrap px-5 py-2 rounded-full text-neutral data-[state=active]:bg-white data-[state=active]:text-neutral-black data-[state=inactive]:border data-[state=inactive]:border-border-primary data-[state=inactive]:bg-transparent"
                    style={{ textDecoration: 'none' }}
                  >
                    {section.anchorTrigger}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            {sections.map((section, index) => (
              <ObservedSection
                key={section.id}
                section={section}
                index={index}
                onIntersect={handleIntersection}
              >
                <ContentSection section={section} />
              </ObservedSection>
            ))}
          </div>

          <div className="sticky top-0 hidden h-screen flex-col items-center justify-center md:flex">
            <img src={currentSection.image.src} alt={currentSection.image.alt} />
          </div>
        </div>
      </div>
    </section>
  );
};

const getInitialActiveSection = (sections: Section[]): string => {
  if (typeof window === "undefined") return sections[0].id;

  const hash = window.location.hash.slice(1);
  const matchingSection = sections.find((section) => section.id === hash);
  return matchingSection?.id ?? sections[0].id;
};

const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
};

const useSectionNavigation = (sections: Section[]) => {
  const [activeSection, setActiveSection] = useState(() => getInitialActiveSection(sections));

  const scrollToSection = useCallback((sectionId: string) => {
    scrollToElement(sectionId);
    window.history.pushState(null, "", `#${sectionId}`);
  }, []);

  const handleIntersection = useCallback(
    (index: number) => {
      setActiveSection(sections[index].id);
    },
    [sections],
  );

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (sections.some((section) => section.id === hash)) {
        scrollToSection(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [sections, scrollToSection]);

  const currentSection = sections.find((section) => section.id === activeSection) ?? sections[0];

  return {
    activeSection,
    currentSection,
    scrollToSection,
    handleIntersection,
  };
};

const ObservedSection = ({ section, index, onIntersect, children }: ObservedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect(index);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [index, onIntersect]);

  return (
    <div id={section.id} ref={sectionRef}>
      {children}
    </div>
  );
};

const ContentSection = ({ section }: { section: Section }) => (
  <div className="flex flex-col items-start justify-center md:h-screen">
    <p className="mb-3 font-semibold md:mb-4">{section.tagline}</p>
    <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{section.heading}</h2>
    <p className="md:text-md">{section.description}</p>
    <div className="mt-6 flex items-center gap-x-4 md:mt-8">
      {section.buttons.map((button, index) => (
        <Button key={index} {...button} asChild>
          <a href={`/how/${section.id}`}>{button.title}</a>
        </Button>
      ))}
    </div>
    <div className="mt-10 md:hidden">
      <img src={section.image.src} alt={section.image.alt} />
    </div>
  </div>
);

export const Layout350Defaults = {
  sections: [
    {
      id: "product-strategy",
      anchorTrigger: "Strategy",
      image: {
        src: "/assets/poster-research-user-testing.jpg",
        alt: "Product Strategy",
      },
      tagline: "01 — Product Strategy",
      heading: "Know what to build before you build it.",
      description:
        "Ecosystem mapping, validated insight, and a strategic foundation before a single screen is drawn.",
      buttons: [
        {
          title: "Learn More",
          variant: "link" as const,
          size: "link" as const,
          iconRight: <RxChevronRight />,
        },
      ],
    },
    {
      id: "product-ux-design",
      anchorTrigger: "UX Design",
      image: {
        src: "/assets/poster-uiux.jpg",
        alt: "Product UX Design",
      },
      tagline: "02 — Product UX Design",
      heading: "Design for the workflow, not just the screen.",
      description:
        "User experience designed from workflow architecture outward. Coherent at the system level.",
      buttons: [
        {
          title: "Learn More",
          variant: "link" as const,
          size: "link" as const,
          iconRight: <RxChevronRight />,
        },
      ],
    },
    {
      id: "product-systems",
      anchorTrigger: "Systems",
      image: {
        src: "/assets/poster-team-design-ops.jpg",
        alt: "Product Systems",
      },
      tagline: "03 — Product Systems",
      heading: "The design system follows the product system.",
      description:
        "Design architecture that scales with the product. Not a component library layered over entropy.",
      buttons: [
        {
          title: "Learn More",
          variant: "link" as const,
          size: "link" as const,
          iconRight: <RxChevronRight />,
        },
      ],
    },
    {
      id: "ai-product-design",
      anchorTrigger: "AI Design",
      image: {
        src: "/assets/poster-marketing-ecommerce.jpg",
        alt: "AI Product Design",
      },
      tagline: "04 — AI Product Design",
      heading: "AI amplifies the methodology. It doesn't replace it.",
      description:
        "When products incorporate AI, systems thinking becomes more important, not less.",
      buttons: [
        {
          title: "Learn More",
          variant: "link" as const,
          size: "link" as const,
          iconRight: <RxChevronRight />,
        },
      ],
    },
  ],
};
