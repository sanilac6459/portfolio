import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-portfolio-pink/10 blur-3xl"></div>
      <div className="container relative">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="section-eyebrow">— Say Hello —</p>
          <h2 className="section-title">Get In Touch</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-serif-display text-2xl mb-4 text-portfolio-navy">
                Let's Connect
              </h3>
              <p className="text-portfolio-navy mb-8 font-light leading-relaxed">
                I'm always open to meet new people, explore collaborations, and
                hear about new opportunities. Feel free to reach out!
              </p>
            </div>

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
          <div>
            <Card className="p-8 border-portfolio-mauve/20 rounded-2xl shadow-lg bg-gradient-to-br from-white to-portfolio-cream/30">
              <h3 className="font-serif-display text-2xl mb-6 text-portfolio-navy">
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-portfolio-navy">
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="border-portfolio-mauve/30 focus-visible:ring-portfolio-navy"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-portfolio-navy">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="border-portfolio-mauve/30 focus-visible:ring-portfolio-navy"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-portfolio-navy">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="Subject of your message"
                    className="border-portfolio-mauve/30 focus-visible:ring-portfolio-navy"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-portfolio-navy">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="min-h-[120px] border-portfolio-mauve/30 focus-visible:ring-portfolio-navy"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-portfolio-navy hover:bg-portfolio-navy/90 rounded-full py-6 shadow-lg"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-serif-display text-2xl mb-4 text-portfolio-navy">
                Let's Connect
              </h3>
              <p className="text-portfolio-navy mb-8 font-light leading-relaxed">
                I'm always open to meet new people, explore collaborations, and
                hear about new opportunities. Feel free to reach out!
              </p>
            </div>

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
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
