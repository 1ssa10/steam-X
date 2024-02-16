import { Html, OrbitControls, Stars, Text } from "@react-three/drei";
import React, { useRef } from "react";
import Milo from "./Milo";
import Earth from "./Earth";

import { useFrame } from "@react-three/fiber";
import UI from "./UI";

function Space() {
  const starRef = useRef();

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    starRef.current.rotation.y = Math.sin(time * 0.1);
    starRef.current.rotation.z = Math.cos(time * 0.1);
  });
  return (
    <>
      <OrbitControls />

      <ambientLight intensity={10} />

      <Milo />
      <Earth />
      <Stars ref={starRef} />
    </>
  );
}

export default Space;
