import React from "react";

function Projects() {
  return (
    <div className="relative">
    <div className="font-CopperPlate flex flex-col items-center justify-center backdrop-blur-[1px] backdrop-grayscale-100 pb-6 relative z-10">
      <div className="flex justify-center items-center space-x-1">
        <span className="w-10 bg-[#fed550] h-[2px] relative top-2"></span>
        <p className="text-lg pt-5 tracking-tight uppercase">Our Projects</p>
        <span className="w-10 bg-[#fed550] h-[2px] relative top-2"></span>
      </div>


      <div>
        <div className="left grid grid-cols-2 gap-5 pt-5">
          <img className="w-30 h-30 object-cover border-2 border-[#ecb80e] rounded-2xl shadow-lg" src="/src/assets/projects/pr2.jpeg"></img>
          <img className="w-30 h-30 object-cover border-2 border-[#ecb80e] rounded-2xl shadow-lg" src="/src/assets/projects/pr3.jpeg"></img>
          <img className="w-30 h-30 object-cover border-2 border-[#ecb80e] rounded-2xl shadow-lg" src="/src/assets/projects/pr4.jpeg"></img>
          <img className="w-30 h-30 object-cover border-2 border-[#ecb80e] rounded-2xl shadow-lg" src="/src/assets/projects/pr1.jpeg"></img>
          <img className="w-30 h-30 object-cover border-2 border-[#ecb80e] rounded-2xl shadow-lg" src="/src/assets/projects/pr5.jpeg"></img>
          <img className="w-30 h-30 object-cover border-2 border-[#ecb80e] rounded-2xl shadow-lg" src="/src/assets/projects/pr6.jpeg"></img>
          <img className="w-30 h-30 object-cover border-2 border-[#ecb80e] rounded-2xl shadow-lg" src="/src/assets/projects/pr7.jpeg"></img>
          <img className="w-30 h-30 object-cover border-2 border-[#ecb80e] rounded-2xl shadow-lg" src="/src/assets/projects/pr8.jpeg"></img>
          <img className="w-30 h-30 object-cover border-2 border-[#ecb80e] rounded-2xl shadow-lg" src="/src/assets/projects/pr9.jpeg"></img>
          <img className="w-30 h-30 object-cover border-2 border-[#ecb80e] rounded-2xl shadow-lg" src="/src/assets/projects/pr10.jpeg"></img>
        </div>
      </div>
    </div>
    {/* <img className="w-100 absolute top-0 h-full object-cover z-0" src="/src/assets/projectbg.jpg"></img> */}
    </div>
  );
}

export default Projects;
