"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BrandMark } from "./BrandMark";
import { ChevronDown, ArrowRight, X, Menu, Sparkles, Building2, Users2, Award, Briefcase, GraduationCap, HeartHandshake } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [whoOpen, setWhoOpen] = useState(false);
  const [careersOpen, setCareersOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#050507]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between relative">
          {/* Logo & Brand Name */}
          <Link
            href="#home"
            className="flex items-center gap-3.5 group"
            aria-label="AWL Metaverse Home"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-white/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <BrandMark className="w-9 h-9 sm:w-10 sm:h-10" size={42} />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm sm:text-[15px] tracking-[0.16em] uppercase text-white group-hover:text-neutral-200 transition-colors">
                AWL METAVERSE
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-mono -mt-0.5">
                Pvt. Ltd.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-7 lg:gap-9 text-xs sm:text-[13px] tracking-[0.12em] font-medium uppercase text-[#b6b5b5]"
            aria-label="Primary"
          >
            <Link
              href="#home"
              className="hover:text-white transition-colors duration-200 relative py-1 group"
            >
              <span>HOME</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white group-hover:w-full transition-all duration-300 ease-out" />
            </Link>

            {/* WHO WE ARE dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setWhoOpen(true)}
              onMouseLeave={() => setWhoOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 hover:text-white transition-colors duration-200 py-1 group cursor-pointer"
                aria-expanded={whoOpen}
              >
                <span>WHO WE ARE</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    whoOpen ? "rotate-180 text-white" : "opacity-70"
                  }`}
                />
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white group-hover:w-full transition-all duration-300 ease-out" />
              </button>

              {whoOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-64 z-50 animate-fade">
                  <div className="bg-[#0b0b0f]/95 backdrop-blur-2xl border border-white/[0.12] rounded-2xl p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.9)] flex flex-col gap-1 text-sm normal-case tracking-normal">
                    <Link
                      href="#about"
                      onClick={() => setWhoOpen(false)}
                      className="p-2.5 rounded-xl hover:bg-white/[0.08] transition-all flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-neutral-300 group-hover:text-white group-hover:bg-white/10">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-white font-medium text-xs sm:text-[13px]">About AWL</div>
                        <div className="text-[11px] text-neutral-400">Our mission & engineering approach</div>
                      </div>
                    </Link>

                    <Link
                      href="#leadership"
                      onClick={() => setWhoOpen(false)}
                      className="p-2.5 rounded-xl hover:bg-white/[0.08] transition-all flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-neutral-300 group-hover:text-white group-hover:bg-white/10">
                        <Users2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-white font-medium text-xs sm:text-[13px]">Executive Leadership</div>
                        <div className="text-[11px] text-neutral-400">Mr. Rakesh & Mrs. Nirmal, Directors</div>
                      </div>
                    </Link>

                    <Link
                      href="#offices"
                      onClick={() => setWhoOpen(false)}
                      className="p-2.5 rounded-xl hover:bg-white/[0.08] transition-all flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-neutral-300 group-hover:text-white group-hover:bg-white/10">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-white font-medium text-xs sm:text-[13px]">Dual Innovation Hubs</div>
                        <div className="text-[11px] text-neutral-400">Jind HQ & Chandigarh Hub</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="#what-we-do"
              className="hover:text-white transition-colors duration-200 relative py-1 group"
            >
              <span>WHAT WE DO</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white group-hover:w-full transition-all duration-300 ease-out" />
            </Link>

            {/* CAREERS dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCareersOpen(true)}
              onMouseLeave={() => setCareersOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 hover:text-white transition-colors duration-200 py-1 group cursor-pointer"
                aria-expanded={careersOpen}
              >
                <span>CAREERS</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    careersOpen ? "rotate-180 text-white" : "opacity-70"
                  }`}
                />
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white group-hover:w-full transition-all duration-300 ease-out" />
              </button>

              {careersOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-64 z-50 animate-fade">
                  <div className="bg-[#0b0b0f]/95 backdrop-blur-2xl border border-white/[0.12] rounded-2xl p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.9)] flex flex-col gap-1 text-sm normal-case tracking-normal">
                    <Link
                      href="#roles"
                      onClick={() => setCareersOpen(false)}
                      className="p-2.5 rounded-xl hover:bg-white/[0.08] transition-all flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-neutral-300 group-hover:text-white group-hover:bg-white/10">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-white font-medium text-xs sm:text-[13px]">Open Positions</div>
                        <div className="text-[11px] text-neutral-400">Engineering, AI & Growth</div>
                      </div>
                    </Link>

                    <Link
                      href="#culture"
                      onClick={() => setCareersOpen(false)}
                      className="p-2.5 rounded-xl hover:bg-white/[0.08] transition-all flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-neutral-300 group-hover:text-white group-hover:bg-white/10">
                        <HeartHandshake className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-white font-medium text-xs sm:text-[13px]">Life at AWL</div>
                        <div className="text-[11px] text-neutral-400">Meritocracy & production impact</div>
                      </div>
                    </Link>

                    <Link
                      href="#internships"
                      onClick={() => setCareersOpen(false)}
                      className="p-2.5 rounded-xl hover:bg-white/[0.08] transition-all flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-neutral-300 group-hover:text-white group-hover:bg-white/10">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-white font-medium text-xs sm:text-[13px]">Internship Tracks</div>
                        <div className="text-[11px] text-neutral-400">6-Month software accelerator</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="#contact"
              className="hover:text-white transition-colors duration-200 relative py-1 group"
            >
              <span>LET&apos;S TALK</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white group-hover:w-full transition-all duration-300 ease-out" />
            </Link>
          </nav>

          {/* Desktop Right CTA Pill with subtle luminous glow */}
          <div className="hidden md:flex items-center">
            <Link
              href="#contact"
              className="relative group inline-flex items-center justify-center"
            >
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-white/30 to-white/10 blur-sm opacity-50 group-hover:opacity-100 transition-opacity" />
              <span className="relative px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm tracking-wide transition-transform group-hover:scale-[1.02] flex items-center gap-1.5 shadow-[0_2px_12px_rgba(255,255,255,0.2)]">
                <span>Get Started</span>
                <Sparkles className="w-3.5 h-3.5 text-neutral-700" />
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 rounded-full bg-white/5 border border-white/15 backdrop-blur-md flex items-center justify-center text-white transition-all hover:bg-white/10"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#050507]/95 backdrop-blur-3xl flex flex-col justify-between p-8 pt-28 animate-fade md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div>
            <div className="flex items-center gap-3 pb-6 mb-6 border-b border-white/10">
              <BrandMark className="w-8 h-8" size={36} />
              <div className="text-xs uppercase tracking-widest font-mono text-neutral-400">
                AWL METAVERSE
              </div>
            </div>

            <ul className="flex flex-col gap-4 text-2xl font-medium tracking-tight">
              <li>
                <Link
                  href="#home"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between text-neutral-200 hover:text-white py-1"
                >
                  <span>HOME</span>
                  <ArrowRight className="w-5 h-5 opacity-40" />
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between text-neutral-200 hover:text-white py-1"
                >
                  <span>WHO WE ARE</span>
                  <ArrowRight className="w-5 h-5 opacity-40" />
                </Link>
              </li>
              <li>
                <Link
                  href="#what-we-do"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between text-neutral-200 hover:text-white py-1"
                >
                  <span>WHAT WE DO</span>
                  <ArrowRight className="w-5 h-5 opacity-40" />
                </Link>
              </li>
              <li>
                <Link
                  href="#careers"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between text-neutral-200 hover:text-white py-1"
                >
                  <span>CAREERS</span>
                  <ArrowRight className="w-5 h-5 opacity-40" />
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between text-neutral-200 hover:text-white py-1"
                >
                  <span>LET&apos;S TALK</span>
                  <ArrowRight className="w-5 h-5 opacity-40" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3.5 pt-6 border-t border-white/10">
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="w-full py-3.5 rounded-full bg-white text-black font-semibold text-center text-sm shadow-lg tracking-wide"
            >
              Get Started
            </Link>
            <div className="text-center text-xs text-neutral-500 font-mono">
              Offices: Jind · Chandigarh
            </div>
          </div>
        </div>
      )}
    </>
  );
}
