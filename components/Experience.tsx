"use client";

import { experienceMeta } from "@/data/shared";
import { useI18n } from "@/lib/i18n";

export default function Experience() {
  const { t } = useI18n();

  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-border px-6 py-10 dark:border-white/10"
    >
      <div className="mx-auto max-w-page">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-wide  text-accent">
          {t.sections.experience}
        </p>

        {experienceMeta.map((job, i) => {
          const copy = t.experience[job.id];
          return (
            <div
              key={job.id}
              className={`flex gap-4 py-[22px] ${
                i !== 0 ? "border-t border-border dark:border-white/10" : "pt-0"
              }`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-[10px] border border-border bg-surface dark:border-white/10 dark:bg-white/5">
                <img src={job.logo} alt="" className="h-7 w-7 object-contain" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="text-[15px] font-semibold">{copy.role}</span>
                  <span className="whitespace-nowrap font-mono text-xs text-muted-2 dark:text-muted">
                    {job.period}
                  </span>
                </div>
                <p className="mt-[3px] text-[13px] text-muted dark:text-muted-2">
                  {copy.org} · {copy.location}
                </p>
                <p className="mt-2.5 max-w-[58ch] text-sm leading-relaxed text-ink/80 dark:text-paper/80">
                  {copy.description}
                </p>
                <ul className="mt-3 grid gap-1.5">
                  {copy.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="relative pl-4 text-[13px] text-muted dark:text-muted-2"
                    >
                      <span className="absolute left-0 text-muted-2 dark:text-muted">
                        ›
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <a
                  href={job.linkHref}
                  className="mt-3.5 inline-block rounded-md border border-border px-2.5 py-1 font-mono text-[11px] text-muted hover:border-muted-2 hover:text-ink dark:border-white/15 dark:text-muted-2 dark:hover:text-paper"
                >
                  {copy.link} ↗
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
