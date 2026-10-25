"use client";

import {
  Globe,
  Server,
  Database,
  Cloud,
  ShieldCheck,
  CheckCircle2,
  ArrowDown,
} from "lucide-react";

const CAPABILITIES = [
  "Cross-platform mobile apps with Flutter",
  "Modern web applications with React & Next.js",
  "Backend architecture with Python & Node.js",
  "High-performance RESTful APIs & integrations",
  "Cloud databases with Firebase & PostgreSQL",
  "Docker containerization & Linux administration",
  "Automated CI/CD pipelines with GitHub Actions",
  "DevSecOps practices & automated security checks",
];

const ARCHITECTURE_LAYERS = [
  {
    step: "1",
    layer: "Frontend & Mobile",
    techList: ["Flutter", "React", "Next.js"],
    desc: "Responsive web interfaces and native mobile applications.",
    icon: Globe,
  },
  {
    step: "2",
    layer: "Backend & APIs",
    techList: ["Python", "Node.js", "REST APIs"],
    desc: "Application logic, microservices, and secure authentication.",
    icon: Server,
  },
  {
    step: "3",
    layer: "Data & Storage",
    techList: ["PostgreSQL", "Supabase", "Firebase"],
    desc: "Structured data modeling, real-time sync, and indexing.",
    icon: Database,
  },
  {
    step: "4",
    layer: "Cloud & Infrastructure",
    techList: ["AWS", "Docker", "Linux"],
    desc: "Lightweight containerized environments and cloud hosting.",
    icon: Cloud,
  },
  {
    step: "5",
    layer: "DevSecOps & CI/CD",
    techList: ["GitHub Actions", "CI/CD", "Security Scans"],
    desc: "Automated test suites, vulnerability checks, and monitoring.",
    icon: ShieldCheck,
  },
];

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div data-reveal className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-semibold text-[#EA580C] mb-3">
            About My Work
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            An Engineer Who Thinks End-to-End
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            I connect all the layers of a digital product—from user interfaces to backend logic, databases, and secure cloud pipelines.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div data-reveal className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4">
                Core Engineering Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {CAPABILITIES.map((cap, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 leading-snug">
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div data-reveal className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-orange-50/60 border border-orange-200">
              <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed italic">
                &ldquo;I build software with long-term reliability in mind—ensuring applications are maintainable, easy to scale, and secure by default.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Visual Architecture */}
          <div className="lg:col-span-6">
            <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200">
              <div data-reveal className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                  <Server className="w-4 h-4 text-[#FF6B00]" />
                  System Architecture Overview
                </h3>
                <span className="text-[11px] text-slate-500 font-medium">
                  5-Layer Flow
                </span>
              </div>

              <div className="space-y-2.5">
                {ARCHITECTURE_LAYERS.map((layer, index) => {
                  const Icon = layer.icon;
                  return (
                    <div data-reveal key={layer.layer} className="relative">
                      <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                        {/* Top bar: Icon + Layer Name + Step Number */}
                        <div className="flex items-center justify-between gap-3 mb-2">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-orange-50 flex items-center justify-center text-[#FF6B00] shrink-0">
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-bold text-slate-900">
                              {layer.layer}
                            </span>
                          </div>
                          <span className="text-xs font-bold text-slate-300">
                            0{layer.step}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-slate-600 mb-2.5 leading-relaxed">
                          {layer.desc}
                        </p>

                        {/* Responsive Tag Pills */}
                        <div className="flex flex-wrap gap-1.5">
                          {layer.techList.map((t) => (
                            <span
                              key={t}
                              className="text-[11px] font-medium text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200/60"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {index < ARCHITECTURE_LAYERS.length - 1 && (
                        <div className="flex justify-center py-1">
                          <ArrowDown className="w-3.5 h-3.5 text-slate-300" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
