"use client";

import React from "react";
import Link from "next/link";

// 建议将链接抽取出来，方便维护
const footerLinks = [
  {
    title: "服务中心",
    links: [
      { label: "云计算服务", href: "/services/cloud" },
      { label: "全球边缘计算", href: "/services/edge" },
      { label: "AI 智算平台", href: "/services/ai" },
      { label: "安全合规治理", href: "/services/security" },
    ],
  },
  {
    title: "核心产品",
    links: [
      { label: "云原生容器", href: "/products/k8s" },
      { label: "分布式数据库", href: "/products/db" },
      { label: "云存储引擎", href: "/products/storage" },
      { label: "开发者工具", href: "/products/dev-tools" },
    ],
  },
  {
    title: "关于我们",
    links: [
      { label: "公司简介", href: "/about" },
      { label: "加入我们", href: "/careers" },
      { label: "合作伙伴", href: "/partners" },
      { label: "新闻资讯", href: "/news" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--background)] py-16 lg:py-28 selection:bg-[var(--primary)]/10">
      <div className="container mx-auto px-6 lg:px-12">
        {/* 1. AWS 伙伴区域 (Certified Partnership Strip) */}
        {/* scaled: Increased spacing, padding, and font size. Gray-to-color on hover. */}
        <div className="mb-20 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 border border-[var(--border)] bg-[var(--card)] p-8 lg:p-10">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--muted-foreground)]">
              MyCloud Labs // Certified Infrastructure Partner
            </span>
          </div>
          <div className="flex items-center gap-8 border-l border-[var(--border)] pl-10 h-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <img
              src="/Home/aws_badge1.png"
              alt="AWS Partner"
              className="h-full w-auto object-contain"
            />
            <img
              src="/Home/image-4.png"
              alt="AWS Certification"
              className="h-full w-auto object-contain"
            />
          </div>
        </div>

        {/* 2. 主页脚网格 (Main Footer Grid) */}
        {/* scaled: Increased gap and font sizes for links. */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-5 mb-24">
          {/* 品牌信息与订阅 */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <Link
                href="/"
                className="text-3xl font-black tracking-tighter uppercase italic text-[var(--foreground)]"
              >
                MyCloud<span className="text-[var(--primary)]">.</span>
              </Link>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-[var(--muted-foreground)]">
                领先的云端数字化基建，助力企业在 AI 时代实现敏捷创新与安全增长。
              </p>
            </div>

            {/* 邮件订阅区域 (Newsletter Subscription) */}
            {/* scaled: Full border design with clear, readable fonts. */}
            <div className="space-y-4">
              <h5 className="text-sm font-bold uppercase tracking-widest text-[var(--foreground)]">
                订阅我们的技术周刊 (System_Log)
              </h5>
              <form className="flex max-w-md items-center border border-[var(--border)] bg-[var(--card)] p-1 hover:border-[var(--primary)] transition-colors">
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full bg-transparent px-4 py-3 text-sm outline-none placeholder:opacity-30 placeholder:text-[var(--muted-foreground)]"
                />
                <button
                  type="submit"
                  className="flex-shrink-0 bg-[var(--foreground)] px-8 py-3 text-xs font-black uppercase tracking-widest text-[var(--background)] hover:bg-[var(--primary)] transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* 动态渲染链接组 */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--foreground)]">
                {group.title}
              </h4>
              <ul className="mt-8 space-y-5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-[15px] font-medium text-[var(--muted-foreground)] transition-colors hover:text-[var(--primary)]"
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--primary)] transition-all duration-300 group-hover:w-full" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 3. 底部版权与合规区 (Bottom Legal/Compliance Bar) */}
        {/* scaled: Readable footer fonts and explicit social labels. */}
        <div className="mt-16 border-t border-[var(--border)] pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div className="text-sm text-[var(--muted-foreground)] space-y-4 font-mono uppercase tracking-widest">
            <p>
              &copy; {new Date().getFullYear()} MyCloud Inc. All rights
              reserved.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-2 opacity-60 text-xs">
              <Link
                href="/privacy"
                className="hover:text-[var(--foreground)] hover:underline"
              >
                隐私政策
              </Link>
              <Link
                href="/terms"
                className="hover:text-[var(--foreground)] hover:underline"
              >
                服务协议
              </Link>
              <Link
                href="/icp"
                className="hover:text-[var(--foreground)] hover:underline"
              >
                京ICP备XXXXXXXX号
              </Link>
            </div>
          </div>

          {/* 社交媒体入口 (Social Entry Points) */}
          <div className="flex gap-10 text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--muted-foreground)]">
            <SocialIcon platform="Twitter" />
            <SocialIcon platform="GitHub" />
            <SocialIcon platform="LinkedIn" />
          </div>
        </div>
      </div>
    </footer>
  );
}

// 社交图标组件 (Social Icon Component)
function SocialIcon({ platform }: { platform: string }) {
  return (
    <a
      href="#"
      className="cursor-pointer transition-colors hover:text-[var(--primary)]"
    >
      {platform}
    </a>
  );
}
