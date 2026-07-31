import React from "react";

function ProjectViewModel({imageSource,setEnableProjectView}) {

  const controlImageView = () =>{
    setEnableProjectView(false);
  }

  return (
    <div className="w-[100vw] h-[100vh] fixed top-0 z-1000 backdrop-blur-lg flex justify-center items-center">
        <img
          className="w-200 h-150 object-contain mt-30"
          src={imageSource}
        ></img>
        <div onClick={controlImageView} className="p-1 px-1.5 bg-black rounded-2xl absolute border-1 top-20 cursor-pointer">
          <i className="fa-solid fa-x text-white"></i>
        </div>
    </div>
  );
}

export default ProjectViewModel;
