import { Text } from "@react-three/drei";
import React from "react";

function UI() {
  return (
    <>
      {/* descktop */}
      <div className="  absolute  hidden md:block md:bottom-1/2 md:translate-y-1/2  md:left-1/4 md:-translate-x-1/2  ">
        {/* container  */}
        <div className="flex flex-col  mx-4 my-4  md:items-start justify-between  md:justify-center text-custom-white   md:space-y-6">
          <h1 className="text-6xl text-white font-bold uppercase text-left">
            steamX
          </h1>

          <div>
            <p
              className="text-center p-4 mb-6 md:text-left uppercase md:max-w-md 
            leading-5 tracking-tight border border-white md:text-2xl "
            >
              we are committed to offer your kids an education in coding,
              robotics and electronics
            </p>
            <button
              className="bg-custom-blue font-bold text-sm rounded-full mx-2 py-3 px-6
           text-white hover:-translate-y-0.5 transition duration-150 hover:opacity-50 hover:bg-custom-yellow "
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
4;

export default UI;
