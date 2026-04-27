"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, LayoutGrid, Globe, Shield } from "lucide-react";

const providers = [
  {
    id: "01",
    name: "AWS",
    full: "AMAZON_WEB_SERVICES",
    color: "#FF9900",
    tag: "Infrastructure",
  },
  {
    id: "02",
    name: "AZURE",
    full: "MICROSOFT_AZURE",
    color: "#0089D6",
    tag: "Enterprise",
  },
  {
    id: "03",
    name: "ALIYUN",
    full: "ALIBABA_CLOUD",
    color: "#FF6A00",
    tag: "APAC_Core",
  },
  {
    id: "04",
    name: "HUAWEI",
    full: "HUAWEI_CLOUD",
    color: "#E41E26",
    tag: "Hardcore",
  },
  {
    id: "05",
    name: "BAIDU",
    full: "BAIDU_AI_CLOUD",
    color: "#2932E1",
    tag: "AI_Native",
  },
];

export default function CloudProductCenter() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".nav-element", {
        y: -20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".title-reveal", {
        y: 100,
        skewY: 5,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        delay: 0.3,
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="bg-background text-foreground min-h-screen py-10 selection:bg-primary selection:text-primary-foreground"
    >
      {/* --- 2. 主视觉区 (Main Hero) --- */}
      <div className="container mx-auto px-6 pt-40 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 overflow-hidden">
            <div className="flex items-center gap-3 text-primary font-mono text-[10px] tracking-[0.5em] uppercase mb-6">
              <Globe className="w-3 h-3 animate-spin-slow" />
              Region_Sync: Global_Active
            </div>
            <h1 className="title-reveal text-[11vw] font-black leading-[0.8] tracking-tighter uppercase italic">
              多云产品
              <br />
              <span className="text-muted-foreground/10">AGGREGATOR.</span>
            </h1>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-8 pb-4">
            <div className="flex gap-4">
              <div className="flex flex-col items-end">
                <span className="text-[9px] font-mono opacity-30 uppercase">
                  Secure_Layer
                </span>
                <Shield className="w-4 h-4 text-primary mt-1" />
              </div>
              <div className="w-[2px] h-10 bg-primary/20" />
              <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest leading-relaxed max-w-[200px] lg:text-right">
                Unified Cloud Orchestration for Modern Dev Teams.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- 3. 极简工业列表 (The List) --- */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col border-t border-border">
          {providers.map((item) => (
            <div
              key={item.id}
              className="provider-row group relative border-b border-border/40 hover:bg-muted/5 transition-all duration-700 overflow-hidden"
            >
              {/* 悬停时的品牌色微光 */}
              <div
                className="absolute left-0 top-0 w-1 h-0 group-hover:h-full transition-all duration-500"
                style={{ backgroundColor: item.color }}
              />

              <div className="flex flex-col lg:flex-row items-start lg:items-center py-20 gap-10 lg:gap-24 relative z-10">
                <div className="flex flex-col min-w-[200px]">
                  <span className="text-[10px] font-mono text-muted-foreground/30 font-black mb-2 uppercase tracking-widest">
                    Code_Name / {item.tag}
                  </span>
                  <h2 className="text-6xl lg:text-8xl font-black tracking-tighter uppercase italic group-hover:translate-x-4 transition-transform duration-700">
                    {item.name}
                  </h2>
                </div>

                <div className="flex-1 flex flex-col md:flex-row justify-between items-end gap-10">
                  <div className="max-w-[400px] border-l border-border pl-8 py-2">
                    <p className="text-sm font-medium text-muted-foreground leading-relaxed">
                      集成原生 VPC 隔离、高性能 GPU
                      算力实例及分布式存储系统。支持跨平台统一身份鉴权与自动化计费管理。
                    </p>
                  </div>

                  <Link
                    href={`/products/${item.id}`}
                    className="flex items-center gap-4 group/btn"
                  >
                    <div className="text-right flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                        Deploy_Instance
                      </span>
                      <span className="text-[8px] font-mono text-muted-foreground/40 mt-1 uppercase italic">
                        Stable_Build_2.0
                      </span>
                    </div>
                    <div className="w-14 h-14 rounded-2xl border border-border flex items-center justify-center transition-all duration-500 group-hover/btn:bg-foreground group-hover/btn:text-background group-hover/btn:rotate-90">
                      <ArrowUpRight className="w-5 h-5 -rotate-45" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 噪点纹理背景 */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}
