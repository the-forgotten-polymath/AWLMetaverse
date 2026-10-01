"use client";

import React from "react";
import Link from "next/link";
import { BrandMark } from "./BrandMark";
import { COMPANY_INFO } from "@/data/companyData";

export function Footer() {
  return (
    <footer className="bg-[#030305] text-neutral-400 text-xs sm:text-sm border-t border-white/[0.08] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-white/[0.08]">
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <BrandMark className="w-10 h-10" size={44} />
                <div className="flex flex-col">
                  <span className="font-semibold text-sm tracking-[0.16em] uppercase text-white">
                    AWL METAVERSE
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-500">
                    Pvt. Ltd.
                  </span>
                </div>
              </div>

              <p className="text-neutral-400 text-xs sm:text-sm max-w-sm leading-relaxed mb-6 font-normal">
                A unified infrastructure platform to help teams build, ship, and scale AI systems with confidence.
              </p>
            </div>
          </div>

          {/* Column 1: Capabilities */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white font-medium mb-4">
              Capabilities
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-normal">
              <li>
                <Link href="#what-we-do" className="hover:text-white transition-colors">
                  AI & Automation
                </Link>
              </li>
              <li>
                <Link href="#what-we-do" className="hover:text-white transition-colors">
                  ERP Solutions
                </Link>
              </li>
              <li>
                <Link href="#what-we-do" className="hover:text-white transition-colors">
                  CRM Systems
                </Link>
              </li>
              <li>
                <Link href="#what-we-do" className="hover:text-white transition-colors">
                  LMS Platforms
                </Link>
              </li>
              <li>
                <Link href="#what-we-do" className="hover:text-white transition-colors">
                  Web & App Development
                </Link>
              </li>
              <li>
                <Link href="#what-we-do" className="hover:text-white transition-colors">
                  Performance Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white font-medium mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-normal">
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About AWL
                </Link>
              </li>
              <li>
                <Link href="#leadership" className="hover:text-white transition-colors">
                  Executive Directors
                </Link>
              </li>
              <li>
                <Link href="#offices" className="hover:text-white transition-colors">
                  Dual Innovation Hubs
                </Link>
              </li>
              <li>
                <Link href="#careers" className="hover:text-white transition-colors">
                  Careers & Hiring
                </Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-white transition-colors">
                  Research & Field Notes
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="hover:text-white transition-colors">
                  Engagement FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Locations */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white font-medium mb-4">
              Locations & Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-normal">
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="hover:text-white transition-colors block text-xs"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY_INFO.contact.phone}`}
                  className="hover:text-white transition-colors block text-xs"
                >
                  {COMPANY_INFO.contact.phone}
                </a>
              </li>
              <li className="pt-2 text-neutral-400 leading-snug">
                <span className="text-white text-xs block mb-0.5 font-medium">Jind HQ:</span>
                SCF 5, 2nd Floor, PSB, Opp DRDA, Jind 126102
              </li>
              <li className="text-neutral-400 leading-snug">
                <span className="text-white text-xs block mb-0.5 font-medium">Chandigarh Hub:</span>
                SCO 114-115, 4th Floor, Sector 34-A, Chandigarh 160017
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="font-medium text-neutral-300">
            Built by Chitransh
          </div>
          <div className="flex items-center gap-6">
            <Link href="#about" className="hover:text-neutral-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#about" className="hover:text-neutral-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="#about" className="hover:text-neutral-300 transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
