"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WellArchitectedHero } from "./WellArchitectedHero";
import { PillarsSection } from "./PillarsSection";
import { ProcessSection } from "./ProcessSection";

gsap.registerPlugin(ScrollTrigger);

export default function WellArchitectedPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 标题与内容的优雅入场
      gsap.fromTo(
        ".fade-in",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power4.out" },
      );

      // 卡片视差与序列入场
      gsap.fromTo(
        ".pillar-card",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: { trigger: ".pillars-grid", start: "top 80%" },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      // 使用 CSS 变量背景，取代硬编码的黑色
      className="min-h-screen bg-[var(--background)] text-[var(--foreground)] py-32 overflow-hidden transition-colors duration-500"
    >
      {/* 动态背景装饰：使用 CSS 变量的透明度，确保适应明暗模式 */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--primary)] opacity-[0.03] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[var(--ring)] opacity-[0.03] rounded-full blur-[150px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <WellArchitectedHero />
        <PillarsSection />
        <ProcessSection />
      </div>
    </div>
  );
}
