"use client";

import Link from "next/link";
import { courseCardsMeta } from "@/data/shared";
import { useI18n } from "@/lib/i18n";

export default function Courses() {
  const { t } = useI18n();

  return (
    <section
      id="courses"
      className="scroll-mt-20 border-t border-border px-6 py-10 dark:border-white/10"
    >
      <div className="mx-auto max-w-page">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-wide text-muted-2 dark:text-muted">
          {t.sections.courses}
        </p>

        {courseCardsMeta.map((course) => {
          const copy = t.courses[course.id];
          const isPage = course.href.startsWith("/courses/");
          const CardInner = (
            <>
              <div
                className="flex h-[150px] items-center justify-center p-5 text-center font-display text-xl font-bold leading-tight text-white"
                style={{ background: course.gradient }}
              >
                {copy.title}
              </div>
              <div className="p-[22px]">
                <div className="mb-3 flex flex-wrap gap-2">
                  {copy.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-md border border-border px-2 py-[3px] font-mono text-[11px] text-muted dark:border-white/15 dark:text-muted-2"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <h3 className="mb-2 text-base font-semibold">{copy.title}</h3>
                <p className="mb-4 max-w-[60ch] text-sm leading-relaxed text-ink/80 dark:text-paper/80">
                  {copy.description}
                </p>
                {"open" in copy && copy.open && (
                  <p className="mb-4 font-mono text-[11px] text-accent-dark dark:text-accent">
                    {copy.open} ↗
                  </p>
                )}
                <div className="flex flex-wrap gap-[18px] border-t border-border pt-3.5 dark:border-white/10">
                  {copy.stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col gap-0.5">
                      <b className="text-[15px] font-semibold">{stat.value}</b>
                      <span className="font-mono text-[10px] uppercase tracking-wide text-muted-2 dark:text-muted">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          );

          if (isPage) {
            return (
              <Link
                key={course.id}
                href={course.href}
                className="mb-4 block overflow-hidden rounded-xl border border-border transition-opacity hover:opacity-95 dark:border-white/10"
              >
                {CardInner}
              </Link>
            );
          }

          return (
            <div
              key={course.id}
              className="mb-4 overflow-hidden rounded-xl border border-border dark:border-white/10"
            >
              {CardInner}
            </div>
          );
        })}
      </div>
    </section>
  );
}
