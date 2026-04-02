"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-32 lg:py-48 bg-card dark:bg-background overflow-hidden">
      {/* 1. 背景能量场：巨大的径向渐变 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/10 blur-[120px] rounded-full pointer-events-none opacity-50" />

      {/* 2. 装饰性扫描线 (极淡) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        {/* 顶部微标 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-accent/30 text-primary mb-8"
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-xs font-bold tracking-widest uppercase">
            Start Your Evolution
          </span>
        </motion.div>

        {/* 震撼标题：斜体与字间距极致收缩 */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-6xl md:text-8xl font-black tracking-tighter italic leading-[0.85] text-foreground mb-8"
        >
          准备好进入 <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
            下一个纪元吗？
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          不仅仅是云服务器，更是为您企业量身定制的数字大脑。 立即加入
          MyCloud，重构您的核心竞争力。
        </motion.p>

        {/* 核心动作组 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link href="/contact" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="group h-14 px-10 rounded-full bg-primary text-primary-foreground hover:scale-105 transition-all shadow-[0_0_40px_rgba(var(--primary-rgb),0.3)]"
            >
              免费开启试用
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>

          <Link href="/services" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-10 rounded-full border-border bg-accent/20 backdrop-blur-md hover:bg-accent/40 hover:border-primary transition-all text-foreground"
            >
              技术架构咨询
            </Button>
          </Link>
        </motion.div>

        {/* 底部装饰：极细的渐变消失线 */}
        <div className="mt-32 flex justify-center">
          <div className="h-[1px] w-full max-w-4xl bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
      </div>
    </section>
  );
}
