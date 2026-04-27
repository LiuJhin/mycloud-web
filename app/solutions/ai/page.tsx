"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import {
  Activity,
  Cpu,
  Shield,
  Globe,
  Layers,
  Zap,
  Terminal,
} from "lucide-react";

gsap.registerPlugin(useGSAP);

const matrixNodes = [
  {
    icon: Cpu,
    label: "Compute Flow",
    value: "84.2 TFLOPS",
    status: "Active",
    meta: ["v3.0.1", "128_Nodes"],
  },
  {
    icon: Activity,
    label: "Latency",
    value: "0.8 ms",
    status: "Optimal",
    meta: ["P99_Stable", "Jitter: 0.1ms"],
  },
  {
    icon: Shield,
    label: "Threat Index",
    value: "0.01%",
    status: "Secure",
    meta: ["WAF_On", "Audit_Pass"],
  },
  {
    icon: Layers,
    label: "Model Epoch",
    value: "v4.2.0",
    status: "Synced",
    meta: ["Frozen", "Checkpoint_OK"],
  },
  {
    icon: Globe,
    label: "Global Node",
    value: "HK-09",
    status: "Online",
    meta: ["Traffic: 4.2TB", "Region: APAC"],
  },
];

export default function AIMatrix() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".matrix-node", {
        opacity: 0,
        y: 20,
        stagger: 0.05,
        duration: 0.6,
        ease: "power2.out",
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="bg-[var(--background)] py-32 px-10 border-b border-[var(--border)]"
    >
      <div className="max-w-[1500px] mx-auto">
        {/* 头部：全局性能态势 */}
        <div className="mb-24 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-[var(--primary)]">
              <div className="w-1.5 h-1.5 bg-[var(--primary)] animate-pulse" />
              {/* // Neural_Processing_Matrix // v2.6.4 */}
            </div>
            <h1 className="text-[7vw] font-black tracking-tighter uppercase italic">
              AI Matrix<span className="text-[var(--border)]">.</span>
            </h1>
          </div>

          {/* 实时数据概览栏 */}
          <div className="flex gap-12 border-l border-[var(--border)] pl-12">
            {[
              { label: "System Load", val: "64.2%" },
              { label: "Nodes Live", val: "1024" },
              { label: "Engine State", val: "Synced" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-[9px] uppercase tracking-widest text-[var(--muted-foreground)] mb-1">
                  {s.label}
                </div>
                <div className="text-xl font-black font-mono">{s.val}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 矩阵网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
          {matrixNodes.map((node, i) => (
            <div
              key={i}
              className="matrix-node bg-[var(--background)] p-10 group hover:bg-[var(--accent)] transition-colors duration-300"
            >
              <div className="flex justify-between items-start mb-10">
                <node.icon className="w-5 h-5 text-[var(--primary)]" />
                <span className="text-[9px] font-black uppercase tracking-widest bg-[var(--muted)] px-3 py-1 text-[var(--foreground)]">
                  {node.status}
                </span>
              </div>

              <div className="mb-8">
                <p className="text-[9px] font-mono uppercase text-[var(--muted-foreground)] tracking-widest mb-1">
                  {node.label}
                </p>
                <h3 className="text-3xl font-black tracking-tighter uppercase">
                  {node.value}
                </h3>
              </div>

              {/* 规格堆叠区：增加页面的硬核信息密度 */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-[var(--border)]/50">
                {node.meta.map((m) => (
                  <span
                    key={m}
                    className="text-[9px] font-mono border border-[var(--border)] px-2 py-1 opacity-50"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* 控制单元：增强交互感 */}
          <div className="bg-[var(--primary)] p-12 flex flex-col justify-between text-[var(--background)]">
            <div className="space-y-6">
              <Terminal className="w-6 h-6 opacity-50" />
              <div>
                <h3 className="text-xl font-bold uppercase tracking-tight">
                  Initialize
                  <br />
                  Sequence.
                </h3>
                <p className="text-[10px] opacity-60 uppercase tracking-widest mt-2">
                  {/* // Global override active */}
                </p>
              </div>
            </div>
            <button className="w-full py-4 border border-[var(--background)]/30 text-[var(--background)] text-[10px] font-black uppercase tracking-widest hover:bg-[var(--background)] hover:text-[var(--primary)] transition-all flex items-center justify-center gap-2">
              Execute_Command <Zap className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* 底部防御条 */}
        <div className="mt-12 flex justify-between items-center text-[9px] font-mono text-[var(--muted-foreground)] uppercase tracking-widest bg-[var(--accent)]/50 p-6">
          <span className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-[var(--primary)] animate-ping" />{" "}
            Engine_State: Synchronized
          </span>
          <span>Last_Update: 14:36:03 HKT</span>
          <span>Node_Integrity: 100%</span>
        </div>
      </div>
    </section>
  );
}
