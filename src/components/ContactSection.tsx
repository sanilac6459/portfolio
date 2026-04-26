import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle the form submission with a backend
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-portfolio-pink/10 blur-3xl"></div>
      <div className="container relative">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="section-eyebrow">— Say Hello —</p>
          <h2 className="section-title">Get In Touch</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="p-8 border-portfolio-mauve/20 rounded-2xl shadow-lg bg-gradient-to-br from-white to-portfolio-cream/30">
              <h3 className="font-serif-display italic text-2xl mb-6 text-portfolio-navy">
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

          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-serif-display italic text-2xl mb-4 text-portfolio-navy">
                Let's Connect
              </h3>
              <p className="text-portfolio-navy/70 mb-8 font-light leading-relaxed">
                Feel free to reach out through any of the following channels.
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-portfolio-pink/20">
                  <Mail size={20} className="text-portfolio-navy" />
                </div>
                <div>
                  <p className="text-sm text-portfolio-navy/60">Email</p>
                  <a
                    href="mailto:sanilachowdhury@gmail.com"
                    className="text-portfolio-navy hover:text-portfolio-purple"
                  >
                    sanilachowdhury@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-portfolio-pink/20">
                  <MapPin size={20} className="text-portfolio-navy" />
                </div>
                <div>
                  <p className="text-sm text-portfolio-navy/60">Location</p>
                  <span className="text-portfolio-navy">New York, NY</span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-medium mb-3 text-portfolio-navy">
                Connect With Me
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/sanilachowdhury/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-portfolio-pink/20 hover:bg-portfolio-pink/40 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="text-portfolio-navy" />
                </a>
                <a
                  href="https://github.com/sanilac6459"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-portfolio-pink/20 hover:bg-portfolio-pink/40 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} className="text-portfolio-navy" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
