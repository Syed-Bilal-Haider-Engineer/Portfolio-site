"use client";

import { educationMeta } from "@/data/shared";
import { useI18n } from "@/lib/i18n";

export default function Education() {
  const { t } = useI18n();

  return (
    <section
      id="education"
      className="scroll-mt-20 border-t border-border px-6 py-10 dark:border-white/10"
    >
      <div className="mx-auto max-w-page">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-wide text-muted-2 dark:text-muted">
          {t.sections.education}
        </p>

        {educationMeta.map((item, i) => {
          const copy = t.education[item.id];
          return (
            <div
              key={item.id}
              className={`flex gap-4 py-[22px] ${
                i !== 0 ? "border-t border-border dark:border-white/10" : "pt-0"
              }`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-[10px] border border-border bg-surface dark:border-white/10 dark:bg-white/5">
                <img src={item.logo} alt="" className="h-7 w-7 object-contain" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="text-[15px] font-semibold">{copy.title}</span>
                  <span className="whitespace-nowrap font-mono text-xs text-muted-2 dark:text-muted">
                    {item.period}
                  </span>
                </div>
                <p className="mt-[3px] text-[13px] text-muted dark:text-muted-2">
                  {copy.org} · {copy.location}
                </p>
                <p className="mt-2.5 max-w-[58ch] text-sm leading-relaxed text-ink/80 dark:text-paper/80">
                  {copy.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
