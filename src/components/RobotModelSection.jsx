import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import Robot from "../../public/Robot";

const RobotModelSection = () => {
  return (
    <Canvas>
      <OrbitControls
        maxZoom={2}
        enableZoom={false}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
      />
      <ambientLight intensity={2} />
      <Suspense fallback={null}>
        <Robot scale={0.8} rotation={[0.1, 5, 0]}  />
      </Suspense>
      <Environment preset="sunset" />
      <ContactShadows
        opacity={1}
        scale={10}
        blur={1}
        far={10}
        resolution={256}
        color={"#000000"}
      />
    </Canvas>
  );
};

export default RobotModelSection;
