"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "现状调研",
    desc: "深度访谈与基础设施扫描，建立系统全景视图。",
  },
  {
    step: "02",
    title: "多维对标",
    desc: "对照五大支柱最佳实践，识别架构差距与潜在风险。",
  },
  {
    step: "03",
    title: "评估报告",
    desc: "产出详细的现状分析报告，包含风险分级与建议。",
  },
  {
    step: "04",
    title: "优化实施",
    desc: "协助工程团队落地改进方案，确保持续进化。",
  },
];

export function ProcessSection() {
  return (
    <div className="max-w-5xl mx-auto py-32">
      {/* 头部解构 */}
      <div className="flex items-end justify-between mb-24">
        <div className="space-y-4">
          <div className="text-[var(--primary)] font-mono text-[10px] tracking-[0.5em] uppercase italic">
            // Operational_Cycle
          </div>
          <h2 className="text-6xl font-black uppercase tracking-tighter italic">
            评估流程<span className="text-[var(--muted-foreground)]/20">.</span>
          </h2>
        </div>
        <div className="hidden md:block text-[9px] font-mono text-[var(--muted-foreground)]/40 italic">
          STATE_SYNC_REQUIRED
        </div>
      </div>

      {/* 解构流程序列 */}
      <div className="relative border-l border-[var(--border)] ml-4">
        {steps.map((item, index) => (
          <div key={item.step} className="group relative pl-12 pb-24 last:pb-0">
            {/* 时间轴节点 */}
            <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-[var(--background)] border-2 border-[var(--primary)] rounded-full group-hover:scale-125 transition-transform" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-[var(--primary)] tracking-[0.2em] font-black italic">
                  PHASE_{item.step}
                </span>
                <h3 className="text-3xl font-black uppercase tracking-tighter italic">
                  {item.title}
                </h3>
              </div>

              <div className="flex-1 max-w-lg text-sm text-[var(--muted-foreground)] leading-relaxed lg:pl-12 border-l border-[var(--border)] lg:border-none">
                {item.desc}
              </div>

              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <CheckCircle2 className="w-5 h-5 text-[var(--primary)]" />
              </div>
            </div>

            {/* 鼠标悬停的高亮线条 */}
            <div className="absolute -left-[0.5px] top-[9px] bottom-0 w-[1px] bg-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </div>
  );
}
