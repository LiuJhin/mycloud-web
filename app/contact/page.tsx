"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <div className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* 物理背景层：沉浸式底色 */}
      <div className="fixed inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010bbbb317?q=80&w=2000"
          alt="Infrastructure Background"
          className="w-full h-full object-cover"
        />
        {/* 遮罩：实现背景与文字的视觉分离，适配主题变量 */}
        <div className="absolute inset-0 bg-background/90 backdrop-blur-[2px]" />
      </div>

      {/* 精密网格层：叠加在背景之上 */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* 左侧：品牌张力区 */}
          <div className="space-y-12">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xs font-mono tracking-[0.5em] text-muted-foreground uppercase"
              >
                //_INITIATE_CONTACT
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-7xl md:text-8xl font-black tracking-tighter leading-[0.8] uppercase"
              >
                Establish <br />
                <span className="text-transparent [-webkit-text-stroke:1px_var(--foreground)]">
                  Link
                </span>
              </motion.h1>
            </div>

            {/* 状态看板 */}
            <div className="grid grid-cols-2 gap-8 border-t border-border pt-12">
              <StatusBadge
                label="System Status"
                value="OPERATIONAL"
                color="bg-emerald-500"
              />
              <StatusBadge
                label="Latency"
                value="< 24MS"
                color="bg-muted-foreground"
              />
            </div>

            {/* 通讯协议区 */}
            <div className="space-y-6 pt-6">
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                //_AVAILABLE_PORTS
              </p>
              <div className="flex flex-col gap-3">
                <ProtocolLink
                  label="WHATSAPP"
                  value="+852 9XXX XXXX"
                  href="#"
                />
                <ProtocolLink label="TELEGRAM" value="@MyCloud_Ops" href="#" />
                <ProtocolLink label="EMAIL" value="ops@mycloud.com" href="#" />
              </div>
            </div>

            <p className="text-muted-foreground text-sm max-w-sm font-light leading-relaxed pt-6">
              部署您的业务需求至 MyCloud
              核心节点。我们的工程师团队将根据您的架构模型，在 2
              小时内完成响应与评估。
            </p>
          </div>

          {/* 右侧：表单区 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative p-[1px] rounded-[var(--radius)] bg-border"
          >
            <form className="relative bg-card/90 rounded-[var(--radius)] p-10 md:p-14 space-y-10">
              <InputField
                label="CLIENT_ID"
                placeholder="Name of your enterprise"
                onChange={(v) => setForm({ ...form, name: v })}
              />

              <InputField
                label="COMM_PROTOCOL"
                placeholder="contact@company.com"
                type="email"
                onChange={(v) => setForm({ ...form, email: v })}
              />

              <div className="space-y-4">
                <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground px-1">
                  PAYLOAD_DATA
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-foreground transition-colors resize-none text-foreground placeholder:text-muted text-sm"
                  placeholder="Describe your technical requirements..."
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
              </div>

              <Button className="w-full h-16 rounded-[var(--radius)] bg-foreground text-background font-black text-lg uppercase tracking-tighter hover:bg-primary transition-all group">
                Execute Transfer
                <Send className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ProtocolLink({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 text-sm font-mono hover:text-primary transition-colors"
    >
      <span className="w-24 text-[10px] text-muted-foreground uppercase">
        {label}
      </span>
      <span className="text-foreground tracking-tight underline underline-offset-4 decoration-border group-hover:decoration-primary">
        {value}
      </span>
    </a>
  );
}

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
      <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
        {label}
      </p>
      <div className="flex items-center gap-2">
        <div className={`h-1.5 w-1.5 rounded-full ${color}`} />
        <span className="font-bold tracking-tight text-[13px] uppercase text-foreground">
          {value}
        </span>
      </div>
    </div>
  );
}

function InputField({
  label,
  placeholder,
  type = "text",
  onChange,
}: {
  label: string;
  placeholder: string;
  type?: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="group space-y-4">
      <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground px-1 group-focus-within:text-foreground transition-colors">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-foreground transition-colors text-foreground placeholder:text-muted text-sm"
      />
    </div>
  );
}
