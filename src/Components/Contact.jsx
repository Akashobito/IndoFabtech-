import React from "react";

function Contact() {
  return (
    <div className="h-60 flex flex-col justify-center items-center bg-black text-white relative font-Roboto">
      <div className="w-full flex flex-col justify-center items-center space-y-3 relative z-10 h-full backdrop-brightness-40 backdrop-grayscale-50">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <i class="fa-solid fa-location-dot text-[#fed550]"></i>
            <p className="w-60">
              No: 2/205, Second Street,<br></br>Shri krishna nagar,Mannivakkam,<br></br>Chennai,
              Tamil Nadu-600 048,<br></br>India.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <i class="fa-solid fa-phone text-[#fed550]"></i>
            <p>9789840599/9445668069 </p>
          </div>
          <div className="flex items-center space-x-2">
            <i class="fa-solid fa-envelope text-[#fed550]"></i>
            <p> indofabtech2019@gmail.com</p>
          </div>
        </div>
      </div>

      <img
        className="absolute h-full object-cover"
        src="/src/assets/contacts.jpg"
      ></img>
    </div>
  );
}

export default Contact;
