import React from "react";

const Footer = () => {
    const email = "alshwwhy212@gmail.com";
    const profileDescription = "Passionate developer creating amazing web experiences.";
  
    return (
      <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
          <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
            <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
              {/* Your content for the first column */}
            </div>
            <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
              {/* Your content for the second column */}
            </div>
            <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
              {/* Your content for the third column */}
            </div>
          </div>
  
            {/* Contact Information */}
            <div className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-7">
            Contact Information
            </div>
            <div className="text-center">
            <p className="text-[20px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-5">Email: {email}</p>
            <p className="text-[20px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">{profileDescription}</p>
            </div>

  
          {/* Copyright */}
          <div className="text-[15px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
            &copy; DEVLANT 2024 Inc. All rights reserved
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;