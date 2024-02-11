import React, { useEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import ThreeGlobe from "three-globe";

const MyGlobe = new ThreeGlobe()
  .globeImageUrl("//unpkg.com/three-globe/example/img/earth-night.jpg")
  .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png");

const Globe = (props) => {
  const { scene } = useThree();
  // This reference will give us direct access to the mesh
  MyGlobe.position.x = window.innerWidth / 10;
  useEffect(() => {
    scene.add(MyGlobe);
  }, []);
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    MyGlobe.rotation.y = time * 0.1;
  });
  return null;
};

export default Globe;
