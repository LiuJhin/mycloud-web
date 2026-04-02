"use client";

import { motion } from "framer-motion";
import { Product } from "@/types";
import { ArrowUpRight, Zap } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white dark:bg-[#080808] border border-slate-100 dark:border-white/5 p-8 transition-all hover:bg-slate-50 dark:hover:bg-white/[0.02] overflow-hidden"
    >
      {/* 1. 顶部装饰：扫描线与元数据 */}
      <div className="flex justify-between items-start mb-12">
        <div className="flex items-center rounded-[2px] overflow-hidden border border-slate-200 dark:border-white/10 shadow-sm">
          <span className="px-1.5 py-0.5 text-[8px] font-black bg-slate-900 dark:bg-white text-white dark:text-black uppercase tracking-tighter">
            UNIT
          </span>
          <span className="px-1.5 py-0.5 text-[8px] font-mono text-slate-500 dark:text-zinc-500">
            0x{product.id.slice(0, 5).toUpperCase()}
          </span>
        </div>
        <Zap className="w-4 h-4 text-slate-300 dark:text-white/10 group-hover:text-primary transition-colors" />
      </div>

      {/* 2. 主内容区域 */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-none group-hover:translate-x-1 transition-transform">
            {product.name}
          </h3>
          <div className="h-[1px] w-8 bg-primary/30 group-hover:w-16 transition-all duration-500" />
        </div>

        <p className="text-slate-500 dark:text-zinc-500 text-sm leading-relaxed font-light min-h-[60px]">
          {product.description}
        </p>
      </div>

      {/* 3. 价格与交互区 */}
      <div className="mt-12 pt-8 border-t border-slate-50 dark:border-white/5 flex items-end justify-between">
        <div className="space-y-1">
          <p className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest italic">
            Start_From
          </p>
          {product.price !== undefined ? (
            <div className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter font-mono">
              ${product.price}
              <span className="text-xs opacity-30 font-sans ml-1">/mo</span>
            </div>
          ) : (
            <div className="text-sm font-black text-primary uppercase tracking-tighter">
              Request_Quote
            </div>
          )}
        </div>

        {/* 动态箭头：悬浮时弹出 */}
        <div className="p-2 bg-slate-900 dark:bg-white text-white dark:text-black opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      {/* 4. 背景装饰：底部的极细进度条感 */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
}
