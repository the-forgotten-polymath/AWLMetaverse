"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import { motion, useScroll, useSpring } from "framer-motion";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    setMounted(true);
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.4,
    });

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* Sleek Top Micro-Progress Indicator */}
      {mounted && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neutral-500 via-white to-neutral-300 origin-left z-[9999] pointer-events-none shadow-[0_0_10px_rgba(255,255,255,0.7)]"
          style={{ scaleX }}
        />
      )}

      {children}
    </>
  );
}
