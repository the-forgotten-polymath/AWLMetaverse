import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MetricsSection } from "@/components/MetricsSection";
import { WhatWeDoSection } from "@/components/WhatWeDoSection";
import { WhoWeAreSection } from "@/components/WhoWeAreSection";
import { CareersSection } from "@/components/CareersSection";
import { BlogSection } from "@/components/BlogSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#fafafa] selection:bg-white/20 selection:text-white">
      {/* Top Header Navigation */}
      <Navbar />

      {/* Dark Cinematic Hero with looping video & bottom-left typography */}
      <HeroSection />

      {/* Metrics & Milestones */}
      <MetricsSection />

      {/* 16 Services Grid with full architectural details */}
      <WhatWeDoSection />

      {/* Who We Are: Mission, Leadership, Dual Offices */}
      <WhoWeAreSection />

      {/* Careers & Internship Program */}
      <CareersSection />

      {/* 6 Curated Field Notes & Blog Posts */}
      <BlogSection />

      {/* Frequently Asked Questions */}
      <FAQSection />

      {/* Let's Talk - Interactive Contact & Discovery Form */}
      <ContactSection />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
