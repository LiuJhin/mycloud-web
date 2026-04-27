"use client";

import React from "react";

export function WellArchitectedHero() {
  return (
    // 1. 将外层改为 relative，移除 max-w 和 py-32，让 section 铺满宽度
    <section className="relative w-full min-h-[80vh] flex items-center overflow-hidden border-b border-[var(--border)]">
      {/* 2. 视频层：完全脱离容器限制，使用 fixed 或 absolute 铺满整个视口 */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-[0.75]"
          src="https://media.w3.org/2010/05/sintel/trailer.mp4"
        />
        {/* 遮罩：保证文字阅读性 */}
        <div className="absolute inset-0 bg-[var(--background)]/70 backdrop-blur-[4px]" />
      </div>

      {/* 3. 内容容器：在此处应用 max-w-5xl，确保内容对齐但不影响背景 */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-12 gap-12 w-full">
          {/* 左侧：核心标题区 */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-16">
              <div className="text-[var(--primary)] font-mono text-[10px] tracking-[0.5em] uppercase italic"></div>
            </div>

            <h1 className="text-[14vw] md:text-[9vw] font-black tracking-tighter leading-[0.8] uppercase italic mb-20">
              Well-
              <br />
              <span className="text-[var(--muted-foreground)]/30">
                Architected
              </span>
            </h1>
          </div>

          {/* 右侧：工程规格区 */}
          <div className="lg:col-span-4 flex flex-col justify-between border-l border-[var(--border)] pl-8 lg:pl-12">
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="text-[var(--primary)] font-black text-xs uppercase tracking-widest"></div>
                <div className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
                  Infrastructure / Security / Reliability
                </div>
              </div>
            </div>

            <div className="mt-20">
              <p className="text-sm leading-relaxed text-[var(--foreground)] opacity-70">
                基于全球云基建最佳实践，MyCloud 审查体系为您提供深度的架构评估。
                我们不仅是发现问题，更是为您提供可落地的进化路径。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
