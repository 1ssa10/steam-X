"use client";

import { Canvas, useThree } from "@react-three/fiber";
import UI from "@/components/UI";
import Navbar from "@/components/Navbar";
import Moon from "@/components/Moon";
import { OrbitControls, PresentationControls } from "@react-three/drei";

export default function Home() {
  return (
    <>
      <Canvas
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
          polar={[-0, 0.1]}
          azimuth={[-0.25, 0.5]}
          config={{ mass: 2, tension: 200 }}
        >
          <ambientLight intensity={2} />
          <Moon />
        </PresentationControls>
      </Canvas>
      <Navbar />
      {/* <UI /> */}
    </>
  );
}
