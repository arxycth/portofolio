"use client";
import React from "react";
import { TypewriterEffect} from "./ui/typewriter-effect";

export function HomePage() {
  const intro = [
    {
      text: "Hi,",
    },
    {
      text: "I'm",
    },
    {
      text: "Arxycth",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
    const description = [
    {
      text: "I",
    },
    {
      text: "write",
    },
    {
      text: "code",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "so",
    },
    {
      text: "you",
    },
    {
      text: "don't",
    },
    {
      text: "have",
    },
    {
      text: "to.",
    },
  ];
  return (
    <div id="home" className="h-145 md:h-190 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div data-aos="zoom-in" data-aos-duration="1000" className="flex items-center justify-center  flex-col relative z-20">
        <TypewriterEffect words={intro} className="text-xl sm:text-3xl md:text-5xl lg:text-7xl" cursorClassName="hidden"/>
        <TypewriterEffect words={description} className="m-[1rem]"/>
      </div>

      {/* <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Hi, I'm Arxycth
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        I specialize in building fast, responsive, and reliable web applications.
      </p> */}
    </div>
  );
}
