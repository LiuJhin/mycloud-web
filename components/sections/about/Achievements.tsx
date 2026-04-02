"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { value: "10", suffix: "M+", label: "ACTIVE NODES", sub: "全球活跃计算节点" },
  { value: "50", suffix: "+", label: "DATA REGIONS", sub: "主干骨干网覆盖" },
  { value: "99.9", suffix: "%", label: "SERVICE SLA", sub: "金融级可用性承诺" },
  { value: "24", suffix: "/7", label: "TECH ORBIT", sub: "全时区专家级响应" },
];

export function Achievements() {
  return (
    <section className="relative py-32 bg-card dark:bg-[#030303] transition-colors duration-700 overflow-hidden">
      {/* 背景：极细的扫描线 (Scanlines) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border dark:via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border dark:via-border to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        {/* 头部：非对称构图 */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl text-left">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] font-mono tracking-[0.5em] text-primary uppercase mb-4"
            >
              {`// Real-time Capabilities`}
            </motion.p>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-foreground dark:text-white uppercase">
              数字背后的 <br />
              <span className="opacity-20 italic">底层逻辑</span>
            </h2>
          </div>
          <p className="text-muted-foreground dark:text-muted-foreground text-sm max-w-[280px] border-l border-border dark:border-white/10 pl-6 mb-2">
            我们拒绝虚标。每一项数据都源自于全球分布式监控系统的实时反馈，支撑着每一次业务跃迁。
          </p>
        </div>

        {/* 核心指标格栅 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-muted dark:bg-card/10 border border-border dark:border-white/10">
          {metrics.map((m, i) => (
            <MetricItem key={i} item={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricItem({
  item,
  index,
}: {
  item: { value: string; suffix: string; label: string; sub: string };
  index: number;
}) {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-card dark:bg-[#030303] p-10 lg:p-12 transition-colors hover:bg-accent dark:hover:bg-card/[0.02]"
    >
      {/* 装饰性索引编号 */}
      <span className="absolute top-8 right-8 text-[10px] font-mono opacity-20 group-hover:text-primary group-hover:opacity-100 transition-all italic">
        (0{index + 1})
      </span>

      <div className="flex flex-col items-start space-y-6">
        <div className="space-y-1">
          <p className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground dark:text-muted-foreground uppercase">
            {item.label}
          </p>
          <div className="flex items-baseline">
            <span className="text-6xl lg:text-7xl font-black tracking-tighter text-foreground dark:text-white">
              {item.value}
            </span>
            <span className="text-2xl font-light text-primary ml-1">
              {item.suffix}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="h-[2px] w-8 bg-primary/30 group-hover:w-16 transition-all duration-500" />
          <p className="text-xs text-muted-foreground dark:text-muted-foreground font-medium">
            {item.sub}
          </p>
        </div>
      </div>

      {/* 底部互动微光 (仅在深色模式明显) */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}
