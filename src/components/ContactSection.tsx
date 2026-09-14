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
          "linear-gradient(135deg, #FFF8F7 0%, #F8EFF0 45%, #F2E3E6 75%, #E9D5DA 100%)",
      }}
    >
      {/* Success / Error Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div
            className="rounded-2xl shadow-xl p-8 max-w-sm w-full mx-4 flex flex-col items-center text-center relative"
            style={{
              background: "linear-gradient(135deg, #FFF8F7 0%, #F8F0F1 100%)",
              border: "1px solid rgba(128, 15, 47, 0.18)",
            }}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 transition-colors"
              style={{
                color: "rgba(89, 13, 34, 0.45)",
              }}
            >
              <X size={20} />
            </button>

            {error ? (
              <>
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: "rgba(164, 19, 60, 0.10)",
                  }}
                >
                  <X
                    size={32}
                    style={{
                      color: "#A4133C",
                    }}
                  />
                </div>

                <h3
                  className="font-serif-display text-xl mb-2"
                  style={{
                    color: "#800F2F",
                  }}
                >
                  Something went wrong
                </h3>

                <p
                  className="text-sm"
                  style={{
                    color: "#590D22",
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
                    backgroundColor: "rgba(128, 15, 47, 0.08)",
                  }}
                >
                  <CheckCircle
                    size={32}
                    style={{
                      color: "#800F2F",
                    }}
                  />
                </div>

                <h3
                  className="font-serif-display text-xl mb-2"
                  style={{
                    color: "#800F2F",
                  }}
                >
                  Message Sent!
                </h3>

                <p
                  className="text-sm"
                  style={{
                    color: "#590D22",
                  }}
                >
                  Thank you for reaching out. I'll get back to you soon.
                </p>

                <Button
                  onClick={() => setShowModal(false)}
                  className="mt-6 text-white rounded-full px-8"
                  style={{
                    backgroundColor: "#800F2F",
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
          backgroundColor: "rgba(164, 19, 60, 0.06)",
        }}
      ></div>

      <div className="container relative">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <p
            className="section-eyebrow"
            style={{
              color: "#A4133C",
            }}
          >
            — Let's Connect —
          </p>

          <h2
            className="section-title"
            style={{
              color: "#800F2F",
            }}
          >
            Get In Touch
          </h2>

          <p
            className="font-light leading-relaxed max-w-3xl mx-auto mt-3"
            style={{
              color: "#590D22",
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
                className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
                style={{
                  background:
                    "linear-gradient(135deg, #FFF8F7 0%, #F8F0F1 65%, #F1E2E5 100%)",
                  border: "1px solid rgba(128, 15, 47, 0.15)",
                }}
              >
                <div
                  className="p-2.5 rounded-xl"
                  style={{
                    backgroundColor: "rgba(164, 19, 60, 0.08)",
                  }}
                >
                  <Mail
                    size={22}
                    style={{
                      color: "#A4133C",
                    }}
                  />
                </div>

                <div>
                  <p
                    className="text-xs uppercase tracking-widest font-medium mb-0.5"
                    style={{
                      color: "#A4133C",
                    }}
                  >
                    Email
                  </p>

                  <p
                    className="font-medium"
                    style={{
                      color: "#590D22",
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
                className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
                style={{
                  background:
                    "linear-gradient(135deg, #FFF8F7 0%, #F8F0F1 65%, #F1E2E5 100%)",
                  border: "1px solid rgba(128, 15, 47, 0.15)",
                }}
              >
                <div
                  className="p-2.5 rounded-xl"
                  style={{
                    backgroundColor: "rgba(164, 19, 60, 0.08)",
                  }}
                >
                  <Github
                    size={22}
                    style={{
                      color: "#A4133C",
                    }}
                  />
                </div>

                <div>
                  <p
                    className="text-xs uppercase tracking-widest font-medium mb-0.5"
                    style={{
                      color: "#A4133C",
                    }}
                  >
                    GitHub
                  </p>

                  <p
                    className="font-medium"
                    style={{
                      color: "#590D22",
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
                className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
                style={{
                  background:
                    "linear-gradient(135deg, #FFF8F7 0%, #F8F0F1 65%, #F1E2E5 100%)",
                  border: "1px solid rgba(128, 15, 47, 0.15)",
                }}
              >
                <div
                  className="p-2.5 rounded-xl"
                  style={{
                    backgroundColor: "rgba(164, 19, 60, 0.08)",
                  }}
                >
                  <Linkedin
                    size={22}
                    style={{
                      color: "#A4133C",
                    }}
                  />
                </div>

                <div>
                  <p
                    className="text-xs uppercase tracking-widest font-medium mb-0.5"
                    style={{
                      color: "#A4133C",
                    }}
                  >
                    LinkedIn
                  </p>

                  <p
                    className="font-medium"
                    style={{
                      color: "#590D22",
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
                  "linear-gradient(135deg, #FFF8F7 0%, #F8F0F1 65%, #F1E2E5 100%)",
                border: "1px solid rgba(128, 15, 47, 0.15)",
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      style={{
                        color: "#800F2F",
                      }}
                    >
                      Name
                    </Label>

                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="bg-white/40 placeholder:text-[rgba(89,13,34,0.60)]"
                      style={{
                        borderColor: "rgba(128, 15, 47, 0.25)",
                        color: "#590D22",
                      }}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      style={{
                        color: "#800F2F",
                      }}
                    >
                      Email
                    </Label>

                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      className="bg-white/40 placeholder:text-[rgba(89,13,34,0.60)]"
                      style={{
                        borderColor: "rgba(128, 15, 47, 0.25)",
                        color: "#590D22",
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
                      color: "#800F2F",
                    }}
                  >
                    Subject
                  </Label>

                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Subject of your message"
                    className="bg-white/40 placeholder:text-[rgba(89,13,34,0.60)]"
                    style={{
                      borderColor: "rgba(128, 15, 47, 0.25)",
                      color: "#590D22",
                    }}
                    required
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    style={{
                      color: "#800F2F",
                    }}
                  >
                    Message
                  </Label>

                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    className="min-h-[120px] bg-white/40 placeholder:text-[rgba(89,13,34,0.60)]"
                    style={{
                      borderColor: "rgba(128, 15, 47, 0.25)",
                      color: "#590D22",
                    }}
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full text-white rounded-full py-6 shadow-lg"
                  style={{
                    backgroundColor: "#A4133C",
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
