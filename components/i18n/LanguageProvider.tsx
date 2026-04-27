"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Locale = "zh" | "en";

type TranslationKeys =
  | "nav.home"
  | "nav.solutions"
  | "nav.products"
  | "nav.about"
  | "nav.contact"
  | "button.consult"
  | "hero.title"
  | "hero.subtitle"
  | "hero.ctaStart"
  | "hero.ctaLearn"
  | "products.title"
  | "products.cloud"
  | "products.ai"
  | "wellArchitected.tag"
  | "wellArchitected.title"
  | "wellArchitected.subtitle"
  | "wellArchitected.desc"
  | "wellArchitected.cta"
  | "wellArchitected.pillar.oe.title"
  | "wellArchitected.pillar.oe.desc"
  | "wellArchitected.pillar.sec.title"
  | "wellArchitected.pillar.sec.desc"
  | "wellArchitected.pillar.rel.title"
  | "wellArchitected.pillar.rel.desc"
  | "wellArchitected.pillar.perf.title"
  | "wellArchitected.pillar.perf.desc"
  | "wellArchitected.pillar.cost.title"
  | "wellArchitected.pillar.cost.desc";

const messages: Record<Locale, Record<TranslationKeys, string>> = {
  zh: {
    "nav.home": "首页",
    "nav.solutions": "解决方案",
    "nav.products": "产品中心",
    "nav.about": "关于我们",
    "nav.contact": "联系我们",
    "button.consult": "免费咨询",
    "hero.title": "引领未来的",
    "hero.subtitle":
      "MyCloud 为您的企业提供安全、高效、可扩展的云计算解决方案，助力数字化转型。",
    "hero.ctaStart": "开始使用",
    "hero.ctaLearn": "了解更多",
    "products.title": "我们的产品",
    "products.cloud": "云产品",
    "products.ai": "AI产品",
    "wellArchitected.tag": "架构评估",
    "wellArchitected.title": "架构回顾",
    "wellArchitected.subtitle": "Well-Architected Review",
    "wellArchitected.desc":
      "基于云原生最佳实践，我们为您提供深度的架构评估。从五个维度重构您的数字化基建，确保每一比特算力都发挥最大价值。",
    "wellArchitected.cta": "立即开启架构评估",
    "wellArchitected.pillar.oe.title": "卓越运营",
    "wellArchitected.pillar.oe.desc":
      "通过自动化与持续改进，实现业务流程的高效交付与监控。",
    "wellArchitected.pillar.sec.title": "安全合规",
    "wellArchitected.pillar.sec.desc":
      "全链路硬件级加密与零信任架构，守护您的核心数字资产。",
    "wellArchitected.pillar.rel.title": "可靠性",
    "wellArchitected.pillar.rel.desc":
      "多可用区容灾与自愈系统，确保业务 99.99% 的高可用性。",
    "wellArchitected.pillar.perf.title": "性能效率",
    "wellArchitected.pillar.perf.desc":
      "自适应资源分配算法，在业务高峰期提供极致的计算性能。",
    "wellArchitected.pillar.cost.title": "成本优化",
    "wellArchitected.pillar.cost.desc":
      "精细化计费与算力调度，将非必要的资源损耗降低 40% 以上。",
  },
  en: {
    "nav.home": "Home",
    "nav.solutions": "Solutions",
    "nav.products": "Products",
    "nav.about": "About",
    "nav.contact": "Contact",
    "button.consult": "Free Consultation",
    "hero.title": "Leading the Future of Cloud Services",
    "hero.subtitle":
      "MyCloud provides secure, efficient and scalable cloud solutions for enterprises.",
    "hero.ctaStart": "Get Started",
    "hero.ctaLearn": "Learn More",
    "products.title": "Our Products",
    "products.cloud": "Cloud Products",
    "products.ai": "AI Products",
    "wellArchitected.tag": "Review",
    "wellArchitected.title": "Well-Architected",
    "wellArchitected.subtitle": "Review",
    "wellArchitected.desc":
      "Based on cloud-native best practices, we provide you with an in-depth architecture assessment to rebuild your infrastructure.",
    "wellArchitected.cta": "Start Review Now",
    "wellArchitected.pillar.oe.title": "Operational Excellence",
    "wellArchitected.pillar.oe.desc":
      "Efficiently deliver and monitor business processes through automation and continuous improvement.",
    "wellArchitected.pillar.sec.title": "Security",
    "wellArchitected.pillar.sec.desc":
      "Full-link hardware-level encryption and zero-trust architecture to protect your core digital assets.",
    "wellArchitected.pillar.rel.title": "Reliability",
    "wellArchitected.pillar.rel.desc":
      "Multi-AZ disaster recovery and self-healing systems ensure 99.99% high availability.",
    "wellArchitected.pillar.perf.title": "Performance Efficiency",
    "wellArchitected.pillar.perf.desc":
      "Adaptive resource allocation algorithms provide extreme computing performance during peak periods.",
    "wellArchitected.pillar.cost.title": "Cost Optimization",
    "wellArchitected.pillar.cost.desc":
      "Refined billing and compute scheduling to reduce unnecessary resource loss by over 40%.",
  },
};

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKeys) => string;
  supported: Locale[];
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("zh");

  useEffect(() => {
    const saved = localStorage.getItem("mycloud-locale") as Locale | null;
    if (saved && (saved === "zh" || saved === "en")) {
      setLocale(saved);
    }
  }, []);

  const value = useMemo<LanguageContextValue>(() => {
    const t = (key: TranslationKeys): string => {
      const group = messages[locale];
      if (!group) return key;
      return group[key] || key;
    };

    const setLocaleWithStorage = (next: Locale) => {
      setLocale(next);
      localStorage.setItem("mycloud-locale", next);
    };

    return {
      locale,
      setLocale: setLocaleWithStorage,
      t,
      supported: ["zh", "en"],
    };
  }, [locale]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}

export function useTranslation() {
  const { t } = useLanguage();
  return t;
}
