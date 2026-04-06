"use client";

import React, { useRef, useState } from "react";
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

  // Motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Rotation thresholds (subtle: max ±5 degrees)
  const rotateX = useTransform(y, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-5deg", "5deg"]);
  const scale = useSpring(isHovered ? 1.02 : 1, { stiffness: 300, damping: 20 });
  const translateZ = useSpring(isHovered ? 50 : 0, { stiffness: 300, damping: 20 });

  // Spring animations for rotation on reset
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
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
    x.set(0);
    y.set(0);
  };

  const backgroundStr = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255,211,0,0.1), transparent 40%)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? springRotateX : 0,
        rotateY: isHovered ? springRotateY : 0,
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
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: backgroundStr,
        }}
      />
      <div 
        style={{ transform: "translateZ(30px)" }} 
        className="h-full w-full"
      >
        {children}
      </div>
    </motion.div>
  );
}
