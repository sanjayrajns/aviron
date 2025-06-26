"use client";

import React from "react";
import { Home, Info, Users, Newspaper } from "lucide-react";
import { NavBar } from "@/components/aviron/nav-bar";
import { HeroSection } from "@/components/aviron/hero-section";
import { AIPromptInterface } from "@/components/aviron/ai-prompt-interface";
import { AboutSection } from "@/components/aviron/about-section";
import { SpacesSection } from "@/components/aviron/spaces-section";
import { DiscoverSection } from "@/components/aviron/discover-section";

const AvironAILandingPage = () => {
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'About', url: '#about', icon: Info },
    { name: 'Spaces', url: '#spaces', icon: Users },
    { name: 'Discover', url: '#discover', icon: Newspaper }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar items={navItems} />
      
      <main>
        <section id="home">
          <HeroSection />
          <div className="py-20 bg-background">
            <AIPromptInterface />
          </div>
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="spaces">
          <SpacesSection />
        </section>

        <section id="discover">
          <DiscoverSection />
        </section>
      </main>

      <footer className="bg-background border-t border-primary/20 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-muted-foreground">
          <p className="font-headline text-2xl text-foreground mb-2">AVIRON AI</p>
          <p>Pioneering the future of aircraft design.</p>
          <div className="flex justify-center gap-6 mt-6">
            <a href="#home" aria-label="Home"><Home className="w-5 h-5 hover:text-primary transition-colors" /></a>
            <a href="#about" aria-label="About"><Info className="w-5 h-5 hover:text-primary transition-colors" /></a>
            <a href="#spaces" aria-label="Spaces"><Users className="w-5 h-5 hover:text-primary transition-colors" /></a>
            <a href="#discover" aria-label="Discover"><Newspaper className="w-5 h-5 hover:text-primary transition-colors" /></a>
          </div>
          <p className="text-sm mt-8">&copy; {new Date().getFullYear()} Aviron AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AvironAILandingPage;
