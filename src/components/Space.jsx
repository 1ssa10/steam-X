import { Html, OrbitControls, Stars, Text } from "@react-three/drei";
import React, { useRef } from "react";
import Milo from "./Milo";
import Earth from "./Earth";

import { useFrame, useThree } from "@react-three/fiber";
import UI from "./UI";

function Space() {
  const starRef = useRef();

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    starRef.current.rotation.y = Math.sin(time * 0.1);
    starRef.current.rotation.z = Math.cos(time * 0.1);
  });

  //responsive Earth
  const { size } = useThree();
  const scaleRatio = size.height > size.width ? size.height : size.width;
  const scaleMulti = scaleRatio >= 1281 ? 0.0005 : 0.001;
  const scaleEarth = ((scaleRatio / 10) * scaleMulti).toFixed(2);
  console.log(scaleEarth);
  return (
    <>
      <OrbitControls />

      <ambientLight intensity={10} />

      <Milo orbit={scaleEarth} />
      <Earth scale={scaleEarth} />
      <Stars ref={starRef} />
    </>
  );
}

export default Space;
