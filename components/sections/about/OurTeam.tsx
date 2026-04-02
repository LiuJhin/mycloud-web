"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const teamTraits = [
  {
    category: "RESEARCH",
    prefix: "Ph.D",
    value: "MIT // STANFORD // TSINGHUA",
    title: "TECHNICAL ARCHITECTS",
    desc: "我们不仅在编写代码，我们是在重塑算力的物理极限。通过底层内核的极致优化，为未来十年的技术爆发预留进化接口。",
  },
  {
    category: "OPERATIONS",
    prefix: "VETERAN",
    value: "10+ YRS // AWS // GOOGLE // AZURE",
    title: "INDUSTRY LEADERS",
    desc: "拥有跨国云基建的运维经验。为金融、生物医药等严苛领域，提供符合合规标准的一键式咨询与全球路由优化。",
  },
  {
    category: "CULTURE",
    prefix: "DISTRIBUTED",
    value: "12+ ZONES // REMOTE-FIRST // DIVERSE",
    title: "GLOBAL COLLABORATORS",
    desc: "分布式办公的先行者。成员遍布全球 12 个时区，确保 MyCloud 的产品始终具备多元化的全球审美与包容性。",
  },
];

export function OurTeam() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative py-48 bg-card dark:bg-[#020202] transition-colors duration-700 overflow-hidden border-t border-border dark:border-white/5"
    >
      {/* BACKGROUND: 精密十字准星与极淡的扫描线 */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute top-0 left-[30%] w-[1px] h-full bg-foreground dark:bg-card" />
        <div className="absolute top-[30%] left-0 w-full h-[1px] bg-foreground dark:bg-card" />
        <div className="absolute top-[60%] left-0 w-full h-[1px] bg-foreground dark:bg-card" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-center">
          {/* LEFT: 冲击力叙事区 */}
          <div className="lg:col-span-5 space-y-12 text-center lg:text-left">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-mono tracking-[0.4em] uppercase">
                  Human Capital
                </span>
              </motion.div>

              <h2 className="text-7xl md:text-8xl lg:text-[10vw] font-black tracking-[-0.08em] leading-[0.8] text-foreground dark:text-white uppercase">
                顶尖 <br />
                <span className="text-transparent stroke-white/10 dark:stroke-white/10 [-webkit-text-stroke:1px_currentColor] italic">
                  智力池
                </span>
              </h2>
            </div>

            <p className="text-muted-foreground dark:text-muted-foreground text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 border-l-2 border-border dark:border-white/5 pl-6">
              我们不只是在招聘，我们是在构建一个
              **“智力脉冲网络”**。通过全球分布式协作，将顶尖的大脑汇聚成统一的算力意志。
            </p>
          </div>

          {/* RIGHT: 智力块纵向堆叠 */}
          <div className="lg:col-span-7 space-y-px bg-muted dark:bg-card/5 border border-border dark:border-white/5 shadow-2xl overflow-hidden">
            {teamTraits.map((t, i) => (
              <TraitItem
                key={`${t.category}-${i}`}
                item={t}
                index={i}
                containerRef={containerRef}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// 内部组件：智力块项 (带横向字符滚动)
function TraitItem({
  item,
  index,
  containerRef,
}: {
  item: {
    category: string;
    prefix: string;
    value: string;
    title: string;
    desc: string;
  };
  index: number;
  containerRef: React.RefObject<HTMLElement>;
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // 字符视差滚动：随滚动横向移动
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? "20%" : "-20%", index % 2 === 0 ? "-20%" : "20%"],
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="relative bg-card dark:bg-[#080808] p-10 lg:p-14 transition-all hover:bg-accent dark:hover:bg-card/[0.01] overflow-hidden group"
    >
      {/* BACKGROUND: 动态字符云视差 */}
      <motion.div
        style={{ x }}
        className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.02] dark:opacity-[0.03] select-none pointer-events-none"
      >
        <span className="text-[12vw] font-black text-foreground dark:text-white uppercase tracking-tighter whitespace-nowrap leading-none">
          {`${item.prefix} // ${item.value} // ${item.category}`}
        </span>
      </motion.div>

      <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
        {/* 顶部标签：自适应精密标签 */}
        <div className="flex-shrink-0 flex items-center rounded-sm overflow-hidden border border-border dark:border-white/10 shadow-sm bg-accent/50 dark:bg-card/5">
          <span className="px-1.5 py-0.5 text-[8px] font-black tracking-tighter bg-foreground dark:bg-card text-white dark:text-black uppercase">
            {item.category}
          </span>
          <span className="px-1.5 py-0.5 text-[8px] font-mono tracking-tighter text-muted-foreground dark:text-muted-foreground">
            {item.prefix}
          </span>
        </div>

        {/* 文字内容排边 */}
        <div className="space-y-6 max-w-xl">
          <div className="space-y-2 border-l-2 border-primary/20 pl-6">
            <h3 className="text-3xl font-black tracking-tighter text-foreground dark:text-white uppercase leading-none">
              {item.title}
            </h3>
            <p className="text-[10px] font-bold text-primary tracking-[0.4em] uppercase italic">
              {item.value}
            </p>
          </div>

          <p className="text-muted-foreground dark:text-muted-foreground text-sm leading-relaxed font-light line-clamp-4">
            {item.desc}
          </p>
        </div>
      </div>

      {/* 底部装饰线条：模拟雷达扫描读数 */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
    </motion.div>
  );
}
