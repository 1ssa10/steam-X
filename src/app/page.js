"use client";

import Earth from "@/components/Earth";
import Milo from "@/components/Milo";

import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";

export default function Home() {
  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 400,
        position: [0, 0, 20],
      }}
    >
      {/* <Perf /> */}
      <OrbitControls />
      <directionalLight position={[0, 10, 10]} intensity={10} />
      {/* <mesh scale={[2, 3, 2]}>
          <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
          <meshBasicMaterial wireframe color="red" />
        </mesh> */}
      <Milo />
      <Earth id={"earth"} />
      <Stars />
    </Canvas>
  );
}
