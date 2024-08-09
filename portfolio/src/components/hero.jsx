import React from "react";

const Hero = () => {
  return (
    <main className="flex justify-center items-center xl:h-[650px] w-full  " style={{backgroundImage:`url('redsmoke.jpeg')`,backgroundSize:`cover`}}>
      <div className="w-full h-full flex justify-center flex-wrap items-center gap-4  bg-gradient-to-b from-black/40 via-transparent via-40% from-20% to-[#01062c] to-100% py-20 px-4">
        <div className="bg-cover object-cover bg-no-repeat flex justify-center sm:w-[500px]">
          <img
            src="profile.jpeg"
            alt=""
            className="object-cover bg-cover bg-no-repeat bg-center w-[200px] rounded-full h-[200px] sm:w-[350px] sm:h-[350px]"
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-4 sm:w-[500px]">
          <h1 className="md:text-[60px] text-[50px] font-bold">Hi, I'm ELion</h1>
          <p className="md:text-[25px] text-[20px] font-semibold">
            I develop cool webapps ,websites and mobile aplications with the
            best UX & UI interfaces
          </p>
          <div className="gap-5 w-full flex mt-10 justify-center md:justify-start items-center text-[14px] md:text-[20px]">
            <button className="px-7 py-4 bg-[#646cff] rounded-[40px] font-semibold ">
              View my Projects
            </button>
            <button className="px-7 py-4  border-2 border-[#646cff] text-[#646cff] rounded-[40px] font-semibold ">
              Contact me
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
