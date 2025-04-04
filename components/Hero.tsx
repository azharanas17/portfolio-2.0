import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div id="home" className="pb-10 pt-36 mb-20">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="beige"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="lightgreen"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="lightbrown" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="w-full dark:bg-black-100 bg-lightgray dark:bg-grid-white/[0.03] bg-grid-black-100/[0.05]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-lightgray [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[57vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-beige max-w-81">
            Informatics Student | Web Developer | Data Enthusiast | Nature & Social Lover
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Building Websites, Analyzing Data, and Exploring AI for a Digital Future"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-md lg:text-lg">
            Hi! I&apos;m <span className='text-lightgreen font-bold'>Anas Azhar</span>, an Informatics student with experience in Web Development, now majoring in Image Captioning & Data Analysis. Outside of technology, I am also active in organizations, social activities, and nature adventures.
          </p>

          <a href="#about">
            <MagicButton
              title="What have I done?"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
