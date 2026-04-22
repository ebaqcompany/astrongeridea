"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Navbar2 } from "@/components/Navbar";
import { BlogPostHeader1 } from "@/components/BlogPostHeader";
import { Cta7 } from "@/components/Cta";
import { Footer12 } from "@/components/Footer";
import { getArticleBySlug } from "./articleData";
import { BiLinkAlt, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export default function InsightArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <>
        <Navbar2 />
        <div className="section-white">
          <section className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container max-w-lg text-center">
              <h1 className="mb-5 text-5xl font-bold md:text-7xl lg:text-8xl">
                Article Not Found
              </h1>
              <p className="md:text-md">
                The article you are looking for does not exist or has been moved.
              </p>
            </div>
          </section>
        </div>
        <div className="section-dark">
          <Footer12 />
        </div>
      </>
    );
  }

  return (
    <>
      {/* Navbar */}
      <Navbar2 />

      {/* Blog Post Header */}
      <div className="section-white">
        <BlogPostHeader1
          breadcrumbs={[
            { url: "/insights", title: "Insights" },
            { url: "#", title: article.tag },
          ]}
          heading={article.title}
          author={{
            avatar: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
              alt: "Eric Tomlinson",
            },
            fullName: "Eric Tomlinson",
            date: article.date,
            readTime: article.readTime,
          }}
          socialMediaLinks={[
            { url: "#", icon: <BiLinkAlt className="size-6" /> },
            { url: "https://www.linkedin.com/in/erictomlinson/", icon: <BiLogoLinkedinSquare className="size-6" /> },
            { url: "https://x.com/astrongeridea", icon: <FaXTwitter className="size-6 p-0.5" /> },
          ]}
          image={{
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: article.title,
          }}
        />
      </div>

      {/* Article Content */}
      <div className="section-gray">
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container mx-auto max-w-lg">
            <p className="mb-4 font-mono text-xs font-light uppercase tracking-wider text-primary">
              {article.tag}
            </p>
            <div className="prose prose-lg max-w-none">
              {article.content.map((paragraph, index) => (
                <p key={index} className="mb-6 text-base leading-relaxed text-neutral md:text-md">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* CTA */}
      <div className="section-dark">
        <Cta7
          heading="The first conversation is a diagnosis, not a pitch."
          buttons={[{ title: "Schedule a Discovery Call" }]}
        />
      </div>

      {/* Footer */}
      <div className="section-dark">
        <Footer12 />
      </div>
    </>
  );
}
