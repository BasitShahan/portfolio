import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const Media = () => {
  return (
    <>
      
        
      <div className=" mx-auto md:mx-0 flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
           
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            <span className="bannerIcon">
              <FaTwitter />
            </span>
            <span className="bannerIcon">
              <a target="_blank" href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGlGjhbcbhWnwAAAZAN2oxovmxRNfwBg3gA93Sol8epuR9XeS2cumJetrk3AyRxUalgzdubLQKDbtc7wJ4fJp7xE9V6kOZwM3igfQkiHbZVW2nuu6Gtw8eurELGyeusmVQhLWU=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fabdul-basit-shahani-9a7799252%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app">
                <FaLinkedinIn />
              </a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Media;
