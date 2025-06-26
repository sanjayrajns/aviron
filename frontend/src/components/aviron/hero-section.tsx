"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Plane, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "./sparkles";

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-screen bg-background overflow-hidden">
      <div className="absolute inset-0">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#4F46E5"
        />
      </div>

      <motion.div
        className="absolute inset-0"
        style={{ y }}
      >
        {isClient && [...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: -100, 
              y: window.innerHeight * 0.2 + i * 150,
              rotate: 45 
            }}
            animate={{ 
              x: window.innerWidth + 100,
              y: window.innerHeight * 0.2 + i * 150 - 200
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear"
            }}
          >
            <Plane className="w-8 h-8 text-primary opacity-60" />
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <h1 className="font-headline text-6xl md:text-8xl font-bold bg-gradient-to-r from-foreground via-primary/80 to-accent bg-clip-text text-transparent mb-6">
            AVIRON AI
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Revolutionary ML models for professional aircraft design and architecture
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" className="px-8 text-lg">
            Start Designing
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary/10 hover:text-primary px-8 text-lg">
            Learn More
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </div>
  );
};
