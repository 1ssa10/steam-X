import { Stars, useGLTF, useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import { NoColorSpace } from "three";
import Milo from "./Milo";

function Moon() {
  const [colorMap, displacementMap, aoMap, normalMap, roughnessMap] =
    useTexture([
      "./textures/rock_boulder_dry_diff_1k.jpg ",
      "./textures/rock_boulder_dry_disp_1k.png",
      "./textures/rock_boulder_dry_ao_1k.jpg",
      "./textures/rock_boulder_dry_nor_gl_1k.jpg",
      "./textures/rock_boulder_dry_rough_1k.jpg",
    ]);

  return (
    <>
      <directionalLight position={[0, 3, 0]} intensity={2} castShadow />
      <Stars />
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
