"use client";

import { profileMeta } from "@/data/shared";
import { useI18n } from "@/lib/i18n";

export default function Hero() {
  const { t } = useI18n();
  const { hero } = t;

  return (
    <section id="top" className="scroll-mt-20 px-6 pb-10 pt-14 sm:pt-16">
      <div className="mx-auto max-w-page">
        <p className="mb-[18px] font-mono text-xs uppercase tracking-wide text-muted dark:text-muted-2">
          {hero.tagline.split(" · ").map((part, i, arr) => (
            <span key={part}>
              {part}
              {i < arr.length - 1 && (
                <span className="mx-2 text-muted-2 dark:text-muted">·</span>
              )}
            </span>
          ))}
        </p>

        <h1 className="mb-3 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
          {hero.name}
        </h1>
        <p className="mb-5 text-[15px] font-medium text-ink/70 dark:text-paper/70">
          {hero.role}
        </p>

        <ul className="mb-6 flex flex-wrap gap-2">
          {[hero.location, hero.years, hero.availability].map((item) => (
            <li
              key={item}
              className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted dark:border-white/15 dark:text-muted-2"
            >
              {item}
            </li>
          ))}
        </ul>

        {hero.paragraphs.map((p, i) => (
          <p
            key={i}
            className="mb-4 max-w-[60ch] text-[16px] leading-relaxed text-ink/80 dark:text-paper/80"
          >
            {p}
          </p>
        ))}

        <ul className="mt-1 mb-6 grid gap-1.5">
          {hero.highlights.map((item) => (
            <li
              key={item}
              className="relative pl-4 text-[13px] text-muted dark:text-muted-2"
            >
              <span className="absolute left-0 text-muted-2">›</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap gap-2.5">
          <a
            href="/#writing"
            className="rounded-lg border border-ink bg-ink px-4 py-2.5 text-sm text-paper transition-opacity hover:opacity-85 dark:border-paper dark:bg-paper dark:text-ink"
          >
            {hero.actions.writing}
          </a>
          <a
            href="/#work"
            className="rounded-lg border border-border px-4 py-2.5 text-sm hover:bg-surface dark:border-white/15 dark:hover:bg-white/5"
          >
            {hero.actions.projects}
          </a>
          <a
            href="/course"
            className="rounded-lg border border-border px-4 py-2.5 text-sm hover:bg-surface dark:border-white/15 dark:hover:bg-white/5"
          >
            {hero.actions.course}
          </a>
          <a
            href={`mailto:${profileMeta.email}`}
            className="rounded-lg border border-border px-4 py-2.5 text-sm hover:bg-surface dark:border-white/15 dark:hover:bg-white/5"
          >
            {hero.actions.email}
          </a>
        </div>
      </div>
    </section>
  );
}
