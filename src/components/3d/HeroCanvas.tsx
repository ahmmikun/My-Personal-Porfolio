"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Float } from "@react-three/drei";

function HeroConstruct({ isReducedMotion }: { isReducedMotion: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current && !isReducedMotion) {
      // Rotate idle
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;

      // Pulse scale softly
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05 + (hovered ? 0.2 : 0);
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
    }
  });

  return (
    <Float 
      speed={isReducedMotion ? 0 : 2} 
      rotationIntensity={isReducedMotion ? 0 : 1} 
      floatIntensity={isReducedMotion ? 0 : 2}
    >
      <mesh
        ref={meshRef}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <icosahedronGeometry args={[2.5, 1]} />
        <meshBasicMaterial
          color={hovered ? 0x22C55E : 0xFFD300}
          wireframe={true}
          transparent
          opacity={0.4}
        />
      </mesh>
    </Float>
  );
}

export function HeroCanvas() {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-0 opacity-80 pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
        <React.Suspense fallback={null}>
          <HeroConstruct isReducedMotion={isReducedMotion} />
        </React.Suspense>
      </Canvas>
    </div>
  );
}
