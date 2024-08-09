import React from "react";

const Info = () => {
  return (
    <main
      className=" w-full h-auto lg:h-[300px] flex justify-center items-center bg-white border-none"
      style={{
        backgroundImage: `url('white.jpeg')`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className=" lg:px-40 px-5 md:px-20 w-full h-60 flex flex-col justify-center items-center text-black">
        <h1 className="md:text-[30px] text-[25px] font-semibold text-black text-center">
          I Develop stunning websites that have high traffic and drive sale
        </h1>
        <p className=" font-semibold md:text-[25px] text-[20px]">
          Contact me for free consultation
        </p>
        <div className="my-4 ease-in-out text-[white] ">
          <button className="px-5 py-3 bg-[#646cff] rounded-[50px] hover:border-[#646cff] hover:bg-black/70 hover:text-[#646cff] hover:border-2">
            Contact me
          </button>
        </div>
      </div>
    </main>
  );
};

export default Info;
