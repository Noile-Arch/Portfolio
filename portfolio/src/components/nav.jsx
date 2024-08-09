import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { PiCaretCircleDoubleUpBold } from "react-icons/pi";
import { VscThreeBars } from "react-icons/vsc";
const Nav = () => {
  const [active, setActive] = useState(false);
  return (
    <main className="w-full h-[100px] bg-black/40 backdrop-blur-sm fixed z-30 top-0 px-4 flex justify-between items-center">
      <div className="flex sm:justify-between justify-between items-center w-full h-full  px-8">
        <a href="/">
          <img
            src="profile.jpeg"
            alt="logo"
            className="w-20 rounded-full h-20"
          />
        </a>
        <div className="justify-between items-center gap-10 hidden sm:flex">
          <a href="/">
            <h1 className="">Home</h1>
          </a>
          <a href="/">
            <h1 className="">Projects</h1>
          </a>
          <a href="/">
            <h1 className="">Skills</h1>
          </a>
          <a href="/">
            <h1 className="">About</h1>
          </a>
        </div>
        <button
          className="sm:hidden flex text-[30px] hover:text-[gold]"
          onClick={() => {
            setActive(!active);
          }}
        >
          <VscThreeBars />
        </button>
        {/* Mobile nav*/}
        <AnimatePresence onExitComplete={() => setActive(false)}>
          {active && (
            <motion.div
              className="sm:hidden absolute z-60 top-0 left-0 flex  flex-col justify-between items-center bg-black/85 w-full h-screen text-[#fffffe] text-[20px] font-bold gap-10 p-4 z-40 "
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.1,
                delay: 0.1,
                staggerChildren: 0.01,
                ease: "easeInOut",
              }}
              exit={{ y: "-100vh" }}
            >
              <motion.div
                className="flex  flex-col justify-center items-center font-bold gap-[50px] p-4 mt-40 border-b-2 w-[300px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4,
                  staggerChildren: 0.4,
                  ease: "easeInOut",
                }}
              >
                <a href="/" className="hover:text-[gold] duration-300">
                  Home
                </a>
                <a href="/projects" className="hover:text-[gold] duration-300">
                  Projects
                </a>
                <a href="/skills" className="hover:text-[gold] duration-300">
                  Skills
                </a>
                <a href="/about" className="hover:text-[gold] duration-300">
                  About
                </a>
                <a href="/" className="hover:text-[gold] duration-300 mb-8">
                  Contact
                </a>
              </motion.div>

              <div className="flex justify-center items-end py-4 ">
                <button
                  className="text-[35px] text-[#27fcfc] hover:text-[red]"
                  onClick={() => {
                    setActive(!active);
                  }}
                >
                  <PiCaretCircleDoubleUpBold />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Nav;
