"use client";

import React from "react";
import Link from "next/link";

const newsItems = [
  {
    id: "001",
    date: "2026.04.27",
    category: "Infrastructure",
    title: "MyCloud 全球边缘计算节点 2.0 部署完成",
    excerpt: "通过全新的边缘路由协议，将延迟降低至 14ms 以内。",
  },
  {
    id: "002",
    date: "2026.04.20",
    category: "AI Compute",
    title: "集成 NVIDIA H200 算力矩阵",
    excerpt: "MyCloud AI 智算平台正式支持大规模集群并行计算。",
  },
  {
    id: "003",
    date: "2026.04.15",
    category: "Security",
    title: "零信任安全治理协议上线",
    excerpt: "为混合云环境提供更精细化的访问控制与审计日志。",
  },
];

export default function NewsPage() {
  return (
    <main className="bg-[var(--background)] min-h-screen py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header：系统化的标题排版 */}
        <div className="mb-24">
          <div className="text-[10px] font-mono uppercase tracking-[0.4em] text-[var(--primary)] mb-4">
            {/* //_system_journal */}
          </div>
          <h1 className="text-[64px] font-black tracking-tighter uppercase leading-[0.9]">
            OPERATIONAL
            <br />
            <span className="text-[var(--primary)]">ARCHIVE</span>
          </h1>
        </div>

        {/* 主体阵列 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          {/* 左侧：文章阵列 */}
          <div className="lg:col-span-8">
            <div className="space-y-px bg-[var(--border)] border border-[var(--border)]">
              {newsItems.map((item) => (
                <Link
                  key={item.id}
                  href={`/news/${item.id}`}
                  className="group flex flex-col md:flex-row bg-[var(--background)] p-10 hover:bg-[var(--accent)] transition-colors duration-300"
                >
                  {/* 元数据区域：固定宽度，对齐显示 */}
                  <div className="w-48 shrink-0 flex flex-col gap-2 mb-6 md:mb-0">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted-foreground)]">
                      ID_{item.id}
                    </span>
                    <span className="text-[14px] font-bold font-mono tracking-tighter">
                      {item.date}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-[var(--primary)]">
                      {item.category}
                    </span>
                  </div>

                  {/* 主内容区域 */}
                  <div className="flex-1 space-y-4">
                    <h2 className="text-2xl font-black uppercase tracking-tight group-hover:text-[var(--primary)] transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-[15px] text-[var(--muted-foreground)] max-w-lg leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* 右侧：统计面板 (Dashboard) */}
          <div className="lg:col-span-4 space-y-12">
            <div className="border border-[var(--border)] p-10 space-y-8">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em]">
                {/* //_live_metrics */}
              </h3>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-1">
                  <div className="text-[24px] font-black italic">99.99</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-60">
                    System Uptime
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-[24px] font-black italic">14.2</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-60">
                    Avg Latency (ms)
                  </div>
                </div>
              </div>
            </div>

            {/* 极简订阅 */}
            <div className="space-y-6">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em]">
                {/* //_subscribe_channel */}
              </h3>
              <div className="flex border border-[var(--border)] p-1">
                <input
                  className="bg-transparent p-3 text-sm flex-1 outline-none"
                  placeholder="Enter email..."
                />
                <button className="bg-[var(--foreground)] text-[var(--background)] px-6 text-[10px] font-black uppercase tracking-widest">
                  Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
