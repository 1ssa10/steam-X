import { Float, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

function Milo() {
  const milo = useGLTF("./milo.glb");
  const miloRef = useRef();
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    miloRef.current.position.x = Math.sin(time * 0.1) * time * 0.1;
    miloRef.current.position.z = Math.cos(time * 0.5) * 8;
    miloRef.current.position.y = Math.sin(time * 0.5) * 8;
    miloRef.current.rotation.y = time;
    miloRef.current.rotation.x = time;
  });

  return (
    <>
      <primitive
        ref={miloRef}
        object={milo.scene}
        scale={0.01}
        rotation-y={Math.PI}
        position-z={10}
      />
    </>
  );
}

export default Milo;
