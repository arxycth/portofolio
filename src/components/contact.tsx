import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

import { IconBrandLinkedin, IconBrandInstagram, IconBrandGithub, IconBrandLinkedinFilled, IconBrandInstagramFilled, IconBrandGithubFilled } from "@tabler/icons-react";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <div id="contact"className="w-full h-screen z-50">
        <BackgroundBeamsWithCollision>
                <div className="flex-col flex justify-center items-center w-full h-screen">
                <h2 className="text-2xl relative z-20 md:text-4xl lg:text-[5rem] font-bold text-center text-black dark:text-white font-sans tracking-tight">
                    Up for something cool? {" "}
                    <br />
                    <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                    <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                        <span className="">Let&apos;s connect!</span>
                    </div>
                    <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                        <span className="">Let&apos;s connect!</span>
                    </div>
                    </div>
                </h2>
                <p className="mt-2 mb-6 mx-2 md:mt-4 md:mb-8 text-lg text-gray-200 text-center max-w-xl leading-relaxed">
                Feel free to reach out — open to freelance work, collaborations, or just a friendly chat! Don&apos;t be shy — let&apos;s talk! 😊
                </p>
                <div className="flex flex-col md:flex-row">                    
                    <a
                    href="https://www.linkedin.com/in/dimas-adiluhur/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden my-2 md:mx-4 pl-3 pr-2 py-2 rounded-full border-2 border-white bg-[#0A0D2D] text-gray-50 text-lg font-sans font-semibold flex items-center justify-between gap-2 shadow-xl group hover:text-black"
                    >
                    <span className="group-hover:hidden">
                        <IconBrandLinkedin/>
                    </span>

                    {/* Icon Filled (on hover) */}
                    <span className="hidden group-hover:inline-block z-10">
                        <IconBrandLinkedinFilled/>
                    </span>
                    <span className="relative z-10">LinkedIn</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 19"
                        className="w-8 h-8 p-2 rounded-full border border-gray-700 text-gray-800 bg-gray-50 transition-transform duration-300 rotate-45 group-hover:rotate-90 relative z-10"
                    >
                        <path
                        className="fill-gray-800"
                        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                        />
                    </svg>
                    <div className="absolute top-0 left-0 h-full w-0 bg-white transition-all duration-500 group-hover:w-full z-0" />
                    </a>

                    <a
                    href="https://www.instagram.com/dimasdlhr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden my-2 md:mx-4 pl-3 pr-2 py-2 rounded-full border-2 border-white bg-[#0A0D2D] text-gray-50 text-lg font-sans font-semibold flex items-center justify-between gap-2 shadow-xl group hover:text-black"
                    >
                    <span className="group-hover:hidden">
                        <IconBrandInstagram/>
                    </span>

                        {/* Icon Filled (on hover) */}
                    <span className="hidden group-hover:inline-block z-10">
                        <IconBrandInstagramFilled/>
                    </span>
                    <span className="relative z-10">Instagram</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 19"
                        className="w-8 h-8 p-2 rounded-full border border-gray-700 text-gray-800 bg-gray-50 transition-transform duration-300 rotate-45 group-hover:rotate-90 relative z-10"
                    >
                        <path
                        className="fill-gray-800"
                        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                        />
                    </svg>
                    <div className="absolute top-0 left-0 h-full w-0 bg-white transition-all duration-500 group-hover:w-full z-0" />
                    </a>

                    <a
                    href="https://github.com/arxycth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden my-2 md:mx-4 pl-3 pr-2 py-2 rounded-full border-2 border-white bg-[#0A0D2D] text-gray-50 text-lg font-sans font-semibold flex items-center justify-between gap-2 shadow-xl group hover:text-black"
                    >
                    <span className="group-hover:hidden">
                        <IconBrandGithub/>
                    </span>

                    {/* Icon Filled (on hover) */}
                    <span className="hidden group-hover:inline-block z-10">
                        <IconBrandGithubFilled/>
                    </span>
                    <span className="relative z-10">GitHub</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 19"
                        className="w-8 h-8 p-2 rounded-full border border-gray-700 text-gray-800 bg-gray-50 transition-transform duration-300 rotate-45 group-hover:rotate-90 relative z-10"
                    >
                        <path
                        className="fill-gray-800"
                        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                        />
                    </svg>
                    <div className="absolute top-0 left-0 h-full w-0 bg-white transition-all duration-500 group-hover:w-full z-0" />
                    </a>
                </div>
                <div className="mt-4 text-sm text-gray-300">
                Or email me at{" "}
                <a href="mailto:dimasadiluhur@gmail.com" className="text-purple-300 hover:text-purple-400 hover:underline">dimasadiluhur@gmail.com</a>
                </div>            
            </div>
            {/* <p className="absolute bottom-0 text-gray-400 text-sm mb-4">
                    © {new Date().getFullYear()} Dimas Adiluhur. All rights reserved.
            </p>   */}
        </BackgroundBeamsWithCollision>    
    </div>

  );
}
