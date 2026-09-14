"use client";

import { useState } from "react";
import {
  Globe,
  Database,
  Cloud,
  ShieldCheck,
  Server,
} from "lucide-react";

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  skills: {
    title: string;
    details: string;
  }[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend & Mobile",
    icon: Globe,
    skills: [
      { title: "Flutter & Dart", details: "State management, reactive architecture, Riverpod, responsive UI." },
      { title: "React & Next.js", details: "App Router, SSR, custom hooks, reusable design systems." },
      { title: "TypeScript & JavaScript", details: "Strict static typing, asynchronous workflows, ESNext." },
      { title: "Tailwind CSS", details: "Utility-first clean design, mobile-first responsive layouts." },
    ],
  },
  {
    id: "backend",
    name: "Backend & APIs",
    icon: Server,
    skills: [
      { title: "Python", details: "FastAPI, automated scripts, asynchronous data tasks." },
      { title: "Node.js & Express", details: "RESTful services, async middleware, API endpoints." },
      { title: "REST APIs", details: "Contract design, status semantics, secure token handling." },
      { title: "Authentication", details: "OAuth2, JWT tokens, session cookies, permission rules." },
    ],
  },
  {
    id: "databases",
    name: "Databases & Storage",
    icon: Database,
    skills: [
      { title: "PostgreSQL", details: "Relational queries, schema migrations, constraints, indexing." },
      { title: "Supabase", details: "Row Level Security policies, real-time channels, auth." },
      { title: "Firebase", details: "Cloud Firestore, user authentication, storage buckets." },
      { title: "Cloud Database Hosting", details: "Automated backups, replication, connection pooling." },
    ],
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { title: "Docker Containers", details: "Multi-stage builds, lightweight images, development clusters." },
      { title: "AWS Cloud", details: "EC2 instances, S3 buckets, IAM security policies." },
      { title: "Linux Environments", details: "Server configuration, shell scripts, process management." },
      { title: "Git & GitHub", details: "Branch strategies, pull requests, semantic release tags." },
    ],
  },
  {
    id: "security",
    name: "DevSecOps",
    icon: ShieldCheck,
    skills: [
      { title: "CI/CD Pipelines", details: "Automated test execution, build checks, auto-deployments." },
      { title: "Vulnerability Scanning", details: "Automated dependency security audits and static analysis." },
      { title: "App Hardening", details: "OWASP best practices, input sanitization, CORS headers." },
      { title: "Observability", details: "System health endpoints, logging, uptime verification." },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  const currentCategory =
    SKILL_CATEGORIES.find((cat) => cat.id === activeTab) || SKILL_CATEGORIES[0];

  return (
    <section id="skills" className="py-14 sm:py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-semibold text-[#EA580C] mb-3">
            Technical Stack
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Tools &amp; Technologies
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            A practical overview of the frameworks and platforms I use to engineer software.
          </p>
        </div>

        {/* Scrollable / Flexible Tabs on Mobile */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-6 sm:mb-8 no-scrollbar">
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                  isActive
                    ? "bg-[#FF6B00] text-white shadow-xs"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-[#FF6B00]"}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Cards Grid (Clean 2 columns on mobile, 4 on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {currentCategory.skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-start"
            >
              <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 flex items-center justify-between">
                <span>{skill.title}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {skill.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
