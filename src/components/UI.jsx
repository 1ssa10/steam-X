import { Text } from "@react-three/drei";
import React from "react";

function UI() {
  return (
    <>
      <div className="interface">
        <div className="title">Steam-x</div>
        <div className="button"></div>
      </div>
      <div className="absolute  top-1/3 text-white lg:w-1/2 sm:w-screen md:w-screen  text-center ">
        Welcome to Steam-X Robotics where all your imagination comes to Life
      </div>
      <button className=" absolute left-1/4 top-1/2 bg-blue-400 text-white hover:bg-transparent hover:text-red-600 py-2 px-4 rounded">
        hello
      </button>
    </>
  );
}

export default UI;
