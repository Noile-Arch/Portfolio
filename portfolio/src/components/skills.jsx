import React from "react";
import { skills } from "../data/skills.js";
const Skills = () => {
  return (
    <main className="w-full xl:h-[auto] h-auto lg:px-20 px-4 bg-gradient-to-b from-[#01012e] from-20  to-[#000000] to-30% ">
      <h1 className="text-[30px] text-[white] font-semibold w-full text-center bg-[#0c0303] py-4 backdrop-blur-2xl rounded-2xl shadow-sm shadow-[gold]">
        Skills
      </h1>

      <div className="w-full h-full text-white flex flex-wrap justify-center lg:px-40 px-2 lg:gap-20 gap-10 items-start py-20">
        {skills.map((skill) => (
          <div className="h-[150px] w-[100px] bg-transparent " key={skill.id}>
            <div className="w-full h-[70%] px-2 rounded-[40px]  flex justify-center items-center">
              <img src={skill.icon} alt="" className="" />
            </div>
            <h1 className="w-full h-[20%] text-[white] text-center">
              {skill.title}
            </h1>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Skills;
