import React from "react";

function Service() {
  return (
    <div className="font-Roboto flex flex-col justify-center items-center relative">
      <div className="service-div relative z-10 w-full h-63 lg:h-130 flex flex-col justify-center items-center backdrop-blur-[1px] backdrop-brightness-70 backdrop-grayscale-100">
        <div className="flex flex-col font-CopperPlate justify-center items-center">
          <p className="text-xl text-white uppercase lg:text-4xl">Services</p>
          <span className="w-40 lg:w-65 bg-[#fed550] h-[2px] lg:h-[6px]"></span>
          <p className="pt-2 font-Roboto text-white text-center w-74 lg:w-full lg:text-3xl lg:pt-4">
            We provide reliable fabrication services with precision, quality,
            and timely delivery.
          </p>
        </div>
      </div>
      <img
        className="absolute h-60 top-0 w-full left-0 z-0 lg:h-130 lg:object-[center_30%] lg:object-cover"
        src="/src/assets/service.jpg"
      ></img>

      <div className="h-60 lg:h-130 flex flex-col justify-center items-center space-y-5 relative">
        <div className="lg:relative lg:left-[-70%] flex flex-col justify-center items-center">
          <div className="flex items-center space-x-2 lg:mb-3">
            <span className="w-10 lg:w-15 bg-[#fed550] h-[2px] lg:h-[4px]"></span>
            <p className="font-CopperPlate uppercase lg:text-4xl">What we do</p>
            <span className="w-10 lg:w-15 bg-[#fed550] h-[2px] lg:h-[4px]"></span>
          </div>

          <div>
            <p className="w-80 lg:w-130 text-justify lg:text-center lg:text-xl">
              We offer a wide range of fabrication services designed to meet
              industrial, commercial, and customized project requirements. From
              cutting and welding to assembly and finishing, Indo Fab Tech
              delivers dependable solutions with precision and durability.
            </p>
          </div>
        </div>

        <img className="absolute left-100" src="/src/assets/what we do.jpg"/>
      </div>
    </div>
  );
}

export default Service;
