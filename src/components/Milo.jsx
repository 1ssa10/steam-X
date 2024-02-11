import { useGLTF } from "@react-three/drei";
import React from "react";

function Milo() {
  const milo = useGLTF("./milo.glb");
  console.log(milo);
  return (
    <>
      <primitive
        object={milo.scene}
        scale={0.01}
        rotation-y={Math.PI}
        position-z={-0.5}
      />
    </>
  );
}

export default Milo;
