"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    id: "01",
    short: "OE",
    title: "Operational Excellence",
    desc: "追求极致的自动化运维与持续改进。",
  },
  {
    id: "02",
    short: "SEC",
    title: "Security",
    desc: "内建的深度防御与合规协议执行。",
  },
  {
    id: "03",
    short: "REL",
    title: "Reliability",
    desc: "弹性架构与全链路的高可用性。",
  },
  {
    id: "04",
    short: "PERF",
    title: "Performance",
    desc: "算力效率与无延迟的资源调度。",
  },
  {
    id: "05",
    short: "COST",
    title: "Cost Optimization",
    desc: "商业价值最大化的成本投入。",
  },
];

export function WellArchitectedReview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. 背景视差
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // 2. 文字特效
      const titleLines = titleRef.current?.querySelectorAll(".title-line");
      titleLines?.forEach((line) => {
        const chars = line.querySelectorAll(".char");
        gsap.fromTo(
          chars,
          { opacity: 0, y: 100, rotateX: -90, z: -500, filter: "blur(10px)" },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            z: 0,
            filter: "blur(0px)",
            duration: 1.5,
            ease: "power4.out",
            stagger: 0.05,
            scrollTrigger: {
              trigger: line,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      // 3. 卡片入场
      const cards = cardsRef.current?.querySelectorAll(".card-item");
      gsap.fromTo(
        cards!,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: cardsRef.current, start: "top 90%" },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const splitText = (text: string) =>
    text.split("").map((char, i) => (
      <span key={i} className="char inline-block will-change-transform">
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-40 bg-[var(--background)] text-[var(--foreground)] overflow-hidden perspective-lg transition-colors duration-500"
    >
      {/* 背景层 */}
      <div
        ref={bgRef}
        className="absolute inset-0 -top-[10%] w-full h-[120%] bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2800&auto=format&fit=crop')] bg-cover bg-center opacity-[0.08] dark:opacity-[0.05] transition-opacity duration-500"
      />

      <div className="relative z-10 container mx-auto px-6">
        <h2
          ref={titleRef}
          className="text-[10vw] font-black leading-[0.85] tracking-tighter uppercase mb-40 select-none"
        >
          <span className="title-line block overflow-hidden">
            {splitText("Well-")}
          </span>
          <span className="title-line block overflow-hidden text-[var(--muted-foreground)]">
            {splitText("Architected")}
          </span>
        </h2>

        {/* 3 列矩阵网格 */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-2 border border-[var(--border)] bg-[var(--accent)] p-2 rounded-xl backdrop-blur-sm"
        >
          {pillars.map((item, i) => (
            <div
              key={i}
              className="card-item group relative p-8 rounded-lg transition-all duration-500 overflow-hidden bg-[var(--card)] hover:bg-[var(--accent)]"
            >
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-transparent to-[var(--ring)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col justify-between h-full min-h-[220px]">
                <div className="flex justify-between items-center mb-10">
                  <span className="font-mono text-3xl font-black text-[var(--foreground)] opacity-20 group-hover:scale-110 group-hover:-translate-y-1 transition-transform">
                    {item.id}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--background)] opacity-60">
                    [{item.short}]
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-[var(--foreground)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-60 font-light leading-relaxed max-w-md">
                    {item.desc}
                  </p>
                </div>
                <ArrowRight className="absolute bottom-6 right-6 w-6 h-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}

          {/* 带 AWS 背景的 CTA 节点 */}
          <Link
            href="/well-architected"
            className="card-item relative overflow-hidden p-8 rounded-lg bg-[var(--foreground)] hover:opacity-90 transition-colors flex flex-col justify-center gap-6 cursor-pointer text-[var(--background)] no-underline"
          >
            {/* 背景图层 */}
            <div
              className="absolute inset-0 z-0 opacity-30"
              style={{
                backgroundImage:
                  "url('https://miro.medium.com/1*bH7r8B1_4D93Vt37ZZ-tcg@2x.jpeg?q=80&w=800')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div className="relative z-10">
              <h3 className="text-3xl font-black uppercase tracking-tighter text-[var(--background)]">
                开启
                <br />
                审查体系.
              </h3>
              <div className="mt-6 flex items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-widest">
                  Get Started
                </span>
                <div className="w-12 h-12 rounded-full bg-[var(--background)]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
