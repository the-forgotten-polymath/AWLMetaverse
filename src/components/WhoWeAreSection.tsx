"use client";

import React from "react";
import Image from "next/image";
import { COMPANY_INFO } from "@/data/companyData";
import { Shield, Target, Compass, MapPin, Phone, Mail, Award, CheckCircle, Clock } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function WhoWeAreSection() {
  return (
    <section id="who-we-are" className="py-28 sm:py-36 relative bg-[#07070a] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal yOffset={32}>
          <div id="about" className="max-w-3xl mb-16 pb-8 border-b border-white/[0.08]">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 mb-3 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
              <span>COMPANY OVERVIEW</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-6">
              WHO WE ARE
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed font-normal">
              {COMPANY_INFO.aboutOverview}
            </p>
          </div>
        </ScrollReveal>

        {/* Operating Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 mb-24">
          <ScrollReveal delay={0.05} className="h-full">
            <div className="h-full glass-panel rounded-3xl p-8 flex flex-col justify-between border border-white/[0.08] hover:border-white/25 transition-all duration-300 group bg-gradient-to-b from-white/[0.03] to-transparent">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-105 transition-transform">
                <Target className="w-6 h-6 text-neutral-200" />
              </div>
              <h3 className="text-xl font-medium text-white mb-2.5">Engineered for Reliability</h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                We build enterprise systems that withstand rigorous real-world concurrency. From resilient database schemas to deterministic AI agents, every solution is architected for maximum uptime.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs text-neutral-300 font-medium">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Production-Hardened</span>
            </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="h-full">
            <div className="h-full glass-panel rounded-3xl p-8 flex flex-col justify-between border border-white/[0.08] hover:border-white/25 transition-all duration-300 group bg-gradient-to-b from-white/[0.03] to-transparent">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-105 transition-transform">
                  <Compass className="w-6 h-6 text-neutral-200" />
                </div>
                <h3 className="text-xl font-medium text-white mb-2.5">Unified Agency Model</h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                  Engineers, machine learning researchers, and performance marketers operate in total synchronization. No lost context, no handoff friction, and no multi-vendor finger pointing.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs text-neutral-300 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Zero-Handoff Friction</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="h-full">
            <div className="h-full glass-panel rounded-3xl p-8 flex flex-col justify-between border border-white/[0.08] hover:border-white/25 transition-all duration-300 group bg-gradient-to-b from-white/[0.03] to-transparent">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-105 transition-transform">
                  <Award className="w-6 h-6 text-neutral-200" />
                </div>
                <h3 className="text-xl font-medium text-white mb-2.5">Talent Acceleration Bench</h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                  Over 1,000 developers trained through our internal academy with 100% placement rates guarantees our client projects always have an agile, battle-tested talent bench.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs text-neutral-300 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>100% Placement Verified</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* EXECUTIVE LEADERSHIP */}
        <div id="leadership" className="mb-24">
          <ScrollReveal yOffset={24}>
            <div className="mb-10 pb-6 border-b border-white/[0.08] flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-widest text-neutral-400 mb-1 font-medium">
                  BOARD OF DIRECTORS
                </div>
                <h3 className="text-2xl sm:text-3xl font-normal text-white">
                  Executive Leadership
                </h3>
              </div>
              <div className="text-xs text-neutral-400 font-medium">
                Operational Excellence & Governance
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {COMPANY_INFO.directors.map((director, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1} className="h-full">
                <div
                  className="h-full glass-panel rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 border border-white/[0.1] hover:border-white/25 transition-all duration-300 relative group overflow-hidden bg-[#0a0a0f]"
                >
                  {/* Director Portrait / Placeholder Frame */}
                  <div className="relative w-full sm:w-44 h-56 sm:h-64 rounded-2xl overflow-hidden shrink-0 border border-white/10 bg-neutral-950 shadow-2xl">
                    {director.image ? (
                      <>
                        <Image
                          src={director.image}
                          alt={director.name}
                          fill
                          className="object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, 200px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[11px] text-white/90 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 font-medium">
                          <span>Director</span>
                          <span className="flex items-center gap-1 text-emerald-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Active
                          </span>
                        </div>
                      </>
                    ) : (
                      /* Placeholder for Second Founder */
                      <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-white/[0.04] to-black/60 relative">
                        <div className="w-16 h-16 rounded-full bg-white/5 border border-dashed border-white/20 flex items-center justify-center text-2xl font-light text-neutral-300 mb-3 group-hover:scale-105 transition-transform">
                          {director.initials}
                        </div>
                        <div className="text-[11px] text-neutral-400 tracking-wider uppercase text-center px-2 py-1 rounded bg-white/5 border border-white/10 font-medium">
                          Director Photo
                        </div>
                        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[11px] text-neutral-400 px-2.5 py-1 rounded bg-black/40 border border-white/5 font-medium">
                          <span>Director</span>
                          <span className="text-neutral-500">Governance</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Director Dossier */}
                  <div className="flex-1 flex flex-col justify-between h-full pt-1">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="text-2xl font-normal text-white">{director.name}</h4>
                      </div>
                      <div className="text-xs uppercase tracking-widest text-neutral-400 mb-4 font-medium">
                        {director.role}
                      </div>
                      <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                        {director.bio}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-neutral-400 font-medium">
                      <span>Executive Board</span>
                      <span>AWL Metaverse</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* DUAL INNOVATION HUBS */}
        <div id="offices">
          <ScrollReveal yOffset={24}>
            <div className="mb-10 pb-6 border-b border-white/[0.08] flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-widest text-neutral-400 mb-1 font-medium">
                  INNOVATION HUBS
                </div>
                <h3 className="text-2xl sm:text-3xl font-normal text-white">
                  Dual Innovation Centers
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Timezone: IST (GMT+5:30)</span>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {COMPANY_INFO.offices.map((office, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1} className="h-full">
                <div
                  className="h-full glass-panel rounded-3xl p-8 sm:p-9 flex flex-col justify-between border border-white/[0.1] hover:border-white/25 transition-all duration-300 bg-[#09090d]"
                >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                        <MapPin className="w-5 h-5 text-neutral-300" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white">{office.label}</h4>
                        <p className="text-xs text-neutral-400">{office.city}</p>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-emerald-400 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 font-medium">
                      Operational
                    </span>
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-normal">
                    {office.address}
                  </p>
                </div>

                <div className="space-y-2.5 border-t border-white/[0.08] pt-5 text-xs sm:text-sm text-neutral-400">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-neutral-400 shrink-0" />
                    <a href={`tel:${office.phone}`} className="hover:text-white transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
                    <a href={`mailto:${office.email}`} className="hover:text-white transition-colors">
                      {office.email}
                    </a>
                  </div>
                </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
