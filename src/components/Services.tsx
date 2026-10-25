"use client";

import {
  Smartphone,
  Globe,
  Server,
  Flame,
  Cloud,
  Layers,
} from "lucide-react";

const SERVICES = [
  {
    title: "Mobile App Development",
    desc: "Cross-platform mobile apps for iOS and Android using Flutter & Dart with offline support, fluid animations, and clean state architecture.",
    icon: Smartphone,
    tags: ["Flutter", "Dart", "iOS", "Android"],
  },
  {
    title: "Web Applications",
    desc: "Fast, responsive web applications built with React, Next.js, and TypeScript, optimized for high performance, search visibility, and accessibility.",
    icon: Globe,
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend Services & APIs",
    desc: "Custom backend architectures, RESTful APIs, and secure authentication flows developed with Python or Node.js.",
    icon: Server,
    tags: ["Python", "Node.js", "FastAPI", "REST APIs"],
  },
  {
    title: "Cloud Databases & BaaS",
    desc: "Structured PostgreSQL databases, Supabase architectures, and Firebase authentication & storage solutions.",
    icon: Flame,
    tags: ["PostgreSQL", "Supabase", "Firebase"],
  },
  {
    title: "DevSecOps & Automation",
    desc: "Continuous integration, Docker container workflows, automated vulnerability checks, and cloud releases.",
    icon: Cloud,
    tags: ["Docker", "GitHub Actions", "CI/CD", "Linux"],
  },
  {
    title: "Full-Stack System Delivery",
    desc: "Complete applications connecting modern frontends with resilient backends, managed databases, and cloud infrastructure.",
    icon: Layers,
    tags: ["Architecture", "Production Ready", "End-to-End"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div data-reveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-semibold text-[#EA580C] mb-3">
            What I Deliver
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Engineering Services
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Professional software engineering solutions built for stability, security, and real business value.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                data-reveal
                key={srv.title}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#FF6B00]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#FF6B00] mb-6 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {srv.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {srv.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200">
                  {srv.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-white text-slate-700 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
