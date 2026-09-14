"use client";

import {
  Code2,
  Database,
  Cpu,
  Server,
  Cloud,
  Terminal,
  Shield,
  Layers,
  GitPullRequest,
  Box,
  Flame,
  Globe,
  FileCode2,
  Workflow,
} from "lucide-react";

interface TechItem {
  name: string;
  category: string;
  icon: React.ElementType;
}

const TECH_LIST: TechItem[] = [
  { name: "Flutter", category: "Mobile Apps", icon: Layers },
  { name: "React", category: "Web Apps", icon: Globe },
  { name: "Next.js", category: "Full-Stack Web", icon: Globe },
  { name: "TypeScript", category: "Typed Code", icon: Code2 },
  { name: "Python", category: "Backend & Scripts", icon: Terminal },
  { name: "Node.js", category: "API Services", icon: Server },
  { name: "PostgreSQL", category: "Relational DB", icon: Database },
  { name: "Supabase", category: "Cloud Database", icon: Database },
  { name: "Firebase", category: "Cloud Platform", icon: Flame },
  { name: "Docker", category: "Containers", icon: Box },
  { name: "AWS", category: "Cloud Hosting", icon: Cloud },
  { name: "Linux", category: "Operating Systems", icon: Terminal },
  { name: "GitHub Actions", category: "CI/CD Automation", icon: Workflow },
  { name: "DevSecOps", category: "Security Checks", icon: Shield },
];

export default function LogoMarquee() {
  return (
    <section className="relative py-10 sm:py-12 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
        <p className="text-xs font-semibold text-slate-400">
          Technologies &amp; Frameworks
        </p>
      </div>

      {/* Gradient masks for soft edges */}
      <div className="absolute top-0 left-0 w-16 sm:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-16 sm:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Infinite loop marquee track */}
      <div className="flex overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-4 sm:gap-6 py-1">
          {[...TECH_LIST, ...TECH_LIST].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.name}-${idx}`}
                className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#FF6B00]/40 transition-all duration-200 cursor-default shrink-0 shadow-xs"
              >
                <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#FF6B00]">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-slate-800">
                    {item.name}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
