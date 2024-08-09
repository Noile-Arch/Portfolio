import React from "react";
import Nav from "../components/nav";
import Hero from "../components/hero";
import Projects from "../components/projects";
import Info from "../components/info";
import Skills from "../components/skills";
import Footer from "../components/footer";
const Home = () => {
  return (
    <main className="w-full h-auto block bg-[#242424]">
      <Nav />
      <div className="bg-center w-full h-auto">
        <Hero />
      </div>
      <div className=" w-full h-auto">
        <Skills />
      </div>
      <div className=" w-full h-auto ">
        <Projects />
      </div>
      <div className="w-full h-auto ">
        <Info />
      </div>
      <div className="w-full h-auto ">
        <Footer />
      </div>

    </main>
  );
};

export default Home;
