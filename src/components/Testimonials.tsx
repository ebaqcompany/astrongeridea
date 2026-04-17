"use client";

import { BiSolidStar } from "react-icons/bi";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

type ImageProps = {
  src: string;
  alt?: string;
};

type Testimonial = {
  quote: string;
  avatar: ImageProps;
  name: string;
  position: string;
  companyName: string;
  numberOfStars: number;
};

type Props = {
  heading: string;
  description: string;
  testimonials: Testimonial[];
};

export type Testimonial21Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Testimonial21 = (props: Testimonial21Props) => {
  const { heading, description, testimonials } = {
    ...Testimonial21Defaults,
    ...props,
  };

  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start" },
    [AutoScroll({ speed: 1.2, direction: "forward", stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  // Duplicate testimonials so there are enough to fill the viewport for seamless looping
  const loopedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="relume" className="overflow-hidden py-16 md:py-24 lg:py-28">
      <div className="container mb-12 max-w-xxl px-[5%] text-center md:mb-18 lg:mb-20">
        <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
        <p className="md:text-md">{description}</p>
      </div>
      <div className="cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex">
          {loopedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="mr-8 flex w-[25rem] min-w-[25rem] flex-none flex-col items-start justify-between bg-[#f0f0f0] border-none rounded-2xl p-6 md:p-8">
    <div className="mb-5 flex md:mb-6">
      {Array(testimonial.numberOfStars)
        .fill(null)
        .map((_, starIndex) => (
          <BiSolidStar key={starIndex} className="size-6" />
        ))}
    </div>
    <blockquote className="md:text-md">{testimonial.quote}</blockquote>
    <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
      <div>
        <img
          src={testimonial.avatar.src}
          alt={testimonial.avatar.alt}
          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
        />
      </div>
      <div>
        <p className="font-medium">{testimonial.name}</p>
        <p>
          <span>{testimonial.position}</span>, <span>{testimonial.companyName}</span>
        </p>
      </div>
    </div>
  </div>
);

export const Testimonial21Defaults: Props = {
  heading: "Partner Approved",
  description: "What our clients say about working with A Stronger Idea Design.",
  testimonials: [
    {
      quote:
        '"A Stronger Idea Design was highly attentive to detail with our mission and not just our design, demonstrated excellent project scoping skills, and was end-user oriented."',
      avatar: {
        src: "/assets/testimonial-jonathan-warenne.avif",
        alt: "Jonathan Chichoni Warenne",
      },
      name: "Jonathan Chichoni Warenne",
      position: "CEO",
      companyName: "EstateGuru",
      numberOfStars: 5,
    },
    {
      quote:
        '"Eric brought a rare mix of big-picture thinking and meticulous detail. The design leadership work helped streamline complexity, and the collaborative style made them a trusted partner across the board."',
      avatar: {
        src: "/assets/testimonial-greg-bebenek.avif",
        alt: "Greg Bebenek",
      },
      name: "Greg Bebenek",
      position: "Chief Technology Officer",
      companyName: "Euvic",
      numberOfStars: 5,
    },
    {
      quote:
        '"The expertise and leadership from A Stronger Idea Design have been instrumental in transforming how we approach UX at Flowbird. Their impact has gone beyond design—it has positively influenced our entire product development lifecycle."',
      avatar: {
        src: "/assets/testimonial-marek-juda.avif",
        alt: "Marek Juda",
      },
      name: "Marek Juda",
      position: "Digital Chief Operating Officer",
      companyName: "Flowbird",
      numberOfStars: 5,
    },
  ],
};
