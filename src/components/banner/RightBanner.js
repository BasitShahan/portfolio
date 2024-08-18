import React from 'react'
import { basitimg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2  hidden  lgl:flex lgl:justify-end lgl:items-center relative">
       <img
        className="w-[300px] h-[400px] rounded-md lgl:w-[500px] lgl:h-[680px] z-10"
        src={basitimg}
        alt="basitimg"
      />
       
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] shadow-one  flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner