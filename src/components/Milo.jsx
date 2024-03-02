import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function Milo() {
  const { nodes } = useGLTF("./milo.glb");

  const miloTexture = useTexture("./textures/milonewBaked.jpg");
  miloTexture.flipY = false;

  const miloRef = useRef();

  const { scene, size, camera } = useThree();

  useFrame((state, delta) => {
    if (size.width / size.height < 1) {
      state.camera.lookAt(miloRef.current.position);
      state.camera.position.z = 5;
    } else {
      state.camera.lookAt(new THREE.Vector3(0, 0, 0));
      state.camera.position.z = 4;
    }
  });

  return (
    <>
      <mesh
        ref={miloRef}
        geometry={nodes.cross.geometry}
        scale={[0.005, 0.005, 0.005]}
        position-y={0.3}
        position-x={2}
        position-z={2}
        rotation-y={Math.PI - Math.PI / 12}
        castShadow
      >
        <meshBasicMaterial map={miloTexture} />
      </mesh>
    </>
  );
}

export default Milo;
