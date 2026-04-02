"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const products = [
  {
    id: "01",
    name: "Neural_Core",
    tag: "LLM_Reasoning",
    desc: "自适应推理引擎，重构逻辑链路。",
  },
  {
    id: "02",
    name: "Vision_Pro",
    tag: "Diffusion_Gen",
    desc: "多模态视觉合成，实现像素级精准生成。",
  },
  {
    id: "03",
    name: "Logic_Flow",
    tag: "Agent_Orchestra",
    desc: "自主智能体集群，自动化任务闭环。",
  },
];

export default function AetherCenter() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 渐进式呼吸入场 - 解决显示不全的终极方案
      gsap.from(".reveal-node", {
        filter: "blur(20px)",
        opacity: 0,
        stagger: 0.1,
        duration: 1.5,
        ease: "power2.out",
      });

      // 鼠标光影跟随
      const moveGlow = (e: MouseEvent) => {
        gsap.to(".aura", {
          x: e.clientX - 250,
          y: e.clientY - 250,
          duration: 2,
          ease: "power3.out",
        });
      };
      window.addEventListener("mousemove", moveGlow);
      return () => window.removeEventListener("mousemove", moveGlow);
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative min-h-screen bg-background text-foreground selection:bg-primary/20 overflow-hidden"
    >
      {/* 1. 流体背景：这是高级感的灵魂 */}
      <div className="aura fixed top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* 2. 预留 Header 空间 & 品牌头部 */}
      <div className="pt-40 md:pt-60 container mx-auto px-10">
        <header className="reveal-node flex flex-col md:flex-row items-baseline justify-between mb-48 gap-10">
          <div className="flex items-center gap-6 group cursor-pointer">
            {/* 极简 Logo: 字符解构 */}
            <div className="relative w-12 h-12 flex items-center justify-center border border-foreground/10 hover:border-primary/50 transition-colors">
              <div className="text-xl font-black italic tracking-tighter">
                A<span className="text-primary text-xs ml-0.5">.</span>I
              </div>
              <div className="absolute -top-[1px] -left-[1px] w-1 h-1 bg-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-[0.5em]">
                MyCloud_Labs
              </span>
              <span className="text-[8px] font-mono text-muted-foreground/30 mt-1 uppercase">
                Intelligence_Infrastructure
              </span>
            </div>
          </div>

          <div className="text-right flex flex-col items-end">
            <span className="text-[9px] font-mono opacity-20 uppercase tracking-[0.4em] mb-2">
              System_01 // Operational
            </span>
            <div className="h-[1px] w-20 bg-border" />
          </div>
        </header>

        {/* 3. 巨型标题：利用负空间 */}
        <div className="reveal-node mb-60">
          <h1 className="text-[12vw] font-black leading-[0.75] tracking-tighter uppercase italic">
            智能<span className="text-muted-foreground/10">实体.</span>
          </h1>
          <p className="mt-12 text-sm md:text-xl font-medium text-muted-foreground/50 max-w-[550px] leading-relaxed">
            我们不构建工具，我们定义交互。集成原生分布式神经架构，为下一代开发者提供液态化的
            AI 算力支撑。
          </p>
        </div>

        {/* 4. 消失的列表：去卡片化设计 */}
        <div className="flex flex-col border-t border-border/40">
          {products.map((item) => (
            <div
              key={item.id}
              className="reveal-node group relative border-b border-border/40 py-24 transition-all duration-1000 hover:bg-primary/[0.01]"
            >
              <div className="flex flex-col md:flex-row items-baseline justify-between gap-12">
                <div className="flex items-baseline gap-12">
                  <span className="text-[10px] font-mono text-muted-foreground/20 italic">
                    [{item.id}]
                  </span>
                  <div className="space-y-4">
                    <div className="text-[9px] font-mono text-primary font-black uppercase tracking-[0.3em]">
                      {item.tag}
                    </div>
                    <h2 className="text-5xl md:text-9xl font-black tracking-tighter uppercase italic group-hover:pl-8 transition-all duration-700">
                      {item.name}
                    </h2>
                  </div>
                </div>

                <div className="flex flex-col items-start md:items-end gap-10">
                  <p className="text-xs font-bold text-muted-foreground/40 max-w-[280px] md:text-right leading-loose">
                    {item.desc}
                  </p>
                  <button className="relative group/btn flex items-center gap-4 transition-all duration-500">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] group-hover/btn:text-primary transition-colors">
                      接入实验室
                    </span>
                    <div className="w-10 h-10 border border-border rounded-full flex items-center justify-center group-hover/btn:bg-foreground group-hover/btn:text-background transition-all">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        className="rotate-[-45deg] group-hover/btn:rotate-0 transition-transform"
                      >
                        <path
                          d="M1 11L11 1M11 1H1M11 1V11"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 5. 装饰注脚 */}
        <footer className="mt-40 pb-20 flex justify-between items-end opacity-10 text-[9px] font-mono tracking-[0.5em] uppercase pointer-events-none">
          <div className="space-y-1">
            <div>Nodes: Active_100%</div>
            <div>Encryption: Quantum_Safe</div>
          </div>
          <div>© 2026 // Neural_Adaptive</div>
        </footer>
      </div>

      {/* 噪点纹理：消除数码廉价感 */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}
