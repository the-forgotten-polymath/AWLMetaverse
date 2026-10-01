"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full h-[100dvh] min-h-[640px] overflow-hidden bg-[#050507] flex flex-col justify-end"
    >
      {/* BACKGROUND VIDEO & MULTI-LAYERED MEASURED GRADIENTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          className="w-full h-full object-cover object-center scale-[1.02] filter brightness-[0.92] contrast-[1.05]"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260808_112712_da9d53df-6d27-4b12-bdf6-aa9dc2622bdf.mp4"
            type="video/mp4"
          />
        </video>

        {/* Cinematic Dual Fades */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(to bottom,
                rgba(5,5,7,0.3) 0%,
                rgba(5,5,7,0.05) 30%,
                rgba(5,5,7,0.3) 65%,
                rgba(5,5,7,0.85) 88%,
                #050507 100%
              ),
              linear-gradient(to right,
                rgba(5,5,7,0.92) 0%,
                rgba(5,5,7,0.68) 32%,
                rgba(5,5,7,0.2) 70%,
                rgba(5,5,7,0.45) 100%
              )
            `,
          }}
        />

        {/* Ambient Top Glow */}
        <div className="absolute -top-40 left-1/3 w-[600px] h-[350px] bg-white/[0.03] rounded-full blur-[120px]" />
      </div>

      {/* HERO TYPOGRAPHY & ACTIONS (ANCHORED BOTTOM LEFT) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 pb-16 sm:pb-20 md:pb-24">
        <div className="max-w-3xl flex flex-col items-start animate-rise">

          {/* Master Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-normal leading-[1.15] tracking-[-0.03em] text-white mb-5">
            <span className="block font-medium">You bring the ambition.</span>
            <span className="block text-neutral-400">We build the engine behind it.</span>
          </h1>

          {/* Subcopy */}
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-neutral-300 font-normal mb-8 max-w-xl">
            A unified infrastructure platform to help teams build, ship, and scale AI systems with confidence.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link
              href="#contact"
              className="relative group inline-flex items-center justify-center"
            >
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-white to-neutral-400 opacity-60 blur-sm group-hover:opacity-100 transition-opacity" />
              <span className="relative px-8 py-3.5 sm:py-4 rounded-full bg-white text-black font-semibold text-sm sm:text-base tracking-wide transition-all group-hover:scale-[1.02] flex items-center gap-2 shadow-[0_4px_20px_rgba(255,255,255,0.25)]">
                <span>Let&apos;s Build</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="#what-we-do"
              className="group px-7 py-3.5 sm:py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.12] hover:border-white/25 backdrop-blur-md text-white font-medium text-sm sm:text-base transition-all flex items-center gap-2.5"
            >
              <span>Explore Architecture</span>
              <span className="text-neutral-400 group-hover:text-white transition-colors">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
