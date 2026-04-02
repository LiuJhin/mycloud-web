"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Locale = "zh" | "en";

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
  | "products.ai";

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
      return messages[locale][key] || key;
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
