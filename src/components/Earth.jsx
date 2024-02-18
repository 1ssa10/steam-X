import React, { useEffect, useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import ThreeGlobe from "three-globe";
import arcData, { arcData2, arcData3 } from "./ArcData";

const MyGlobe = new ThreeGlobe()
  .globeImageUrl("//unpkg.com/three-globe/example/img/earth-night.jpg")
  .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")
  .arcColor(["red", "red", "yellow", "yellow"])
  .arcsData(arcData)
  .arcDashInitialGap(1);

const Globe = (props) => {
  const { scene, size } = useThree();
  const globeRef = useRef();

  useEffect(() => {
    scene.add(MyGlobe);
  }, []);
  useEffect(() => {
    // Define animation timing
    const timeout1 = setTimeout(() => {
      globeRef.current.arcsData(arcData2);
      globeRef.current.arcDashInitialGap(1);
      //custom colors
      globeRef.current.arcColor((d) => d.color);
      //specific color
      // globeRef.current.arcColor(() => "#F3D849");
      globeRef.current.arcDashAnimateTime(9000);
      globeRef.current.arcsTransitionDuration(6000);
      globeRef.current.arcDashGap(1);
    }, 3000);

    const timeout2 = setTimeout(() => {
      globeRef.current.arcsData(arcData3);
    }, 4500);
    const timeout3 = setTimeout(() => {
      globeRef.current.arcsData(arcData);
    }, 6000);

    // Clean up timeouts
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    globeRef.current.rotation.y = time * 0.1;
  });

  return (
    <primitive
      ref={globeRef}
      object={MyGlobe}
      scale={props.scale}
      position-y={-5}
    />
  );
};
export default Globe;
