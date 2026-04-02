"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Globe2, Brain, Shield, Zap, Headphones, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "全球边缘节点布局",
    tag: "Global Network",
    desc: "30+ 核心城市数据中心，确保毫秒级低延迟响应。",
    icon: <Globe2 className="w-6 h-6" />,
    className: "md:col-span-2",
  },
  {
    title: "智算 AI 引擎",
    tag: "Intelligence",
    desc: "大模型算力集成，自动化智能决策。",
    icon: <Brain className="w-6 h-6" />,
    className: "md:col-span-1",
  },
  {
    title: "安全堡垒",
    tag: "Security",
    desc: "自研加密协议，DDoS 级别防护。",
    icon: <Shield className="w-6 h-6" />,
    className: "md:col-span-1",
  },
  {
    title: "弹性伸缩",
    tag: "Scalability",
    desc: "秒级应对千万级并发洪峰。",
    icon: <Zap className="w-6 h-6" />,
    className: "md:col-span-2",
  },
];

export function Features() {
  return (
    <section className="py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* 极致排版：大标题 + 引导小字 */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-4xl">
            <h2 className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-6">
              Core Technologies
            </h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-foreground">
              重构算力边界，
              <br />
              <span className="opacity-30">定义下一代云端。</span>
            </h3>
          </div>
          <p className="text-muted-foreground text-lg max-w-[300px] font-medium leading-relaxed">
            为未来十年设计的数字化底座。
          </p>
        </div>

        {/* 动态 Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <SpotlightCard key={i} feature={f} />
          ))}
        </div>
      </div>
    </section>
  );
}

// 独立组件：聚光灯卡片（这是设计感的核心）
function SpotlightCard({ feature }: { feature: any }) {
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
        "group relative rounded-[2rem] border border-border bg-card/80 p-8 overflow-hidden transition-all duration-500 hover:border-primary",
        feature.className,
      )}
    >
      {/* 动态背景聚光灯 */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.06),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10 flex flex-col justify-between h-full min-h-[220px]">
        <div className="flex items-start justify-between">
          <div className="p-3 rounded-2xl bg-accent/30 border border-border text-foreground dark:text-foreground">
            {feature.icon}
          </div>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
            {feature.tag}
          </span>
        </div>

        <div>
          <h4 className="text-2xl font-bold tracking-tight text-foreground mb-2">
            {feature.title}
          </h4>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-[240px]">
            {feature.desc}
          </p>
        </div>
      </div>

      {/* 底部微光边框动画 */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
    </div>
  );
}

// 注意：这里需要导入 framer-motion 的辅助函数，如果没有请手动组合字符串
import { useMotionTemplate } from "framer-motion";
