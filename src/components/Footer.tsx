"use client";
import { Button, Input } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { FaXTwitter } from "react-icons/fa6";
import {
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { useState } from "react";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Links = {
  title: string;
  url: string;
};

type ColumnLinks = {
  title: string;
  links: Links[];
};

type SocialMediaLinks = {
  url: string;
  icon: React.ReactNode;
};

type FooterLink = {
  title: string;
  url: string;
};

type Props = {
  logo: ImageProps;
  newsletterHeading: string;
  newsletterDescription: string;
  inputPlaceholder?: string;
  button: ButtonProps;
  termsAndConditions: string;
  columnLinks: ColumnLinks[];
  socialMediaLinks: SocialMediaLinks[];
  footerText?: string;
  footerLinks: FooterLink[];
};

export type Footer5Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Footer12 = (props: Footer5Props) => {
  const {
    logo,
    newsletterHeading,
    newsletterDescription,
    inputPlaceholder,
    button,
    termsAndConditions,
    columnLinks,
    socialMediaLinks,
    footerText,
    footerLinks,
  } = {
    ...Footer5Defaults,
    ...props,
  };

  const [emailInput, setEmailInput] = useState<string>("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      emailInput,
    });
  };

  return (
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="rb-12 mb-12 grid grid-cols-1 items-start gap-x-8 gap-y-10 sm:grid-cols-3 md:mb-18 md:gap-y-12 lg:mb-20 lg:grid-cols-6">
          <a
            href={logo.url}
            className="sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-2 lg:col-start-auto lg:col-end-auto lg:row-start-auto lg:row-end-auto"
          >
            <img src={logo.src} alt={logo.alt} className="h-10 w-auto" />
          </a>
          {columnLinks.map((column, index) => (
            <div key={index} className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-medium md:mb-4">{column.title}</h2>
              <ul>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="py-2 text-sm">
                    <a href={link.url} className="flex items-center gap-3">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="h-px w-full bg-white/20" />
        <div className="flex flex-col-reverse items-start pb-4 pt-6 text-sm md:justify-start md:pb-0 md:pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col-reverse items-start md:flex-row md:gap-6 lg:items-center">
            <p className="mt-8 md:mt-0">{footerText}</p>
            <div className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 md:grid-flow-col md:justify-center md:gap-x-6 md:gap-y-0 lg:text-left">
              {footerLinks.map((link, index) => (
                <p key={index} className="underline">
                  <a href={link.url}>{link.title}</a>
                </p>
              ))}
            </div>
          </div>
          <div className="mb-8 flex items-center justify-center gap-3 lg:mb-0">
            {socialMediaLinks.map((link, index) => (
              <a key={index} href={link.url}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Footer5Defaults: Props = {
  logo: {
    url: "/",
    src: "/logo-light.svg",
    alt: "A Stronger Idea Design",
  },
  newsletterHeading: "Let's talk.",
  newsletterDescription: "hello@astrongeridea.design",
  inputPlaceholder: "Enter your email",
  button: {
    title: "Subscribe",
    variant: "secondary",
    size: "sm",
  },
  termsAndConditions: `
  <p class='text-xs'>
    By subscribing you agree to our
    <a href='#' class='underline'>Privacy Policy</a>.
  </p>
  `,
  columnLinks: [
    {
      title: "Method",
      links: [
        { title: "Market Inward", url: "/method/market-inward" },
        { title: "How It Works", url: "/process" },
      ],
    },
    {
      title: "Services",
      links: [
        { title: "Product Strategy", url: "/how/product-strategy" },
        { title: "Product UX Design", url: "/how/product-ux-design" },
        { title: "Product Systems", url: "/how/product-systems" },
        { title: "AI Product Design", url: "/how/ai-product-design" },
        { title: "Discovery Sprint", url: "/how/discovery-sprint" },
        { title: "Project Engagements", url: "/how/project-engagements" },
        { title: "Fractional Leadership", url: "/how/fractional-design-leadership" },
      ],
    },
    {
      title: "Company",
      links: [
        { title: "Case Studies", url: "/case-studies" },
        { title: "Insights", url: "/insights" },
        { title: "About", url: "/about" },
        { title: "Contact", url: "/contact" },
      ],
    },
    {
      title: "Clients",
      links: [
        { title: "Startups & Scale-ups", url: "/who/startups" },
        { title: "Product Organizations", url: "/who/product-organizations" },
        { title: "Agencies & Partners", url: "/who/agencies" },
      ],
    },
  ],
  socialMediaLinks: [
    { url: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
    { url: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
  ],
  footerText: "Copyright \u00A9 A Stronger Idea, LLC 2025 All rights reserved",
  footerLinks: [
    { title: "Privacy Policy", url: "#" },
    { title: "Terms of Service", url: "#" },
  ],
};
