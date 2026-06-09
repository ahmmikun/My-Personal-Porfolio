"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, useTransform, useMotionValue, useMotionTemplate } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function CyberPanel3D({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Rotation thresholds (subtle: max ±5 degrees)
  const rotateX = useTransform(y, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-3deg", "3deg"]);
  
  // Conditionally disable spring animations if reduced motion is enabled
  const scaleValue = isHovered && !prefersReducedMotion ? 1.02 : 1;
  const zValue = isHovered && !prefersReducedMotion ? 30 : 0;
  
  const scale = useSpring(scaleValue, { stiffness: 300, damping: 20 });
  const translateZ = useSpring(zValue, { stiffness: 300, damping: 20 });

  // Spring animations for rotation on reset
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || prefersReducedMotion) return;
    const rect = ref.current.getBoundingClientRect();
    
    // Normalize coordinates from -0.5 to 0.5
    const width = rect.width;
    const height = rect.height;
    const rawX = e.clientX - rect.left;
    const rawY = e.clientY - rect.top;

    mouseX.set(rawX);
    mouseY.set(rawY);

    const xPct = rawX / width - 0.5;
    const yPct = rawY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!prefersReducedMotion) {
      x.set(0);
      y.set(0);
    }
  };

  const backgroundStr = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255,211,0,0.08), transparent 40%)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered && !prefersReducedMotion ? springRotateX : 0,
        rotateY: isHovered && !prefersReducedMotion ? springRotateY : 0,
        scale,
        z: translateZ,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative cyber-panel will-change-transform ease-out",
        className
      )}
      {...props}
    >
      {/* Light tracker overlay */}
      {!prefersReducedMotion && (
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: backgroundStr,
          }}
        />
      )}
      <div 
        style={{ transform: prefersReducedMotion ? "none" : "translateZ(30px)" }} 
        className="h-full w-full"
      >
        {children}
      </div>
    </motion.div>
  );
}
