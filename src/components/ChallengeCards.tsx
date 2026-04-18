"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuSearch, LuLightbulb, LuTarget } from "react-icons/lu";

type ExternalLink = {
  title: string;
  url: string;
};

type ChallengeCard = {
  number: number;
  heading: string;
  problem: string;
  solution: string;
  youNeed: string;
  results: string;
  stat?: string;
  statDescription?: string;
  links?: ExternalLink[];
};

type Props = {
  tagline: string;
  heading: string;
  cards: ChallengeCard[];
};

export type ChallengeCardsProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const ChallengeCards = (props: ChallengeCardsProps) => {
  const { tagline, heading, cards } = {
    ...ChallengeCardsDefaults,
    ...props,
  };

  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        {/* Section intro banner */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:mb-18 md:grid-cols-[2fr_1fr] md:gap-8">
          <div className="flex flex-col justify-end rounded-2xl p-8 md:p-12 lg:p-16" style={{ background: "linear-gradient(160deg, #FF5744, #C0392B)" }}>
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-white/80 md:mb-4">{tagline}</p>
            <h2 className="text-4xl text-white md:text-6xl lg:text-7xl">{heading}</h2>
          </div>
          <div className="hidden overflow-hidden rounded-2xl md:block">
            <img
              src="/assets/startups-hero.avif"
              alt="Startup challenges"
              className="size-full object-cover"
            />
          </div>
        </div>

        {/* Expandable cards */}
        <div className="flex flex-col gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
              className="cursor-pointer rounded-2xl bg-[#f5f3f2] overflow-hidden transition-all duration-300"
            >
              {/* Header — always visible */}
              <div className="flex items-center gap-4 p-6 md:p-8">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#E04834] text-sm font-medium text-white">
                  {card.number}
                </span>
                <h3 className="text-xl md:text-2xl">{card.heading}</h3>
              </div>

              {/* Expandable content */}
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-8 md:px-8 md:pb-10">
                      {/* Problem */}
                      <p className="mb-8 max-w-lg text-neutral">{card.problem}</p>

                      {/* Two columns: You need + Our solution */}
                      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div>
                          <div className="mb-3 flex items-center gap-2">
                            <LuSearch className="size-5 text-[#E04834]" />
                            <h3 className="text-lg md:text-xl">You need</h3>
                          </div>
                          <p className="text-sm text-neutral">{card.youNeed}</p>
                        </div>
                        <div>
                          <div className="mb-3 flex items-center gap-2">
                            <LuLightbulb className="size-5 text-[#E04834]" />
                            <h3 className="text-lg md:text-xl">Our solution</h3>
                          </div>
                          <p className="text-sm text-neutral">{card.solution}</p>
                        </div>
                      </div>

                      {/* Results */}
                      <div className="mt-8 border-t border-border-primary pt-6">
                        <div className="mb-3 flex items-center gap-2">
                          <LuTarget className="size-5 text-[#E04834]" />
                          <h3 className="text-lg md:text-xl">Results</h3>
                        </div>
                        <p className="text-sm text-neutral">{card.results}</p>
                      </div>

                      {/* Stat + links */}
                      {card.stat && (
                        <div className="mt-8 rounded-2xl bg-[#ebe8e6] p-6 md:p-8">
                          <p className="mb-1 font-mono text-3xl font-light text-[#E04834] md:text-4xl">{card.stat}</p>
                          {card.statDescription && (
                            <p className="mb-4 text-sm text-[#E04834]">{card.statDescription}</p>
                          )}
                          {card.links && card.links.length > 0 && (
                            <div className="flex flex-wrap gap-6 pt-2">
                              {card.links.map((link, i) => (
                                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm text-[#E04834] underline">
                                  {link.title}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ChallengeCardsDefaults: Props = {
  tagline: "Startup reality",
  heading: "5 Startup & Scale-Up Challenges",
  cards: [
    {
      number: 1,
      heading: "Validate without burning cash",
      problem:
        "You have an idea, maybe some early interest, but no way to know if people will actually pay for it. Building without validation wastes precious runway on solutions nobody asked for.",
      youNeed:
        "Evidence-backed validation through real user research, testing, and data—not just opinions from friends and family.",
      solution:
        "A 2-week Discovery Sprint using workshops, interviews, analysis, and prototypes to validate your concept and give you clear direction before full development.",
      results:
        "Reduce development risk by 40%+ and move forward with confidence—or pivot before it's too late.",
      stat: "42%",
      statDescription: "of startups fail due to no market need (CB Insights)",
      links: [
        { title: "CB Insights", url: "https://www.cbinsights.com/research/startup-failure-reasons-top/" },
        { title: "Startup Dev Kit", url: "https://startupdevkit.com/" },
        { title: "Engenesis Platform", url: "https://engenesis.com/" },
      ],
    },
    {
      number: 2,
      heading: "Quality design on a startup budget",
      problem:
        "You can't afford a $200K+ senior designer full-time, but junior designers lack the strategic experience to make decisions that affect your survival. You need enterprise-quality work at startup-friendly terms.",
      youNeed:
        "Senior-level design expertise from day one—without the cost, complexity, or commitment of permanent hires.",
      solution:
        "You get 20+ years of design leadership across fintech, mobility, and SaaS through flexible engagements—Discovery Sprints, projects, or retainers—to fit your stage and budget.",
      results:
        "Enterprise-quality design that increases investor confidence and user adoption—without burning runway on expensive hires.",
    },
    {
      number: 3,
      heading: "Speed vs building the right features",
      problem:
        "The pressure to launch fast creates a false choice: rush to market with poor UX or over-perfect features users don't need. Both waste time and money.",
      youNeed:
        "A process that combines speed with validation—identifying the most impactful features through research, then delivering quality design efficiently.",
      solution:
        "We prioritize ruthlessly based on user needs and business goals, then deliver high-quality design through proven workflows refined over 15+ years. No waste, no guessing.",
      results:
        "Reduce development risk by 40%+ and move forward with confidence—or pivot before it's too late.",
      stat: "Building the wrong product is a primary reason startups fail",
      links: [
        { title: "CB Insights", url: "https://www.cbinsights.com/research/startup-failure-reasons-top/" },
        { title: "Inc.com", url: "https://www.inc.com/" },
        { title: "Founders Forum Group", url: "https://foundersforum.eu/" },
      ],
    },
    {
      number: 4,
      heading: "Proving your product should be funded",
      problem:
        "VCs fund traction, not ideas. You need more than slides—you need a polished, validated product that demonstrates clear market potential and user demand.",
      youNeed:
        "An investor-ready product with validated research, professional design, and early traction signals that show product-market fit.",
      solution:
        "We build investor-ready products—research-validated, precisely designed, and backed by measurable early results. We know what investors want because we've helped startups get funded.",
      results:
        "Polished products that increase investor confidence and improve your chances of securing the funding you need.",
      stat: "Investors fund traction, not just ideas",
      links: [
        { title: "Startups.com", url: "https://www.startups.com/" },
        { title: "Investor Hunt", url: "https://investorhunt.co/" },
        { title: "Focused for Business", url: "https://focusedforbusiness.com/" },
      ],
    },
    {
      number: 5,
      heading: "Building design capabilities as you grow",
      problem:
        "Your design needs evolve rapidly from MVP to Series A to B to C. You need design systems, multi-platform consistency, and operational frameworks—but when and how?",
      youNeed:
        "A partner who scales with you—from MVP validation to comprehensive design systems to fractional leadership as you grow.",
      solution:
        "We've scaled UX teams across multiple organizations and can build your capabilities, create systems, or provide fractional leadership tailored to your stage.",
      results:
        "Design capabilities that grow with your business—without the trial-and-error of figuring it out yourself.",
    },
  ],
};
