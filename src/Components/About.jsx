import React from "react";
import aboutBackground from "../assets/about.jpg";
import visionMissionBackground from "../assets/missionbg.png";

function About() {
  return (
    <div id="about" className="pb-10">
      <div className="h-60 flex flex-col justify-center items-center relative lg:h-130 font-Roboto">
        <div className="h-60 w-full flex flex-col justify-center items-center relative z-10 text-white backdrop-brightness-70 backdrop-grayscale-100 lg:h-190">
          <p className="font-CopperPlate text-[20px] uppercase tracking-tighter lg:text-4xl">
            About us
          </p>
          <span className="w-40 h-[2px] bg-amber-300 lg:h-[5px] lg:w-50"></span>
          <p className="w-90 pt-2 text-center lg:text-3xl lg:w-[70%]">
            Indo Fab Tech is a fabrication company dedicated to delivering
            dependable, accurate, and cost-effective fabrication services.
          </p>
        </div>

        <img
          className="absolute w-full h-60 top-0 z-0 lg:h-130 object-cover"
          src={aboutBackground}
        />
      </div>

      <div className="flex flex-col justify-center items-center lg:pl-175 pt-5 lg:h-130 lg:p-0 relative lg:space-y-10">
        <div className="lg:w-150 lg:m-0">
          <div className="flex justify-center items-center font-CopperPlate lg:mb-3">
            <span className="w-10 bg-[#fed550] h-[2px] lg:h-[4px]"></span>
            <p className="uppercase px-1 text-xl lg:text-4xl">
              Vission & mission
            </p>
            <span className="w-10 bg-[#fed550] h-[2px] lg:h-[4px]"></span>
            <img
              className="w-140 h-140 object-cover top-[-70px] absolute left-15 hidden lg:block"
              src={visionMissionBackground}
            />
          </div>

          <p className="hidden lg:block lg:text-center lg:text-xl">
            Our vision is to become a trusted name in the fabrication industry
            by consistently delivering value, innovation, and long-lasting
            quality, and our mission is to provide strong, safe, and
            high-quality fabrication solutions that support the success of our
            clients across different industries.
          </p>
        </div>

        {
          <div className="lg:space-x-10 lg:ml-[-500px] lg:hidden">
            <div className="w-70 lg:w-100 border-3 border-[#fed550] shadow-xl bg- p-8 mt-5 space-y-2 rounded-2xl">
              <div className="flex justify-center items-center font-CopperPlate">
                <span className="w-10 bg-[#fed550] h-[2px] lg:h-[4px]"></span>
                <p className="uppercase px-1 lg:text-3xl">Vission</p>
                <span className="w-10 bg-[#fed550] h-[2px] lg:h-[4px]"></span>
              </div>
              <p className="font-Roboto text-center lg:text-xl">
                Our vision is to become a trusted name in the fabrication
                industry by consistently delivering value, innovation, and
                long-lasting quality
              </p>
            </div>

            <div className="w-70 lg:w-100  border-3 border-[#fed550] shadow-xl p-8 mt-5  space-y-2 rounded-2xl ">
              <div className="flex justify-center items-center font-CopperPlate">
                <span className="w-10 bg-[#fed550] h-[2px] lg:h-[4px]"></span>
                <p className="uppercase px-1 lg:text-3xl">mission</p>
                <span className="w-10 bg-[#fed550] h-[2px] lg:h-[4px]"></span>
              </div>
              <p className="font-Roboto text-center lg:text-xl">
                Our mission is to provide strong, safe, and high-quality
                fabrication solutions that support the success of our clients
                across different industries
              </p>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default About;
