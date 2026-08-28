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
      <div className="mx-auto max-w-page">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-wide text-muted-2 dark:text-muted">
          {t.sections.projects}
        </p>

        {projectMeta.map((project) => {
          const copy = t.projects[project.id];
          return (
            <div
              key={project.id}
              className="mb-4 rounded-xl border border-border p-[22px] dark:border-white/10"
            >
              <div className="mb-3.5 flex items-center justify-between">
                <span className="rounded-md border border-border px-2 py-[3px] font-mono text-[11px] text-muted dark:border-white/15 dark:text-muted-2">
                  {copy.category}
                </span>
                <a
                  href={project.href}
                  className="font-mono text-xs text-muted hover:text-ink dark:text-muted-2 dark:hover:text-paper"
                >
                  {copy.link} ↗
                </a>
              </div>
              <h3 className="mb-2 text-base font-semibold">{copy.title}</h3>
              <p className="mb-3.5 max-w-[60ch] text-sm leading-relaxed text-ink/80 dark:text-paper/80">
                {copy.description}
              </p>
              <div className="mb-3.5 flex flex-wrap gap-3.5 text-xs text-muted dark:text-muted-2">
                {copy.stats.map((stat) => (
                  <span key={stat} className="inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {stat}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border px-2 py-[3px] font-mono text-[11px] text-muted dark:border-white/15 dark:text-muted-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
