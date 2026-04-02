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
    desc: "分布式神经算力集群，为大规模 AI 训练提供极低时延的底层算力支撑。支持分钟级弹性扩容与全栈异构资源管理。",
    price: "99",
  },
  {
    id: "02",
    name: "数据洞察引擎",
    sub: "INTELLIGENT_ANALYTICS",
    desc: "自研向量流式处理架构，实现 PB 级数据的实时清洗、索引与语义检索。让每一比特数据都具备商业决策价值。",
    price: "199",
  },
  {
    id: "03",
    name: "全域安全堡垒",
    sub: "SECURITY_PROTOCOL",
    desc: "硬件级零信任安全协议，集成量子加密链路与动态态势感知系统。在数字洪流中，为企业核心资产构建隐形防线。",
    price: "299",
  },
];

export default function Products() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 初始入场：从底部滑入并带模糊效果
      gsap.from(".product-row", {
        opacity: 0,
        y: 100,
        filter: "blur(20px)",
        stagger: 0.2,
        duration: 1,
        ease: "expo.out",
      });
    },
    { scope: container },
  );

  return (
    <section ref={container} className="bg-white dark:bg-black py-32 px-10">
      <div className="max-w-[1400px] mx-auto">
        {/* 极简标题区 */}
        <div className="flex flex-col mb-32 space-y-6">
          <div className="flex items-center gap-4 text-[11px] font-black tracking-[0.5em] text-primary uppercase">
            <Zap className="w-3 h-3 fill-current" />
            Infrastructure_Stack
          </div>
          <h2 className="text-[120px] font-black leading-[0.8] tracking-tighter uppercase dark:text-white">
            Our
            <br />
            <span className="text-zinc-200 dark:text-zinc-800">Products</span>.
          </h2>
        </div>

        {/* 产品行设计 */}
        <div className="flex flex-col">
          {products.map((item) => (
            <div
              key={item.id}
              className="product-row group relative border-t border-zinc-100 dark:border-white/5 py-20 flex flex-col md:flex-row items-start justify-between transition-all duration-700 hover:px-10"
            >
              {/* 背景悬浮色块 (GSAP 控制) */}
              <div className="absolute inset-0 bg-zinc-50 dark:bg-white/[0.02] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />

              {/* 左侧：索引与副标题 */}
              <div className="relative z-10 flex items-start gap-12 mb-10 md:mb-0">
                <span className="text-[14px] font-mono text-primary pt-1 tracking-tighter">
                  [{item.id}]
                </span>
                <div className="space-y-4">
                  <h3 className="text-4xl font-black tracking-tighter uppercase dark:text-white group-hover:translate-x-4 transition-transform duration-500">
                    {item.name}
                  </h3>
                  <p className="text-[10px] font-black tracking-[0.3em] text-zinc-400 uppercase">
                    {item.sub}
                  </p>
                </div>
              </div>

              {/* 右侧：描述与价格 */}
              <div className="relative z-10 max-w-[420px] space-y-10">
                <p className="text-sm font-medium leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {item.desc}
                </p>

                <div className="flex items-end justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">
                      Starting At
                    </span>
                    <div className="text-4xl font-black dark:text-white italic">
                      ¥{item.price}
                      <span className="text-sm not-italic opacity-30 ml-2">
                        /MO
                      </span>
                    </div>
                  </div>

                  <button className="group/btn flex items-center gap-3 px-8 py-4 bg-zinc-900 dark:bg-white rounded-full transition-all hover:pr-6">
                    <span className="text-[11px] font-black uppercase tracking-widest text-white dark:text-black">
                      Explore
                    </span>
                    <ArrowRight className="w-4 h-4 text-white dark:text-black transition-transform group-hover/btn:translate-x-2" />
                  </button>
                </div>
              </div>

              {/* 装饰性背景大数字 - 只有悬停才若隐若现 */}
              <div className="absolute right-20 top-1/2 -translate-y-1/2 text-[180px] font-black text-black/[0.03] dark:text-white/[0.02] pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-700 select-none">
                {item.id}
              </div>
            </div>
          ))}
          <div className="border-t border-zinc-100 dark:border-white/5" />
        </div>
      </div>
    </section>
  );
}
