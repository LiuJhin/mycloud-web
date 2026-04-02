"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Users, ArrowUpRight } from "lucide-react";

// --- 极致自适应元数据标签 (The Metadata Tag) ---
function MetaLabel({ category = "CORE", value = "0x01", status = "LIVE" }) {
  return (
    <div className="flex items-center gap-3 select-none">
      <div className="flex items-center rounded-[2px] overflow-hidden border border-slate-200 dark:border-white/10 shadow-sm">
        <span className="px-1.5 py-0.5 text-[8px] font-black bg-slate-900 dark:bg-white text-white dark:text-black uppercase tracking-tighter">
          {category}
        </span>
        <span className="px-1.5 py-0.5 text-[8px] font-mono text-slate-500 dark:text-zinc-500 bg-slate-50/50 dark:bg-white/5">
          {value}
        </span>
      </div>
      <div className="hidden sm:flex items-center gap-1 opacity-40">
        <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
        <span className="text-[8px] font-mono tracking-widest uppercase">
          {status}
        </span>
      </div>
    </div>
  );
}

// --- About 价值观模块重构 ---
export function OurValues() {
  const values = [
    {
      id: "SEC-01",
      icon: Shield,
      title: "SECURITY FIRST",
      subtitle: "安全主权",
      desc: "数据安全是我们的生命线。我们采用零信任架构与全链路硬件级加密，确保每一比特数据在物理层面的绝对主权。",
    },
    {
      id: "INN-02",
      icon: Zap,
      title: "RADICAL INNOVATION",
      subtitle: "激进创新",
      desc: "拒绝平庸的迭代。我们在内核协议中重构底层逻辑，为未来十年的 AI 算力爆发预留完整的分布式进化接口。",
    },
    {
      id: "USR-03",
      icon: Users,
      title: "CLIENT OBSESSED",
      subtitle: "客户共生",
      desc: "客户的需求是我们的算力航向。我们提供 24/7 全时区专家支持，将传统售后重定义为深度的技术合伙关系。",
    },
  ];

  return (
    <section className="relative py-40 bg-white dark:bg-[#030303] transition-colors duration-700 overflow-hidden">
      {/* 1. 背景层：极细网格与边缘消散 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        {/* 2. 头部：非对称工业排版 */}
        <div className="max-w-4xl mb-32 border-l-[1px] border-slate-200 dark:border-white/10 pl-8">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="mb-6"
          >
            <MetaLabel
              category="PHILOSOPHY"
              value="MANIFESTO"
              status="ACTIVE"
            />
          </motion.div>

          <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.8] text-slate-900 dark:text-white uppercase">
            核心 <br />
            <span className="text-transparent [-webkit-text-stroke:1px_rgba(var(--primary-rgb),0.3)] italic">
              价值观
            </span>
          </h2>
        </div>

        {/* 3. 支柱格栅：阶梯式无边界卡片 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border-y border-slate-100 dark:border-white/5 divide-y lg:divide-y-0 lg:divide-x divide-slate-100 dark:divide-white/5">
          {values.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-12 lg:p-16 transition-all hover:bg-slate-50 dark:hover:bg-white/[0.01]"
            >
              {/* 卡片顶部标签 */}
              <div className="mb-12 flex justify-between items-start">
                <MetaLabel category="Pillar" value={v.id} />
                <v.icon className="w-5 h-5 text-slate-300 dark:text-white/20 group-hover:text-primary transition-colors" />
              </div>

              {/* 内容区域 */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-none">
                    {v.title}
                  </h3>
                  <p className="text-[10px] font-mono text-primary font-bold uppercase tracking-[0.3em] italic">
                    // {v.subtitle}
                  </p>
                </div>
                <p className="text-slate-500 dark:text-zinc-500 text-sm leading-relaxed font-light">
                  {v.desc}
                </p>
              </div>

              {/* 互动动效：底部流光线条 */}
              <div className="absolute inset-x-0 bottom-0 h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="mt-12 flex justify-end opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                <ArrowUpRight className="w-6 h-6 text-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4. Section 结尾标志：精密坐标系读数 */}
      <div className="absolute bottom-10 right-10 hidden lg:flex items-center gap-4 opacity-10">
        <span className="text-[10px] font-mono tracking-tighter uppercase">
          Coordinate: 31.2304° N, 121.4737° E
        </span>
        <div className="w-12 h-[1px] bg-white" />
      </div>
    </section> // <-- 完美闭合，且带边缘装饰
  );
}
