import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { BiCheck } from "react-icons/bi";

type ImageProps = {
  src: string;
  alt?: string;
};

type PricingPlan = {
  icon: ImageProps;
  planName: string;
  price: string;
  discount?: string;
  description: string;
  features: string[];
  button: ButtonProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  pricingPlans: PricingPlan[];
};

export type Pricing13Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Pricing13 = (props: Pricing13Props) => {
  const { tagline, heading, description, pricingPlans } = {
    ...Pricing13Defaults,
    ...props,
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl max-w-[40rem] mx-auto">
            {heading}
          </h2>
          <p className="md:text-md max-w-xl mx-auto">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {pricingPlans.map((pricingPlan, index) => (
            <PricingPlan key={index} plan={pricingPlan} />
          ))}
        </div>
      </div>
    </section>
  );
};
const PricingPlan = ({ plan }: { plan: PricingPlan }) => (
  <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8 bg-white rounded-3xl">
    <div>
      <div className="flex items-start justify-between">
        <div>
          <h5 className="mb-2 text-2xl font-bold md:text-3xl lg:text-4xl">{plan.planName}</h5>
          <p>{plan.description}</p>
        </div>
        <div className="text-right">
          <h1 className="text-4xl font-light md:text-5xl lg:text-6xl">
            {plan.price}
            <span className="text-xl font-light md:text-2xl md:leading-[1.3] lg:text-3xl ml-1">/mo</span>
          </h1>
          <p className="mt-2 font-medium">{plan.discount}</p>
        </div>
      </div>
      <div className="my-8 h-px w-full shrink-0 bg-border" />
      <p>Includes:</p>
      <div className="mb-8 mt-4 grid grid-cols-1 gap-x-6 gap-y-4 py-2 md:grid-cols-2">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex self-start">
            <div className="mr-4 flex-none self-start">
              <BiCheck className="size-6 text-[#E04834]" />
            </div>
            <p>{feature}</p>
          </div>
        ))}
      </div>
    </div>
    <div>
      <Button {...plan.button} className="w-full" asChild>
        <a href="https://calendly.com/eric-astrongeridea/project_discussion">
          {plan.button.title}
        </a>
      </Button>
    </div>
  </div>
);

export const Pricing13Defaults: Props = {
  tagline: "4 Engagement Options",
  heading: "Flexible partnerships that match your stage and needs",
  description: "Not sure which model fits? Let's sort it out with a call. No pressure. No obligation. Just clarity.",
  pricingPlans: [
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "Discovery Sprint icon",
      },
      planName: "Discovery Sprint",
      description: "Validate Before Building",
      price: "$8.5K",
      discount: "~2 weeks, one-time project",
      features: [
        "Validate concept with user insights",
        "Roadmap reducing development risk",
        "Budget clarity for next phases",
        "Confidence to proceed (or pivot)",
      ],
      button: { title: "Schedule a Discovery Call" },
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "Project-Based icon",
      },
      planName: "Project-Based",
      description: "Complete Design Delivery from Discovery to Launch",
      price: "$25K",
      discount: "6-16 weeks typical",
      features: [
        "Launch-ready product",
        "Complete design system/documentation",
        "Trained team ready to maintain",
        "Measurable success metrics",
      ],
      button: { title: "Schedule a Discovery Call" },
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "Monthly Retainer icon",
      },
      planName: "Monthly Retainer",
      description: "Dedicated Design Capacity with Flexibility",
      price: "$8K",
      discount: "40-120 hrs/month",
      features: [
        "Continuous product improvement",
        "Faster feature delivery",
        "Flexible capacity without hiring",
        "Strategic partnership that grows with you",
      ],
      button: { title: "Schedule a Discovery Call" },
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "Fractional Leadership icon",
      },
      planName: "Fractional Leadership",
      description: "Strategic Leadership Without Full-Time Overhead",
      price: "$12K",
      discount: "2-4 days a week",
      features: [
        "Clear design vision & strategy",
        "Build or scale design team",
        "Operational frameworks that work",
        "Measurable improvement in design maturity",
        "Reduced hiring risk & faster time-to-value",
      ],
      button: { title: "Schedule a Discovery Call" },
    },
  ],
};
