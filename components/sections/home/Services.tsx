"use client";

import { motion } from "framer-motion";
import { Plus, Cpu, Globe2, ShieldEllipsis, Layers3 } from "lucide-react";

const services = [
  {
    id: "01",
    title: "智算中心",
    tag: "AI Computing",
    desc: "分布式算力集群，支持 EB 级数据训练，为大模型提供底层原动力。",
    icon: <Cpu className="w-5 h-5" />,
    position: "justify-start",
  },
  {
    id: "02",
    title: "全球边缘网",
    tag: "Edge Network",
    desc: "3000+ 边缘节点全量覆盖，毫秒级响应，让业务在全球范围内瞬间触达。",
    icon: <Globe2 className="w-5 h-5" />,
    position: "justify-end",
  },
  {
    id: "03",
    title: "零信任安全",
    tag: "Zero Trust",
    desc: "重构安全边界，基于身份、环境、行为的多维度动态验证，确保绝对合规。",
    icon: <ShieldEllipsis className="w-5 h-5" />,
    position: "justify-start",
  },
  {
    id: "04",
    title: "云原生基建",
    tag: "Infrastructure",
    desc: "屏蔽底层复杂性，提供声明式资源管理，让开发者专注于逻辑创新。",
    icon: <Layers3 className="w-5 h-5" />,
    position: "justify-end",
  },
];

export function Services() {
  return (
    <section className="relative py-32 bg-[#020617] text-white overflow-hidden">
      {/* 1. 装饰性网格背景 (极淡) */}
      <div className="absolute inset-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-6">
        {/* 2. 头部：极致简洁与巨大字号 */}
        <div className="relative mb-32">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-primary text-xs font-bold tracking-[0.5em] uppercase block mb-4"
          >
            Capabilities
          </motion.span>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none opacity-90">
            全域基建 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-600">
              重构数字想象
            </span>
          </h2>
          {/* 装饰线条 */}
          <div className="absolute -left-10 top-0 w-[1px] h-full bg-gradient-to-b from-primary/50 to-transparent" />
        </div>

        {/* 3. 错位布局服务流 */}
        <div className="space-y-0 relative">
          {/* 中心贯穿线 */}
          <div className="absolute left-1/2 top-0 w-[1px] h-full bg-zinc-800 hidden lg:block" />

          {services.map((s, idx) => (
            <div
              key={s.id}
              className={`flex w-full ${s.position} relative py-20 group`}
            >
              {/* 装饰锚点 */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-zinc-900 border border-zinc-700 z-10 group-hover:scale-150 group-hover:bg-primary transition-all duration-500" />
                <Plus className="absolute w-10 h-10 text-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full lg:w-[42%] relative"
              >
                {/* 编号与标签 */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl font-mono opacity-20 italic font-light">
                    {s.id}
                  </span>
                  <div className="h-[1px] w-12 bg-primary/30" />
                  <span className="text-xs tracking-widest text-zinc-500 uppercase">
                    {s.tag}
                  </span>
                </div>

                <h3 className="text-3xl font-bold mb-6 group-hover:text-primary transition-colors">
                  {s.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed text-lg mb-8">
                  {s.desc}
                </p>

                {/* 极简按钮 */}
                <button className="flex items-center gap-2 text-sm font-semibold group/btn">
                  Explore Architecture
                  <div className="w-8 h-[1px] bg-zinc-700 group-hover/btn:w-16 group-hover/btn:bg-primary transition-all" />
                </button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. 底部动态氛围光 (环境光) */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] -z-10" />
    </section>
  );
}
