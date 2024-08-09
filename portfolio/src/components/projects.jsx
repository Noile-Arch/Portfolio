import React from "react";
import ProjectCard from "./project_card";

const Projects = () => {
  return (
    <main className=" w-full h-auto ">
      <div className=" w-full h-full bg-white lg:px-20 px-4  pt-10 pb-20">
        <h1 className="text-[30px] shadow-md shadow-[#646cff] text-[black] font-semibold w-full text-center bg-[#e7e4e4] py-4 backdrop-blur-2xl rounded-2xl">
          My Projects
        </h1>
        <div className="w-full lg:px-20  px-4 font-semibold text-[#646cff]  py-6 flex justify-center items-center md:gap-20 gap-1 text-[12px] sm:text-[18px]">
          <button className=" bg-[rgba(118,90,230,0.4)]  px-4 py-2 rounded-[40px]">
            All
          </button>
          <button className=" bg-[rgba(118,90,230,0.4)]  px-4 py-2 rounded-[40px]">
            Websites
          </button>
          <button className=" bg-[rgba(118,90,230,0.4)]   px-4 py-2 rounded-[40px]">
            Webapps
          </button>
          <button className=" bg-[rgba(118,90,230,0.4)]   px-4 py-2 rounded-[40px]">
            Mobile apps
          </button>
        </div>
        <div className=" w-full h-full flex justify-center items-center flex-wrap gap-10 md:mt-10">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </main>
  );
};

export default Projects;
