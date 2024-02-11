import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full flex flex-row items-center justify-between m-auto">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center rounded-full"
        >
          <span className="text-[18px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
            DEVLANT
          </span>
        </a>

        <div className="flex flex-row gap-2 md:gap-4 md:hidden">
          {Socials.map((social) => (
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              key={social.name}
            >
              <Image
                src={social.src}
                alt={social.name}
                width={30}
                height={30}
                className="cursor-pointer"
              />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center justify-between w-2/3 md:w-[500px] h-full bg-[#0300145e] px-2 md:px-4 py-1 md:py-2 rounded-full text-gray-200">
          <a href="#about-me" className="cursor-pointer">
            About me
          </a>
          <a href="#skills" className="cursor-pointer">
            Skills
          </a>
          <a href="#projects" className="cursor-pointer">
            Projects
          </a>
        </div>

        <div className="hidden md:flex flex-row gap-2">
          {Socials.map((social, index) => (
            <React.Fragment key={social.name}>
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                key={social.name}
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  width={30}
                  height={30}
                  className="cursor-pointer"
                />
              </a>
              {index < Socials.length - 1 && (
                <div className="w-2" /> // Adjust the width based on your preference
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
