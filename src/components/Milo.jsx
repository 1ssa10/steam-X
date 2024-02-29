import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function Milo() {
  const { nodes } = useGLTF("./milo.glb");
  const miloTexture = useTexture("./textures/milobaked.jpg");
  miloTexture.flipY = false;

  const miloRef = useRef();
  const { scene, size, camera } = useThree();

  useFrame((state, delta) => {
    if (size.width / size.height < 1) {
      state.camera.lookAt(new THREE.Vector3(1.7, 0.2, 2));
      state.camera.position.z = 5;
    } else {
      state.camera.lookAt(new THREE.Vector3(0, 0, 0));
      state.camera.position.z = 4;
    }
  });

  return (
    <>
      <mesh
        geometry={nodes.milo.geometry}
        scale={[0.03, 0.02, 0.03]}
        position-y={0.6}
        position-x={1.8}
        position-z={3}
        rotation-y={-Math.PI / 14}
        castShadow
      >
        <meshBasicMaterial map={miloTexture} />
      </mesh>
    </>
  );
}

export default Milo;
