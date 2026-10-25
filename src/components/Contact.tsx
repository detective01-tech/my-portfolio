"use client";

import { useState } from "react";
import {
  Mail,
  Send,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "Full-Stack Application",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project enquiry: ${formState.projectType}`);
    const body = encodeURIComponent(`Hi Muhammad Sohail,\n\n${formState.message}\n\nFrom: ${formState.name}\nEmail: ${formState.email}`);
    window.location.href = `mailto:muhammadsohail0318@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50/50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <div data-reveal className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-semibold text-[#EA580C] mb-3">
                Let&apos;s Connect
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Have a Project in Mind? <br />
                <span className="orange-gradient-text">Let&apos;s Build It Together.</span>
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Whether you need a mobile application, a scalable web platform, a custom backend, or cloud infrastructure, I&apos;m always open to discussing new opportunities.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Direct Channels
              </h4>
              <a
                href="mailto:muhammadsohail0318@gmail.com"
                className="flex items-center gap-3 text-sm text-slate-700 hover:text-[#FF6B00] transition-colors font-medium break-all"
              >
                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-[#FF6B00] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span>muhammadsohail0318@gmail.com</span>
              </a>
              <a
                href="https://github.com/detective01-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-700 hover:text-[#FF6B00] transition-colors font-medium"
              >
                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-[#FF6B00] shrink-0">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <span>github.com/detective01-tech</span>
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-sohail-6076383ab?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-700 hover:text-[#FF6B00] transition-colors font-medium"
              >
                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-[#FF6B00] shrink-0">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <span>linkedin.com/in/muhammad-sohail</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div data-reveal className="lg:col-span-7">
            <div className="p-5 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
              {submitted ? (
                <div role="status" className="content-enter py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Your email is ready</h3>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto">
                    Finish sending in your email app. If it didn&apos;t open, email me directly at <a href="mailto:muhammadsohail0318@gmail.com" className="text-[#EA580C] underline break-all">muhammadsohail0318@gmail.com</a>. Your message hasn&apos;t been sent by this website.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                    }}
                    className="mt-2 px-5 py-2 rounded-full bg-slate-100 text-xs font-semibold text-slate-700 hover:bg-slate-200 transition-colors"
                  >
                    Edit Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      Send a Message
                    </h3>
                    <p className="text-xs text-slate-500">
                      Share a brief outline of your project or what you&apos;re looking to build.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        autoComplete="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#FF6B00] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        autoComplete="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#FF6B00] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-type" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Project Type
                    </label>
                    <select
                      id="contact-type"
                      name="projectType"
                      value={formState.projectType}
                      onChange={(e) =>
                        setFormState({ ...formState, projectType: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#FF6B00] focus:bg-white transition-all"
                    >
                      <option value="Full-Stack Application">Full-Stack Web &amp; Mobile</option>
                      <option value="Mobile App (Flutter)">Mobile App (Flutter)</option>
                      <option value="React / Next.js Web App">React / Next.js Web App</option>
                      <option value="Backend & APIs">Backend Services &amp; APIs</option>
                      <option value="Cloud & DevSecOps">Cloud Setup &amp; DevSecOps</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell me about your project, timeline, or idea..."
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#FF6B00] focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#FF6B00] text-white font-bold text-sm hover:bg-[#EA580C] transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Continue to Email</span>
                    <Send className="w-4 h-4" />
                  </button>
                  <p className="text-center text-xs leading-relaxed text-slate-500">Opens your email app with your message filled in.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
