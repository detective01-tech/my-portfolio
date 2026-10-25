"use client";

import { useState } from "react";
import {
  ShieldCheck,
  GitBranch,
  Lock,
  CloudUpload,
  Activity,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const DEVSECOPS_PILLARS = [
  {
    title: "Continuous Security Checks",
    desc: "Automated vulnerability scanning with every pull request, auditing third-party dependencies before code merges.",
    icon: Lock,
    badge: "Zero-Trust",
    step: "Scan",
    detail: "Catch issues before they reach production.",
    tools: ["Dependency audits", "Static analysis", "Pull request checks"],
  },
  {
    title: "Reproducible Containers",
    desc: "Lightweight Docker containers built to ensure exact environment consistency between development and production.",
    icon: GitBranch,
    badge: "Docker & Linux",
    step: "Build",
    detail: "Package once. Run consistently across environments.",
    tools: ["Docker images", "Isolated environments", "Versioned artifacts"],
  },
  {
    title: "Automated Releases",
    desc: "Seamless CI/CD pipelines deploying directly to cloud infrastructure with zero downtime and rollback support.",
    icon: CloudUpload,
    badge: "GitHub Actions",
    step: "Deploy",
    detail: "Make releases repeatable, with a clear path back.",
    tools: ["CI/CD workflows", "Cloud deployment", "Rollback support"],
  },
  {
    title: "Health & Uptime Monitoring",
    desc: "Production observability tracking application health, performance metrics, and automated alert triggers.",
    icon: Activity,
    badge: "Telemetry",
    step: "Observe",
    detail: "Keep application health visible after every release.",
    tools: ["Health checks", "Performance metrics", "Alerts"],
  },
];

export default function DevSecOpsSection() {
  const [activeStep, setActiveStep] = useState(0);
  const selected = DEVSECOPS_PILLARS[activeStep];

  return (
    <section id="devsecops" className="py-14 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div data-reveal className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
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

        <div data-reveal className="mb-6 rounded-3xl border border-slate-200 bg-slate-50/70 p-5 sm:p-7">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">From commit to production</p>
            <span className="text-xs text-slate-500">Explore my workflow</span>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4" role="group" aria-label="Delivery workflow stages">
            {DEVSECOPS_PILLARS.map((pillar, index) => (
              <button
                key={pillar.step}
                type="button"
                aria-pressed={activeStep === index}
                aria-controls="workflow-detail"
                onClick={() => setActiveStep(index)}
                className={`flex items-center justify-between gap-2 rounded-2xl border p-3 sm:p-4 text-sm font-semibold transition-colors cursor-pointer ${activeStep === index ? "border-[#FF6B00] bg-[#FF6B00] text-white shadow-sm" : "border-slate-200 bg-white text-slate-600 hover:border-orange-200 hover:text-[#EA580C]"}`}
              >
                <span className="flex items-center gap-2"><span className="text-[11px] opacity-70">0{index + 1}</span>{pillar.step}</span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </button>
            ))}
          </div>
          <div id="workflow-detail" aria-live="polite" aria-atomic="true" className="mt-5 flex min-h-28 flex-col justify-center gap-4 sm:min-h-24 lg:min-h-16 lg:flex-row lg:items-center lg:justify-between">
            <p key={`${selected.step}-detail`} className="content-enter text-sm font-semibold text-slate-900">{selected.detail}</p>
            <div key={selected.step} className="content-enter flex flex-wrap gap-2">
              {selected.tools.map((tool) => <span key={tool} className="rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-xs font-medium text-[#EA580C]">{tool}</span>)}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {DEVSECOPS_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                data-reveal
                key={pillar.title}
                className="portfolio-card p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs flex flex-col justify-between"
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
