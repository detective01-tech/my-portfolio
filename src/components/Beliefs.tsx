"use client";

import { Quote, Sparkles, Shield, Compass } from "lucide-react";

const BELIEFS = [
  {
    quote: "Build with purpose.",
    desc: "Every line of code should solve an actual problem, serve user needs, and deliver measurable reliability rather than unnecessary complexity.",
    icon: Compass,
  },
  {
    quote: "Secure by design.",
    desc: "Security cannot be an afterthought tacked on before launch. It must be foundational — from input validation to authentication and infrastructure hardening.",
    icon: Shield,
  },
  {
    quote: "Keep improving.",
    desc: "Great engineering is iterative. Systems are meant to be monitored, refined, simplified, and elevated through continuous learning and rigorous testing.",
    icon: Sparkles,
  },
];

export default function Beliefs() {
  return (
    <section className="py-24 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono uppercase tracking-wider text-[#FF6B00] font-semibold mb-4 shadow-sm">
            <span>Core Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            What I Believe
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Guiding principles that define how I approach software design, infrastructure resilience, and craftsmanship.
          </p>
        </div>

        {/* 3 Large Belief Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BELIEFS.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.quote}
                className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#FF6B00]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#FF6B00]/10 hover:-translate-y-1 relative flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200/50 flex items-center justify-center text-[#FF6B00] mb-6 group-hover:bg-[#FF6B00] group-hover:text-white transition-all shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <Quote className="w-6 h-6 text-[#FF6B00]/40 mb-2" />

                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#FF6B00] transition-colors">
                    &ldquo;{b.quote}&rdquo;
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {b.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold">
                  Engineering Axiom
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
