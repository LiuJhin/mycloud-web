"use client";

import React from "react";
import {
  ArrowRight,
  Shield,
  Zap,
  BarChart3,
  Database,
  Cog,
} from "lucide-react";

const pillars = [
  {
    id: "OE",
    title: "卓越运营",
    enTitle: "Operational Excellence",
    desc: "专注于运行和监控系统以交付商业价值，并不断改进流程和程序。",
    icon: <Cog className="w-5 h-5" />,
  },
  {
    id: "SEC",
    title: "安全合规",
    enTitle: "Security",
    desc: "专注于保护信息、系统和资产，同时通过风险评估和缓解策略交付商业价值。",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    id: "REL",
    title: "可靠性",
    enTitle: "Reliability",
    desc: "专注于确保系统能够在其预期寿命内持续、正确且一致地执行其预期功能。",
    icon: <Database className="w-5 h-5" />,
  },
  {
    id: "PERF",
    title: "性能效率",
    enTitle: "Performance Efficiency",
    desc: "专注于有效使用计算资源以满足系统要求，并在技术发展和业务需求变化时维持效率。",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    id: "COST",
    title: "成本优化",
    enTitle: "Cost Optimization",
    desc: "专注于避免不必要的开支，并将资源分配到能够最大化商业价值的地方。",
    icon: <BarChart3 className="w-5 h-5" />,
  },
];

export function PillarsSection() {
  return (
    <div className="pillars-grid flex flex-col mb-40 border-t border-[var(--border)]">
      {pillars.map((pillar) => (
        <PillarRow key={pillar.id} pillar={pillar} />
      ))}

      {/* CTA 行：解构风格的调用 */}
      <div className="group flex flex-col lg:grid lg:grid-cols-12 py-16 px-4 border-b border-[var(--border)] items-center cursor-pointer hover:bg-[var(--accent)] transition-colors">
        <div className="lg:col-span-2 font-mono text-xl font-black text-[var(--muted-foreground)] opacity-20">
          [CTA]
        </div>
        <div className="lg:col-span-6 text-2xl font-black uppercase tracking-tighter italic">
          立即预约架构专家
        </div>
        <div className="lg:col-span-4 lg:text-right flex items-center justify-end gap-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
            Start_Assessment
          </span>
          <div className="w-12 h-12 border border-[var(--border)] flex items-center justify-center group-hover:rotate-[90deg] transition-transform">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PillarRow({ pillar }: { pillar: any }) {
  return (
    <div className="group relative border-b border-[var(--border)] hover:bg-[var(--accent)]/50 transition-colors">
      <div className="flex flex-col lg:grid lg:grid-cols-12 py-16 px-4 gap-8 items-start">
        {/* 编号 & 标签 */}
        <div className="lg:col-span-2 font-mono text-xl font-black text-[var(--primary)] flex items-center gap-4">
          [{pillar.id}]
          <span className="hidden lg:block w-8 h-[1px] bg-[var(--border)]" />
        </div>

        {/* 标题 & 描述 */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center gap-3 text-[var(--primary)] mb-2">
            {pillar.icon}
            <span className="text-[10px] font-bold uppercase tracking-widest">
              {pillar.enTitle}
            </span>
          </div>
          <h3 className="text-4xl font-black tracking-tighter uppercase italic group-hover:text-[var(--primary)] transition-colors">
            {pillar.title}
          </h3>
        </div>

        {/* 详情 */}
        <div className="lg:col-span-4 lg:text-right flex flex-col justify-between h-full gap-8">
          <p className="text-sm leading-relaxed opacity-60 max-w-[300px] lg:ml-auto">
            {pillar.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
