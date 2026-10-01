"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SERVICES_DATA, ServiceItem } from "@/data/companyData";
import { CheckCircle2, ArrowUpRight, X, Sparkles, Layers, Cpu, Code2, LineChart, Palette } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function WhatWeDoSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const categories = ["All", "Technology", "Development", "Marketing", "Creative"];

  const filteredServices =
    activeCategory === "All"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Technology":
        return <Cpu className="w-3.5 h-3.5" />;
      case "Development":
        return <Code2 className="w-3.5 h-3.5" />;
      case "Marketing":
        return <LineChart className="w-3.5 h-3.5" />;
      case "Creative":
        return <Palette className="w-3.5 h-3.5" />;
      default:
        return <Layers className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="what-we-do" className="py-28 sm:py-36 relative bg-[#050507]">
      {/* Subtle ambient light */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[400px] bg-white/[0.015] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal yOffset={32}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 pb-8 border-b border-white/[0.08]">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 mb-3 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                <span>SERVICES & SOLUTIONS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white">
                WHAT WE DO
              </h2>
              <p className="mt-4 text-sm sm:text-base text-neutral-400 max-w-2xl font-normal leading-relaxed">
                We design and ship high-precision software engines, automated AI pipelines, scalable business platforms, and revenue-focused acquisition funnels.
              </p>
            </div>

            {/* Luxury Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 bg-[#0a0a0e] p-1.5 rounded-full border border-white/[0.1] shadow-2xl">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    activeCategory === cat
                      ? "bg-white text-black font-semibold shadow-[0_2px_12px_rgba(255,255,255,0.25)]"
                      : "text-neutral-400 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  {cat !== "All" && getCategoryIcon(cat)}
                  <span>{cat}</span>
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredServices.map((service, idx) => {
            return (
              <ScrollReveal key={service.id} delay={(idx % 3) * 0.08} className="h-full">
                <div
                  className="h-full glass-panel rounded-3xl overflow-hidden flex flex-col justify-between border border-white/[0.08] hover:border-white/30 transition-all duration-500 group relative bg-[#09090d]"
                >
                  {/* Top Glowing Shimmer Line on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

                <div>
                  {/* Photo Header */}
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-neutral-950">
                    <Image
                      src={service.photo}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108 opacity-75 group-hover:opacity-95"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090d] via-black/30 to-transparent" />

                    {/* Metadata Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="text-[11px] text-neutral-300 tracking-wider px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 font-medium">
                        {service.category}
                      </span>
                      {service.badge && (
                        <span className="px-2.5 py-0.5 rounded-full bg-white text-black text-[10px] font-bold uppercase tracking-wider shadow">
                          {service.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-neutral-400">
                      {getCategoryIcon(service.category)}
                      <span>{service.category}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-normal text-white mb-3 group-hover:text-neutral-100 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-3 mb-6 font-normal">
                      {service.description}
                    </p>

                    {/* Technical deliverables preview */}
                    <div className="space-y-2 border-t border-white/[0.06] pt-4">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Footer */}
                <div className="px-6 sm:px-7 pb-6 pt-2">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full py-3 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-xs font-mono uppercase tracking-wider text-neutral-200 hover:text-white flex items-center justify-between transition-all group-hover:border-white/20 cursor-pointer"
                  >
                    <span>Architecture & Specs</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* LUXURY ARCHITECTURAL MODAL */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl animate-fade"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#0b0b0f] border border-white/[0.15] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5 mb-3 font-mono text-xs">
              <span className="px-3 py-1 rounded-full bg-white/10 text-neutral-300 uppercase tracking-widest">
                {selectedService.category}
              </span>
              {selectedService.badge && (
                <span className="px-3 py-1 rounded-full bg-white text-black font-bold uppercase tracking-wider">
                  {selectedService.badge}
                </span>
              )}
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal text-white mb-4">
              {selectedService.name}
            </h3>

            <div className="relative h-60 w-full rounded-2xl overflow-hidden mb-6 bg-neutral-950 border border-white/10">
              <Image
                src={selectedService.photo}
                alt={selectedService.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f] via-transparent to-transparent" />
            </div>

            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-widest text-neutral-400 mb-2 font-medium">
                Scope & Architecture
              </h4>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed whitespace-pre-line font-normal">
                {selectedService.details}
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-widest text-neutral-400 mb-3 font-medium">
                Deliverables & Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedService.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-white/10">
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="btn-pill w-full sm:w-auto px-8 py-3.5 text-sm font-semibold tracking-wide text-center"
              >
                Inquire on this Architecture
              </a>
              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-6 py-3 rounded-full text-xs uppercase tracking-wider font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
