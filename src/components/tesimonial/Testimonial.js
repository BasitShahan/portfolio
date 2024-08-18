import React from "react";
import image1 from "../../assets/images/certificates/Screenshot (2).png";
import image2 from "../../assets/images/certificates/Screenshot (3).png";
import Title from "../layouts/Title";

export default function Testimonial() {
  return (
    <>
      <div
        id="testimonial"
        className=" w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000"
      >
        <div className="flex justify-center items-center text-center">
          <Title des="Certificates" />
        </div>
        <div className=" w-full h-[80%] overflow-hidden rounded-lg md:grid md:grid-cols-2 grid grid-cols-1 gap-5 ">
          <div>
            <img
              className="mx-auto rounded-xl w-10/12 min-h-full h-auto object-cover hover:scale-110 duration-300 cursor-pointer"
              src={image1}
              alt="src"
            />
          </div>
          <div>
            <img
              className="mx-auto rounded-xl w-10/12 min-h-full h-auto object-cover hover:scale-110 duration-300 cursor-pointer"
              src={image2}
              alt="src"
            />
          </div>
        </div>
      </div>
    </>
  );
}
