"use client";

import { Canvas, useThree } from "@react-three/fiber";
import UI from "@/components/UI";
import Navbar from "@/components/Navbar";
import Moon from "@/components/Moon";
import { OrbitControls, PresentationControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense, useEffect } from "react";
import Earth from "@/components/Earth";
import * as THREE from "three";
export default function Home() {
  return (
    <>
      <Suspense
        fallback={
          <div className=" absolute left-1/2 top-1/2 text-white">
            loading...
          </div>
        }
      >
        <Canvas
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
            <ambientLight intensity={2} />

            <Moon />
            <Earth />
          </PresentationControls>
        </Canvas>
        <Navbar />
        <UI />
      </Suspense>
    </>
  );
}
