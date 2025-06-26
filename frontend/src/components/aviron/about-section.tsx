"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, TrendingUp, Globe } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-foreground mb-6">Our Story & Mission</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Aviron AI is pioneering the future of aircraft design through advanced machine learning models
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold font-headline text-foreground mb-4">Revolutionary Technology</h3>
            <p className="text-muted-foreground mb-6">
              Our cutting-edge ML models analyze thousands of aircraft designs to generate 
              professional-level blueprints and 3D models that meet industry standards.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">AI-powered design optimization</span>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Performance analysis & simulation</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Global collaboration platform</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
              <div className="text-center">
                <div className="text-4xl font-bold text-foreground mb-2">10,000+</div>
                <div className="text-muted-foreground mb-4">Aircraft Designs Generated</div>
                <div className="text-2xl font-bold text-foreground mb-2">500+</div>
                <div className="text-muted-foreground">Professional Engineers</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
