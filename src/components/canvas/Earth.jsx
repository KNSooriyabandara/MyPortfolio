import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import {
  EffectComposer,
  Glitch,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { GlitchMode } from "postprocessing";
import { Vector2 } from "three";

import CanvasLoader from "../Loader";

/* ================= EARTH GROUP ================= */

const EarthScene = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <group>
      {/* Lights inside external container */}
      
      <ambientLight intensity={0.8} color="#00ffff" />

      <directionalLight
        position={[5, 2, 5]}
        intensity={1.5}
        color="#ffcc66"
        castShadow
      />

      <directionalLight
        position={[-5, 2, -5]}
        intensity={1.5}
        color="#3399ff"
      />

      {/* Model */}
      <primitive
        object={earth.scene}
        scale={2.5}
        position={[0, 0, 0]}
      />
    </group>
  );
};

/* ================= CANVAS ================= */

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>

        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <EarthScene />

        <EffectComposer>
          <Glitch
            delay={[2.0, 4.0]}
            duration={[0.2, 0.8]}
            strength={[0.1, 0.3]}
            mode={GlitchMode.SPORADIC}
            ratio={0.4}
          />
          <ChromaticAberration offset={new Vector2(0.001, 0.001)} />
        </EffectComposer>

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;