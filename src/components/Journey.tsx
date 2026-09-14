"use client";

import { GraduationCap, BookOpen, Layers, Cloud, ShieldCheck } from "lucide-react";

const PROGRESSION = [
  {
    phase: "Learning",
    title: "Computer Science Foundation",
    desc: "Data structures, algorithms, operating systems, object-oriented programming, and computer networking.",
    icon: BookOpen,
  },
  {
    phase: "Development",
    title: "App & Web Engineering",
    desc: "Building frontend apps with Flutter & React, component state architecture, and asynchronous event logic.",
    icon: Layers,
  },
  {
    phase: "Full-Stack",
    title: "Backend & Systems Integration",
    desc: "Developing custom RESTful APIs with Python & Node.js, database modeling with PostgreSQL & Firebase.",
    icon: GraduationCap,
  },
  {
    phase: "Cloud",
    title: "Infrastructure & Containers",
    desc: "Linux server administration, Docker containerization, AWS cloud hosting, and networking fundamentals.",
    icon: Cloud,
  },
  {
    phase: "DevSecOps",
    title: "Continuous Security & Automation",
    desc: "CI/CD pipeline automation, automated security scanning (SAST/DAST), and shift-left security practices.",
    icon: ShieldCheck,
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-24 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono uppercase tracking-wider text-[#FF6B00] font-semibold mb-4 shadow-sm">
            <span>Education &amp; Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Education &amp; Engineering Journey
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Grounding theoretical Computer Science rigor into practical, production-ready software engineering.
          </p>
        </div>

        {/* Education Badge Card */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 max-w-2xl mx-auto mb-16 flex items-center gap-5 shadow-md">
          <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00] shrink-0">
            <GraduationCap className="w-7 h-7" />
          </div>
          <div>
            <span className="text-[11px] font-mono text-[#EA580C] uppercase tracking-wider font-bold">
              Degree Program
            </span>
            <h3 className="text-xl font-bold text-slate-900">
              Computer Science (Bachelor&apos;s Degree)
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              7+ completed semesters of core CS curricula, systems engineering, and continuous technical exploration.
            </p>
          </div>
        </div>

        {/* Progression Horizontal / Vertical Timeline */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {PROGRESSION.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.phase}
                  className="group p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#FF6B00]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6B00]/10 flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-orange-50 text-[#FF6B00] font-bold border border-orange-200/60">
                        {step.phase}
                      </span>
                      <Icon className="w-4 h-4 text-slate-400 group-hover:text-[#FF6B00] transition-colors" />
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 mb-2 group-hover:text-[#FF6B00] transition-colors">
                      {step.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] font-mono text-slate-500 flex items-center justify-between">
                    <span>Phase {index + 1}</span>
                    <span className="text-[#FF6B00] font-mono font-bold">→</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
