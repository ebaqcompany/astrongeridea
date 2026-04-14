import {
  Button,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";

import type { ButtonProps } from "@relume_io/relume-ui";

type QuestionsProps = {
  title: string;
  answer: string;
};

type Props = {
  heading: string;
  description: string;
  footerHeading: string;
  footerDescription: string;
  button: ButtonProps;
  questions: QuestionsProps[];
};

export type Faq1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Faq1 = (props: Faq1Props) => {
  const { heading, description, questions, footerHeading, footerDescription, button } = {
    ...Faq1Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-xl">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">{description}</p>
        </div>
        <Accordion type="multiple">
          {questions.map((question, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="md:py-5 md:text-md">{question.title}</AccordionTrigger>
              <AccordionContent className="md:pb-6">{question.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            {footerHeading}
          </h4>
          <p className="md:text-md">{footerDescription}</p>
          <div className="mt-6 md:mt-8">
            <Button {...button}>{button.title}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Faq1Defaults: Props = {
  heading: "Frequently Asked Questions",
  description:
    "Common questions about working with A Stronger Idea Design.",
  questions: [
    {
      title: "How is ASID different from a traditional design agency?",
      answer:
        "A Stronger Idea Design operates as a senior product and UX partner, not a production-only design agency. We focus on strategy, systems, and execution that scale, helping teams make better decisions rather than just delivering screens.",
    },
    {
      title: "What is your design process?",
      answer:
        "Our process starts with discovery and validation, then moves into design, iteration, and execution, and potentially into continued measurement and analytics. We adapt our approach to each engagement, but every project is grounded in user research, clear goals, and measurable outcomes.",
    },
    {
      title: "How long do projects typically take?",
      answer:
        "Project timelines vary based on scope and complexity, but most engagements range from a few weeks to several months. We define clear milestones early so teams know what to expect and can plan confidently.",
    },
    {
      title: "Do you work with startups, established businesses, or agencies?",
      answer:
        "We work with startups, growing product teams, established businesses, and agencies. Our work is especially effective for organizations navigating growth, complexity, or change and needing senior design leadership without building a full in-house team.",
    },
    {
      title: "Can you integrate with our existing team and tools?",
      answer:
        "Yes. We regularly embed with existing product, engineering, and marketing teams and work within established tools and workflows. Our goal is to strengthen how your team operates, not disrupt it.",
    },
    {
      title: "What is design operations and why does it matter?",
      answer:
        "Design operations focuses on the systems, processes, and standards that help design teams work efficiently at scale. Strong design operations reduce friction, improve consistency, and allow teams to deliver high-quality work faster as products and organizations grow.",
    },
    {
      title: "How quickly can we get started?",
      answer:
        "In many cases, we can begin within a few weeks depending on availability and scope. After an initial conversation, we outline next steps clearly so teams can move forward without unnecessary delay.",
    },
  ],
  footerHeading: "Still have questions?",
  footerDescription: "Let's talk about your project. No pressure. No obligation. Just clarity.",
  button: {
    title: "Contact",
    variant: "secondary",
  },
};
