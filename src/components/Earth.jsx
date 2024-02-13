import React, { useEffect, useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import ThreeGlobe from "three-globe";
import arcData, { arcData2, arcData3 } from "./ArcData";

const sData = [
  {
    startLat: 36.7322, // Algeria (Algiers)
    startLng: 3.0877,
    endLat: 40.4168, // Spain (Madrid)
    endLng: -3.7038,
  },
  {
    startLat: 36.8065, // Tunisia (Tunis)
    startLng: 10.1815,
    endLat: 40.4168, // Spain (Madrid)
    endLng: -3.7038,
  },
];
const MyGlobe = new ThreeGlobe()
  .globeImageUrl("//unpkg.com/three-globe/example/img/earth-night.jpg")
  .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")
  .arcColor(["red", "red", "yellow", "yellow"])
  .arcsData(arcData)
  .arcDashInitialGap(1);

const Globe = (props) => {
  const { scene } = useThree();
  const globeRef = useRef();

  useEffect(() => {
    scene.add(MyGlobe);
  }, []);
  useEffect(() => {
    // Define animation timing
    const timeout1 = setTimeout(() => {
      globeRef.current.arcsData(arcData2); // Show Algeria to Spain arc
      globeRef.current.arcDashInitialGap(1);
      globeRef.current.arcColor((d) => d.color);
      globeRef.current.arcDashAnimateTime(6000);
      globeRef.current.arcsTransitionDuration(3000);
      globeRef.current.arcDashGap(1);
    }, 3000);

    const timeout2 = setTimeout(() => {
      globeRef.current.arcsData(arcData3);
      // Show Algeria to Spain and Tunisia to Spain arcs
    }, 4500);
    const timeout3 = setTimeout(() => {
      globeRef.current.arcsData(arcData);
      // Show Algeria to Spain and Tunisia to Spain arcs
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
    globeRef.current.rotation.y = time * 0.05;
  });
  return (
    <primitive ref={globeRef} object={MyGlobe} scale={0.05} position-y={0} />
  );
};
export default Globe;
