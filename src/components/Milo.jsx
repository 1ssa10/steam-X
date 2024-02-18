import { Float, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

function Milo(props) {
  const milo = useGLTF("./milo.glb");
  const miloRef = useRef();
  const randomAmplitude = Math.random() * 3; // Generate a random amplitude
  const randomFrequency = Math.random() * 0.5;
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const randomFactor = Math.sin(time * randomFrequency);
    //responsive accourding to the earth size
    miloRef.current.position.z = Math.cos(time * 0.5) * props.orbit * 120;
    miloRef.current.position.y = Math.sin(time * 0.5) * props.orbit * 120 - 5;

    miloRef.current.position.x = randomFactor * randomAmplitude;
    miloRef.current.rotation.y = time;
    miloRef.current.rotation.x = time;
    miloRef.current.rotation.z = time;
  });

  console.log(props.orbit * 10 * 5);
  return (
    <>
      <primitive
        ref={miloRef}
        object={milo.scene}
        scale={0.01}
        rotation-y={Math.PI}
      />
    </>
  );
}

export default Milo;
