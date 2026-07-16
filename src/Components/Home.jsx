import React from "react";
import "@fontsource-variable/montserrat/wght.css";
import "@fontsource-variable/roboto/wght.css";
import "@fontsource/bebas-neue";

function Home() {
  return (
    <div className="flex justify-center h-60 items-center bg-black">
      <div className="h-60 w-full flex flex-col justify-center items-left text-center font-Bebas font-bold tracking-widest z-10 text-[16px] text-white">
        <p className="w-65 h-30 pl-5">
          Welcome to INDOFAB TECH, where quality fabrication meets reliable
          service
        </p>

        <button className="font-Roboto cursor-pointer tracking-normal text-xs py-1 px-3 absolute top-48 left-22 border-2 rounded-3xl">Discover more</button>
      </div>

      <img className="absolute z-0 w-full h-60 left-[-5px] object-cover" src="/src/assets/bg2.jpg"></img>
    </div>
  );
}

export default Home;
