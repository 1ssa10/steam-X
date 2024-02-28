import { shaderMaterial, useTexture } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import vertexShader from "@/shaders/earth/vertex.glsl";
import fragmentShader from "@/shaders/earth/fragment.glsl";
import atmospherevertexShader from "@/shaders/atmosphere/vertex.glsl";
import atmospherefragmentShader from "@/shaders/atmosphere/fragment.glsl";
import * as THREE from "three";

function Earth() {
  const earthRef = useRef();
  const atmosphereRef = useRef();
  //Textures
  const [earthDayTexture, earthNightTexture, earthSpecularCloudsTexture] =
    useTexture([
      "./textures/earth/day.jpg",
      "./textures/earth/night.jpg",
      "./textures/earth/specularClouds.jpg",
    ]);
  earthDayTexture.colorSpace = THREE.SRGBColorSpace;
  earthDayTexture.anisotropy = 8;
  earthNightTexture.colorSpace = THREE.SRGBColorSpace;
  earthNightTexture.anisotropy = 8;
  earthSpecularCloudsTexture.anisotropy = 8;
  //animation
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    earthRef.current.position.x = Math.sin(-time * 0.05) * 50;
    earthRef.current.position.z = -(Math.cos(time * 0.05) * 60);
    earthRef.current.rotation.y = time * 0.2;
    atmosphereRef.current.position.x = Math.sin(-time * 0.05) * 50;
    atmosphereRef.current.position.z = -(Math.cos(time * 0.05) * 60);
  });

  return (
    <>
      <mesh position={[0, -15, -70]} scale={15} ref={earthRef}>
        <sphereGeometry args={[2, 64, 64]} />
        {/* <erathMaterial /> */}
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{
            uDayTexture: new THREE.Uniform(earthDayTexture),
            uNightTexture: new THREE.Uniform(earthNightTexture),
            uSpecularCloudsTexture: new THREE.Uniform(
              earthSpecularCloudsTexture
            ),
            uAtmosphereDayColor: new THREE.Uniform(new THREE.Color("#00aaff")),
            uAtmosphereTwilightColor: new THREE.Uniform(
              new THREE.Color("##00aaff")
            ),
          }}
        />
      </mesh>
      <mesh position={[0, -15, -70]} scale={15.5} ref={atmosphereRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <shaderMaterial
          side={THREE.BackSide}
          transparent={true}
          vertexShader={atmospherevertexShader}
          fragmentShader={atmospherefragmentShader}
          uniforms={{
            uAtmosphereDayColor: new THREE.Uniform(new THREE.Color("#00aaff")),
            uAtmosphereTwilightColor: new THREE.Uniform(
              new THREE.Color("#00aaff")
            ),
          }}
        />
      </mesh>
    </>
  );
}

export default Earth;
