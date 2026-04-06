"use client";

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Float } from "@react-three/drei";

function HeroConstruct() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotate idle
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;

      // Pulse scale softly
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05 + (hovered ? 0.2 : 0);
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <icosahedronGeometry args={[2.5, 1]} />
        <meshBasicMaterial
          color={hovered ? 0xffffff : 0xFFD300}
          wireframe={true}
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
}

export function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-0 opacity-60 pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <HeroConstruct />
      </Canvas>
    </div>
  );
}
