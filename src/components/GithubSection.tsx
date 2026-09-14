"use client";

import {
  GitBranch,
  Star,
  GitFork,
  Code2,
} from "lucide-react";
import { GithubIcon } from "./BrandIcons";

const WEEKS = Array.from({ length: 32 }, (_, i) => {
  return Array.from({ length: 7 }, (_, day) => {
    const intensity = (i * 3 + day * 7) % 5;
    return intensity;
  });
});

const REPOSITORIES = [
  {
    name: "nexora-realtime-flutter",
    desc: "Cross-platform encrypted communication client powered by Supabase WebSockets and Riverpod state management.",
    lang: "Dart",
    langColor: "#00B4AB",
    stars: 18,
    forks: 4,
  },
  {
    name: "ai-threat-detection-engine",
    desc: "Network packet anomaly detection scripts, automated risk index scoring, and visual security dashboards.",
    lang: "Python",
    langColor: "#3572A5",
    stars: 24,
    forks: 6,
  },
  {
    name: "devsecops-pipeline-templates",
    desc: "Production GitHub Actions workflows with integrated Trivy, Docker multi-stage builds, and AWS deploy hooks.",
    lang: "YAML / Shell",
    langColor: "#FF6B00",
    stars: 31,
    forks: 9,
  },
];

export default function GithubSection() {
  return (
    <section className="py-24 bg-white border-y border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-mono uppercase tracking-wider text-[#FF6B00] font-semibold mb-4 shadow-sm">
            <GithubIcon className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Open Source &amp; Code</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Code. Build. Break. Learn. Repeat.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Active daily development, continuous testing, and structured commit discipline.
          </p>
        </div>

        {/* Contribution Graph Preview Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50/70 border border-slate-200 shadow-sm mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#FF6B00] shadow-sm">
                <GitBranch className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Engineering Activity</h3>
                <p className="text-xs font-mono text-slate-500">Daily commits, branch mergers, and automated pipelines</p>
              </div>
            </div>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-[#FF6B00] text-slate-800 hover:text-white text-xs font-mono font-semibold border border-slate-200 hover:border-[#FF6B00] transition-all shadow-sm"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View GitHub Profile</span>
            </a>
          </div>

          {/* Activity Matrix visual */}
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-1.5 min-w-[650px] justify-center sm:justify-start">
              {WEEKS.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1.5">
                  {week.map((val, dIdx) => {
                    let color = "bg-slate-200/80";
                    if (val === 1) color = "bg-orange-200";
                    if (val === 2) color = "bg-orange-300";
                    if (val === 3) color = "bg-orange-400";
                    if (val === 4) color = "bg-[#FF6B00]";

                    return (
                      <div
                        key={dIdx}
                        className={`w-3 h-3 rounded-[3px] ${color} transition-colors hover:scale-125 cursor-pointer`}
                        title={`Activity Level: ${val}`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span>Continuous development cadence</span>
            <div className="flex items-center gap-1.5">
              <span>Less</span>
              <span className="w-2.5 h-2.5 rounded-[2px] bg-slate-200"></span>
              <span className="w-2.5 h-2.5 rounded-[2px] bg-orange-200"></span>
              <span className="w-2.5 h-2.5 rounded-[2px] bg-orange-400"></span>
              <span className="w-2.5 h-2.5 rounded-[2px] bg-[#FF6B00]"></span>
              <span>More</span>
            </div>
          </div>
        </div>

        {/* Repository Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REPOSITORIES.map((repo) => (
            <div
              key={repo.name}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#FF6B00]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6B00]/10 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Code2 className="w-4 h-4 text-[#FF6B00]" />
                  <h4 className="text-sm font-bold font-mono text-slate-900 hover:text-[#FF6B00] transition-colors truncate">
                    {repo.name}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {repo.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: repo.langColor }}
                  />
                  <span>{repo.lang}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-500" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5 text-slate-400" />
                    {repo.forks}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
