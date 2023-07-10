import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTFResult } from "../types/GLTFResult";

export const GlassMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xffffff,
  metalness: 0,
  roughness: 1,
  envMapIntensity: 0.9,
  clearcoat: 1,
  transparent: true,
  transmission: 0.95,
  opacity: 1,
  reflectivity: 0.2,
});

export const WhiskeyGlass = (props: any) => {
  const { nodes } = useGLTF("/whiskey-glass.gltf") as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        // eslint-disable-next-line
        geometry={nodes.Cube.geometry}
        material={GlassMaterial}
      />
    </group>
  );
};
