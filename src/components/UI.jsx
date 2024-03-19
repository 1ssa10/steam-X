import { Text } from "@react-three/drei";
import React from "react";

function UI() {
  return (
    <>
      <div className="absolute top-1/2 -translate-y-1/2 w-full  md:w-1/2">
        <div className="flex flex-col items-center justify-center text-white space-y-6">
          <h1 className="text-5xl text-white font-bold uppercase">steamX</h1>
          <p>
            we are committed to offer your kids an education in coding, robotics
            and electronics
          </p>
        </div>
      </div>
    </>
  );
}

export default UI;
