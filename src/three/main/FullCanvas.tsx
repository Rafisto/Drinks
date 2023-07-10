import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { WhiskeyGlass } from "../components/WhiskeyGlass";

const FullCanvas = () => {
  return (
    <div style={{ width: "100vx", height: "90vh", overflow: "hidden" }}>
      <Canvas style={{ background: "#121212" }}>
        <OrbitControls />
        <spotLight />
        <WhiskeyGlass />
      </Canvas>
    </div>
  );
};

export default FullCanvas;
