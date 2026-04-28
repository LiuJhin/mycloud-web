"use client";

import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Globe2, Brain, Shield, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "全球边缘节点",
    tag: "Global Network",
    desc: "30+ 核心城市数据中心，确保毫秒级延迟。",
    icon: <Globe2 className="w-5 h-5" />,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800",
    className: "md:col-span-2 min-h-[300px]",
  },
  {
    title: "智算 AI",
    tag: "Intelligence",
    desc: "大模型算力集成，自动化决策。",
    icon: <Brain className="w-5 h-5" />,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=400",
    className: "md:col-span-1 min-h-[300px]",
  },
  {
    title: "安全堡垒",
    tag: "Security",
    desc: "自研加密协议，顶级防护。",
    icon: <Shield className="w-5 h-5" />,
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=400",
    className: "md:col-span-1 min-h-[300px]",
  },
  {
    title: "弹性伸缩",
    tag: "Scalability",
    desc: "秒级应对千万级并发。",
    icon: <Zap className="w-5 h-5" />,
    image:
      "https://images.unsplash.com/photo-1558494949-ef010bbbb317?q=80&w=800",
    className: "md:col-span-2 min-h-[300px]",
  },
];

export function Features() {
  return (
    <section className="py-32 bg-[var(--background)]">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-[10px] font-black tracking-[0.4em] uppercase text-[var(--primary)] mb-6">
            //_Core_Tech
          </h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">
            Infrastructure Capabilities
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <ImageSpotlightCard key={i} feature={f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ImageSpotlightCard({ feature }: { feature: any }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={onMouseMove}
      className={cn(
        "group relative rounded-lg border border-[var(--border)] overflow-hidden transition-all duration-700",
        feature.className,
      )}
    >
      {/* 背景图片层：灰度 -> 全彩 */}
      <div
        className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
        style={{ backgroundImage: `url(${feature.image})` }}
      />

      {/* 遮罩：保证文字可读性 */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/40 to-transparent" />

      {/* 动态光效 */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.1), transparent 80%)
          `,
        }}
      />

      <div className="relative z-10 flex flex-col justify-end h-full p-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-[var(--primary)]">{feature.icon}</div>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--foreground)]">
            {feature.tag}
          </span>
        </div>
        <h4 className="text-2xl font-black uppercase italic tracking-tight mb-2">
          {feature.title}
        </h4>
        <p className="text-[var(--muted-foreground)] text-sm max-w-xs">
          {feature.desc}
        </p>
      </div>
    </div>
  );
}
