"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Send, Terminal, Globe } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <div className="relative min-h-screen bg-black text-white pt-32 pb-20 overflow-hidden">
      {/* 1. 背景基建：0.5px 的精密网格与动态噪点 */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* 左侧：品牌张力区 */}
          <div className="space-y-12">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xs font-mono tracking-[0.5em] text-zinc-500 uppercase"
              >
                {/* // Communication Channel */}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-7xl md:text-8xl font-black tracking-tighter leading-[0.8] uppercase"
              >
                Keep <br />
                <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)]">
                  In Touch
                </span>
              </motion.h1>
            </div>

            {/* 状态看板 */}
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-12">
              <StatusBadge
                label="Global Status"
                value="Online"
                color="bg-emerald-500"
              />
              <StatusBadge
                label="Response Time"
                value="< 2 Hours"
                color="bg-primary"
              />
            </div>

            <p className="text-zinc-500 text-sm max-w-sm font-light leading-relaxed">
              我们的技术专家正在全球范围内待命。
              无论是架构咨询还是生态合作，我们都在这里为您解构未来。
            </p>
          </div>

          {/* 右侧：极简表单区 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative p-1 rounded-3xl bg-gradient-to-br from-white/10 to-transparent"
          >
            <form className="relative bg-zinc-950/80 backdrop-blur-3xl rounded-[1.4rem] p-8 md:p-12 space-y-10">
              {/* 输入框重构 */}
              <InputField
                label="Identity"
                placeholder="您的姓名或企业名称"
                onChange={(v) => setForm({ ...form, name: v })}
              />
              <InputField
                label="Protocol"
                placeholder="your-email@domain.com"
                type="email"
                onChange={(v) => setForm({ ...form, email: v })}
              />
              <div className="space-y-4">
                <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 px-1">
                  Message Body
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-primary transition-colors resize-none text-zinc-300 placeholder:text-zinc-700"
                  placeholder="在此输入您的咨询详情..."
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
              </div>

              <Button className="w-full h-16 rounded-xl bg-white text-black font-black text-lg uppercase tracking-tighter hover:bg-zinc-200 group transition-all">
                Establish Connection
                <Send className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// 抽取的子组件：状态徽章
function StatusBadge({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="space-y-2">
      <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
        {label}
      </p>
      <div className="flex items-center gap-2">
        <div className={`h-1.5 w-1.5 rounded-full ${color} animate-pulse`} />
        <span className="font-bold tracking-tight">{value}</span>
      </div>
    </div>
  );
}

// 抽取的子组件：极简输入行
function InputField({
  label,
  placeholder,
  type = "text",
  onChange,
}: {
  label: string;
  placeholder: string;
  type?: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="group space-y-4">
      <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 px-1 group-focus-within:text-primary transition-colors">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-primary transition-colors text-zinc-300 placeholder:text-zinc-700"
      />
    </div>
  );
}
