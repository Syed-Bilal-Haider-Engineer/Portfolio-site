"use client";

import { LOCALES } from "@/data/i18n";
import { useI18n } from "@/lib/i18n";

export default function LanguageToggle() {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t.language.switch}
      className="flex overflow-hidden rounded-full border border-border text-[11px] font-mono dark:border-white/15"
    >
      {LOCALES.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => setLocale(item.id)}
          className={
            locale === item.id
              ? "bg-ink px-2.5 py-1 text-paper dark:bg-paper dark:text-ink"
              : "px-2.5 py-1 text-muted hover:text-ink dark:text-muted-2 dark:hover:text-paper"
          }
          aria-pressed={locale === item.id}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
