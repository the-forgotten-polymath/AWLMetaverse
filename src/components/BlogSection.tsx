"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BLOG_POSTS_DATA, BlogPostItem } from "@/data/companyData";
import { BookOpen, Calendar, Clock, ArrowRight, X } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function BlogSection() {
  const [activeArticle, setActiveArticle] = useState<BlogPostItem | null>(null);

  return (
    <section id="blog" className="py-28 sm:py-36 relative bg-[#07070a] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal yOffset={32}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 pb-8 border-b border-white/[0.08]">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 mb-3 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                <span>FIELD NOTES & RESEARCH</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white">
                LATEST ARTICLES
              </h2>
            </div>
            <p className="text-sm sm:text-base text-neutral-400 max-w-lg font-normal leading-relaxed">
              Practical strategies, technical retrospectives, and enterprise architecture insights from our engineering and marketing leads.
            </p>
          </div>
        </ScrollReveal>

        {/* Editorial Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {BLOG_POSTS_DATA.map((post, idx) => {
            return (
              <ScrollReveal key={post.id} delay={(idx % 3) * 0.08} className="h-full">
                <article
                  className="h-full glass-panel rounded-3xl overflow-hidden flex flex-col justify-between border border-white/[0.08] hover:border-white/30 transition-all duration-500 group cursor-pointer bg-[#09090d]"
                  onClick={() => setActiveArticle(post)}
                >
                <div>
                  {/* Cover Photo */}
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-neutral-950">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108 opacity-75 group-hover:opacity-95"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090d] via-black/30 to-transparent" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-medium uppercase tracking-wider text-neutral-200">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-4 text-xs font-mono text-neutral-400 mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.createdAt}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-normal text-white mb-3 group-hover:text-neutral-200 transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-3 font-normal">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Read Link Footer */}
                <div className="px-6 sm:px-7 pb-6 pt-3 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-neutral-300 group-hover:text-white border-t border-white/[0.06]">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </article>
            </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* ARTICLE READER MODAL */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl animate-fade"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#0b0b0f] border border-white/[0.15] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 relative shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 mb-4">
              <span className="px-3 py-1 rounded-full bg-white/10 text-neutral-200 uppercase tracking-widest">
                {activeArticle.category}
              </span>
              <span>•</span>
              <span>{activeArticle.createdAt}</span>
              <span>•</span>
              <span>{activeArticle.readTime}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal text-white mb-6 leading-tight">
              {activeArticle.title}
            </h3>

            <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden mb-8 border border-white/10">
              <Image
                src={activeArticle.coverImage}
                alt={activeArticle.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f] via-transparent to-transparent" />
            </div>

            <div className="text-neutral-300 text-sm sm:text-base leading-relaxed space-y-4 font-normal">
              {activeArticle.content.split("\n\n").map((para, i) => {
                if (para.startsWith("## ") || para.startsWith("### ")) {
                  return (
                    <h4 key={i} className="text-xl sm:text-2xl font-normal text-white pt-5 pb-1">
                      {para.replace(/###?\s/, "")}
                    </h4>
                  );
                }
                if (para.startsWith("- ")) {
                  return (
                    <ul key={i} className="list-disc list-inside space-y-1.5 pl-2 text-neutral-400 font-normal">
                      {para.split("\n").map((item, idx) => (
                        <li key={idx}>{item.replace(/^-\s/, "")}</li>
                      ))}
                    </ul>
                  );
                }
                return <p key={i}>{para}</p>;
              })}
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-400">
              <div>
                Author: <span className="text-white font-medium">{activeArticle.author}</span>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="btn-pill px-7 py-3 text-xs uppercase tracking-wider font-semibold cursor-pointer"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
