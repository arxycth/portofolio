"use client";

import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { BackgroundBeamsWithCollisionDemo } from "./contact";

const item1 = [
  {
    id: 1,
    name: "Typescript",
    designation: "Programming Language",
    image:
      "/icons/typescript.svg",  
  },  
  {
    id: 2,
    name: "Tailwind CSS",
    designation: "CSS Framework",
    image:
      "/icons/tailwind.svg",

  },
  {
    id: 3,
    name: "React",
    designation: "Javascript Library",
    image:
      "/icons/react.svg",
  },
  {
    id: 4,
    name: "Next.js",
    designation: "React Framework",
    image:
      "/icons/next.svg",
  },
  // {
  //   id: 5,
  //   name: "Motion",
  //   designation: "Animation Library",
  //   image:
  //     "https://skillicons.dev/icons?i=motion",
  // },
  // {
  //   id: 6,
  //   name: "Javascript",
  //   designation: "Programming Language",
  //   image:
  //     "https://skillicons.dev/icons?i=javascript",
  // },
];

export function Project() {
  return (
    <div id="project" className=" md:min-h-330 w-full bg-slate-900 flex flex-col items-center rounded-lg">
      <div className="sticky -top-475 md:-top-250 max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto w-full z-10 flex flex-col space-y-10">
        <div data-aos="zoom-in" data-aos-duration="1000">
          <WobbleCard
            containerClassName="w-full bg-indigo-500"
            className="p-6 sm:p-10"
          >
            <div className="flex flex-col md:flex-row justify-between">
              <div className="max-w-xl">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Portofolio Website
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                  This is a portofolio website built with Next.js, Tailwind CSS,
                  and Framer Motion. It showcases the power of modern web
                  technologies to create stunning and interactive user experiences.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center mt-6 md:mt-0 mr-4">
                <AnimatedTooltip items={item1}/>                
              </div>
            </div>
          </WobbleCard>          
        </div>

        
        <div data-aos="zoom-in" data-aos-duration="1000">
          <WobbleCard
            containerClassName="w-full bg-indigo-500"
            className="p-6 sm:p-10"
          >
            <div className="flex flex-col md:flex-row justify-between">
              <div className="max-w-xl">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Portofolio Website
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                  This is a portofolio website built with Next.js, Tailwind CSS,
                  and Framer Motion. It showcases the power of modern web
                  technologies to create stunning and interactive user experiences.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center mt-6 md:mt-0 mr-4">
                <AnimatedTooltip items={item1}/>                
              </div>
            </div>
          </WobbleCard>          
        </div>


        <div data-aos="zoom-in" data-aos-duration="1000">
          <WobbleCard
            containerClassName="w-full bg-indigo-500"
            className="p-6 sm:p-10"
          >
            <div className="flex flex-col md:flex-row justify-between">
              <div className="max-w-xl">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Portofolio Website
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                  This is a portofolio website built with Next.js, Tailwind CSS,
                  and Framer Motion. It showcases the power of modern web
                  technologies to create stunning and interactive user experiences.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center mt-6 md:mt-0 mr-4">
                <AnimatedTooltip items={item1}/>                
              </div>
            </div>
          </WobbleCard>          
        </div>


        <div data-aos="zoom-in" data-aos-duration="1000">
          <WobbleCard
            containerClassName="w-full bg-indigo-500"
            className="p-6 sm:p-10"
          >
            <div className="flex flex-col md:flex-row justify-between">
              <div className="max-w-xl">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Portofolio Website
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                  This is a portofolio website built with Next.js, Tailwind CSS,
                  and Framer Motion. It showcases the power of modern web
                  technologies to create stunning and interactive user experiences.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center mt-6 md:mt-0 mr-4">
                <AnimatedTooltip items={item1}/>                
              </div>
            </div>
          </WobbleCard>          
        </div>


        <div data-aos="zoom-in" data-aos-duration="1000">
          <WobbleCard
            containerClassName="w-full bg-indigo-500"
            className="p-6 sm:p-10"
          >
            <div className="flex flex-col md:flex-row justify-between">
              <div className="max-w-xl">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Portofolio Website
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                  This is a portofolio website built with Next.js, Tailwind CSS,
                  and Framer Motion. It showcases the power of modern web
                  technologies to create stunning and interactive user experiences.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center mt-6 md:mt-0 mr-4">
                <AnimatedTooltip items={item1}/>                
              </div>
            </div>
          </WobbleCard>          
        </div>


        <div data-aos="zoom-in" data-aos-duration="1000">
          <WobbleCard
            containerClassName="w-full bg-indigo-500"
            className="p-6 sm:p-10"
          >
            <div className="flex flex-col md:flex-row justify-between">
              <div className="max-w-xl">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Portofolio Website
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                  This is a portofolio website built with Next.js, Tailwind CSS,
                  and Framer Motion. It showcases the power of modern web
                  technologies to create stunning and interactive user experiences.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center mt-6 md:mt-0 mr-4">
                <AnimatedTooltip items={item1}/>                
              </div>
            </div>
          </WobbleCard>          
        </div>


        <div data-aos="zoom-in" data-aos-duration="1000">
          <WobbleCard
            containerClassName="w-full bg-indigo-500"
            className="p-6 sm:p-10"
          >
            <div className="flex flex-col md:flex-row justify-between">
              <div className="max-w-xl">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Portofolio Website
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                  This is a portofolio website built with Next.js, Tailwind CSS,
                  and Framer Motion. It showcases the power of modern web
                  technologies to create stunning and interactive user experiences.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center mt-6 md:mt-0 mr-4">
                <AnimatedTooltip items={item1}/>                
              </div>
            </div>
          </WobbleCard>          
        </div>


      </div>
      <div className="h-50 bg-transparent"></div>
      <BackgroundBeamsWithCollisionDemo />
    </div>

  );
}
