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
    image: "/icons/typescript.svg",
  },
  {
    id: 2,
    name: "Tailwind CSS",
    designation: "CSS Framework",
    image: "/icons/tailwind.svg",
  },
  {
    id: 3,
    name: "React",
    designation: "Javascript Library",
    image: "/icons/react.svg",
  },
  {
    id: 4,
    name: "Next.js",
    designation: "React Framework",
    image: "/icons/next.svg",
  },
];

const item2 = [
  {
    id: 1,
    name: "PHP",
    designation: "Programming Language",
    image: "/icons/php.svg",
  },
  {
    id: 2,
    name: "Tailwind CSS",
    designation: "CSS Framework",
    image: "/icons/tailwind.svg",
  },
  {
    id: 3,
    name: "Laravel",
    designation: "PHP Framewor",
    image: "/icons/laravel.svg",
  },
  {
    id: 4,
    name: "PostgreSQL",
    designation: "Database",
    image: "/icons/postgresql.svg",
  },
];

const item3 = [
  {
    id: 1,
    name: "PHP",
    designation: "Programming Language",
    image: "/icons/php.svg",
  },
  {
    id: 2,
    name: "Tailwind CSS",
    designation: "CSS Framework",
    image: "/icons/tailwind.svg",
  },
  {
    id: 3,
    name: "Laravel",
    designation: "PHP Framewor",
    image: "/icons/laravel.svg",
  },
  {
    id: 4,
    name: "PostgreSQL",
    designation: "Database",
    image: "/icons/postgresql.svg",
  },
  {
    id: 5,
    name: "Alpine.js",
    designation: "JavaScript Framework",
    image: "/icons/alpinejs.svg",
  },
];

export function Project() {
  return (
    <div
      id="project"
      className=" md:min-h-330 w-full bg-slate-900 flex flex-col items-center rounded-lg"
    >
      <div className="sticky -top-475 md:-top-250 max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto w-full z-10 flex flex-col space-y-10">
        <a href="#" data-aos="zoom-in" data-aos-duration="1000">
          <WobbleCard
            containerClassName="w-full bg-blue-500"
            className="p-6 sm:p-10"
          >
            <div className="flex flex-col md:flex-row justify-between">
              <div className="max-w-xl">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Portofolio Website
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-100">
                  This is a portofolio website built with Next.js, Tailwind CSS,
                  and Framer Motion. It showcases the power of modern web
                  technologies to create stunning and interactive user
                  experiences.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center mt-6 md:mt-0 mr-4">
                <AnimatedTooltip items={item1} />
              </div>
            </div>
          </WobbleCard>
        </a>

        <a href="https://playground.arxy.my.id" data-aos="zoom-in" data-aos-duration="1000">
          <WobbleCard
            containerClassName="w-full bg-sky-500"
            className="p-6 sm:p-10"
          >
            <div className="flex flex-col md:flex-row justify-between">
              <div className="max-w-xl">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Arxycth Playground
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-100">
                  Arxycth Playground is a web application that allows users to
                  explore and experiment with various web technologies. It
                  provides a platform for developers to test their skills and
                  learn new concepts in a hands-on environment.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center mt-6 md:mt-0 mr-4">
                <AnimatedTooltip items={item2} />
              </div>
            </div>
          </WobbleCard>
        </a>

        <a href="https://data-mahasiswa.arxy.my.id" data-aos="zoom-in" data-aos-duration="1000">
          <WobbleCard
            containerClassName="w-full bg-indigo-500"
            className="p-6 sm:p-10"
          >
            <div className="flex flex-col md:flex-row justify-between">
              <div className="max-w-xl">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Data-Mahasiswa
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-100">
                  Data-Mahasiswa is a web application designed to manage and
                  display student data efficiently. It provides a user-friendly
                  interface for administrators to add, update, and delete student
                  records, ensuring that the information is always up-to-date and
                  accessible.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center mt-6 md:mt-0 mr-4">
                <AnimatedTooltip items={item3} />
              </div>
            </div>
          </WobbleCard>
        </a>

        <div data-aos="zoom-in" data-aos-duration="1000">
          <WobbleCard
            containerClassName="w-full bg-blue-500"
            className="p-6 sm:p-10"
          >
            <div className="flex flex-col md:flex-row justify-between">
              <div className="max-w-xl">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Portofolio Website
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-100">
                  This is a portofolio website built with Next.js, Tailwind CSS,
                  and Framer Motion. It showcases the power of modern web
                  technologies to create stunning and interactive user
                  experiences.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center mt-6 md:mt-0 mr-4">
                <AnimatedTooltip items={item1} />
              </div>
            </div>
          </WobbleCard>
        </div>

        <div data-aos="zoom-in" data-aos-duration="1000">
          <WobbleCard
            containerClassName="w-full bg-blue-500"
            className="p-6 sm:p-10"
          >
            <div className="flex flex-col md:flex-row justify-between">
              <div className="max-w-xl">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Portofolio Website
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-100">
                  This is a portofolio website built with Next.js, Tailwind CSS,
                  and Framer Motion. It showcases the power of modern web
                  technologies to create stunning and interactive user
                  experiences.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center mt-6 md:mt-0 mr-4">
                <AnimatedTooltip items={item1} />
              </div>
            </div>
          </WobbleCard>
        </div>

        <div data-aos="zoom-in" data-aos-duration="1000">
          <WobbleCard
            containerClassName="w-full bg-blue-500"
            className="p-6 sm:p-10"
          >
            <div className="flex flex-col md:flex-row justify-between">
              <div className="max-w-xl">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Portofolio Website
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-100">
                  This is a portofolio website built with Next.js, Tailwind CSS,
                  and Framer Motion. It showcases the power of modern web
                  technologies to create stunning and interactive user
                  experiences.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center mt-6 md:mt-0 mr-4">
                <AnimatedTooltip items={item1} />
              </div>
            </div>
          </WobbleCard>
        </div>

        <div data-aos="zoom-in" data-aos-duration="1000">
          <WobbleCard
            containerClassName="w-full bg-blue-500"
            className="p-6 sm:p-10"
          >
            <div className="flex flex-col md:flex-row justify-between">
              <div className="max-w-xl">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Portofolio Website
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-100">
                  This is a portofolio website built with Next.js, Tailwind CSS,
                  and Framer Motion. It showcases the power of modern web
                  technologies to create stunning and interactive user
                  experiences.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center mt-6 md:mt-0 mr-4">
                <AnimatedTooltip items={item1} />
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
