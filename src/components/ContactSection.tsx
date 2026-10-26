import React, { useState } from "react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  Mail,
  Linkedin,
  Github,
  FileText,
  ArrowUpRight,
  CheckCircle,
  X,
} from "lucide-react";

// Add your resume link here when it's ready (for example "/resume.pdf")
// and a Resume box will show up automatically.
const RESUME_URL = "";

const contactLinks = [
  {
    label: "Email",
    value: "sanilachowdhury@gmail.com",
    href: "mailto:sanilachowdhury@gmail.com",
    Icon: Mail,
    external: false,
  },
  {
    label: "GitHub",
    value: "sanilac6459",
    href: "https://github.com/sanilac6459",
    Icon: Github,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "sanilachowdhury",
    href: "https://www.linkedin.com/in/sanilachowdhury/",
    Icon: Linkedin,
    external: true,
  },
  ...(RESUME_URL
    ? [
        {
          label: "Resume",
          value: "PDF",
          href: RESUME_URL,
          Icon: FileText,
          external: true,
        },
      ]
    : []),
];

const ContactSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/xzdwlbny", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();
      setError(false);
    } else {
      setError(true);
    }

    setShowModal(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Success / Error Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div
            className="rounded-2xl shadow-xl p-8 max-w-sm w-full mx-4 flex flex-col items-center text-center relative"
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--line)",
            }}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 transition-colors"
              style={{
                color: "var(--muted)",
              }}
            >
              <X size={20} />
            </button>

            {error ? (
              <>
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: "var(--rose-soft)",
                  }}
                >
                  <X
                    size={32}
                    style={{
                      color: "var(--rose)",
                    }}
                  />
                </div>

                <h3
                  className="font-serif-display text-xl mb-2"
                  style={{
                    color: "var(--wine)",
                  }}
                >
                  Something went wrong
                </h3>

                <p
                  className="text-sm"
                  style={{
                    color: "var(--ink)",
                  }}
                >
                  Please try again or email me directly.
                </p>
              </>
            ) : (
              <>
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: "var(--rose-soft)",
                  }}
                >
                  <CheckCircle
                    size={32}
                    style={{
                      color: "var(--rose)",
                    }}
                  />
                </div>

                <h3
                  className="font-serif-display text-xl mb-2"
                  style={{
                    color: "var(--rose)",
                  }}
                >
                  Message Sent!
                </h3>

                <p
                  className="text-sm"
                  style={{
                    color: "var(--rose)",
                  }}
                >
                  Thank you for reaching out. I'll get back to you soon.
                </p>

                <Button
                  onClick={() => setShowModal(false)}
                  className="mt-6 text-white rounded-full px-8"
                  style={{
                    backgroundColor: "var(--rose)",
                  }}
                >
                  Close
                </Button>
              </>
            )}
          </div>
        </div>
      )}

      <div className="container relative">
        {/* Section Heading */}
        <div
          className="flex flex-col items-center text-center mb-16"
          data-reveal
        >
          <p
            className="section-eyebrow"
            style={{
              color: "var(--rose)",
            }}
          >
            — Let's Connect —
          </p>

          <h2
            className="section-title"
            style={{
              color: "var(--wine)",
            }}
          >
            Get In Touch
          </h2>

          <p
            className="font-light leading-relaxed max-w-3xl mx-auto mt-3"
            style={{
              color: "var(--ink)",
            }}
          >
            I'm always open to new opportunities, collaborations, or just a
            friendly chat about tech and ideas. Feel free to reach out!
          </p>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
          data-reveal
        >
          {/* Contact links, stacked */}
          <div
            className="grid grid-cols-1 rounded-2xl overflow-hidden"
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--line)",
            }}
          >
            {contactLinks.map(({ label, value, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="contact-cell group flex flex-col gap-5 p-6 transition-colors min-w-0"
              >
                <div className="flex items-start justify-between">
                  <Icon size={22} style={{ color: "var(--rose)" }} />
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    style={{ color: "var(--muted)" }}
                  />
                </div>

                <div className="min-w-0">
                  <p
                    className="font-mono-ui text-[11px] uppercase tracking-[0.2em] mb-1.5"
                    style={{ color: "var(--muted)" }}
                  >
                    {label}
                  </p>
                  <p
                    className="font-mono-ui text-sm sm:text-[15px] break-words"
                    style={{ color: "var(--wine)" }}
                  >
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div>
            <Card
              className="p-8 rounded-2xl shadow-lg"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--line)",
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      style={{
                        color: "var(--wine)",
                      }}
                    >
                      Name
                    </Label>

                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="bg-[var(--glass)] text-[color:var(--ink)] placeholder:text-[color:var(--muted)]"
                      style={{
                        borderColor: "var(--line-strong)",
                        color: "var(--ink)",
                      }}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      style={{
                        color: "var(--wine)",
                      }}
                    >
                      Email
                    </Label>

                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      className="bg-[var(--glass)] text-[color:var(--ink)] placeholder:text-[color:var(--muted)]"
                      style={{
                        borderColor: "var(--line-strong)",
                        color: "var(--ink)",
                      }}
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <Label
                    htmlFor="subject"
                    style={{
                      color: "var(--wine)",
                    }}
                  >
                    Subject
                  </Label>

                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Subject of your message"
                    className="bg-[var(--glass)] text-[color:var(--ink)] placeholder:text-[color:var(--muted)]"
                    style={{
                      borderColor: "var(--line-strong)",
                      color: "var(--ink)",
                    }}
                    required
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    style={{
                      color: "var(--wine)",
                    }}
                  >
                    Message
                  </Label>

                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    className="min-h-[120px] bg-[var(--glass)] text-[color:var(--ink)] placeholder:text-[color:var(--muted)]"
                    style={{
                      borderColor: "var(--line-strong)",
                      color: "var(--ink)",
                    }}
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full text-white rounded-full py-6 shadow-lg"
                  style={{
                    backgroundColor: "var(--rose)",
                  }}
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
