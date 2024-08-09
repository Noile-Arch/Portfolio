import React from "react";
import { social } from "../data/social";

const Footer = () => {
  return (
    <main className=" w-full flex flex-col justify-center items-center  h-[200px] bg-[#ffffff] text-black px-4 py-4">
      <div className="flex justify-around py-4 items-center w-full h-auto">
        <a href="/">
          <img
            src="profile.jpeg"
            alt="logo"
            className="w-20 rounded-full h-20"
          />
          <h1 className="font-bold font-mono italic">Elion Kalawa</h1>
        </a>
        <div className=" flex justify-center items-center md:gap-5 gap-2 mt-2">
          {social.map((med) => (
            <a href="" className="bg-[#646cff] rounded-[20px]" target="_blank">
              <img src={med.icon} alt="" className="w-[40px]" />
            </a>
          ))}
        </div>
       
      </div>
      <hr className="border-2 mt-2 w-full border-[#8585ec] " />
        <div className="text-[#646cff] mt-2">
          <h1 className="">@2024</h1>
        </div>
    </main>
  );
};

export default Footer;
