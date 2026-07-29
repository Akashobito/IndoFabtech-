import React, { useState } from "react";

function NavBar({setContact,contact}) {
  const [enableMenu, setEnableMenu] = useState(false);
  const [currentMenu, setCurrentMenu] = useState("home");

  const toggleMenu = () => {
    setEnableMenu(!enableMenu);
  };
  return (
    <div className="flex fixed justify-between px-5 w-full items-center !z-100 lg:pt-3 pb-3 backdrop-brightness-40 backdrop-grayscale-100 lg:backdrop-brightness-50 lg:backdrop-grayscale-40 lg:backdrop-blur-xs">
      <a href="#home"  onClick={() => {
              setCurrentMenu("home");
            }}>
        <div className="logo pt-2 h-8 w-8 lg:p-0 lg:w-10 lg:h-10 cursor-pointer">
          <img className="object-cover" src="/src/assets/logo.png"></img>
        </div>
      </a>

      <div className="hidden lg:block">
        <ul className="w-170 pr-10 flex justify-between font-CopperPlate text-white uppercase">
          <a
            href="#home"
            onClick={() => {
              setCurrentMenu("home");
            }}
          >
            <li
              className={
                currentMenu === "home"
                  ? "text-[#fed550] border-b-3"
                  : "text-white"
              }
            >
              Home
            </li>
          </a>
          <a
            href="#projects"
            onClick={() => {
              setCurrentMenu("projects");
            }}
          >
            <li
              className={
                currentMenu === "projects"
                  ? "text-[#fed550] border-b-3"
                  : "text-white"
              }
            >
              projects
            </li>
          </a>
          <a
            href="#service"
            onClick={() => {
              setCurrentMenu("service");
            }}
          >
            <li
              className={
                currentMenu === "service"
                  ? "text-[#fed550] border-b-3"
                  : "text-white"
              }
            >
              service
            </li>
          </a>
          <a
            href="#about"
            onClick={() => {
              setCurrentMenu("about");
            }}
          >
            <li
              className={
                currentMenu === "about"
                  ? "text-[#fed550] border-b-3"
                  : "text-white"
              }
            >
              about
            </li>
          </a>

          <a className="cursor-pointer" onClick={()=>{setContact(true)}}>
            <li>contact</li>
          </a>
        </ul>
      </div>

      <i
        onClick={toggleMenu}
        className="lg:!hidden fa-solid fa-bars cursor-pointer text-2xl pt-4 text-white"
      ></i>

      {enableMenu && (
        <div className="lg:hidden w-60 !min-h-[100vh] fixed right-0 top-0 bottom-[-10px] z-10 bg-[#E5E5E5] text-white font-CopperPlate">
          <div
            className="w-full h-full relative pl-8 pt-5 z-100 backdrop-brightness-50
          0"
          >
            <i
              onClick={toggleMenu}
              className="fa-solid fa-x relative left-[-20px] top-[-4px] text-xl cursor-pointer"
            ></i>
            <ul className="flex flex-col space-y-5 w-full font-medium pt-10 uppercase">
              <a className="flex items-center" href="#home"  onClick={() => {
              setCurrentMenu("home");
              toggleMenu();
            }} className={
                currentMenu === "home"
                  ? "text-[#fed550] flex items-center"
                  : "text-white flex items-center"
              }>
                <i className="fa-solid fa-house pr-8 "></i>
                <p className="uppercase">Home</p>
              </a>

              <a className="flex items-center" href="#projects"  onClick={() => {
              setCurrentMenu("projects");
              toggleMenu();
            }} className={
                currentMenu === "projects"
                  ? "text-[#fed550] flex items-center"
                  : "text-white flex items-center"
              }>
                <i className="fa-solid fa-id-card pr-8"></i>
                <li className="uppercase">projects</li>
              </a>

              <a className="flex items-center" href="#service"  onClick={() => {
              setCurrentMenu("service");
              toggleMenu();
            }} className={
                currentMenu === "service"
                  ? "text-[#fed550] flex items-center"
                  : "text-white flex items-center"
              }>
                <i className="fa-solid fa-laptop-file pr-8 "></i>
                <li >service</li>
              </a>
              <a className="flex items-center" href="#about"  onClick={() => {
              setCurrentMenu("about");
              toggleMenu();
            }} className={
                currentMenu === "about"
                  ? "text-[#fed550] flex items-center"
                  : "text-white flex items-center"
              }>
                <i className="fa-solid fa-id-card pr-8 "></i>
                <li className="uppercase">About us</li>
              </a>

              <a className="flex items-center" href="#contact"  onClick={() => {
              setCurrentMenu("contact");
              toggleMenu();
            }}className={
                currentMenu === "contact"
                  ? "text-[#fed550] flex items-center"
                  : "text-white flex items-center"
              }>
                <i class="fa-solid fa-phone pr-8 "></i>
                <li className="uppercase">contact us</li>
              </a>
            </ul>
          </div>
          <img
            className="absolute top-50 left-0 z-0 w-full h-full object-cover"
            src="/src/assets/menu.jpg"
          ></img>
        </div>
      )}
    </div>
  );
}

export default NavBar;
