import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coder.",
      "Full Stack Developer.",
      "FrontEnd Developer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20 ">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal mx-auto md:mx-0">
          WELCOME TO MY WORLD
        </h4>
        <h1 className="text-6xl font-bold text-white text-center md:text-start">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Abdul Basit</span>
        </h1>
        <h2 className="text-center md:text-start text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-center md:text-start text-base font-bodyFont leading-6 tracking-wide">
          I am a skilled software engineer with expertise in the MERN stack.
          With a strong problem-solving mindset, I excel in developing robust
          and efficient solutions. My effective communication skills further
          enhance my ability to collaborate and deliver high-quality projects.
        </p>
        <div className=" grid grid-cols-1 gap-4  md:grid md:grid-cols-2 lg:w-96 w-full relative top-4">
          <div>
            <button className="block mx-auto md:mx-0 bannerIcon w-10/12">
              Hire Me
            </button>
          </div>

          <div className="mx-auto w-[82%] md:mx-0 md:w-full">
            <a href="/Abdul_Basit.pdf" download className=" bannerIcon w-full">
              Download Cv
            </a>
          </div>
        </div>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
