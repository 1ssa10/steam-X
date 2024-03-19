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

      {/* search Bar positioning */}
      <div className="flex justify-center w-full  bg-custom-yellow md:absolute md:w-1/2 md:left-1/2 md:-translate-y-1/2 md:-translate-x-1/2 md:rounded-full ">
        {/*  searchbar container  */}
        <div className="flex flex-col w-full items-center justify-center my-1 mx-4  space-y-2 md:flex-row md:justify-between md:my-4 md:space-x-5 md:space-y-0">
          <input
            type="text"
            className="flex-1 p-2 w-full  rounded-full border-b border-custom-black focus:outline-none"
            placeholder="Search"
          />
          <button className="bg-custom-black text-custom-yellow py-2 px-4 rounded-full">
            hello
          </button>
        </div>
      </div>
    </>
  );
}
