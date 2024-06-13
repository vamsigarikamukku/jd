"use client";
import { Link } from "react-router-dom";
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import { SparklesCore } from "../components/ui/sparkles";
import { TypewriterEffect1 } from "../components/ui/typewriter-effect1";

const Home = () => {
  const words = [
    {
      text: "Welcome",
      className: "text-red-700 dark:text-red-800",
    },
    {
      text: "to",
      className: "text-red-700 dark:text-red-800",
    },
  ];
  const wordss = [
    {
      text: "Welcome",
    },
    {
      text: "to",
    },
    {
      text: "Jest",
      className: "text-red-700 dark:text-red-800",
    },
    {
      text: "Developers",
      className: "text-red-700 dark:text-red-800",
    },
  ];
  return (
    <div>
      <div className="h-[40rem] w-full bg-black hidden md:flex flex-col items-center justify-center overflow-hidden ">
        <TypewriterEffect words={words} />

        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
          Jest Developers
        </h1>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-red-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-red-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-red-800 to-transparent h-[5px] w-1/4 lg:w-3/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-red-800 to-transparent h-px w-1/4 lg:w-3/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      {/* subpart */}
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-0">
        <div className="flex flex-col items-center mt-6 lg:mt-20">
          <div className="md:hidden">
            <TypewriterEffect1 wordss={wordss} />
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Digitalizing Local{" "}
            <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
              Bharat
            </span>
          </h1>
          <p className=" mt-5 lg:mt-10 text-base md:text-lg text-center text-neutral-200 max-w-4xl">
            Building a community of developers to build digital India
          </p>
          <p className="mt-5 lg:mt-10 text-base lg:text-lg text-center text-neutral-500 max-w-4xl">
            Empowering Developers, Transforming India Digitally! Join us as we
            unite talents, foster collaboration, and innovate towards a
            digitally empowered nation. Together, let&apos;s code the future of
            India, one breakthrough at a time!
          </p>
          <div
            className="flex flex-wrap justify-center my-10  gap-4
          "
          >
            <Link
              to="/about"
              className="w-full md:w-40 bg-gradient-to-r from-red-600 to-red-800 py-3 px-4 rounded-md  text-center"
            >
              Explore more
            </Link>

            <Link
              to="/blog"
              className="w-full md:w-40 text-center py-3 px-4 rounded-md border"
            >
              Visit our blogs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
