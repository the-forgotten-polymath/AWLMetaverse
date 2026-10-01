"use client";

import React, { useState } from "react";
import { CAREERS_DATA, CareerItem } from "@/data/companyData";
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, X, Send, Sparkles } from "lucide-react";

export function CareersSection() {
  const [selectedJob, setSelectedJob] = useState<CareerItem | null>(null);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
    message: "",
  });

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplicationSubmitted(true);
    setTimeout(() => {
      setApplicationSubmitted(false);
      setSelectedJob(null);
      setFormData({ name: "", email: "", phone: "", portfolio: "", message: "" });
    }, 2800);
  };

  return (
    <section id="careers" className="py-28 sm:py-36 relative bg-[#050507] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 mb-3 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
              <span>TALENT & OPPORTUNITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white">
              CAREERS AT AWL
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-lg font-normal leading-relaxed">
            We value high engineering standards, creative autonomy, and rapid execution. Work directly on production AI agents, complex ERPs, and national brand growth engines.
          </p>
        </div>

        {/* Culture Badges */}
        <div id="culture" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="glass-panel p-7 rounded-3xl border border-white/[0.08] hover:border-white/20 transition-all">
            <h4 className="text-white font-medium text-lg mb-2">Production Impact from Day 1</h4>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
              No simulated sandboxes. Every engineer writes code or deploys infrastructure that serves real customers immediately.
            </p>
          </div>
          <div className="glass-panel p-7 rounded-3xl border border-white/[0.08] hover:border-white/20 transition-all">
            <h4 className="text-white font-medium text-lg mb-2">Meritocracy & High Velocity</h4>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
              We reward architecture speed and problem-solving over arbitrary seniority. High performers assume project leadership rapidly.
            </p>
          </div>
          <div className="glass-panel p-7 rounded-3xl border border-white/[0.08] hover:border-white/20 transition-all">
            <h4 className="text-white font-medium text-lg mb-2">Modern Production Stack</h4>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
              Next.js 14/15, TypeScript, Python LLM frameworks, Tailwind CSS, PostgreSQL, and cloud-native serverless architecture.
            </p>
          </div>
        </div>

        {/* Open Job Listings */}
        <div id="roles" className="space-y-4">
          {CAREERS_DATA.map((job) => {
            return (
              <div
                key={job.id}
                className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-white/[0.08] hover:border-white/25 transition-all duration-300 group bg-[#09090d]"
              >
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300">
                      {job.department}
                    </span>
                    <span className="px-3 py-0.5 rounded-full bg-neutral-900 border border-white/5 text-xs font-medium text-neutral-400">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="text-2xl font-normal text-white mb-2.5 group-hover:text-neutral-200 transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4 font-normal">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-5 text-xs text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {job.experience}
                    </span>
                  </div>
                </div>

                <div className="shrink-0 flex items-center">
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="btn-pill px-7 py-3.5 text-xs uppercase tracking-wider font-semibold w-full sm:w-auto text-center cursor-pointer shadow-lg"
                  >
                    Apply for Role
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Internships Banner */}
        <div id="internships" className="mt-16 glass-panel rounded-3xl p-8 sm:p-12 border border-white/[0.12] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 bg-gradient-to-r from-white/[0.04] to-[#0d0d12]">
          <div className="max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs uppercase tracking-widest font-medium">
              6-Month Software Track
            </span>
            <h3 className="text-2xl sm:text-3xl font-normal text-white mt-3 mb-2">
              Looking for our Intensive Software & AI Internship?
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-normal">
              We offer structured, stipend-supported engineering internships at our Jind and Chandigarh hubs with direct conversion to full-time engineering and marketing associate roles upon completion.
            </p>
          </div>
          <button
            onClick={() => {
              const internJob = CAREERS_DATA.find((j) => j.id === "ai-intern");
              if (internJob) setSelectedJob(internJob);
            }}
            className="btn-pill px-8 py-3.5 text-xs uppercase tracking-wider font-semibold whitespace-nowrap cursor-pointer shrink-0 shadow-lg"
          >
            Apply for Internship
          </button>
        </div>
      </div>

      {/* APPLICATION MODAL */}
      {selectedJob && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl animate-fade"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#0b0b0f] border border-white/[0.15] rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {applicationSubmitted ? (
              <div className="py-12 flex flex-col items-center text-center animate-fade">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-normal text-white mb-2">Application Transmitted</h4>
                <p className="text-sm text-neutral-400 max-w-sm font-normal">
                  Thank you for applying for {selectedJob.title}. Our engineering leads will review your portfolio and reach out within 48 hours.
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="px-3 py-1 rounded-full bg-white/10 font-mono text-xs uppercase tracking-wider text-neutral-300">
                    {selectedJob.department}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-normal text-white mt-2 mb-1">
                    {selectedJob.title}
                  </h3>
                  <p className="text-xs font-mono text-neutral-400">
                    {selectedJob.location} · {selectedJob.type} · {selectedJob.experience}
                  </p>
                </div>

                <div className="mb-6 border-b border-white/[0.08] pb-5">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-2.5">
                    TECHNICAL REQUIREMENTS
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-300 font-normal">
                    {selectedJob.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <form onSubmit={handleApplySubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-white/40 text-sm font-normal transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@domain.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-white/40 text-sm font-normal transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-white/40 text-sm font-normal transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                      Portfolio / GitHub / LinkedIn URL *
                    </label>
                    <input
                      required
                      type="url"
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                      placeholder="https://github.com/username"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-white/40 text-sm font-normal transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                      Brief Note or Relevant Projects
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Highlight what you have built and which technologies you love..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-white/40 text-sm font-normal transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-pill w-full py-4 text-sm font-semibold tracking-wide flex items-center justify-center gap-2 mt-4 cursor-pointer"
                  >
                    <span>Transmit Application</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
