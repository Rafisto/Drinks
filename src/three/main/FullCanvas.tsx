import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { WhiskeyGlass } from "../components/WhiskeyGlass";

type FullCanvasProps = {
  ingredients: { name: string; percentage: number }[];
};

const whiskeyOffset = 0.01;

const FullCanvas = (props: FullCanvasProps) => {
  let total = 0;
  return (
    <div style={{ width: "100vx", height: "100vh", overflow: "hidden" }}>
      <Canvas>
        <Environment files="./background.hdr" background blur={0.2} />
        <OrbitControls />
        <ambientLight position={[0, 10, 0]} />
        <WhiskeyGlass />
        {props.ingredients.map((ingredient, index) => {
          total += (ingredient.percentage / 100) * 2;
          return (
            <mesh
              position={[
                0,
                total - ingredient.percentage / 100 - 1 + whiskeyOffset,
                0,
              ]}
              key={index}
            >
              <boxGeometry args={[1, ingredient.percentage / 50, 1]} />
              <meshStandardMaterial
                color={`rgb(${Math.floor(Math.random() * 255)}, 0, ${Math.floor(Math.random() * 255)})`}
              />
            </mesh>
          );
        })}
      </Canvas>
    </div>
  );
};

export default FullCanvas;
