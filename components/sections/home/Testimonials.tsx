"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react"; // 记得安装 lucide-react

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CTO @ TechFlow",
    content:
      "MyCloud 的边缘计算架构将我们的全球延迟降低了 40%，这是我们在数字化转型中做出的最正确决策。",
  },
  {
    name: "Sarah Chen",
    role: "Head of Infrastructure @ CloudScale",
    content:
      "在处理千万级并发请求时，MyCloud 展示了令人惊叹的稳定性。他们的弹性伸缩逻辑几乎是艺术级的。",
  },
  {
    name: "James Wilson",
    role: "Security Director @ SecureNet",
    content:
      "零信任架构的深度集成让我们在合规性审核中轻松过关，安全防线从未如此稳固。",
  },
  {
    name: "Elena Petrova",
    role: "VPE @ DataSymphony",
    content:
      "从迁移到上线仅用了两周。技术支持团队的响应速度和专业深度超出了我们的预期。",
  },
];

export function Testimonials() {
  return (
    <section className="py-32 bg-background overflow-hidden relative">
      {/* 背景装饰：一个巨大的、模糊的品牌色光环 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-6">
            Social Proof
          </h2>
          <h3 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
            全球领军企业的 <br />
            <span className="text-muted-foreground/40">共同选择。</span>
          </h3>
        </div>

        {/* 1. 无限跑马灯区域 */}
        <div className="flex flex-col gap-6">
          <MarqueeRow items={testimonials} direction="left" speed={40} />
          <MarqueeRow
            items={[...testimonials].reverse()}
            direction="right"
            speed={50}
          />
        </div>

        {/* 2. 底部客户 Logo 壁垒 (极简灰度) */}
        <div className="mt-24 flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          {["Stripe", "Vercel", "Linear", "OpenAI", "Github"].map((logo) => (
            <span
              key={logo}
              className="text-xl font-black tracking-tighter cursor-default hover:text-primary transition-colors"
            >
              {logo.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// 内部组件：平滑跑马灯行
function MarqueeRow({
  items,
  direction = "left",
  speed = 30,
}: {
  items: any[];
  direction?: "left" | "right";
  speed?: number;
}) {
  const scrollItems = [...items, ...items, ...items]; // 重复三份确保无缝

  return (
    <div className="flex overflow-hidden group">
      <motion.div
        animate={{
          x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-6 pr-6 whitespace-nowrap"
      >
        {scrollItems.map((t, i) => (
          <div
            key={i}
            className="w-[400px] md:w-[500px] shrink-0 p-8 rounded-[2.5rem] border border-white/5 bg-zinc-900/40 backdrop-blur-sm hover:bg-zinc-800/60 transition-colors group/card"
          >
            <Quote className="w-10 h-10 text-primary/20 mb-6 group-hover/card:text-primary/40 transition-colors" />
            <p className="text-lg md:text-xl font-medium leading-relaxed text-zinc-300 mb-8 whitespace-normal">
              “{t.content}”
            </p>
            <div className="flex flex-col">
              <span className="font-bold text-white tracking-tight">
                {t.name}
              </span>
              <span className="text-xs text-zinc-500 font-mono mt-1">
                {t.role}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
