import React from "react";
import "@fontsource-variable/montserrat/wght.css";
import "@fontsource-variable/roboto/wght.css";
import "@fontsource/bebas-neue";
import "@fontsource-variable/sora/wght.css";
import NavBar from "./NavBar";

function Home() {
  return (
    <div className="relative">
      <NavBar />
      <div className="flex justify-center h-60 lg:h-180 items-center bg-black">
        <div className="h-70 w-full flex flex-col justify-center items-center text-center font-CopperPlate z-10 text-white backdrop-blur-[1px] backdrop-brightness-60 absolute top-0 lg:h-190 lg:space-y-10">
          <p className="w-85 lg:w-full h-30 pt-7 uppercase flex flex-col items-center space-y-2 lg:text-4xl lg:h-40 lg:space-y-5">
            INDOFAB TECH <span className="h-[1.5px] w-35 bg-[#fed550] block lg:w-90 lg:h-1"></span>
            <p className="text-xl leading-[17px] lg:leading-10 font-extralight lg:text-[40px]">
              where quality fabrication meets reliable service
            </p>
          </p>

          <button className="font-Roboto font-bold cursor-pointer tracking-normal text-xs
           uppercase lg:text-sm py-1 px-3 border-2 lg:border-3 rounded-3xl lg:rounded-4xl border-[#fed550] lg:py-2 lg:px-4">
            Contact Us
          </button>
        </div>

        <img
          className="absolute top-0 z-0 w-full h-70 object-cover lg:h-190"
          src="/src/assets/bg2.jpg"
        ></img>
      </div>
    </div>
  );
}

export default Home;
