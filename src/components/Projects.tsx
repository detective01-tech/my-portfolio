"use client";

import { useState } from "react";
import {
  ExternalLink,
  Shield,
  Layers,
  Activity,
  CheckCircle2,
  Workflow,
} from "lucide-react";
import { GithubIcon } from "./BrandIcons";

interface Project {
  id: string;
  title: string;
  category: string;
  filterTags: string[];
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  architectureNotes: string;
  visualType: "messaging" | "cybersecurity" | "ecommerce" | "grocery" | "pipeline";
}

const PROJECTS: Project[] = [
  {
    id: "01",
    title: "Nexora",
    category: "Real-Time Mobile App",
    filterTags: ["Flutter", "Backend"],
    description:
      "A modern communication platform designed around real-time messaging, authentication, media sharing and secure appointment communications.",
    technologies: ["Flutter", "Dart", "Supabase", "PostgreSQL", "REST APIs"],
    githubUrl: "https://github.com",
    liveUrl: "#",
    architectureNotes: "Supabase Realtime WebSockets with Row Level Security (RLS) for data privacy.",
    visualType: "messaging",
  },
  {
    id: "02",
    title: "Cybersecurity Threat Detection",
    category: "Security Telemetry",
    filterTags: ["Cybersecurity", "DevSecOps", "Cloud"],
    description:
      "An intelligent cybersecurity monitoring platform designed to identify, classify and visualize potential security threats and network anomalies in real-time.",
    technologies: ["Python", "Machine Learning", "Cloud", "Security Dashboard"],
    githubUrl: "https://github.com",
    liveUrl: "#",
    architectureNotes: "Anomaly detection models parsing network traffic with dynamic severity scoring.",
    visualType: "cybersecurity",
  },
  {
    id: "03",
    title: "Wearixa",
    category: "Full-Stack E-Commerce",
    filterTags: ["React", "Backend"],
    description:
      "A modern e-commerce platform focused on delivering a scalable shopping experience with a fast user interface and custom checkout architecture.",
    technologies: ["React", "Next.js", "PostgreSQL", "Stripe API", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "#",
    architectureNotes: "Next.js server-rendered storefront coupled with high-concurrency database cart transactions.",
    visualType: "ecommerce",
  },
  {
    id: "04",
    title: "Fresh Pick",
    category: "Mobile Grocery & Delivery",
    filterTags: ["Flutter"],
    description:
      "A mobile grocery application featuring product discovery, category filters, cart functionality, and real-time delivery order tracking.",
    technologies: ["Flutter", "Dart", "Firebase", "Riverpod"],
    githubUrl: "https://github.com",
    liveUrl: "#",
    architectureNotes: "Riverpod reactive state management coupled with offline-first Firestore synchronization.",
    visualType: "grocery",
  },
  {
    id: "05",
    title: "DevSecOps Deployment Pipeline",
    category: "Cloud Infrastructure",
    filterTags: ["Cloud", "DevSecOps"],
    description:
      "Automated CI/CD infrastructure project showcasing automated code analysis, containerization, vulnerability scanning, and seamless cloud deployment.",
    technologies: ["Docker", "GitHub Actions", "Linux", "AWS", "CI/CD"],
    githubUrl: "https://github.com",
    liveUrl: "#",
    architectureNotes: "Multi-stage Docker builds with Trivy vulnerability scanning and automated rollbacks.",
    visualType: "pipeline",
  },
];

const FILTERS = ["All", "Flutter", "React", "Backend", "Cloud", "DevSecOps"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.filterTags.includes(activeFilter));

  return (
    <section id="projects" className="py-14 sm:py-20 bg-slate-50/50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs uppercase tracking-wider text-[#FF6B00] font-bold mb-3 shadow-xs">
            Portfolio
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Selected applications spanning cross-platform mobile apps, cloud backends, and automated pipelines.
          </p>
        </div>

        {/* Filter Buttons - scrollable horizontally on mobile */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-8 sm:mb-12 no-scrollbar">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeFilter === f
                  ? "bg-[#FF6B00] text-white shadow-xs"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="space-y-6 sm:space-y-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-xs hover:shadow-sm transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Left Col: Project Info */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="text-[11px] font-bold text-[#FF6B00] bg-orange-50 px-2 py-0.5 rounded-full">
                        Project {project.id}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Architecture Details */}
                    <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200 mb-4">
                      <div className="flex items-center gap-1.5 text-xs text-[#EA580C] font-bold mb-0.5">
                        <Shield className="w-3.5 h-3.5" />
                        <span>Architecture Highlight</span>
                      </div>
                      <p className="text-xs text-slate-600">
                        {project.architectureNotes}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200 transition-all"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-[#FF6B00]" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FF6B00] text-white text-xs font-semibold hover:bg-[#EA580C] transition-all shadow-xs"
                    >
                      <span>Live Preview</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Right Col: High-Fidelity Clean Visual */}
                <div className="lg:col-span-6 w-full">
                  {project.visualType === "messaging" && (
                    <div className="w-full rounded-2xl bg-slate-50 border border-slate-200 p-4">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-2.5 mb-3 text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-[#FF6B00] text-white flex items-center justify-center font-bold text-xs">
                            N
                          </div>
                          <div>
                            <p className="font-bold text-slate-900 text-xs">Nexora Messenger</p>
                            <p className="text-[10px] text-emerald-600 font-medium">Encrypted • Active Channel</p>
                          </div>
                        </div>
                        <span className="text-[10px] text-slate-400 font-semibold">Supabase RLS</span>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 max-w-[85%]">
                          Hey, is the client connected with real-time PostgreSQL replication?
                        </div>
                        <div className="p-2.5 rounded-xl bg-[#FF6B00] text-white max-w-[85%] ml-auto font-medium">
                          Yes, WebSocket stream established with instant updates and biometric auth.
                        </div>
                      </div>
                    </div>
                  )}

                  {project.visualType === "cybersecurity" && (
                    <div className="w-full rounded-2xl bg-slate-50 border border-slate-200 p-4">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-2.5 mb-3">
                        <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                          <Activity className="w-3.5 h-3.5 text-[#FF6B00]" />
                          Security Dashboard
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                          Normal
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center mb-3">
                        <div className="p-2 rounded-xl bg-white border border-slate-200">
                          <span className="text-[10px] text-slate-500 block">Blocked</span>
                          <span className="text-base font-bold text-slate-900">127</span>
                        </div>
                        <div className="p-2 rounded-xl bg-white border border-slate-200">
                          <span className="text-[10px] text-slate-500 block">Incidents</span>
                          <span className="text-base font-bold text-[#EA580C]">0</span>
                        </div>
                        <div className="p-2 rounded-xl bg-white border border-slate-200">
                          <span className="text-[10px] text-slate-500 block">Score</span>
                          <span className="text-base font-bold text-emerald-600">98%</span>
                        </div>
                      </div>

                      <div className="p-2 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs">
                        <span className="text-slate-600">Intrusion Prevention</span>
                        <span className="text-emerald-600 font-bold">Passing (0 threats)</span>
                      </div>
                    </div>
                  )}

                  {project.visualType === "ecommerce" && (
                    <div className="w-full rounded-2xl bg-slate-50 border border-slate-200 p-4">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3 text-xs">
                        <span className="font-bold text-slate-900">Wearixa Storefront</span>
                        <span className="text-[10px] text-emerald-600 font-semibold">99.9% Uptime</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                          <div className="h-12 rounded bg-slate-100 flex items-center justify-center text-[11px] text-slate-500 font-medium mb-1.5">
                            Apparel Item
                          </div>
                          <span className="text-slate-800 font-semibold block text-[11px]">Stealth Hoodie</span>
                          <span className="text-[#FF6B00] font-bold text-[11px]">$120</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                          <div className="h-12 rounded bg-slate-100 flex items-center justify-center text-[11px] text-slate-500 font-medium mb-1.5">
                            Apparel Item
                          </div>
                          <span className="text-slate-800 font-semibold block text-[11px]">Tech Pants</span>
                          <span className="text-[#FF6B00] font-bold text-[11px]">$95</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {project.visualType === "grocery" && (
                    <div className="w-full rounded-2xl bg-slate-50 border border-slate-200 p-4">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
                        <span className="text-xs font-bold text-slate-900">Fresh Pick Mobile</span>
                        <span className="text-[10px] text-[#EA580C] font-semibold">Flutter App</span>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200">
                          <span className="text-slate-800 font-medium">Organic Grocery Basket</span>
                          <span className="text-emerald-600 font-bold">$34.50</span>
                        </div>
                        <div className="p-2 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-between text-slate-700 text-[11px]">
                          <span>Active Delivery Status</span>
                          <span className="text-[#EA580C] font-bold">10 mins away</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {project.visualType === "pipeline" && (
                    <div className="w-full rounded-2xl bg-slate-50 border border-slate-200 p-4">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
                        <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                          <Workflow className="w-3.5 h-3.5 text-[#FF6B00]" />
                          Automated Pipeline
                        </span>
                        <span className="text-[10px] font-bold text-emerald-600">Passing</span>
                      </div>
                      <div className="grid grid-cols-4 gap-1.5 text-center text-xs">
                        <div className="p-2 rounded-lg bg-white border border-slate-200">
                          <span className="text-slate-800 font-bold block text-[11px]">Code</span>
                          <span className="text-emerald-600 text-[10px]">Valid</span>
                        </div>
                        <div className="p-2 rounded-lg bg-white border border-slate-200">
                          <span className="text-slate-800 font-bold block text-[11px]">Build</span>
                          <span className="text-emerald-600 text-[10px]">Passed</span>
                        </div>
                        <div className="p-2 rounded-lg bg-white border border-slate-200">
                          <span className="text-slate-800 font-bold block text-[11px]">Audit</span>
                          <span className="text-emerald-600 text-[10px]">Secure</span>
                        </div>
                        <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-100">
                          <span className="text-emerald-800 font-bold block text-[11px]">Deploy</span>
                          <span className="text-emerald-600 text-[10px]">Live</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
