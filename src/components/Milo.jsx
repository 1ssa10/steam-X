import { Float, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

function Milo() {
  const milo = useGLTF("./milo.glb");
  const miloRef = useRef();
  const randomAmplitude = Math.random() * 3; // Generate a random amplitude
  const randomFrequency = Math.random() * 0.5;
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const randomFactor = Math.sin(time * randomFrequency);
    miloRef.current.position.z = Math.cos(time * 0.5) * 8;
    miloRef.current.position.y = Math.sin(time * 0.5) * 8;
    miloRef.current.position.x = randomFactor * randomAmplitude;
    miloRef.current.rotation.y = time;
    miloRef.current.rotation.x = time;
    miloRef.current.rotation.z = time;
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
