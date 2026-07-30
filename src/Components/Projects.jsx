import React from "react";

function Projects() {
  return (
    <div id="projects" className="relative mt-7">
    <div className="font-CopperPlate flex flex-col items-center justify-center backdrop-blur-[1px] backdrop-grayscale-100 pb-6 relative z-10 lg:h-130">
      <div className="flex justify-center items-center space-x-1">
        <span className="w-10 bg-[#fed550] h-[2px] lg:h-[4px] relative top-2"></span>
        <p className="text-lg pt-5 tracking-tight uppercase lg:text-4xl">Our Projects</p>
        <span className="w-10 bg-[#fed550] h-[2px] lg:h-[4px] relative top-2"></span>
      </div>


      <div className="lg:h-99 lg:overflow-scroll lg:overflow-x-hidden">
        <div className="left grid grid-cols-2 gap-5 pt-5 lg:grid-cols-3 lg:pb-8">
          <img className="w-30 h-30 lg:w-90 lg:h-90 object-cover border-2 border-[#ecb80e] rounded-2xl shadow-lg" src="/projects/pr2.jpeg"></img>
          <img className="w-30 h-30 lg:w-90 lg:h-90 object-cover border-2 border-[#ecb80e] rounded-2xl shadow-lg" src="/projects/pr3.jpeg"></img>
          <img className="w-30 h-30 lg:w-90 lg:h-90 object-cover border-2 border-[#ecb80e] rounded-2xl shadow-lg" src="/projects/pr4.jpeg"></img>
          <img className="w-30 h-30 lg:w-90 lg:h-90 object-cover border-2 border-[#ecb80e] rounded-2xl shadow-lg" src="/projects/pr1.jpeg"></img>
          <img className="w-30 h-30 lg:w-90 lg:h-90 object-cover border-2 border-[#ecb80e] rounded-2xl shadow-lg" src="/projects/pr5.jpeg"></img>
          <img className="w-30 h-30 lg:w-90 lg:h-90 object-cover border-2 border-[#ecb80e] rounded-2xl shadow-lg" src="/projects/pr6.jpeg"></img>
          <img className="w-30 h-30 lg:w-90 lg:h-90 object-cover border-2 border-[#ecb80e] rounded-2xl shadow-lg" src="/projects/pr7.jpeg"></img>
          <img className="w-30 h-30 lg:w-90 lg:h-90 object-cover border-2 border-[#ecb80e] rounded-2xl shadow-lg" src="/projects/pr8.jpeg"></img>
          <img className="w-30 h-30 lg:w-90 lg:h-90 object-cover border-2 border-[#ecb80e] rounded-2xl shadow-lg" src="/projects/pr9.jpeg"></img>
          <img className="w-30 h-30 lg:w-90 lg:h-90 object-cover border-2 border-[#ecb80e] rounded-2xl shadow-lg" src="/projects/pr10.jpeg"></img>
        </div>
      </div>
    </div>
    {/* <img className="w-100 absolute top-0 h-full object-cover z-0" src="/src/assets/projectbg.jpg"></img> */}
    </div>
  );
}

export default Projects;
