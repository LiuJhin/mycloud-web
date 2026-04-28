"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import zhMessages from "@/locales/zh.json";
import enMessages from "@/locales/en.json";

export type Locale = "zh" | "en";

const messages: Record<Locale, Record<string, unknown>> = {
  zh: zhMessages,
  en: enMessages,
};

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  supported: Locale[];
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split(".");
  let result: unknown = obj;
  for (const key of keys) {
    if (result && typeof result === "object" && key in result) {
      result = (result as Record<string, unknown>)[key];
    } else {
      return path;
    }
  }
  return typeof result === "string" ? result : path;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("zh");

  useEffect(() => {
    const saved = localStorage.getItem("mycloud-locale") as Locale | null;
    if (saved && (saved === "zh" || saved === "en")) {
      setLocale(saved);
    }
  }, []);

  const value = useMemo<LanguageContextValue>(() => {
    const t = (key: string): string => {
      const group = messages[locale];
      if (!group) return key;
      return getNestedValue(group as Record<string, unknown>, key);
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
