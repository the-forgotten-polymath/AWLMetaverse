"use client";

import React, { useState } from "react";
import { FAQS_DATA } from "@/data/companyData";
import { HelpCircle, ChevronDown } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(FAQS_DATA[0]?.id || null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-28 sm:py-36 relative bg-[#050507] border-t border-white/[0.08]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal yOffset={32}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 mb-3 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
              <span>FREQUENTLY ASKED</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4">
              QUESTIONS & ANSWERS
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-normal">
              Everything you need to know about our technology scoping, delivery timelines, project costs, and ongoing warranty coverage.
            </p>
          </div>
        </ScrollReveal>

        {/* FAQ Accordions */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openId === faq.id;
            const indexStr = String(idx + 1).padStart(2, "0");
            return (
              <ScrollReveal key={faq.id} delay={idx * 0.05} yOffset={16}>
                <div
                  className={`glass-panel rounded-3xl transition-all duration-300 border ${
                    isOpen
                      ? "border-white/25 bg-white/[0.04] shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                      : "border-white/[0.08] hover:border-white/15 bg-[#09090d]"
                  }`}
                >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-neutral-400">
                      {indexStr}
                    </span>
                    <span className="text-base sm:text-lg font-medium text-white">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-white/15 text-white" : "text-neutral-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-7 pt-1 text-sm sm:text-base text-neutral-300 leading-relaxed border-t border-white/[0.06] animate-fade pl-14 sm:pl-16 font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
