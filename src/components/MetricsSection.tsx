"use client";

import React from "react";
import { Users, Zap, Globe, TrendingUp, Trophy, Clock, CheckCircle2, Sparkles } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function MetricsSection() {
  return (
    <section className="relative py-28 border-y border-white/[0.08] bg-[#07070a] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal yOffset={32}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 pb-8 border-b border-white/[0.08]">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 mb-3 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                <span>KEY METRICS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white">
                Metrics that validate scale.
              </h2>
            </div>
            <p className="text-sm sm:text-base text-neutral-400 max-w-lg font-normal leading-relaxed">
              From preparing top-tier engineering cohorts to deploying mission-critical enterprise software and driving scalable client acquisition.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {/* Bento Card 1: 1,000+ Students Trained (Featured Large Card) */}
          <ScrollReveal delay={0.05} className="md:col-span-2 lg:col-span-2">
            <div className="h-full glass-panel rounded-3xl p-8 sm:p-10 flex flex-col justify-between border border-white/[0.1] hover:border-white/25 transition-all duration-300 relative group overflow-hidden bg-gradient-to-br from-white/[0.04] to-transparent">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Users className="w-28 h-28 text-white" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs text-neutral-400 uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10 font-medium">
                  TRAINING ECOSYSTEM
                </span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active Bench
                </span>
              </div>

              <div className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white mb-3">
                1,000<span className="text-neutral-400 font-normal">+</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-medium text-neutral-100 mb-2">
                Engineers & Specialists Trained
              </h3>
              <p className="text-sm text-neutral-400 max-w-md leading-relaxed mb-6">
                Directly groomed across modern Next.js, Python, autonomous agent architectures, and full-funnel digital marketing tracks with live production apprenticeships.
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-lg bg-white/5 text-neutral-300">Next.js</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 text-neutral-300">PyTorch & AI</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 text-neutral-300">ERP & Cloud</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 text-neutral-300">Performance Media</span>
            </div>
            </div>
          </ScrollReveal>

          {/* Bento Card 2: 100% Placement Rate */}
          <ScrollReveal delay={0.1}>
            <div className="h-full glass-panel rounded-3xl p-7 sm:p-8 flex flex-col justify-between border border-white/[0.1] hover:border-white/25 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] text-neutral-400 uppercase tracking-wider font-medium">PLACEMENT</span>
                </div>
                <div className="text-4xl sm:text-5xl font-light tracking-tight text-white mb-2">
                  100<span className="text-emerald-400 font-normal">%</span>
                </div>
                <h4 className="text-base font-medium text-neutral-100 mb-1">
                  Placement & Internship Rate
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Guaranteed industry placement into active client software teams and partner tech companies.
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-neutral-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Full-Time & Retainers</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Bento Card 3: 10K+ Leads Generated */}
          <ScrollReveal delay={0.15}>
            <div className="h-full glass-panel rounded-3xl p-7 sm:p-8 flex flex-col justify-between border border-white/[0.1] hover:border-white/25 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                    <Zap className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] text-neutral-400 uppercase tracking-wider font-medium">GROWTH</span>
                </div>
                <div className="text-4xl sm:text-5xl font-light tracking-tight text-white mb-2">
                  10K<span className="text-orange-400 font-normal">+</span>
                </div>
                <h4 className="text-base font-medium text-neutral-100 mb-1">
                  Qualified Leads Generated
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  High-intent business opportunities delivered to clients via programmatic funnels & Meta CAPI.
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-neutral-400 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                <span>Attributed Revenue Flow</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Bento Card 4: 50+ Brands Served */}
          <ScrollReveal delay={0.2}>
            <div className="h-full glass-panel rounded-3xl p-7 sm:p-8 flex flex-col justify-between border border-white/[0.1] hover:border-white/25 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] text-neutral-400 uppercase tracking-wider font-medium">PORTFOLIO</span>
                </div>
                <div className="text-4xl sm:text-5xl font-light tracking-tight text-white mb-2">
                  50<span className="text-blue-400 font-normal">+</span>
                </div>
                <h4 className="text-base font-medium text-neutral-100 mb-1">
                  Brands Scaled Nationally
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Manufacturing, retail, coaching institutes, and D2C brands powered with custom tech.
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 text-xs text-neutral-400 font-medium">
                Domestic & Pan-India
              </div>
            </div>
          </ScrollReveal>

          {/* Bento Card 5: 15+ Advanced Curriculums */}
          <ScrollReveal delay={0.25}>
            <div className="h-full glass-panel rounded-3xl p-7 sm:p-8 flex flex-col justify-between border border-white/[0.1] hover:border-white/25 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] text-neutral-400 uppercase tracking-wider font-medium">COURSES</span>
                </div>
                <div className="text-4xl sm:text-5xl font-light tracking-tight text-white mb-2">
                  15<span className="text-purple-400 font-normal">+</span>
                </div>
                <h4 className="text-base font-medium text-neutral-100 mb-1">
                  Specialized Curriculums
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Live code camps, enterprise system architecture, and machine learning modules.
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 text-xs text-neutral-400 font-medium">
                Self-Paced & Intensive
              </div>
            </div>
          </ScrollReveal>

          {/* Bento Card 6: 3+ Years in Industry (Double width on desktop) */}
          <ScrollReveal delay={0.3} className="md:col-span-2 lg:col-span-2">
            <div className="h-full glass-panel rounded-3xl p-7 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-white/[0.1] hover:border-white/25 transition-all duration-300 group bg-gradient-to-r from-transparent to-white/[0.03]">
              <div className="max-w-md">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs text-neutral-400 uppercase tracking-widest font-medium">
                    ESTABLISHED FOUNDATION
                  </span>
                </div>
                <div className="text-4xl sm:text-5xl font-light tracking-tight text-white mb-2">
                  3<span className="text-indigo-400 font-normal">+ Years</span>
                </div>
                <h4 className="text-base font-medium text-neutral-100 mb-1">
                  Relentless Engineering & Operations
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Built from the ground up to solve complex software, enterprise automation, and digital scaling bottlenecks across North India.
                </p>
              </div>

              <div className="shrink-0 text-xs text-neutral-400 border border-white/10 p-4 rounded-2xl bg-black/40 space-y-1 font-medium">
                <div>Founded in 2023</div>
                <div className="text-neutral-300">Haryana HQ & Chandigarh Hub</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
