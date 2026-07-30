import React from "react";
import contactBackground from "../assets/logo.png"
import logo from "../assets/contacts.jpg";

function Contact() {
  return (
    <div id="contact" className="h-60 flex flex-col justify-center items-center bg-black text-white relative font-Roboto lg:h-120">

      <div className="w-full flex flex-col lg:flex-row lg:justify-around justify-center items-center space-y-3 relative z-10 h-full backdrop-brightness-40 backdrop-grayscale-50 lg:text-xl">

        <div className="hidden lg:flex justify-center items-center space-x-3">
          <img className="w-32 h-32 object-contain" src={contactBackground}></img>
          <p className="font-CopperPlate text-4xl uppercase">INDOFAB <br></br>Tech</p>
        </div>

        <div className="hidden border-l-3 pl-5 border-[#fed550]">
          <ul className="font-roboto uppercase flex flex-col space-y-4">
            <li>home</li>
            <li>projects</li>
            <li>service</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </div>

        <div className="space-y-2 lg:w-100 lg:space-y-7">
          <div className="flex items-center space-x-2 lg:space-x-4">
            <i className="fa-solid fa-location-dot text-[#fed550] lg:text-3xl"></i>
            <p className="w-60 lg:w-auto">
              No: 2/205, Second Street,<br></br>Shri krishna nagar,Mannivakkam,<br></br>Chennai,
              Tamil Nadu-600 048,<br></br>India.
            </p>
          </div>
          <div className="flex items-center space-x-2 lg:space-x-4">
            <i className="fa-solid fa-phone text-[#fed550] lg:text-3xl"></i>
            <p>9789840599/9445668069 </p>
          </div>
          <div className="flex items-center space-x-2 lg:space-x-4">
            <i className="fa-solid fa-envelope text-[#fed550] lg:text-3xl"></i>
            <p> indofabtech2019@gmail.com</p>
          </div>
        </div>
      </div>

      <img
        className="absolute h-full lg:w-full lg:object-[center_20%] object-cover"
        src={logo}
      ></img>
    </div>
  );
}

export default Contact;
