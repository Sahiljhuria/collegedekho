import React from "react";
import background from "../component/images/banner-image.f12c9bbc.webp";
import music from '../component/images/play-icon.e5e53e75.svg'

function Brightfuture() {
  return (
    <div  style={{ backgroundImage: `url(${background} )` }} className="h-[600px] w-[100%] ">
     

     <div className="flex items-center align-middle">

      <div >

        <div className="text-white pt-28 pl-14">
          <p className="text-7xl font-bold mb-4">Right Guidence,</p>
          <p className="text-7xl font-bold mb-4">Bright Future</p>
          <p className="text-xl">Guiding lakhs of students and parents to find the right collge. Building a</p>
          <p className="text-xl">better future of India, <span  className="text-orange-400">one student at a time.</span></p>
        </div>

        <div className="flex gap-4 pl-14 mt-6">

          <div className="h-10 w-[200px] bg-orange-400 text-black p-2 text-center rounded-sm  hover:bg-orange-300 hover:cursor-pointer">Find Your College</div>
          <div className="h-10 w-[200px] text-white border-2 border-orange-400  p-2 text-center rounded-sm hover:cursor-pointer hover:border-orange-600">Get Job Ready Digree</div>
        </div>

        <div className="pl-14 mt-6">
          <p className="text-orange-400 underline hover:cursor-pointer">Watch our brand film here</p>
        </div>


       

        


      </div>
      <div className="pt-40 pl-4">
          <img src={music}/>
        </div>
     
        </div>
    </div>
  );
}

export default Brightfuture;
