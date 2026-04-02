"use client";

import React, { useEffect, useRef } from "react";
import { useInView, motion, useSpring, useTransform } from "framer-motion";

const stats = [
  {
    value: 10,
    suffix: "M+",
    label: "ACTIVE USERS",
    desc: "全球信赖的数字化伙伴",
  },
  { value: 99.9, suffix: "%", label: "UPTIME SLA", desc: "金融级高可用性保障" },
  { value: 50, suffix: "+", label: "REGIONS", desc: "遍布全球的智算节点" },
  { value: 24, suffix: "/7", label: "SUPPORT", desc: "专家级实时技术护航" },
];

export function Stats() {
  return (
    <section className="relative py-32 bg-card dark:bg-background overflow-hidden">
      {/* 装饰：背景巨大水印字 */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full text-[20vw] font-black text-foreground/[0.05] dark:text-foreground/[0.04] select-none pointer-events-none tracking-tighter">
        INFRASTRUCTURE
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ stat, index }: { stat: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex flex-col items-center lg:items-start lg:px-12",
        index !== 3 && "lg:border-r lg:border-border",
      )}
    >
      {/* 顶部小标签 */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        <span className="text-[10px] font-bold tracking-[0.3em] text-muted-foreground uppercase">
          {stat.label}
        </span>
      </div>

      {/* 巨大的动态数字 */}
      <div className="flex items-baseline text-foreground">
        <Counter value={stat.value} direction="up" />
        <span className="text-4xl md:text-5xl font-light opacity-50 ml-1 text-foreground">
          {stat.suffix}
        </span>
      </div>

      {/* 描述文案 */}
      <p className="mt-4 text-sm text-muted-foreground font-medium leading-relaxed max-w-[160px] text-center lg:text-left">
        {stat.desc}
      </p>

      {/* Hover 时的底部亮线 */}
      <div className="absolute bottom-[-20px] left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </div>
  );
}

// 动态计数器组件
function Counter({
  value,
  direction = "up",
}: {
  value: number;
  direction?: "up" | "down";
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const springValue = useSpring(0, {
    stiffness: 100,
    damping: 30,
    duration: 2000,
  });

  useEffect(() => {
    if (isInView) springValue.set(value);
  }, [isInView, value, springValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          Number(latest.toFixed(value % 1 === 0 ? 0 : 1)),
        );
      }
    });
  }, [springValue, value]);

  return (
    <span
      ref={ref}
      className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter"
    >
      0
    </span>
  );
}

import { cn } from "@/lib/utils";
