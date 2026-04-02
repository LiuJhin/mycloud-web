"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus, MoveRight } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const solutions = [
  {
    id: "01",
    title: "AI_MATRIX",
    sub: "神经网络智算矩阵",
    desc: "专为大模型训练设计的超大规模异构算力池。集成原生液冷方案与 InfiniBand 网络。",
    tag: "COMPUTE",
  },
  {
    id: "02",
    title: "ZERO_SHIELD",
    sub: "零信任全域安全协议",
    desc: "打破物理边界的安全方案。基于身份而非 IP 的访问控制，构筑隐形安全链路。",
    tag: "SECURITY",
  },
  {
    id: "03",
    title: "EDGE_MESH",
    sub: "全球加速网络集群",
    desc: "利用 300+ 全球边缘节点实现亚秒级分发。支持 WebAssembly 边缘计算逻辑。",
    tag: "NETWORK",
  },
];

export default function Solutions() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. 背景光晕随滚动产生视差
      gsap.to(".bg-glow", {
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
        y: 400,
        opacity: 0.4,
      });

      // 2. 文字像素级升起
      gsap.from(".reveal-item", {
        scrollTrigger: {
          trigger: ".reveal-item",
          start: "top 90%",
        },
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "expo.out",
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative bg-background text-foreground py-[20vh] overflow-hidden"
    >
      {/* 背景动态光晕 - 消除廉价感的核心 */}
      <div className="bg-glow absolute -top-[20%] left-[10%] w-[60vw] h-[60vw] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* 1. 绝对比例的头部 */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-60 gap-10">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-primary font-mono text-[10px] tracking-[0.5em] uppercase">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              System_Solutions // 2026
            </div>
            <h2 className="text-[14vw] md:text-[10vw] font-black leading-[0.8] tracking-tighter uppercase italic">
              行业解构<span className="text-muted-foreground/20">.</span>
            </h2>
          </div>
          <div className="max-w-[280px] border-r-2 border-primary pr-8 text-right space-y-4">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-relaxed">
              Architecting the high-performance infrastructure for the next
              digital era.
            </p>
            <span className="text-[9px] font-mono opacity-20">
              BUILD_VER_4.02
            </span>
          </div>
        </div>

        {/* 2. 线框解构列表 */}
        <div className="flex flex-col">
          {solutions.map((item) => (
            <div key={item.id} className="reveal-item group relative">
              {/* 分割线 */}
              <div className="h-[1px] w-full bg-border/40" />

              <div className="flex flex-col lg:grid lg:grid-cols-12 py-24 gap-12 items-start transition-all duration-700 group-hover:bg-muted/5 group-hover:px-10">
                {/* 编号 & 标签 */}
                <div className="lg:col-span-2 flex flex-col gap-4 font-mono">
                  <span className="text-xl font-black text-primary">
                    [{item.id}]
                  </span>
                  <span className="text-[9px] tracking-[0.3em] text-muted-foreground/40 italic uppercase">
                    // {item.tag}
                  </span>
                </div>

                {/* 标题 & 描述 */}
                <div className="lg:col-span-6 space-y-8">
                  <h3 className="text-5xl lg:text-8xl font-black tracking-tighter uppercase italic transition-all duration-700 group-hover:tracking-normal group-hover:text-primary">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase text-muted-foreground/60">
                    <Plus className="w-3 h-3" />
                    {item.sub}
                  </div>
                </div>

                {/* 详情描述 & 交互 */}
                <div className="lg:col-span-4 lg:text-right flex flex-col items-start lg:items-end justify-between h-full space-y-12">
                  <p className="text-sm font-medium leading-relaxed text-muted-foreground max-w-[320px]">
                    {item.desc}
                  </p>

                  <Link
                    href={`/solutions/${item.id}`}
                    className="flex items-center gap-4 group/btn"
                  >
                    <div className="flex flex-col text-right">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                        Explore_Tech
                      </span>
                      <span className="text-[8px] font-mono text-muted-foreground/30">
                        LATEST_BUILD
                      </span>
                    </div>
                    <div className="w-14 h-14 rounded-2xl border border-border flex items-center justify-center transition-all duration-500 group-hover/btn:bg-foreground group-hover/btn:text-background group-hover/btn:rotate-[90deg]">
                      <MoveRight className="w-5 h-5 -rotate-45" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <div className="h-[1px] w-full bg-border/40" />
        </div>
      </div>

      {/* 侧边装饰：垂直坐标系 */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-20 items-center opacity-20 pointer-events-none">
        <div className="text-[9px] font-mono rotate-90 whitespace-nowrap tracking-[1em]">
          COORDINATE_X_08
        </div>
        <div className="h-40 w-[1px] bg-gradient-to-b from-transparent via-foreground to-transparent" />
        <div className="text-[9px] font-mono rotate-90 whitespace-nowrap tracking-[1em]">
          SYSTEM_STABLE
        </div>
      </div>
    </section>
  );
}
