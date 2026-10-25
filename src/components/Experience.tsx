"use client";

import {
  Briefcase,
  CheckCircle2,
} from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-14 sm:py-20 bg-slate-50/50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div data-reveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-semibold text-[#EA580C] mb-3">
            Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Work &amp; Practical Experience
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A track record of building production software across client collaborations and autonomous system engineering.
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Col 1 */}
          <div className="portfolio-card p-5 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div data-reveal className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b border-slate-100">
                <div className="flex items-start sm:items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-orange-50 flex items-center justify-center text-[#FF6B00] shrink-0 mt-0.5 sm:mt-0">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-tight">Professional Engineering</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Client Projects &amp; Remote Software Development</p>
                  </div>
                </div>
                <div className="self-start sm:self-auto pl-13 sm:pl-0">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-100 inline-block">
                    Active
                  </span>
                </div>
              </div>

              <div className="experience-timeline space-y-8">
                <div data-reveal className="experience-entry">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Full-Stack Application Development</h4>
                  <p className="text-xs text-[#EA580C] font-semibold mb-2">Cross-Platform &amp; Web</p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    Developed mobile applications with Flutter, structured responsive web portals with React &amp; Next.js, and integrated real-time backends with Firebase &amp; Supabase.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">Flutter</span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">React</span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">Next.js</span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">REST APIs</span>
                  </div>
                </div>

                <div data-reveal className="experience-entry">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">DevSecOps &amp; Infrastructure Automation</h4>
                  <p className="text-xs text-[#EA580C] font-semibold mb-2">Cloud &amp; CI/CD</p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    Engineered automated GitHub Actions pipelines, built reproducible Docker containers, and implemented security linters to prevent regressions before deployment.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">Docker</span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">CI/CD</span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">AWS</span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">Linux</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2 */}
          <div className="portfolio-card p-5 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div data-reveal className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b border-slate-100">
                <div className="flex items-start sm:items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-orange-50 flex items-center justify-center text-[#FF6B00] shrink-0 mt-0.5 sm:mt-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-tight">Engineering Projects</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Autonomous Platforms &amp; Architecture</p>
                  </div>
                </div>
                <div className="self-start sm:self-auto pl-13 sm:pl-0">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-semibold inline-block">
                    Independent
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-600">
                <div data-reveal className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    E-Commerce Architecture &amp; State Stores
                  </h4>
                  <p className="text-xs leading-relaxed">
                    Designed complete multi-tier e-commerce experiences from UI design systems to relational database schemas, payment flow integrations, and performance caching.
                  </p>
                </div>

                <div data-reveal className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    Security Monitoring &amp; Telemetry
                  </h4>
                  <p className="text-xs leading-relaxed">
                    Created threat analysis algorithms that parse log data to detect irregular traffic patterns and compute real-time risk scores for proactive defense.
                  </p>
                </div>

                <div data-reveal className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    Continuous Systems Experimentation
                  </h4>
                  <p className="text-xs leading-relaxed">
                    Invested hundreds of hours into benchmarking application performance, testing cutting-edge frameworks, and practicing secure coding guidelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
