"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"; // 确保引入 motion
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useTranslation } from "@/components/i18n/LanguageProvider";
import { ArrowUpRight, Zap } from "lucide-react";

gsap.registerPlugin(useGSAP);

const navItems = [
  { labelKey: "nav.home", href: "/" },
  {
    labelKey: "nav.solutions",
    href: "/solutions",
    children: [
      {
        id: "01",
        title: "AI MATRIX",
        desc: "Neural Compute Cluster",
        href: "/solutions/ai",
      },
      {
        id: "02",
        title: "EDGE NODE",
        desc: "Global Low-latency Mesh",
        href: "/solutions/edge",
      },
      {
        id: "03",
        title: "SECURE OS",
        desc: "Zero-Trust Protocol",
        href: "/solutions/security",
      },
    ],
  },
  {
    labelKey: "nav.products",
    href: "/products",
    children: [
      {
        id: "01",
        title: "COMPUTE",
        desc: "Elastic High-Perf Instances",
        href: "/products/core",
      },
      {
        id: "02",
        title: "VECTOR DB",
        desc: "Architected for LLM",
        href: "/products/db",
      },
    ],
  },
  { labelKey: "nav.about", href: "/about" },
];

export function Header() {
  const t = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP: 驱动子菜单内容的“感应式”位移
  useGSAP(
    () => {
      if (activeItem) {
        gsap.fromTo(
          ".menu-pane",
          { opacity: 0, y: 15, rotateX: -5, transformOrigin: "top" },
          { opacity: 1, y: 0, rotateX: 0, duration: 0.5, ease: "expo.out" },
        );
        gsap.fromTo(
          ".menu-item-anim",
          { opacity: 0, x: 15 },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            stagger: 0.06,
            ease: "power3.out",
            delay: 0.1,
          },
        );
      }
    },
    { dependencies: [activeItem], scope: container },
  );

  return (
    <header
      ref={container}
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-700 ease-in-out px-8",
        isScrolled ? "pt-4" : "pt-8",
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-[1400px] flex items-center justify-between transition-all duration-500 rounded-[24px] px-8",
          isScrolled
            ? "h-14 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-2xl border border-black/5 dark:border-white/5 shadow-sm"
            : "h-20 bg-transparent",
        )}
      >
        {/* LOGO: 极简工业感 */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative w-8 h-8 bg-zinc-900 dark:bg-white flex items-center justify-center rounded-lg overflow-hidden transition-transform group-hover:scale-110">
            <Zap className="w-4 h-4 text-white dark:text-black fill-current" />
          </div>
          <span className="text-[13px] font-black tracking-[0.2em] uppercase leading-none">
            MYCLOUD
          </span>
        </Link>

        {/* 导航中心: 利用 Framer Motion 做平滑 Pill 切换 */}
        <nav
          className="hidden md:flex items-center gap-1"
          onMouseLeave={() => setActiveItem(null)}
        >
          {navItems.map((item) => (
            <div
              key={item.href}
              className="relative py-4"
              onMouseEnter={() => setActiveItem(item.href)}
            >
              <Link
                href={item.href}
                className={cn(
                  "relative px-6 py-2 text-[11px] font-black tracking-widest uppercase transition-colors z-10",
                  activeItem === item.href
                    ? "text-white dark:text-black"
                    : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100",
                )}
              >
                {t(item.labelKey)}
              </Link>

              {/* 共享布局滑块 (Framer Motion) */}
              {activeItem === item.href && (
                <motion.div
                  layoutId="active-pill-bg"
                  className="absolute inset-0 m-auto h-8 bg-zinc-900 dark:bg-white rounded-full -z-0"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}

              {/* 子菜单设计: 非对称、大留白面板 */}
              <AnimatePresence>
                {item.children && activeItem === item.href && (
                  <div className="menu-pane absolute left-0 top-full pt-6 w-[420px]">
                    <div className="relative overflow-hidden bg-white/95 dark:bg-[#080808]/95 backdrop-blur-3xl rounded-[32px] border border-black/5 dark:border-white/5 p-8 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)]">
                      {/* 背景装饰字母 */}
                      <div className="absolute -right-6 -bottom-6 text-[160px] font-black text-black/[0.02] dark:text-white/[0.02] select-none uppercase leading-none">
                        {item.labelKey.split(".")[1][0]}
                      </div>

                      <div className="relative z-10 space-y-10">
                        {item.children.map((child) => (
                          <Link
                            key={child.id}
                            href={child.href}
                            className="menu-item-anim group/item flex items-start gap-6 transition-transform hover:translate-x-2"
                          >
                            <span className="text-[9px] font-mono text-zinc-400 pt-1 tracking-tighter opacity-50 group-hover/item:opacity-100 group-hover/item:text-primary transition-all">
                              /{child.id}
                            </span>
                            <div className="flex-1 space-y-1.5 border-b border-black/5 dark:border-white/5 pb-6">
                              <div className="flex items-center justify-between">
                                <h4 className="text-[15px] font-black tracking-tight text-zinc-900 dark:text-zinc-100 uppercase">
                                  {child.title}
                                </h4>
                                <ArrowUpRight className="w-4 h-4 text-zinc-300 transition-all group-hover/item:text-zinc-900 dark:group-hover/item:text-white group-hover/item:-translate-y-1 group-hover/item:translate-x-1" />
                              </div>
                              <p className="text-[11px] text-zinc-400 font-medium tracking-tight leading-relaxed max-w-[240px]">
                                {child.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* 右侧工具栏 */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>

          <button className="hidden sm:flex h-10 items-center justify-center rounded-full bg-zinc-900 dark:bg-white px-8 text-[11px] font-black uppercase tracking-[0.2em] text-white dark:text-black transition-all hover:scale-[1.05] active:scale-95 shadow-xl shadow-black/10">
            {t("button.consult")}
          </button>
        </div>
      </div>
    </header>
  );
}
