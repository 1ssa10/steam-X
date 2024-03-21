"use client";

import { Canvas, useThree } from "@react-three/fiber";
import UI from "@/components/UI";
import Navbar from "@/components/Navbar";
import Moon from "@/components/Moon";
import { OrbitControls, PresentationControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense, useEffect, useState } from "react";
import Earth from "@/components/Earth";
import * as THREE from "three";
export default function Home() {
  return (
    <>
      <Canvas
        className=" bg-[#191718]"
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          outputColorSpace: THREE.LinearSRGBColorSpace,
        }}
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 400,
          position: [2, 0.5, 4],
        }}
      >
        <PresentationControls
          global
          polar={[0, 0.1]}
          azimuth={[-0.25, 0.5]}
          config={{ mass: 2, tension: 200 }}
        >
          <ambientLight intensity={0} />
          <Moon />
          <Earth />
        </PresentationControls>
      </Canvas>
      <Navbar />
      <UI />

      {/* border btw hero and sections */}
      <div className="absolute  border-b-[8px] border-custom-yellow w-full  -translate-y-1/2  "></div>
      {/* search Bar positioning */}
      <div
        className="absolute md:bottom-0 flex flex-col md:flex-row -translate-y-full  md:justify-center w-full  md:bg-custom-yellow    
      md:w-1/2 md:left-1/2 md:translate-y-1/2 md:-translate-x-1/2 md:rounded-full "
      >
        <p
          className="text-center p-4  md:text-left uppercase md:max-w-md text-custom-white
            leading-5 tracking-tight border border-white md:text-2xl block md:hidden "
        >
          we are committed to offer your kids an education in coding, robotics
          and electronics
        </p>
        {/*  searchbar container  */}
        <div
          className="flex  w-full items-center justify-center mx-auto my-3 md:mx-2 space-x-2
          md:justify-between md:my-4 md:space-x-5  md:mb-4"
        >
          <input
            type="text"
            className="flex-1 p-2  rounded-full font-bold  border-2  border-custom-blue focus:outline-none
             bg-transparent md:bg-custom-white placeholder:text-custom-blue placeholder:text-center  md:placeholder:text-left"
            placeholder="Search"
          />

          <button
            className=" bg-transparent md:bg-custom-white text-custom-blue py-2 px-10 rounded-full font-bold border-2 border-custom-blue
             "
          >
            GO
          </button>
        </div>
      </div>
    </>
  );
}
