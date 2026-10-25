"use client";

import {
  Layers,
  ShieldCheck,
  Zap,
  Target,
} from "lucide-react";

const REASONS = [
  {
    title: "Full-Stack Mindset",
    desc: "I understand how frontend interfaces communicate with backend systems, databases, and servers, allowing me to build cohesive, end-to-end features.",
    icon: Layers,
  },
  {
    title: "Security-Conscious Development",
    desc: "Security is treated as a core design requirement rather than an afterthought, ensuring code is resilient against common vulnerabilities from day one.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Learner & Adaptable",
    desc: "I pick up new tools and frameworks quickly, staying up to date with modern best practices, clean architecture, and efficient developer tooling.",
    icon: Zap,
  },
  {
    title: "Practical Problem Solver",
    desc: "I focus on delivering practical, maintainable solutions that solve real problems without adding unnecessary technical complexity.",
    icon: Target,
  },
];

export default function WhyMe() {
  return (
    <section id="why-me" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div data-reveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-semibold text-[#EA580C] mb-3">
            Why Work With Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Engineering Principles I Stand By
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Combining software craftsmanship with architectural discipline and reliable execution.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {REASONS.map((r) => {
            const Icon = r.icon;
            return (
              <div
                data-reveal
                key={r.title}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#FF6B00]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#FF6B00] mb-5 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {r.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner */}
        <div data-reveal className="p-8 rounded-3xl bg-orange-50/50 border border-orange-200 text-center">
          <p className="text-base sm:text-lg font-medium text-slate-800 max-w-2xl mx-auto leading-relaxed italic">
            &ldquo;I care deeply about how software behaves today—and how maintainable it will be months down the line.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
