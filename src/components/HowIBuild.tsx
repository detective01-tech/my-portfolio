"use client";

import {
  Lightbulb,
  Compass,
  Code2,
  CheckCheck,
  ShieldAlert,
  Rocket,
  ArrowRight,
} from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Understand",
    desc: "Deconstruct the problem, user journey, constraints and architectural requirements.",
    icon: Lightbulb,
  },
  {
    step: "02",
    title: "Architect",
    desc: "Design data schemas, API contracts, system modularity, and technology choices.",
    icon: Compass,
  },
  {
    step: "03",
    title: "Build",
    desc: "Implement clean, maintainable frontend interfaces and backend services with type safety.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Test",
    desc: "Verify functionality, contract validity, stress tolerances, and automated regression.",
    icon: CheckCheck,
  },
  {
    step: "05",
    title: "Secure",
    desc: "Integrate security scanning, zero-trust authentication, CORS policies, and audits.",
    icon: ShieldAlert,
  },
  {
    step: "06",
    title: "Deploy",
    desc: "Release via reproducible Docker containers, CI/CD automation, and cloud monitoring.",
    icon: Rocket,
  },
];

export default function HowIBuild() {
  return (
    <section className="py-24 bg-white border-y border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-mono uppercase tracking-wider text-[#FF6B00] font-semibold mb-4 shadow-sm">
            <span>Engineering Approach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            How I Build
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            A disciplined, 6-phase engineering lifecycle ensuring durability from concept to cloud.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {STEPS.map((s, index) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="group p-6 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-[#FF6B00]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6B00]/10 hover:-translate-y-1 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#FF6B00] px-2 py-0.5 rounded bg-white border border-slate-200 shadow-sm">
                      PHASE {s.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 group-hover:text-[#FF6B00] group-hover:border-[#FF6B00]/30 transition-all shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#FF6B00] transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Step {index + 1} of 6</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF6B00] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
