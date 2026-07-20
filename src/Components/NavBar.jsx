import React, { useState } from "react";

function NavBar() {
  const [enableMenu, setEnableMenu] = useState(false);

  const toggleMenu = () => {
    setEnableMenu(!enableMenu);
  };
  return (
    <div className="flex justify-between px-5 w-full h-10 items-center !z-100 relative lg:pt-5">
      <div className="logo h-8 w-8 cursor-pointer lg:h-15 lg:w-15 lg:mt-10 lg:ml-5">
        <img className="object-cover" src="/src/assets/logo.png"></img>
      </div>

      <div className="hidden lg:block">
        <ul className="w-170 pr-10 flex justify-between font-CopperPlate text-[#fed550] uppercase">
          <li className="border-b-2">Home</li>
          <li>projects</li>
          <li>service</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </div>

      <i
        onClick={toggleMenu}
        className="lg:!hidden fa-solid fa-bars cursor-pointer text-white"
      ></i>

      {enableMenu && (
        <div className="lg:hidden w-60 fixed right-0 top-0 bottom-0 z-10 bg-[#E5E5E5] text-white font-CopperPlate upp">
          <div
            className="w-full h-full relative pl-8 pt-5 z-100 backdrop-brightness-50
          0"
          >
            <i
              onClick={toggleMenu}
              className="fa-solid fa-x relative left-[-20px] top-[-4px] text-xl cursor-pointer"
            ></i>
            <ul className="flex flex-col space-y-5 w-full font-medium pt-10">
              <a className="flex items-center" href="#home">
                <i className="fa-solid fa-house pr-8 text-[#fed550]"></i>
                <p className="uppercase">Home</p>
              </a>

              <a className="flex items-center" href="#about">
                <i className="fa-solid fa-id-card pr-8 text-[#fed550]"></i>
                <li className="uppercase">About us</li>
              </a>

              <a className="flex items-center" href="#service">
                <i className="fa-solid fa-laptop-file pr-8 text-[#fed550]"></i>
                <li className="uppercase">service</li>
              </a>

              <a className="flex items-center" href="#contact">
                <i class="fa-solid fa-phone pr-8 text-[#fed550]"></i>
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
