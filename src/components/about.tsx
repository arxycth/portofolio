"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image"

const words = `Hi there! My name is Dimas Adiluhur, and I'm a fullstack developer driven by curiosity and a love for technology. I'm a passionate and curious fullstack developer who thrives on learning and exploring the ever-evolving world of technology. While I'm still on my journey of growth, I constantly seek out new tools, frameworks, and ideas to sharpen my skills and expand my understanding — from backend logic to frontend design, and everything in between.`

export function About() {
  return (
    <div id="about" className="h-155 md:min-h-140 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div data-aos="zoom-in" data-aos-duration="1000" className="relative z-20 ">
        <BackgroundGradient  className="rounded-[22px] max-w-[32rem] md:max-w-[64rem]  p-4 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col items-center justify-center md:flex-row ">
        <Image src="/myProfile.jpg" alt="Portrait of Dimas Adiluhur" className="grayscale-50 rounded-full w-32 h-32 md:w-64 md:h-64 md:mr-8" />
        <div>
           <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left mb-4 md:mb-0">
          </h2>
          <TextGenerateEffect words={words} className="text-justify" />
        </div>

        </BackgroundGradient>
      </div>
      
    </div>
  );
}
