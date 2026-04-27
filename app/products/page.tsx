"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Zap } from "lucide-react";

gsap.registerPlugin(useGSAP);

const products = [
  {
    id: "01",
    name: "云算力平台",
    sub: "DISTRIBUTED_COMPUTE",
    desc: "分布式神经算力集群，为大规模 AI 训练提供极低时延的底层算力支撑。",
    price: "99",
  },
  {
    id: "02",
    name: "数据洞察引擎",
    sub: "INTELLIGENT_ANALYTICS",
    desc: "自研向量流式处理架构，实现 PB 级数据的实时清洗、索引与语义检索。",
    price: "199",
  },
  {
    id: "03",
    name: "全域安全堡垒",
    sub: "SECURITY_PROTOCOL",
    desc: "硬件级零信任安全协议，集成量子加密链路与动态态势感知系统。",
    price: "299",
  },
];

export default function Products() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".product-row",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: "expo.out",
          clearProps: "all",
        },
      );
    },
    { scope: container },
  );

  return (
    // 使用定义的 --background 和 --foreground
    <section
      ref={container}
      className="bg-[var(--background)] py-32 px-10 transition-colors duration-700"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* 标题区：使用全局定义的 --primary */}
        <div className="flex flex-col mb-32 space-y-6">
          <div className="flex items-center gap-4 text-[11px] font-black tracking-[0.5em] text-[var(--primary)] uppercase">
            <Zap className="w-3 h-3 fill-current" />
            Infrastructure_Stack
          </div>
          <h2 className="text-[120px] font-black leading-[0.8] tracking-tighter uppercase text-[var(--foreground)]">
            Our
            <br />
            <span className="text-[var(--border)]">Products</span>.
          </h2>
        </div>

        {/* 列表区：使用定义的 --border 作为边框 */}
        <div className="flex flex-col border-t border-[var(--border)]">
          {products.map((item) => (
            <div
              key={item.id}
              className="product-row group relative py-20 flex flex-col md:flex-row items-start justify-between border-b border-[var(--border)] transition-all duration-700 hover:px-10"
            >
              {/* 使用 --accent 作为 Hover 背景，完全符合你定义的语义 */}
              <div className="absolute inset-0 bg-[var(--accent)] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />

              <div className="relative z-10 flex items-start gap-12 mb-10 md:mb-0">
                <span className="text-[14px] font-mono text-[var(--primary)] pt-1 tracking-tighter">
                  [{item.id}]
                </span>
                <div className="space-y-4">
                  <h3 className="text-4xl font-black tracking-tighter uppercase text-[var(--foreground)] group-hover:translate-x-4 transition-transform duration-500">
                    {item.name}
                  </h3>
                  <p className="text-[10px] font-black tracking-[0.3em] text-[var(--muted-foreground)] uppercase">
                    {item.sub}
                  </p>
                </div>
              </div>

              <div className="relative z-10 max-w-[420px] space-y-10">
                <p className="text-sm font-medium leading-relaxed text-[var(--muted-foreground)]">
                  {item.desc}
                </p>

                <div className="flex items-end justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-[var(--muted-foreground)] uppercase tracking-widest mb-1">
                      Starting At
                    </span>
                    <div className="text-4xl font-black text-[var(--foreground)] italic">
                      ¥{item.price}
                      <span className="text-sm not-italic opacity-30 ml-2">
                        /MO
                      </span>
                    </div>
                  </div>

                  {/* 按钮：使用 --foreground 作为背景，--background 作为文字，完美反转 */}
                  <button className="group/btn flex items-center gap-3 px-8 py-4 bg-[var(--foreground)] rounded-full transition-all hover:pr-6">
                    <span className="text-[11px] font-black uppercase tracking-widest text-[var(--background)]">
                      Explore
                    </span>
                    <ArrowRight className="w-4 h-4 text-[var(--background)] transition-transform group-hover/btn:translate-x-2" />
                  </button>
                </div>
              </div>

              {/* 大数字装饰：使用 --muted 作为低调的底色 */}
              <div className="absolute right-20 top-1/2 -translate-y-1/2 text-[180px] font-black text-[var(--muted)] opacity-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-700 select-none">
                {item.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
