import { Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const AnimatedStarts = ({ isAnimated }) => {
  const starsRef = useRef();

  useFrame(() => {
    if (isAnimated) {
      starsRef.current.rotation.x += 0.0001;
      starsRef.current.rotation.y += 0.0001;
      starsRef.current.rotation.z += 0.0001;
    }
  });

  return <Stars ref={starsRef} />;
};
export default AnimatedStarts;
