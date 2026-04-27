"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ShieldCheck, Activity, Wifi, MapPin } from "lucide-react";

// 引入抽象的区域背景图（建议替换为您实际的 asset 地址）
const nodeAssets = [
  "https://images.unsplash.com/photo-1542044896-857502c38006?q=80&w=600", // Tokyo
  "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=600", // London
  "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=600", // NYC
  "https://images.unsplash.com/photo-1512453979798-5ea26e3a89e6?q=80&w=600", // HK
];

const edgeNodes = [
  {
    city: "TOKYO",
    region: "AP-NORTH",
    latency: "12ms",
    load: "42%",
    ip: "103.x.x.1",
  },
  {
    city: "LONDON",
    region: "EU-WEST",
    latency: "18ms",
    load: "31%",
    ip: "85.x.x.2",
  },
  {
    city: "NYC",
    region: "US-EAST",
    latency: "24ms",
    load: "56%",
    ip: "64.x.x.3",
  },
  {
    city: "HONG KONG",
    region: "AP-SOUTH",
    latency: "8ms",
    load: "19%",
    ip: "119.x.x.4",
  },
];

export default function EdgeNodeMesh() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".node-card", { opacity: 0, y: 30, stagger: 0.1, duration: 1 });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="bg-[var(--background)] py-32 px-10 relative overflow-hidden"
    >
      {/* 极简背景：全屏网络拓扑 */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      <div className="max-w-[1500px] mx-auto relative z-10">
        {/* 头部：工业级标题 */}
        <div className="mb-24">
          <span className="text-[10px] font-mono text-[var(--primary)] uppercase italic mb-6 block">
            //_Global_Edge_Mesh_Status
          </span>
          <h1 className="text-[12vw] font-black tracking-tighter uppercase leading-[0.8] mb-12">
            EDGE<span className="text-[var(--border)]">_NODE</span>
          </h1>
        </div>

        {/* 拓扑网格区 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {edgeNodes.map((node, i) => (
            <div
              key={i}
              className="node-card border border-[var(--border)] group bg-[var(--card)] flex flex-col"
            >
              {/* 图片区域：使用混合模式与遮罩 */}
              <div className="h-48 w-full relative overflow-hidden border-b border-[var(--border)]">
                <img
                  src={nodeAssets[i]}
                  alt={node.city}
                  className="w-full h-full object-cover opacity-40 grayscale group-hover:scale-110 group-hover:opacity-60 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] to-transparent" />
                <div className="absolute bottom-6 left-6 text-2xl font-black italic uppercase">
                  {node.city}
                </div>
              </div>

              <div className="p-8 space-y-8 flex-1">
                <div className="flex justify-between items-start text-[var(--muted-foreground)]">
                  <MapPin className="w-4 h-4" />
                  <span className="text-[9px] font-mono uppercase border border-[var(--border)] px-2 py-1">
                    {node.region}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[9px] opacity-40 uppercase">
                      Latency
                    </div>
                    <div className="font-mono font-bold text-lg">
                      {node.latency}
                    </div>
                  </div>
                  <div>
                    <div className="text-[9px] opacity-40 uppercase">Load</div>
                    <div className="font-mono font-bold text-lg">
                      {node.load}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[var(--border)] flex justify-between items-center opacity-30">
                  <Wifi className="w-4 h-4" />
                  <span className="text-[9px] font-mono">{node.ip}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 底部防御区 */}
        <div className="mt-16 p-12 border border-[var(--border)] bg-[var(--foreground)] text-[var(--background)] flex flex-wrap items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <ShieldCheck className="w-10 h-10" />
            <div>
              <h4 className="font-black uppercase tracking-widest text-lg">
                Automated Threat Mitigation
              </h4>
              <p className="text-[10px] opacity-60 uppercase mt-1">
                Real-time scrubbing & WAF protection active across all nodes
              </p>
            </div>
          </div>
          <button className="px-10 py-4 bg-[var(--background)] text-[var(--foreground)] text-[10px] font-black uppercase tracking-widest hover:bg-[var(--primary)] hover:text-[var(--background)] transition-all">
            View_Full_Topology
          </button>
        </div>
      </div>
    </section>
  );
}
