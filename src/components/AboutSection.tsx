import React from 'react';
import { Card } from '@/components/ui/card';
import { UserRound } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-portfolio-pink/10 blur-3xl"></div>

      <div className="container relative">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="section-eyebrow">— Introduction —</p>
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-portfolio-purple/30"></div>
              <div className="relative bg-gradient-to-br from-portfolio-pink/40 to-portfolio-mauve/40 p-3 rounded-2xl shadow-xl">
                <div className="w-64 h-64 rounded-xl bg-gradient-to-br from-portfolio-purple/30 to-portfolio-navy/40 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-portfolio-cream/80 flex items-center justify-center text-portfolio-navy">
                    <UserRound size={64} strokeWidth={1.2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <Card className="p-8 md:p-10 border-portfolio-mauve/20 shadow-lg rounded-2xl bg-gradient-to-br from-white to-portfolio-cream/40">
              <h3 className="font-serif-display italic text-3xl mb-6 text-portfolio-navy">Who I Am</h3>
              <div className="space-y-4 text-portfolio-navy/80 leading-relaxed">
                <p>
                  I'm an aspiring software engineer passionate about creating efficient and user-friendly applications. 
                  With a background in [your background], I blend technical expertise with creative problem-solving.
                </p>
                <p>
                  My journey in software development began with [how you started]. Since then, I've been continuously 
                  expanding my knowledge and skills in various technologies and methodologies.
                </p>
                <p>
                  I believe in writing clean, maintainable code and creating solutions that make a real difference. 
                  When I'm not coding, you can find me [your hobbies or interests].
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
