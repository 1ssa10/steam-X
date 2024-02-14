"use client";
import dynamic from "next/dynamic";

import { Canvas } from "@react-three/fiber";

const DynamicSapce = dynamic(() => import("@/components/Space"), {
  ssr: false,
});
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
      <DynamicSapce />
    </Canvas>
  );
}
