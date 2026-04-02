"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Globe, Command } from "lucide-react";
import { useTranslation } from "@/components/i18n/LanguageProvider";

export function Hero() {
  const t = useTranslation();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // 视差效果：背景格栅随滚动产生深度感
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center bg-white dark:bg-[#020202] pt-20 overflow-hidden transition-colors duration-700"
    >
      {/* 1. 背景层：工业级网格与坐标系 */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* 动态 HUD 读数：模拟算力中心 */}
        <div className="absolute top-1/4 left-10 hidden lg:block opacity-20">
          <p className="text-[10px] font-mono leading-relaxed">
            LATENCY: 12ms
            <br />
            UPTIME: 99.999%
            <br />
            NODES: ACTIVE
          </p>
        </div>
        <div className="absolute bottom-20 right-10 hidden lg:block opacity-20 text-right">
          <p className="text-[10px] font-mono leading-relaxed uppercase tracking-tighter">
            System_Architecture: v4.0.1_R
            <br />
            Global_Edge_Router: Online
            <br />
            Location: [35.6895, 139.6917]
          </p>
        </div>
      </motion.div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* 左侧：冲击力文本区 */}
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-6">
              {/* 元数据标签 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4"
              >
                <div className="flex items-center rounded-sm border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 overflow-hidden">
                  <span className="px-2 py-0.5 text-[9px] font-black bg-slate-900 dark:bg-white text-white dark:text-black uppercase tracking-widest">
                    SYSTEM_INIT
                  </span>
                  <span className="px-2 py-0.5 text-[9px] font-mono text-slate-500 dark:text-zinc-500">
                    2026_GENESIS
                  </span>
                </div>
                <div className="h-[1px] w-12 bg-primary/40" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-7xl md:text-8xl lg:text-[10vw] font-black tracking-[-0.06em] leading-[0.8] text-slate-900 dark:text-white uppercase"
              >
                {t("hero.title")}
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="max-w-xl text-lg md:text-xl text-slate-500 dark:text-zinc-400 font-light leading-relaxed border-l-2 border-primary/20 pl-6"
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* 动作区：直角与精密感 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <button className="group relative flex items-center gap-4 bg-slate-900 dark:bg-white px-10 py-5 text-white dark:text-black transition-all hover:bg-primary dark:hover:bg-primary dark:hover:text-white overflow-hidden">
                <span className="text-[11px] font-black uppercase tracking-[0.3em]">
                  {t("hero.ctaStart")}
                </span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                {/* 悬浮时的流光特效 */}
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </button>

              <button className="flex items-center gap-4 px-10 py-5 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                <Command className="w-4 h-4 opacity-40" />
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-600 dark:text-zinc-400">
                  {t("hero.ctaLearn")}
                </span>
              </button>
            </motion.div>
          </div>

          {/* 右侧：状态读数装饰 (仅在大屏) */}
          <div className="hidden lg:col-span-4 lg:flex flex-col justify-end pb-12 items-end space-y-24">
            <div className="rotate-90 origin-right translate-x-8">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-[1em] opacity-30 italic">
                Compute_Matrix_Active
              </span>
            </div>

            {/* 极简背书 */}
            <div className="space-y-4 text-right">
              <p className="text-[8px] font-mono text-zinc-400 uppercase tracking-widest opacity-50">
                Global Partners // 2026
              </p>
              <div className="flex gap-6 opacity-30 grayscale hover:grayscale-0 transition-all">
                {["INTEL", "NVIDIA", "AWS"].map((p) => (
                  <span
                    key={p}
                    className="text-[10px] font-black tracking-widest"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部装饰：精密刻度尺 */}
      <div className="absolute bottom-0 left-0 w-full h-12 border-t border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02] flex items-center px-12 overflow-hidden">
        <div className="flex gap-24 opacity-20">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1 h-1 bg-slate-900 dark:bg-white rounded-full" />
              <span className="text-[8px] font-mono">NODE_0{i}_STABLE</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
