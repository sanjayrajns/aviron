"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Plane, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const SpacesSection = () => {
  const [activeSpace, setActiveSpace] = useState("community");

  const spaces = [
    {
      id: "community",
      title: "Community Hub",
      description: "Connect with engineers worldwide",
      icon: Users,
      count: "2.5K+ Members"
    },
    {
      id: "models",
      title: "Model Gallery",
      description: "Browse AI-generated aircraft designs",
      icon: Plane,
      count: "10K+ Models"
    },
    {
      id: "discussions",
      title: "Discussion Boards",
      description: "Share insights and get feedback",
      icon: MessageSquare,
      count: "500+ Topics"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-foreground mb-6">Spaces</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Create your own space, browse community models, and collaborate with fellow engineers
          </p>
        </motion.div>

        <Tabs value={activeSpace} onValueChange={setActiveSpace} className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 bg-card border border-primary/20 h-auto p-1">
            {spaces.map((space) => (
              <TabsTrigger
                key={space.id}
                value={space.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-muted-foreground py-2"
              >
                <space.icon className="w-4 h-4 mr-2 hidden sm:block" />
                {space.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {spaces.map((space) => (
            <TabsContent key={space.id} value={space.id} className="mt-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card className="bg-card border-primary/20">
                  <div className="p-8 text-center">
                    <space.icon className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold font-headline text-foreground mb-2">{space.title}</h3>
                    <p className="text-muted-foreground mb-4">{space.description}</p>
                    <div className="text-primary font-medium mb-6">{space.count}</div>
                    <Button>
                      Explore {space.title}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
