"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2014",
    tag: "GENESIS",
    title: "创业伊始",
    desc: "一群技术极客在车库中启动了第一个计算集群。我们确信，未来的世界将建立在可编程的资源之上。",
  },
  {
    year: "2018",
    tag: "FUSION",
    title: "自主架构突破",
    desc: "成功自研分布式存储引擎，打破了性能瓶颈。从单一节点演进为覆盖全国的云矩阵。",
  },
  {
    year: "2022",
    tag: "GLOBAL ORBIT",
    title: "全球智算布局",
    desc: "跨越洲际设立 Tier-4 数据中心。我们将 AI 算力注入核心骨干网，开启全球智能时代。",
  },
  {
    year: "2026",
    tag: "SINGULARITY",
    title: "引领下个纪元",
    desc: "今天，我们服务于全球十万级企业。MyCloud 不仅是基建，更是数字化进化的原动力。",
  },
];

export function OurStory() {
  return (
    <section className="relative py-32 bg-card dark:bg-[#050505] transition-colors duration-700">
      {/* 背景装饰：极淡的水平辅助线 */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <div className="h-full w-full bg-[linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:100%_80px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* 左侧固定栏：核心文案 */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-[1px] bg-primary" />
                <span className="text-[10px] font-mono tracking-[0.4em] text-primary uppercase">
                  Evolutionary Path
                </span>
              </div>
              <h2 className="text-6xl font-black tracking-tighter leading-[0.85] text-foreground dark:text-white uppercase">
                我们的 <br />
                <span className="text-transparent stroke-white/10 dark:stroke-white/10 [-webkit-text-stroke:1px_currentColor] italic">
                  时空轴
                </span>
              </h2>
              <p className="text-muted-foreground dark:text-muted-foreground text-sm max-w-xs leading-relaxed">
                记录从 0 到 1
                的每一个算力脉冲。这不仅是公司的成长史，更是云计算进化的缩影。
              </p>
            </motion.div>
          </div>

          {/* 右侧：纵向演进流 */}
          <div className="lg:col-span-8 relative">
            {/* 核心垂直线 */}
            <div className="absolute left-0 top-0 w-[1px] h-full bg-muted dark:bg-card/10" />

            <div className="space-y-32">
              {milestones.map((m, i) => (
                <div key={m.year} className="relative pl-12 lg:pl-24 group">
                  {/* 时间锚点：不再是圆圈，是十字线 */}
                  <div className="absolute left-[-5px] top-4 flex items-center justify-center">
                    <div className="w-[10px] h-[10px] bg-card dark:bg-[#050505] border border-primary z-10" />
                    <div className="absolute w-8 h-[1px] bg-primary/30 group-hover:w-12 transition-all" />
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-end gap-4 mb-6">
                      <span className="text-6xl lg:text-7xl font-black tracking-tighter text-foreground dark:text-white opacity-10 group-hover:opacity-100 transition-opacity duration-700">
                        {m.year}
                      </span>
                      <span className="text-[10px] font-mono tracking-[0.5em] text-primary uppercase pb-2">
                        {`// ${m.tag}`}
                      </span>
                    </div>

                    <div className="max-w-xl">
                      <h3 className="text-2xl font-bold mb-4 text-foreground dark:text-foreground">
                        {m.title}
                      </h3>
                      <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed font-light text-lg">
                        {m.desc}
                      </p>
                    </div>

                    {/* 底部装饰性参数 */}
                    <div className="mt-8 flex gap-8 opacity-20 group-hover:opacity-50 transition-opacity">
                      <div className="text-[10px] font-mono">
                        NODE_INDEX: 0x{m.year}
                      </div>
                      <div className="text-[10px] font-mono">
                        STATUS: ARCHIVED
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
