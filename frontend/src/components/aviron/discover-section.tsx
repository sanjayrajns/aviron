"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const DiscoverSection = () => {
  const newsItems = [
    {
      title: "AI Revolutionizes Aircraft Design Process",
      summary: "New machine learning models reduce design time by 80%",
      category: "Technology",
      readTime: "5 min read"
    },
    {
      title: "Sustainable Aviation: The Future is Electric",
      summary: "Electric aircraft designs show promising efficiency gains",
      category: "Sustainability",
      readTime: "3 min read"
    },
    {
      title: "Collaborative Design Platforms Transform Industry",
      summary: "Global teams now work together seamlessly on aircraft projects",
      category: "Industry",
      readTime: "4 min read"
    }
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-foreground mb-6">Discover</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest aviation and AI news
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="bg-card border-primary/20 hover:border-primary/40 transition-all cursor-pointer group h-full flex flex-col">
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <Newspaper className="w-4 h-4 text-primary" />
                    <span className="text-xs text-primary uppercase tracking-wide">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">{item.summary}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mt-4">
                    <span>{item.readTime}</span>
                    <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
