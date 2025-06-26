
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParticlesProps {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
}

interface Particle {
  left: string;
  top: string;
  width: string;
  height: string;
  duration: number;
  delay: number;
}

export const SparklesCore = (props: ParticlesProps) => {
  const {
    className,
    particleColor = "#FFFFFF",
    minSize = 0.4,
    maxSize = 1,
    particleDensity = 100,
  } = props;

  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: particleDensity }).map(() => {
      return {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${minSize + Math.random() * (maxSize - minSize)}px`,
        height: `${minSize + Math.random() * (maxSize - minSize)}px`,
        duration: 2 + Math.random() * 3,
        delay: Math.random() * 2,
      };
    });
    setParticles(newParticles);
  }, [particleDensity, minSize, maxSize]);

  return (
    <div className={cn("absolute inset-0 h-full w-full", className)}>
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              backgroundColor: particleColor,
              left: particle.left,
              top: particle.top,
              width: particle.width,
              height: particle.height,
            }}
            animate={{
              opacity: [0, 1, 0.5, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
};
