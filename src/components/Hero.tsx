"use client";

import {
  Shield,
  ArrowRight,
  Layers,
  Cpu,
  Cloud,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-14 sm:pt-40 sm:pb-24 bg-white bg-tech-grid overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill Badge */}
            <div data-reveal className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 mb-5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse"></span>
              <span className="text-xs font-semibold text-[#EA580C]">
                Available for Engineering Projects
              </span>
            </div>

            {/* Main Headline */}
            <h1 data-reveal className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.18] sm:leading-tight mb-4">
              Building secure, scalable &amp;{" "}
              <span className="orange-gradient-text">production-ready</span>{" "}
              digital products.
            </h1>

            {/* Supporting Subheadline */}
            <p data-reveal className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl mb-6 sm:mb-8">
              Hi, I am <span className="font-bold text-slate-900">Muhammad Sohail</span>—a Full-Stack &amp; Cloud Engineer specializing in Flutter, React, Next.js, Python, and automated DevSecOps infrastructure.
            </p>

            {/* CTAs */}
            <div data-reveal className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#experience"
                className="group inline-flex justify-center items-center gap-3 w-full sm:w-auto text-center px-6 py-3.5 rounded-2xl bg-[#FF6B00] text-white font-bold text-sm hover:bg-[#EA580C] transition-all shadow-md shadow-[#FF6B00]/20 active:scale-[0.98]"
              >
                Explore Experience
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto text-center px-6 py-3.5 rounded-2xl bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 font-bold text-sm transition-all shadow-xs active:scale-[0.98]"
              >
                Get in Touch
              </a>
            </div>

            <div data-reveal className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-slate-500">
              {["Web & mobile", "Cloud infrastructure", "Security by design"].map((label) => (
                <span key={label} className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-[#FF6B00]" aria-hidden="true" />{label}</span>
              ))}
            </div>

            {/* Mobile quick metrics strip */}
            <div data-reveal className="grid grid-cols-3 gap-2 w-full pt-6 mt-6 border-t border-slate-100 sm:hidden">
              <div className="text-center p-2 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-lg font-extrabold text-[#FF6B00] block">7+</span>
                <span className="text-[10px] text-slate-500 font-medium">CS Semesters</span>
              </div>
              <div className="text-center p-2 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-lg font-extrabold text-slate-900 block">10+</span>
                <span className="text-[10px] text-slate-500 font-medium">Technologies</span>
              </div>
              <div className="text-center p-2 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-lg font-extrabold text-emerald-600 block">100%</span>
                <span className="text-[10px] text-slate-500 font-medium">End-to-End</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase (Hidden or condensed cleanly on tiny screens) */}
          <div data-reveal className="lg:col-span-5 w-full mt-2 lg:mt-0">
            <div className="hero-showcase relative w-full bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                  <span className="text-xs font-bold text-slate-800">Architecture Matrix</span>
                </div>
                <span className="text-[11px] font-semibold text-[#EA580C] bg-orange-50 px-2.5 py-0.5 rounded-full">
                  Verified Stack
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#FF6B00] shadow-xs">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Frontend &amp; Mobile</h4>
                      <p className="text-[11px] text-slate-500">Flutter • React • Next.js</p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#FF6B00] shadow-xs">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Backend &amp; Databases</h4>
                      <p className="text-[11px] text-slate-500">Python • Node.js • PostgreSQL</p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#FF6B00] shadow-xs">
                      <Cloud className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Cloud &amp; DevOps</h4>
                      <p className="text-[11px] text-slate-500">Docker • AWS • Linux</p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#FF6B00] shadow-xs">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">DevSecOps Security</h4>
                      <p className="text-[11px] text-slate-500">CI/CD • SAST • Zero-Trust</p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4 text-[11px] font-medium text-slate-500">
                <span>From interface to infrastructure</span>
                <a href="#devsecops" className="inline-flex items-center gap-1 text-[#EA580C] hover:underline">My approach <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
