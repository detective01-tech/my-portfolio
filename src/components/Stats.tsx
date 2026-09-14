"use client";

import { GraduationCap, Code2, FolderGit2, Flame } from "lucide-react";

const STATS = [
  {
    value: "07+",
    label: "Semesters of CS Education",
    desc: "Rigorous Computer Science theory & systems engineering",
    icon: GraduationCap,
  },
  {
    value: "10+",
    label: "Core Technologies",
    desc: "Mobile, Web, Backend, Cloud & Security tools",
    icon: Code2,
  },
  {
    value: "Multiple",
    label: "Full-Stack Projects",
    desc: "Production-ready architectures deployed and documented",
    icon: FolderGit2,
  },
  {
    value: "24/7",
    label: "Learning Mindset",
    desc: "Relentless curiosity & continuous engineering evolution",
    icon: Flame,
  },
];

export default function Stats() {
  return (
    <section className="py-16 bg-white border-y border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-[#FF6B00]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6B00]/10 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl sm:text-4xl font-extrabold font-mono text-[#FF6B00] group-hover:scale-105 transition-transform duration-200">
                    {stat.value}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 group-hover:text-[#FF6B00] group-hover:border-[#FF6B00]/30 transition-colors shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  {stat.label}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
