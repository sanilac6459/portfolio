import React, { useState } from "react";

import { Card } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";

import { Mail, Linkedin, Github, CheckCircle, X } from "lucide-react";

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
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #fffaf9 0%, #f9f0f1 45%, #f3e9eb 75%, #e8f1ec 100%)",
      }}
    >
      {/* Success / Error Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div
            className="rounded-2xl shadow-xl p-8 max-w-sm w-full mx-4 flex flex-col items-center text-center relative"
            style={{
              background: "linear-gradient(135deg, #fffaf9 0%, #f9f0f1 100%)",
              border: "1px solid rgb(237 110 146 / 0.18)",
            }}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 transition-colors"
              style={{
                color: "rgb(45 106 79 / 0.45)",
              }}
            >
              <X size={20} />
            </button>

            {error ? (
              <>
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: "rgb(237 110 146 / 0.12)",
                  }}
                >
                  <X
                    size={32}
                    style={{
                      color: "rgb(163 20 61 / var(--tw-text-opacity, 1))",
                    }}
                  />
                </div>

                <h3
                  className="font-serif-display text-xl mb-2"
                  style={{
                    color: "rgb(163 20 61 / var(--tw-text-opacity, 1))",
                  }}
                >
                  Something went wrong
                </h3>

                <p
                  className="text-sm"
                  style={{
                    color: "rgb(45 106 79 / 0.65)",
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
                    backgroundColor: "rgb(45 106 79 / 0.10)",
                  }}
                >
                  <CheckCircle
                    size={32}
                    style={{
                      color: "rgb(45 106 79 / var(--tw-text-opacity, 1))",
                    }}
                  />
                </div>

                <h3
                  className="font-serif-display text-xl mb-2"
                  style={{
                    color: "rgb(163 20 61 / var(--tw-text-opacity, 1))",
                  }}
                >
                  Message Sent!
                </h3>

                <p
                  className="text-sm"
                  style={{
                    color: "rgb(45 106 79 / 0.65)",
                  }}
                >
                  Thank you for reaching out. I'll get back to you soon.
                </p>

                <Button
                  onClick={() => setShowModal(false)}
                  className="mt-6 text-white rounded-full px-8"
                  style={{
                    backgroundColor: "rgb(163 20 61 / var(--tw-bg-opacity, 1))",
                  }}
                >
                  Close
                </Button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Decorative background element */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{
          backgroundColor: "rgb(237 110 146 / 0.08)",
        }}
      ></div>

      <div className="container relative">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <p
            className="section-eyebrow"
            style={{
              color: "rgb(45 106 79 / var(--tw-text-opacity, 1))",
            }}
          >
            — Let's Connect —
          </p>

          <h2
            className="section-title"
            style={{
              color: "rgb(163 20 61 / var(--tw-text-opacity, 1))",
            }}
          >
            Get In Touch
          </h2>

          <p
            className="font-light leading-relaxed max-w-3xl mx-auto mt-3"
            style={{
              color: "rgb(45 106 79 / var(--tw-text-opacity, 1))",
            }}
          >
            I'm always open to new opportunities, collaborations, or just a
            friendly chat about tech and ideas. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="flex flex-col gap-6">
            <div className="space-y-3">
              {/* Email */}
              <a
                href="mailto:sanilachowdhury@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl transition-colors shadow-sm"
                style={{
                  background:
                    "linear-gradient(135deg, #fffaf9 0%, #f9f0f1 65%, #f1ebe9 100%)",
                  border: "1px solid rgb(237 110 146 / 0.18)",
                }}
              >
                <div
                  className="p-2.5 rounded-xl"
                  style={{
                    backgroundColor: "rgb(237 110 146 / 0.12)",
                  }}
                >
                  <Mail
                    size={22}
                    style={{
                      color: "rgb(163 20 61 / var(--tw-text-opacity, 1))",
                    }}
                  />
                </div>

                <div>
                  <p
                    className="text-xs uppercase tracking-widest font-medium mb-0.5"
                    style={{
                      color: "rgb(45 106 79 / 0.50)",
                    }}
                  >
                    Email
                  </p>

                  <p
                    className="font-medium"
                    style={{
                      color: "rgb(45 106 79 / var(--tw-text-opacity, 1))",
                    }}
                  >
                    sanilachowdhury@gmail.com
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/sanilac6459"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl transition-colors shadow-sm"
                style={{
                  background:
                    "linear-gradient(135deg, #fffaf9 0%, #f9f0f1 65%, #f1ebe9 100%)",
                  border: "1px solid rgb(237 110 146 / 0.18)",
                }}
              >
                <div
                  className="p-2.5 rounded-xl"
                  style={{
                    backgroundColor: "rgb(237 110 146 / 0.12)",
                  }}
                >
                  <Github
                    size={22}
                    style={{
                      color: "rgb(163 20 61 / var(--tw-text-opacity, 1))",
                    }}
                  />
                </div>

                <div>
                  <p
                    className="text-xs uppercase tracking-widest font-medium mb-0.5"
                    style={{
                      color: "rgb(45 106 79 / 0.50)",
                    }}
                  >
                    GitHub
                  </p>

                  <p
                    className="font-medium"
                    style={{
                      color: "rgb(45 106 79 / var(--tw-text-opacity, 1))",
                    }}
                  >
                    github.com/sanilac6459
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sanilachowdhury/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl transition-colors shadow-sm"
                style={{
                  background:
                    "linear-gradient(135deg, #fffaf9 0%, #f9f0f1 65%, #f1ebe9 100%)",
                  border: "1px solid rgb(237 110 146 / 0.18)",
                }}
              >
                <div
                  className="p-2.5 rounded-xl"
                  style={{
                    backgroundColor: "rgb(237 110 146 / 0.12)",
                  }}
                >
                  <Linkedin
                    size={22}
                    style={{
                      color: "rgb(163 20 61 / var(--tw-text-opacity, 1))",
                    }}
                  />
                </div>

                <div>
                  <p
                    className="text-xs uppercase tracking-widest font-medium mb-0.5"
                    style={{
                      color: "rgb(45 106 79 / 0.50)",
                    }}
                  >
                    LinkedIn
                  </p>

                  <p
                    className="font-medium"
                    style={{
                      color: "rgb(45 106 79 / var(--tw-text-opacity, 1))",
                    }}
                  >
                    linkedin.com/in/sanilachowdhury
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card
              className="p-8 rounded-2xl shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, #fffaf9 0%, #f9f0f1 65%, #f1ebe9 100%)",
                border: "1px solid rgb(237 110 146 / 0.18)",
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      style={{
                        color: "rgb(45 106 79 / var(--tw-text-opacity, 1))",
                      }}
                    >
                      Name
                    </Label>

                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="bg-white/40 placeholder:text-[rgb(45_106_79_/_0.45)]"
                      style={{
                        borderColor: "rgb(237 110 146 / 0.30)",
                        color: "rgb(45 106 79 / var(--tw-text-opacity, 1))",
                      }}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      style={{
                        color: "rgb(45 106 79 / var(--tw-text-opacity, 1))",
                      }}
                    >
                      Email
                    </Label>

                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      className="bg-white/40 placeholder:text-[rgb(45_106_79_/_0.45)]"
                      style={{
                        borderColor: "rgb(237 110 146 / 0.30)",
                        color: "rgb(45 106 79 / var(--tw-text-opacity, 1))",
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
                      color: "rgb(45 106 79 / var(--tw-text-opacity, 1))",
                    }}
                  >
                    Subject
                  </Label>

                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Subject of your message"
                    className="bg-white/40 placeholder:text-[rgb(45_106_79_/_0.45)]"
                    style={{
                      borderColor: "rgb(237 110 146 / 0.30)",
                      color: "rgb(45 106 79 / var(--tw-text-opacity, 1))",
                    }}
                    required
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    style={{
                      color: "rgb(45 106 79 / var(--tw-text-opacity, 1))",
                    }}
                  >
                    Message
                  </Label>

                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    className="min-h-[120px] bg-white/40 placeholder:text-[rgb(45_106_79_/_0.45)]"
                    style={{
                      borderColor: "rgb(237 110 146 / 0.30)",
                      color: "rgb(45 106 79 / var(--tw-text-opacity, 1))",
                    }}
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full text-white rounded-full py-6 shadow-lg"
                  style={{
                    backgroundColor: "rgb(163 20 61 / var(--tw-bg-opacity, 1))",
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
