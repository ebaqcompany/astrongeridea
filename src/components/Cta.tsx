import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

export type Cta7Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

const CALENDLY_URL = "https://calendly.com/eric-astrongeridea/project_discussion";

function getButtonUrl(title?: string): string {
  if (!title) return CALENDLY_URL;
  const t = title.toLowerCase();
  if (t.includes("schedule") || t.includes("discovery call") || t.includes("let's talk") || t.includes("start a conversation") || t.includes("book")) return CALENDLY_URL;
  if (t.includes("case stud") || t.includes("view case")) return "/case-studies";
  if (t.includes("engagement") || t.includes("pricing")) return "/pricing";
  if (t.includes("process") || t.includes("our process")) return "/process";
  if (t.includes("services") || t.includes("about services") || t.includes("read more about services")) return "/how/product-strategy";
  if (t.includes("method")) return "/method/market-inward";
  return CALENDLY_URL;
}

export const Cta7 = (props: Cta7Props) => {
  const { heading, description, buttons } = {
    ...Cta7Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid w-full grid-cols-1 items-center justify-between gap-6 md:grid-cols-[1fr_max-content] md:gap-x-12 md:gap-y-8 lg:gap-x-20">
        <div className="md:mr-12 lg:mr-0">
          <div className="w-full max-w-lg">
            <h2 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
              {heading}
            </h2>
            <p className="md:text-md">{description}</p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-4">
          {buttons.map((button, index) => (
            <Button key={index} {...button} asChild>
              <a href={getButtonUrl(button.title)}>
                {button.title}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Cta7Defaults: Props = {
  heading: "The first conversation is a diagnosis, not a pitch.",
  description: "Bring your product challenge. We'll tell you what we see.",
  buttons: [{ title: "Schedule a Discovery Call" }],
};
