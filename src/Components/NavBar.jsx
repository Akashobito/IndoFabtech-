import React, { useState } from "react";

function NavBar() {
  const [enableMenu, setEnableMenu] = useState(false);

  const toggleMenu = () => {
    setEnableMenu(!enableMenu);
  };
  return (
    <div className="flex justify-between px-5 w-full h-10 items-center bg-yellow-50">
      <div className="logo h-5 w-5 bg-amber-200"></div>

      <i onClick={toggleMenu} className="fa-solid fa-bars cursor-pointer"></i>

      {enableMenu && (
        <div className="w-55 fixed right-0 top-0 bottom-0 p-10 bg-amber-500 z-100">
          <i
            onClick={toggleMenu}
            className="fa-solid fa-x absolute left-2 top-4 text-xl cursor-pointer"
          ></i>
          <ul className="flex flex-col space-y-5 w-full font-medium pt-10">
            <a className="flex items-center" href="#home">
              <i className="fa-solid fa-house pr-8"></i>
              <p className="uppercase">Home</p>
            </a>

            <a className="flex items-center" href="#about">
              <i className="fa-solid fa-id-card pr-8"></i>
              <li className="uppercase">About us</li>
            </a>

            <a className="flex items-center" href="#service">
              <i className="fa-solid fa-laptop-file pr-8"></i>
              <li className="uppercase">service</li>
            </a>

            <a className="flex items-center" href="#contact">
              <i class="fa-solid fa-phone pr-8"></i>
              <li className="uppercase">contact us</li>
            </a>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;
