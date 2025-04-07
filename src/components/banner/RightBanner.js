// import React from 'react'
// import { basitimg } from "../../assets/index";
// import  img  from  "../../assets/images/basitimg-removebg-preview.png";
// import { FaWhatsapp } from "react-icons/fa";
// const RightBanner = () => {
//   // w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group

//   return (

//     // w-full lgl:w-1/2  hidden  lgl:flex lgl:justify-end lgl:items-center relative

//     <div className="w-full lgl:w-1/2  hidden  lgl:flex lgl:justify-end lgl:items-center relative">
//        <img
//       //  w-[300px] h-[400px] rounded-md lgl:w-[500px] lgl:h-[680px] z-10

//         className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] px-12 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group
// "
//        src={basitimg}
//         alt="basitimg"
//       />
       
//       <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] shadow-one  flex justify-center items-center"></div>
 
//       {/*  */}
//       <div className='fixed right-20 bottom-20'>
//         <a target='_blank' className='z-[99]' href='https://wa.me/923143527958'>
//         <FaWhatsapp size={60} color='green'/>
//         </a>

//       </div>

//     </div>
//   );
// }

// export default RightBanner











import React from 'react'
import { basitimg } from "../../assets/index";
import  img  from  "../../assets/images/basitimg-removebg-preview.png";
import { FaWhatsapp } from "react-icons/fa";
const RightBanner = () => {
  // w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group

  return (

    // w-full lgl:w-1/2  hidden  lgl:flex lgl:justify-end lgl:items-center relative

    <div className="w-1/2 flex justify-end items-center  relative">
       <img
      //  w-[300px] h-[400px] rounded-md lgl:w-[500px] lgl:h-[680px] z-10

        className="w-[500px] h-[500px]  z-10
"
       src={basitimg}
        alt="basitimg"
      />
       
      <div className="absolute bottom-0 w-[500px] h-[500px]  bg-gradient-to-r from-[#1e2024] to-[#202327]  shadow-shadowOne flex justify-center items-center"></div>
 
      {/*  */}
      <div className='fixed right-20 bottom-20'>
        <a target='_blank' className='z-[200px]' href='https://wa.me/923143527958'>
        <FaWhatsapp size={60} color='green'/>
        </a>

      </div>

    </div>
  );
}

export default RightBanner