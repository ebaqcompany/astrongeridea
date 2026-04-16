import type { ButtonProps } from "@relume_io/relume-ui";

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

export type Header62Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header62 = (props: Header62Props) => {
  const { tagline, heading, description } = {
    ...Header62Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
        <h1 className="mb-5 text-display md:mb-6">{heading}</h1>
        <p className="md:text-md">{description}</p>
      </div>
    </section>
  );
};

export const Header62Defaults: Props = {
  tagline: "Tagline",
  heading: "Short heading here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  buttons: [],
};
