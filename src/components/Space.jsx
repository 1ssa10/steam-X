import { OrbitControls, Stars } from "@react-three/drei";
import React from "react";
import Milo from "./Milo";
import Earth from "./Earth";

function Space() {
  return (
    <>
      <OrbitControls />
      <directionalLight position={[0, 10, 10]} intensity={10} />
      {/* <mesh scale={[2, 3, 2]}>
          <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
          <meshBasicMaterial wireframe color="red" />
        </mesh> */}
      <Milo />
      <Earth />
      <Stars />
    </>
  );
}

export default Space;
