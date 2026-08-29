"use client";

import { projectMeta } from "@/data/shared";
import { useI18n } from "@/lib/i18n";

export default function Projects() {
  const { t } = useI18n();

  return (
    <section
      id="work"
      className="scroll-mt-20 border-t border-border px-6 py-10 dark:border-white/10"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-wide text-accent">
          {t.sections.projects}
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projectMeta.map((project) => {
            const copy = t.projects[project.id];
            const visibleTags = project.tags.slice(0, 5);
            const extra = project.tags.length - visibleTags.length;

            return (
              <article
                key={project.id}
                className="flex h-full min-h-[260px] flex-col rounded-xl border border-border p-5 dark:border-white/10"
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <span className="rounded-md border border-border px-2 py-[3px] font-mono text-[11px] text-muted dark:border-white/15 dark:text-muted-2">
                    {copy.category}
                  </span>
                  <a
                    href={project.href}
                    target={project.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="shrink-0 font-mono text-xs text-muted hover:text-ink dark:text-muted-2 dark:hover:text-paper"
                  >
                    {copy.link} ↗
                  </a>
                </div>

                <h3 className="mb-2 text-base font-semibold">{copy.title}</h3>
                <p className="mb-3 line-clamp-3 text-sm leading-relaxed text-ink/80 dark:text-paper/80">
                  {copy.description}
                </p>

                <div className="mb-3 flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-muted dark:text-muted-2">
                  {copy.stats.map((stat) => (
                    <span key={stat} className="inline-flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {stat}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-2">
                  {visibleTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border px-2 py-[3px] font-mono text-[11px] text-muted dark:border-white/15 dark:text-muted-2"
                    >
                      {tag}
                    </span>
                  ))}
                  {extra > 0 && (
                    <span className="rounded-md border border-border px-2 py-[3px] font-mono text-[11px] text-muted-2 dark:border-white/15">
                      +{extra}
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
