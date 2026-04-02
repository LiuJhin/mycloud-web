"use client";

import { motion } from "framer-motion";
import { Product } from "@/types";
import { ProductCard } from "@/components/products/ProductCard";

export function ProductSection({
  title,
  products,
}: {
  title: string;
  products: Product[];
}) {
  // 生成一个基于标题的简易 ID，增加工业细节
  const sectionId = title.slice(0, 3).toUpperCase();

  return (
    <section className="relative py-20 border-t border-slate-100 dark:border-white/5 overflow-hidden">
      {/* 1. Section 头部：非对称工业排版 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.4em] text-zinc-400 uppercase">
              Section_Registry // {sectionId}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white uppercase leading-none">
            {title}
            <span className="text-primary">.</span>
          </h2>
        </div>

        {/* 动态计数器：显示产品密度 */}
        <div className="hidden md:flex flex-col items-end opacity-40">
          <p className="text-[9px] font-mono uppercase tracking-widest italic">
            Unit_Count
          </p>
          <span className="text-2xl font-black font-mono">
            0{products.length}
          </span>
        </div>
      </div>

      {/* 2. 产品网格：带有精密边框感 */}
      <div className="relative group">
        {/* 背景格栅装饰线 (仅在大屏幕显示，增强架构感) */}
        <div className="absolute inset-0 z-0 pointer-events-none border border-slate-100 dark:border-white/5" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 dark:bg-white/5 border border-slate-100 dark:border-white/5 shadow-2xl">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#020202]"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}

          {/* 填充空白格：如果产品不满 3 的倍数，填充一个虚线格保持视觉平衡 */}
          {products.length % 3 !== 0 && (
            <div className="hidden lg:flex items-center justify-center bg-slate-50/50 dark:bg-white/[0.01] p-8 border-dashed border-slate-200 dark:border-white/5">
              <span className="text-[10px] font-mono text-zinc-300 dark:text-zinc-700 tracking-widest uppercase">
                Ready_For_Deployment
              </span>
            </div>
          )}
        </div>
      </div>

      {/* 3. Section 结尾标志：精密坐标 */}
      <div className="mt-12 flex justify-end">
        <div className="flex items-center gap-4 opacity-10">
          <div className="w-12 h-px bg-slate-900 dark:bg-white" />
          <span className="text-[8px] font-mono tracking-tighter uppercase">
            End_Of_Block_{sectionId}
          </span>
        </div>
      </div>
    </section>
  );
}
