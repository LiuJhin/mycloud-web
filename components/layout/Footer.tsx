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
    <footer className="relative border-t border-border/40 bg-card py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* 品牌信息与订阅 */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              MyCloud
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              领先的云端数字化基建，助力企业在 AI 时代实现敏捷创新与安全增长。
            </p>

            {/* 邮件订阅区域 */}
            <div className="mt-8">
              <h5 className="text-sm font-medium">订阅我们的技术周刊</h5>
              <form className="mt-3 flex max-w-sm items-center gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="h-10 flex-1 rounded-full border border-border bg-background px-4 text-xs focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button className="h-10 rounded-full bg-primary px-6 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90">
                  订阅
                </button>
              </form>
            </div>
          </div>

          {/* 动态渲染链接组 */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                {group.title}
              </h4>
              <ul className="mt-6 space-y-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      <span className="relative">
                        {link.label}
                        {/* 悬浮时的下划线动画 */}
                        <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 底部版权与合规区 */}
        <div className="mt-16 border-t border-border/40 pt-8 lg:mt-24">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-xs text-muted-foreground">
              <p>
                &copy; {new Date().getFullYear()} MyCloud Inc. All rights
                reserved.
              </p>
              <div className="mt-2 flex gap-4">
                <Link href="/privacy" className="hover:underline">
                  隐私政策
                </Link>
                <Link href="/terms" className="hover:underline">
                  服务协议
                </Link>
                <Link href="/icp" className="hover:underline">
                  京ICP备XXXXXXXX号
                </Link>
              </div>
            </div>

            {/* 社交媒体入口（示意） */}
            <div className="flex items-center space-x-5 text-muted-foreground">
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

// 占位图标组件
function SocialIcon({ platform }: { platform: string }) {
  return (
    <div className="cursor-pointer transition-colors hover:text-foreground">
      <span className="text-xs">{platform}</span>
    </div>
  );
}
