import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-portfolio-pink/10 blur-3xl"></div>
      <div className="container relative">
        <div className="flex flex-col items-center text-center mb-8">
          <p className="section-eyebrow">— Let's Connect —</p>
          <h2 className="section-title mb-6">Get In Touch</h2>
          <p className="text-portfolio-navy font-light leading-relaxed max-w-3xl mx-auto mt-3">
            I'm always open to new opportunities, collaborations, or just a
            friendly chat about tech and ideas. Feel free to reach out!
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="space-y-3">
            <a
              href="mailto:sanilachowdhury@gmail.com"
              className="flex items-center gap-4 p-4 rounded-2xl border border-portfolio-mauve/20 bg-gradient-to-br from-white to-portfolio-cream/30 hover:bg-portfolio-cream/40 transition-colors shadow-sm"
            >
              <div className="p-2.5 rounded-xl bg-portfolio-mauve/10">
                <Mail size={22} className="text-portfolio-navy" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-portfolio-navy/50 font-medium mb-0.5">
                  Email
                </p>
                <p className="text-portfolio-navy font-medium">
                  sanilachowdhury@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://github.com/sanilac6459"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl border border-portfolio-mauve/20 bg-gradient-to-br from-white to-portfolio-cream/30 hover:bg-portfolio-cream/40 transition-colors shadow-sm"
            >
              <div className="p-2.5 rounded-xl bg-portfolio-mauve/10">
                <Github size={22} className="text-portfolio-navy" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-portfolio-navy/50 font-medium mb-0.5">
                  GitHub
                </p>
                <p className="text-portfolio-navy font-medium">
                  github.com/sanilac6459
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/sanilachowdhury/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl border border-portfolio-mauve/20 bg-gradient-to-br from-white to-portfolio-cream/30 hover:bg-portfolio-cream/40 transition-colors shadow-sm"
            >
              <div className="p-2.5 rounded-xl bg-portfolio-mauve/10">
                <Linkedin size={22} className="text-portfolio-navy" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-portfolio-navy/50 font-medium mb-0.5">
                  LinkedIn
                </p>
                <p className="text-portfolio-navy font-medium">
                  linkedin.com/in/sanilachowdhury
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
