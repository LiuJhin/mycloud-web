"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function OurVision() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // 视差动效：背景文字反向漂移
  const bgX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[80vh] flex items-center bg-card dark:bg-[#020202] py-40 overflow-hidden transition-colors duration-700"
    >
      {/* 背景层：动态光学噪点与网格 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.08)_0%,transparent_70%)] blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_90%)]" />
      </div>

      {/* 背景巨型水印 (视差滚动) */}
      <motion.div
        style={{ x: bgX }}
        className="absolute inset-0 flex items-center justify-center opacity-[0.02] dark:opacity-[0.04] pointer-events-none select-none"
      >
        <span className="text-[35vw] font-black tracking-tighter uppercase whitespace-nowrap">
          The Future
        </span>
      </motion.div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="max-w-6xl">
          {/* 1. 顶部元数据标签 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="mb-12 flex items-center gap-4"
          >
            <div className="flex items-center rounded-sm border border-border dark:border-white/10 bg-card/50 dark:bg-card/5 overflow-hidden">
              <span className="px-2 py-0.5 text-[9px] font-black bg-foreground dark:bg-card text-white dark:text-black uppercase tracking-widest">
                MISSION
              </span>
              <span className="px-2 py-0.5 text-[9px] font-mono text-muted-foreground dark:text-muted-foreground">
                0xVISION_2026
              </span>
            </div>
            <div className="h-[1px] w-24 bg-gradient-to-r from-primary to-transparent" />
          </motion.div>

          {/* 2. 震撼的主愿景：利用极端的字重对比 */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-[9vw] font-black tracking-[-0.06em] leading-[0.85] text-foreground dark:text-white uppercase"
            >
              让每一比特 <br />
              <span className="text-transparent stroke-white/10 dark:stroke-white/20 [-webkit-text-stroke:1px_currentColor] italic">
                触手可及
              </span>
            </motion.h2>

            {/* 3. 描述文案：非对称引导排版 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12 border-t border-border dark:border-white/5"
            >
              <div className="lg:col-span-7">
                <p className="text-xl md:text-2xl text-muted-foreground dark:text-muted-foreground font-light leading-relaxed">
                  我们的愿景不只是“提供云服务”，而是构建一个
                  **“无摩擦的数字地平线”**。
                  通过重塑算力的物理极限，让每一家企业都能像呼吸空气一样，自由、无感地调用全球算力。
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-end items-start lg:items-end gap-2">
                <span className="text-[10px] font-mono text-primary font-black tracking-[0.4em] uppercase">
                  Status: Operational
                </span>
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest opacity-40">
                  System Version 4.0.1_R
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 4. 底部装饰：精密坐标线 */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border dark:via-border to-transparent" />
    </section>
  );
}
