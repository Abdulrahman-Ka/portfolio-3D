import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";

import * as THREE from "three";
import type { TechStackIconsType } from "../../../constants";

const TechIcon = ({ name, modelPath, scale, rotation }: TechStackIconsType) => {
  const scene = useGLTF(modelPath);

  useEffect(() => {
    if (name === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if (child instanceof THREE.Mesh && child.name === "Object_5") {
          child.material = new THREE.MeshStandardMaterial({ color: "white" });
        }
      });
    }
  }, [name, scene]);

  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <Environment preset="city" />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <OrbitControls enableZoom={false} />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group
          scale={scale}
          rotation={[
            (rotation[0] * Math.PI) / 180,
            (rotation[1] * Math.PI) / 180,
            (rotation[2] * Math.PI) / 180,
          ]}
        >
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  );
};
export default TechIcon;
