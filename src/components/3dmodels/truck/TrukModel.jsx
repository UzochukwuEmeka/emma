import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Truck from "./Truck";

const TrukModel = () => {
  return (
    <>
      <Canvas className="truck_canvas">
        <OrbitControls
          maxZoom={2}
          enableZoom={false}
          minAzimuthAngle={-Math.PI / 2}
          maxAzimuthAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 0.5}
          enablePan={false}
          autoRotate={true}
        />
        <ambientLight intensity={2} />
        <Suspense fallback={null}>
          <Truck scale={0.6} rotation={[0.1, 5.9, 0]} />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </>
  );
};

export default TrukModel;
