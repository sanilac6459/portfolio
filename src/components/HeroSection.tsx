import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';


const HeroSection = () => {

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden grain-overlay" style={{ background: 'var(--gradient-soft)' }}>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl animate-fade-in">
          <h4 className="text-portfolio-purple font-serif-display italic text-2xl mb-3">Hello, my name is</h4>
          <h1 className="font-serif-display text-6xl md:text-8xl font-semibold mb-6 text-portfolio-navy leading-[0.95]">
            <span className="block">Your Name</span>
            <span className="block mt-2 italic text-portfolio-purple">Software Engineer</span>
          </h1>
          <div className="mb-8">
            <p className="text-base md:text-lg text-portfolio-navy/70 max-w-xl font-light">
              Crafting intuitive, efficient, and scalable digital experiences with care and curiosity.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button
              className="bg-portfolio-navy hover:bg-portfolio-navy/90 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <Link to="/about">About Me</Link>
            </Button>
            <Button
              variant="outline"
              className="border-portfolio-navy/40 text-portfolio-navy hover:bg-portfolio-navy/5 px-8 py-6 rounded-full backdrop-blur-sm bg-white/30"
              asChild
            >
              <Link to="/projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
