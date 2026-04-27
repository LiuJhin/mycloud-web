"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLanguage, type Locale } from "@/components/i18n/LanguageProvider";
import { Globe, ChevronDown } from "lucide-react";

const languages: { code: Locale; label: string; sub: string }[] = [
  { code: "zh", label: "中文", sub: "Mandarin" },
  { code: "en", label: "English", sub: "Global" },
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languages.find((l) => l.code === locale) || languages[0];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* 1. 触发器：极简、呼吸感 */}
      <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all hover:opacity-70">
        <Globe className="w-4 h-4 stroke-[1.5]" />
        <span className="tracking-wide uppercase text-[11px] font-semibold">
          {currentLang.code}
        </span>
        <ChevronDown
          className={`w-3 h-3 opacity-30 transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* 2. 悬浮面板：Apple 风格的磨砂玻璃 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 10, filter: "blur(10px)" }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="absolute right-0 mt-1 w-48 overflow-hidden rounded-2xl border border-slate-200/50 dark:border-white/10 bg-white/70 dark:bg-[#0c0c0c]/70 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-50"
          >
            <div className="p-1.5">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLocale(lang.code);
                    setIsOpen(false);
                  }}
                  className={`relative w-full flex items-center justify-between px-4 py-3 text-left transition-all duration-300 rounded-xl group ${
                    locale === lang.code
                      ? "bg-slate-900/5 dark:bg-white/10"
                      : "hover:bg-slate-900/5 dark:hover:bg-white/5"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-[13px] font-medium tracking-tight text-slate-900 dark:text-white">
                      {lang.label}
                    </span>
                    <span className="text-[10px] text-slate-400 dark:text-zinc-500 font-light italic">
                      {lang.sub}
                    </span>
                  </div>

                  {/* 激活状态的微光圆点 */}
                  {locale === lang.code && (
                    <motion.div
                      layoutId="activeDot"
                      className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary),0.8)]"
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
