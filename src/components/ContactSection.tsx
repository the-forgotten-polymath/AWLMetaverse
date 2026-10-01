"use client";

import React, { useState } from "react";
import { COMPANY_INFO, SERVICES_DATA } from "@/data/companyData";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Sparkles, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("AI & Automation");
  const [selectedBudget, setSelectedBudget] = useState("Scale ($10k - $25k)");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const budgets = ["Sprint (< $10k)", "Scale ($10k - $25k)", "Enterprise ($25k+)", "Retainer"];

  const popularServices = [
    "AI & Automation",
    "ERP Solutions",
    "CRM Solutions",
    "Web Development",
    "App Development",
    "Performance Marketing",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    }, 4500);
  };

  return (
    <section id="contact" className="py-28 sm:py-36 relative bg-[#07070a] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Context & Information */}
          <div className="lg:col-span-5">
            <ScrollReveal yOffset={32}>
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 mb-3 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                    <span>INITIATE COLLABORATION</span>
                  </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-6">
                LET&apos;S TALK
              </h2>
              <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed mb-10">
                Tell us what you are building — whether it&apos;s autonomous AI agents, enterprise ERPs, or an aggressive digital scale-up. Our technical team responds within 24 hours.
              </p>

              {/* Direct Communication Cards */}
              <div className="space-y-4 mb-10">
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="glass-panel p-5 rounded-2xl flex items-center gap-4 text-sm text-neutral-300 hover:text-white border border-white/[0.08] hover:border-white/25 transition-all group bg-[#09090d]"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5 text-neutral-300" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-400 uppercase tracking-wider font-medium">Email Inquiry</div>
                    <div className="font-medium text-white">{COMPANY_INFO.contact.email}</div>
                  </div>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.contact.phone}`}
                  className="glass-panel p-5 rounded-2xl flex items-center gap-4 text-sm text-neutral-300 hover:text-white border border-white/[0.08] hover:border-white/25 transition-all group bg-[#09090d]"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5 text-neutral-300" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-400 uppercase tracking-wider font-medium">Phone & WhatsApp</div>
                    <div className="font-medium text-white">{COMPANY_INFO.contact.phone}</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Privacy & NDA Shield */}
            <div className="pt-6 border-t border-white/[0.08] flex items-center gap-3 text-xs text-neutral-400">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Strict NDA Guaranteed · Data Privacy by Design</span>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Right Column: Interactive Studio Terminal Form */}
      <div className="lg:col-span-7">
        <ScrollReveal delay={0.1} yOffset={32}>
          <div className="glass-panel rounded-3xl p-7 sm:p-10 border border-white/[0.12] shadow-[0_25px_60px_rgba(0,0,0,0.95)] relative overflow-hidden bg-[#09090d]">
              {submitted ? (
                <div className="py-20 flex flex-col items-center justify-center text-center animate-fade">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 shadow-2xl">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-normal text-white mb-2">Transmission Received</h3>
                  <p className="text-sm text-neutral-400 max-w-md leading-relaxed font-normal">
                    Thank you, {form.name || "partner"}. Your project brief has been assigned to our senior technical lead. We will review your architecture requirements and reach out within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                      Select Service Focus
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2.5">
                      {popularServices.map((srv) => (
                        <button
                          type="button"
                          key={srv}
                          onClick={() => setSelectedService(srv)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                            selectedService === srv
                              ? "bg-white text-black font-semibold shadow-md"
                              : "bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10"
                          }`}
                        >
                          {srv}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Sarah Connor"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-white/40 text-sm font-normal transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="sarah@enterprise.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-white/40 text-sm font-normal transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-white/40 text-sm font-normal transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                        Company or Brand
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Apex Technologies"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-white/40 text-sm font-normal transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                      Target Project Scope & Bottlenecks *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Describe your current software state, operational bottlenecks, or growth targets..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-white/40 text-sm font-normal transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="relative group w-full inline-flex items-center justify-center cursor-pointer"
                  >
                    <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-white to-neutral-400 opacity-60 blur-sm group-hover:opacity-100 transition-opacity" />
                    <span className="relative w-full py-4 rounded-full bg-white text-black font-semibold text-sm tracking-wide transition-all group-hover:scale-[1.01] flex items-center justify-center gap-2 shadow-2xl">
                      <span>Transmit Project Brief</span>
                      <Send className="w-4 h-4" />
                    </span>
                  </button>

                  <div className="text-center text-xs text-neutral-500">
                    Response within 24 hours from our leadership team
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
        </div>
      </div>
    </section>
  );
}
