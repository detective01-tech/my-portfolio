"use client";

import {
  ShieldCheck,
  GitBranch,
  Lock,
  CloudUpload,
  Activity,
  CheckCircle2,
} from "lucide-react";

const DEVSECOPS_PILLARS = [
  {
    title: "Continuous Security Checks",
    desc: "Automated vulnerability scanning with every pull request, auditing third-party dependencies before code merges.",
    icon: Lock,
    badge: "Zero-Trust",
  },
  {
    title: "Reproducible Containers",
    desc: "Lightweight Docker containers built to ensure exact environment consistency between development and production.",
    icon: GitBranch,
    badge: "Docker & Linux",
  },
  {
    title: "Automated Releases",
    desc: "Seamless CI/CD pipelines deploying directly to cloud infrastructure with zero downtime and rollback support.",
    icon: CloudUpload,
    badge: "GitHub Actions",
  },
  {
    title: "Health & Uptime Monitoring",
    desc: "Production observability tracking application health, performance metrics, and automated alert triggers.",
    icon: Activity,
    badge: "Telemetry",
  },
];

export default function DevSecOpsSection() {
  return (
    <section id="devsecops" className="py-14 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-semibold text-[#EA580C] mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>DevSecOps &amp; Infrastructure</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Built to Run. Designed to Stay Secure.
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Automated testing, continuous delivery, and infrastructure security integrated directly into the development cycle.
          </p>
        </div>

        {/* Clean 4-Pillar Grid (Natural 1 col on mobile, 2 on tablet, 4 on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {DEVSECOPS_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#FF6B00] shadow-xs">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#EA580C] bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-100">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Automated standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
