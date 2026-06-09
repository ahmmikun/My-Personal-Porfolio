"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTheme } from "next-themes";
import * as THREE from "three";

function ParticleField({ theme, isReducedMotion }: { theme: string | undefined, isReducedMotion: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);

  // Reduce particle count on mobile or if reduced motion is preferred
  const particlesCount = isReducedMotion ? 200 : (typeof window !== 'undefined' && window.innerWidth < 768 ? 400 : 800);
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    const colorObj = new THREE.Color();
    const isDark = theme === "dark" || !theme;
    
    for (let i = 0; i < particlesCount; i++) {
        // Random spherical positions
        const radius = 20 + Math.random() * 30; // Radius between 20 and 50
        const theta = 2 * Math.PI * Math.random();
        const phi = Math.acos(2 * Math.random() - 1);
        
        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta); // x
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta); // y
        positions[i * 3 + 2] = radius * Math.cos(phi); // z

        // Cyber yellow (#FFD300) and Cyber green (#22C55E)
        if (isDark) {
             const rand = Math.random();
             if (rand > 0.8) colorObj.setHex(0xFFD300); // 20% Yellow
             else if (rand > 0.6) colorObj.setHex(0x22C55E); // 20% Green
             else colorObj.setHex(0x475569); // 60% Slate Gray
        } else {
             if (Math.random() > 0.2) colorObj.setHex(0x333333);
             else colorObj.setHex(0xFFD300);
        }

        colorObj.toArray(colors, i * 3);
    }
    return [positions, colors];
  }, [theme, particlesCount]);

  useFrame((state, delta) => {
    if (pointsRef.current && !isReducedMotion) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={isDarkTheme(theme) ? 0.2 : 0.25}
        vertexColors
        transparent
        opacity={isDarkTheme(theme) ? 0.8 : 0.3}
        sizeAttenuation={true}
      />
    </points>
  );
}

function GridPlane({ theme }: { theme: string | undefined }) {
    const isDark = isDarkTheme(theme);
    return (
      <gridHelper 
        args={[100, 100, isDark ? 0x22C55E : 0x000000, isDark ? 0x1E293B : 0xcccccc]} 
        position={[0, -10, 0]} 
        rotation={[0, 0, 0]}
      />
    );
}

// Helper to reliably determine darkness
function isDarkTheme(theme: string | undefined) {
    return theme === "dark" || !theme;
}

export function BackgroundScene() {
  const { resolvedTheme } = useTheme();
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
    <div className="fixed inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }} dpr={[1, 2]}>
        <React.Suspense fallback={null}>
          <fog attach="fog" args={[isDarkTheme(resolvedTheme) ? '#0A0A0F' : '#ffffff', 10, 40]} />
          <ambientLight intensity={isDarkTheme(resolvedTheme) ? 0.2 : 0.8} />
          <ParticleField theme={resolvedTheme} isReducedMotion={isReducedMotion} />
          <GridPlane theme={resolvedTheme} />
        </React.Suspense>
      </Canvas>
    </div>
  );
}
