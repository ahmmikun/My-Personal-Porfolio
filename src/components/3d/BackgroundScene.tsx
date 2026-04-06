"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTheme } from "next-themes";
import * as THREE from "three";

function ParticleField({ theme }: { theme: string | undefined }) {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate random points in a sphere
  const particlesCount = 800;
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

        // Cyber yellow (#FFD300) vs subtle light blue/gray for light mode
        if (isDark) {
             // 80% cyber yellow, 20% white
             if (Math.random() > 0.2) colorObj.setHex(0xFFD300);
             else colorObj.setHex(0xffffff);
        } else {
             // 80% dark gray, 20% cyber yellow
             if (Math.random() > 0.2) colorObj.setHex(0x333333);
             else colorObj.setHex(0xFFD300);
        }

        colorObj.toArray(colors, i * 3);
    }
    return [positions, colors];
  }, [theme]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={isDarkTheme(theme) ? 0.15 : 0.2}
        vertexColors
        transparent
        opacity={isDarkTheme(theme) ? 0.6 : 0.3}
        sizeAttenuation={true}
      />
    </points>
  );
}

function GridPlane({ theme }: { theme: string | undefined }) {
    const isDark = isDarkTheme(theme);
    return (
      <gridHelper 
        args={[100, 100, isDark ? 0xFFD300 : 0x000000, isDark ? 0x222222 : 0xcccccc]} 
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

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <fog attach="fog" args={[isDarkTheme(resolvedTheme) ? '#000000' : '#ffffff', 10, 40]} />
        <ambientLight intensity={isDarkTheme(resolvedTheme) ? 0.2 : 0.8} />
        <ParticleField theme={resolvedTheme} />
        <GridPlane theme={resolvedTheme} />
      </Canvas>
    </div>
  );
}
