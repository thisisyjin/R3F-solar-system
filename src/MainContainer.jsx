/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import AnimatedStarts from "./AnimatedStarts";

const MainContainer = ({ isAnimated }) => {
  return (
    <Canvas>
      <color attach="background" args={["black"]} />
      <OrbitControls />
      <AnimatedStarts isAnimated={isAnimated} />
    </Canvas>
  );
};

export default MainContainer;
