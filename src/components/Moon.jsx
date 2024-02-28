import { Stars, useTexture } from "@react-three/drei";
import React, { useRef } from "react";
import Milo from "./Milo";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
function Moon() {
  const starRef = useRef();
  const [colorMap, displacementMap, aoMap, normalMap, roughnessMap] =
    useTexture([
      "./textures/moon/rock_boulder_dry_diff_1k.jpg ",
      "./textures/moon/rock_boulder_dry_disp_1k.png",
      "./textures/moon/rock_boulder_dry_ao_1k.jpg",
      "./textures/moon/rock_boulder_dry_nor_gl_1k.jpg",
      "./textures/moon/rock_boulder_dry_rough_1k.jpg",
    ]);
  colorMap.colorSpace = THREE.SRGBColorSpace;
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    starRef.current.rotation.y = time * 0.05;
  });
  return (
    <>
      <directionalLight position={[0, 3, 0]} intensity={1} castShadow />

      <Stars ref={starRef} />
      <Milo />
      <mesh rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[10, 10, 512, 512]} />
        <meshStandardMaterial
          map={colorMap}
          displacementMap={displacementMap}
          displacementScale={0.5}
          aoMap={aoMap}
          normalMap={normalMap}
          normalScale={0.5}
          roughnessMap={roughnessMap}
        />
      </mesh>
    </>
  );
}

export default Moon;
