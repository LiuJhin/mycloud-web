"use client";

import React from "react";
import Link from "next/link";

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
    <footer className="relative border-t border-[var(--border)] bg-[var(--background)] py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
          {/* 左侧：Logo + 徽章 (锚点区) */}
          <div className="lg:col-span-3 space-y-12">
            <div className="space-y-8">
              <Link
                href="/"
                className="text-4xl font-black tracking-tighter uppercase italic block"
              >
                MyCloud<span className="text-[var(--primary)]">.</span>
              </Link>
              {/* 徽章放在 Logo 下面 */}
              <div className="flex flex-wrap gap-6 opacity-60 hover:opacity-100 transition-opacity">
                <img
                  src="/Home/aws_badge1.png"
                  className="h-14 w-auto object-contain"
                  alt="AWS Partner"
                />
                <img
                  src="/Home/image-4.png"
                  className="h-14 w-auto object-contain"
                  alt="AWS Certification"
                />
              </div>
            </div>
            <p className="text-[13px] leading-relaxed text-[var(--muted-foreground)]">
              领先的云端数字化基建，助力企业在 AI 时代实现敏捷创新与安全增长。
            </p>
          </div>

          {/* 右侧：导航栏 */}
          <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-3 gap-12">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="text-[11px] font-black uppercase tracking-widest mb-8 text-[var(--foreground)]">
                  {group.title}
                </h4>
                <ul className="space-y-4">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[14px] text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 底部版权与法律声明 */}
        <div className="border-t border-[var(--border)] pt-12 space-y-8">
          <div className="max-w-4xl text-[10px] leading-[1.8] text-[var(--muted-foreground)] opacity-70 font-mono">
            MYCloud only provides hybrid cloud services and cloud communication
            services. Any behavior of users using Miaoyan Cloud does not
            represent the will and opinions of Miaoyan Cloud and has nothing to
            do with the position of Miaoyan Cloud. Users are strictly prohibited
            from using Miaoyan Cloud to engage in any illegal or criminal
            behavior. The user is responsible for any related responsibilities
            arising therefrom, and MYCloud does not bear any legal
            responsibility for this.
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-[10px] font-mono uppercase tracking-widest text-[var(--muted-foreground)]">
              <span>
                &copy; {new Date().getFullYear()} MYCLOUD GLOBAL LIMITED.
              </span>
              <span>
                RM 1001(H), 10/F., HARBOUR CRYSTAL CENTRE, 100 GRANVILLE ROAD,
                TSIM SHA TSUI, HONG KONG
              </span>
            </div>

            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest">
              <SocialIcon platform="Twitter" />
              <SocialIcon platform="GitHub" />
              <SocialIcon platform="LinkedIn" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ platform }: { platform: string }) {
  return (
    <a
      href="#"
      className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
    >
      {platform}
    </a>
  );
}
