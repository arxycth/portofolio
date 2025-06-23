"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { BackgroundGradient } from "./ui/background-gradient";

const words = `Hi there! I'm Dimas Adiluhur — a passionate fullstack developer driven by curiosity and a deep love for technology. I thrive on continuous learning and enjoy exploring the ever-evolving tech landscape.

Currently on my journey of growth, I actively seek new tools, frameworks, and ideas to sharpen my skills and expand my knowledge — from backend logic to frontend design, and everything in between.
`

export function About() {
  return (
    <div id="about" className="h-175 md:min-h-140 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div data-aos="zoom-in" data-aos-duration="1000" className="relative z-20 ">
        <BackgroundGradient  className="rounded-[22px] max-w-[32rem] md:max-w-[64rem]  p-4 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col items-center justify-center md:flex-row ">
        <img src="/myProfile.jpg" alt="Portrait of Dimas Adiluhur" className="grayscale-50 rounded-full w-32 h-32 md:w-64 md:h-64 md:mr-8" />
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white/90 md:text-left mt-2 md:mt-0">
            Behind the Code
          </h2>
          <TextGenerateEffect words={words} className="text-justify font-normal leading-relaxed" />
        </div>

        </BackgroundGradient>
      </div>
      
    </div>
  );
}
