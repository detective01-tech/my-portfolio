"use client";

import {
  ShieldAlert,
  Cloud,
  Lock,
  Cpu,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const TOPICS = [
  {
    title: "DevSecOps",
    desc: "CI/CD automation, pipeline security controls, automated vulnerability scanning (SAST/DAST), and secure software delivery.",
    icon: ShieldAlert,
    badge: "Active Deep Dive",
  },
  {
    title: "Cloud Engineering",
    desc: "Cloud infrastructure patterns, Linux kernel permissions, container networking, and cost-effective scalable deployments.",
    icon: Cloud,
    badge: "Systems & Infra",
  },
  {
    title: "Cybersecurity",
    desc: "Application security posture, threat modeling, endpoint defenses, vulnerability testing, and defensive engineering.",
    icon: Lock,
    badge: "Defense In Depth",
  },
  {
    title: "AI + Security",
    desc: "Exploring how machine learning anomaly models can detect real-time intrusion patterns and security telemetry outliers.",
    icon: Cpu,
    badge: "Next Frontier",
  },
];

export default function Exploring() {
  return (
    <section className="py-24 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono uppercase tracking-wider text-[#FF6B00] font-semibold mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Technical Blog &amp; Research</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Currently Exploring
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Technology evolves rapidly. Here are the advanced engineering domains I am actively researching and integrating into my practice.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {TOPICS.map((topic) => {
            const Icon = topic.icon;
            return (
              <div
                key={topic.title}
                className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#FF6B00]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6B00]/10 hover:-translate-y-1.5 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/50 flex items-center justify-center text-[#FF6B00] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                      {topic.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#FF6B00] transition-colors">
                    {topic.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {topic.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-mono text-[#EA580C] group-hover:text-[#FF6B00] transition-colors font-semibold">
                  <span>Read My Journey</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
