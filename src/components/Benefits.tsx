import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type SectionProps = {
  image: ImageProps;
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

type Props = {
  sections: SectionProps[];
};

export type Layout232Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout232 = (props: Layout232Props) => {
  const { sections } = { ...Layout232Defaults, ...props };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">{section.heading}</h3>
              <p>{section.description}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                {section.buttons.map((button, index) => (
                  <Button key={index} {...button}>
                    {button.title}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Layout232Defaults: Props = {
  sections: [
    {
      image: {
        src: "/assets/poster-research-user-testing.jpg",
        alt: "A Structured Methodology",
      },
      heading: "A Structured Methodology",
      description:
        "The ASID Framework is a proprietary approach to product design built around three layers: ecosystem, workflow systems, and feature systems. Every engagement follows it.",
      buttons: [
        {
          title: "Case Study",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
    {
      image: {
        src: "/assets/case-study-estateguru.avif",
        alt: "Proven at Scale",
      },
      heading: "Proven at Scale",
      description:
        "25 years across fintech, enterprise SaaS, civic technology, and mobility. Products serving millions of users. Platforms managing billions in assets.",
      buttons: [
        {
          title: "Case Study",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
    {
      image: {
        src: "/assets/poster-case-study-flowbird.jpg",
        alt: "End-to-End Delivery",
      },
      heading: "End-to-End Delivery",
      description:
        "Discovery and strategy through design systems, engineering handoff, and launch. No handoffs between vendors. No gap between what was designed and what ships.",
      buttons: [
        {
          title: "Case Study",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
    {
      image: {
        src: "/assets/poster-uiux.jpg",
        alt: "Senior Expertise, Day One",
      },
      heading: "Senior Expertise, Day One",
      description:
        "You work directly with me. Every engagement gets 25 years of product design leadership applied to your specific problem — not delegated to a team that needs onboarding.",
      buttons: [
        {
          title: "Case Study",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
    {
      image: {
        src: "/assets/poster-team-design-ops.jpg",
        alt: "Flexible Engagements",
      },
      heading: "Flexible Engagements",
      description:
        "Discovery Sprint, project-based, monthly retainer, or fractional leadership. Start where your biggest risk is. Scale as the work proves value.",
      buttons: [
        {
          title: "Case Study",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
    {
      image: {
        src: "/assets/poster-marketing-ecommerce.jpg",
        alt: "AI-Enhanced Efficiency",
      },
      heading: "AI-Enhanced Efficiency",
      description:
        "AI is integrated at three specific stages of the ASID methodology: research synthesis, insight clustering, and component generation. The thinking is human. The time between input and insight is compressed.",
      buttons: [
        {
          title: "Case Study",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
  ],
};
