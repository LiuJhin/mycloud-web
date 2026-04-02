"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function AboutHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // 视差位移：背景文字随滚动缓慢上移
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center bg-background text-foreground transition-colors duration-700 overflow-hidden"
    >
      {/* 1. 动态光场：浅色下是柔和的蓝紫色，深色下是深邃的霓虹 */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-primary/10 dark:bg-primary/20 blur-[120px] rounded-full opacity-60"
        />
        <div className="absolute inset-0 bg-[radial-gradient(#80808012_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      </div>

      {/* 2. 背景巨型水印字 (Parallax Text) */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0"
      >
        <span className="text-[25vw] font-black text-accent dark:text-white/[0.02] tracking-tighter uppercase leading-none">
          Legacy
        </span>
      </motion.div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-4xl space-y-8">
            {/* 顶部微标签 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-border bg-accent/50 dark:bg-accent/30 backdrop-blur-md"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-muted-foreground">
                Established 2026
              </span>
            </motion.div>

            {/* 震撼的主标题：利用不同的字体粗细和自适应描边 */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-8xl lg:text-[10vw] font-black tracking-[-0.08em] leading-[0.8] text-foreground uppercase"
            >
              重塑数字 <br />
              <span className="text-transparent stroke-white/10 dark:stroke-white/20 [-webkit-text-stroke:1px_currentColor] italic">
                新原点
              </span>
            </motion.h1>

            {/* 描述文案：带侧边引导线 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-start gap-6 border-l-2 border-primary/30 pl-6 max-w-2xl"
            >
              <p className="text-lg md:text-xl text-muted-foreground dark:text-muted-foreground font-medium leading-relaxed italic">
                我们不只是云计算的提供者，我们是每一个数字化梦想的“硬核”合伙人。
                通过底层架构的极致优化，为未来十年的技术爆发预留空间。
              </p>
            </motion.div>
          </div>

          {/* 右侧：装饰性几何体（增加画面的“重工业感”） */}
          <div className="hidden lg:block relative w-64 h-64">
            <div className="absolute inset-0 border border-border dark:border-white/10 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 border border-primary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_20px_rgba(var(--primary-rgb),0.8)]" />
            </div>
          </div>
        </div>
      </div>

      {/* 底部装饰性横杠 */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border dark:via-border to-transparent" />
    </section>
  );
}
