"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import {
  Shield,
  Radar,
  Lock,
  Terminal,
  Activity,
  FileCheck,
  ShieldAlert,
  Cpu,
} from "lucide-react";

gsap.registerPlugin(useGSAP);

const defenseModules = [
  {
    id: "01",
    title: "Endpoint Protection",
    desc: "部署在所有容器与物理节点的 Agent，实时扫描二进制异常。",
    icon: Cpu,
  },
  {
    id: "02",
    title: "Network Perimeter",
    desc: "自适应防火墙，利用 AI 识别并阻断分布式拒绝服务攻击（DDoS）。",
    icon: Radar,
  },
  {
    id: "03",
    title: "Data Cryptography",
    desc: "全链路 TLS 1.3 与应用级数据加密，确保数据在传输与存储中不可被窃取。",
    icon: Lock,
  },
  {
    id: "04",
    title: "Identity Access",
    desc: "多因素身份认证（MFA）与 RBAC 权限管控，执行最少权限原则。",
    icon: Shield,
  },
];

export default function SecurityPage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".module-card", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      });
    },
    { scope: container },
  );

  return (
    <section ref={container} className="bg-[var(--background)] py-32 px-10">
      <div className="max-w-[1400px] mx-auto">
        {/* 顶部：态势感知 */}
        <div className="grid lg:grid-cols-3 gap-12 mb-32">
          <div className="lg:col-span-2 space-y-8">
            <div className="text-[10px] font-mono text-[var(--primary)] tracking-[0.5em] uppercase italic">
              {/* //_Security_Status: Nominal */}
            </div>
            <h1 className="text-[100px] font-black tracking-tighter uppercase leading-[0.9]">
              Secure
              <br />
              Matrix<span className="text-[var(--border)]">.</span>
            </h1>
            <p className="max-w-xl text-[var(--muted-foreground)] leading-relaxed">
              Vexta 安全体系构建于零信任（Zero Trust）与深度防御（Defense in
              Depth）模型之上。我们通过全天候的自动化审计，确保您的基础设施在面对全球分布式攻击时具备免疫级的响应速度。
            </p>
          </div>
          <div className="border border-[var(--border)] p-10 bg-[var(--card)] flex flex-col justify-between">
            <div className="space-y-4">
              <Activity className="text-[var(--primary)]" />
              <div className="text-[9px] uppercase tracking-widest font-bold">
                Threat_Hunting_Live
              </div>
              <div className="text-5xl font-black italic">0.00ms</div>
            </div>
            <div className="text-[10px] uppercase tracking-widest opacity-50 font-mono italic">
              {/* //_Detection_Latency */}
            </div>
          </div>
        </div>

        {/* 模块化防御矩阵 */}
        <div className="grid md:grid-cols-2 gap-px bg-[var(--border)] border border-[var(--border)] mb-32">
          {defenseModules.map((m) => (
            <div
              key={m.id}
              className="module-card bg-[var(--background)] p-12 hover:bg-[var(--accent)] transition-colors group"
            >
              <div className="flex justify-between items-start mb-10">
                <m.icon className="w-8 h-8 text-[var(--primary)]" />
                <span className="font-mono text-sm opacity-30">{m.id}</span>
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase">{m.title}</h3>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 底部：合规与审计 */}
        <div className="border-t border-[var(--border)] pt-24 grid lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <div className="flex items-center gap-6">
              <Terminal className="text-[var(--primary)]" />
              <h3 className="text-xl font-bold uppercase tracking-widest">
                Compliance_Map
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["ISO 27001", "SOC 2 Type II", "GDPR", "HIPAA"].map((tag) => (
                <div
                  key={tag}
                  className="border border-[var(--border)] p-6 flex items-center gap-4"
                >
                  <FileCheck className="w-4 h-4 opacity-50" />
                  <span className="text-[10px] font-black uppercase">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[var(--foreground)] text-[var(--background)] p-16 flex flex-col justify-center space-y-8">
            <ShieldAlert className="w-12 h-12" />
            <h3 className="text-3xl font-black uppercase tracking-tighter">
              Security_Audit_2026
            </h3>
            <p className="opacity-70 text-sm leading-relaxed">
              我们的安全审计报告每年更新。您可以随时申请访问最新的渗透测试数据与修复路径说明，获取系统级的透明度。
            </p>
            <button className="border border-[var(--background)]/20 px-8 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-[var(--background)] hover:text-[var(--foreground)] transition-all">
              Request_Detailed_Audit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
