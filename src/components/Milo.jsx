import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { Children, useRef } from "react";
import * as THREE from "three";

function Milo() {
  const milo = useGLTF("./milo.glb");

  const miloRef = useRef();
  const { scene, size, camera } = useThree();

  console.log(miloRef.current);
  useFrame((state, delta) => {
    if (size.width / size.height < 1) {
      state.camera.lookAt(new THREE.Vector3(1.7, 0.2, 2));
      state.camera.position.z = 5;
    }
  });
  console.log(size.width / size.height);
  milo.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
    }
  });

  return (
    <>
      <primitive
        ref={miloRef}
        object={milo.scene}
        scale={0.006}
        position-y={0.2}
        position-x={2}
        position-z={2}
        rotation-y={Math.PI - Math.PI / 14}
      />
    </>
  );
}

export default Milo;
