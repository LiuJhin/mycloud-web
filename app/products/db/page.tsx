"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Database, Zap, Cpu, Sparkles, Binary } from "lucide-react";

gsap.registerPlugin(useGSAP);

const features = [
  { label: "Indexing Speed", value: "1M/s", icon: Zap },
  { label: "Retrieval Latency", value: "< 10ms", icon: Binary },
  { label: "Dimensionality", value: "4096+", icon: Cpu },
  { label: "Embedding Support", value: "Native", icon: Sparkles },
];

export default function VectorDB() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".feature-card", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      });
    },
    { scope: container },
  );

  return (
    <section ref={container} className="bg-[var(--background)] py-32 px-10">
      <div className="max-w-[1400px] mx-auto">
        {/* 头部：语义引擎定义 */}
        <div className="mb-32 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 border-b border-[var(--border)] pb-24">
          <div className="space-y-6">
            <span className="text-[10px] font-mono text-[var(--primary)] tracking-[0.5em] uppercase italic">
              {/* // Neural_Embedding_Engine */}
            </span>
            <h1 className="text-[80px] md:text-[120px] font-black tracking-tighter uppercase leading-[0.9]">
              VECTOR
              <br />
              DB<span className="text-[var(--border)]">.</span>
            </h1>
            <p className="max-w-md text-[var(--muted-foreground)] text-sm">
              专为大模型上下文（Context）构建的向量存储基础设施。极低延迟的语义检索，让您的
              LLM 拥有永不遗忘的超长记忆。
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-[9px] font-mono uppercase tracking-widest text-[var(--muted-foreground)]">
              Status: High_Precision
            </div>
            <button className="bg-[var(--foreground)] text-[var(--background)] px-12 py-5 text-[10px] font-black uppercase tracking-widest hover:opacity-90">
              Initialize_Query
            </button>
          </div>
        </div>

        {/* 核心规格网格 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)] mb-32">
          {features.map((item, i) => (
            <div
              key={i}
              className="feature-card bg-[var(--background)] p-12 hover:bg-[var(--accent)] transition-colors"
            >
              <item.icon className="w-6 h-6 text-[var(--primary)] mb-8" />
              <div className="text-[10px] font-mono uppercase tracking-widest mb-2 opacity-50">
                {item.label}
              </div>
              <div className="text-3xl font-black">{item.value}</div>
            </div>
          ))}
        </div>

        {/* 架构深度剖析 */}
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-5xl font-black uppercase tracking-tighter">
              Architected
              <br />
              for Scale.
            </h2>
            <div className="space-y-6 text-[var(--muted-foreground)] text-sm leading-relaxed">
              <p>
                采用 HNSW (Hierarchical Navigable Small World)
                算法的深度优化变体，Vexta Vector DB
                能够处理十亿级特征向量的实时查询。
              </p>
              <p>
                不仅仅是存储，我们集成了预处理流水线（Pipeline），支持在写入端直接进行
                Embedding 转换，将系统时延降低 60%。
              </p>
            </div>
            <div className="flex gap-4">
              {["HNSW", "Flat", "IVF-PQ"].map((algo) => (
                <span
                  key={algo}
                  className="px-4 py-2 border border-[var(--border)] text-[9px] font-bold uppercase tracking-widest"
                >
                  {algo}_Engine
                </span>
              ))}
            </div>
          </div>

          {/* 抽象拓扑图：视觉隐喻 */}
          <div className="aspect-square border border-[var(--border)] flex items-center justify-center relative bg-[var(--accent)]/30">
            <div className="grid grid-cols-6 gap-2">
              {Array.from({ length: 36 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${i % 7 === 0 ? "bg-[var(--primary)]" : "bg-[var(--border)]"}`}
                />
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Database className="w-24 h-24 text-[var(--primary)] opacity-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
