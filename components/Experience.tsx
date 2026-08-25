import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border px-6 py-10 dark:border-white/10 scroll-mt-20"
    >
      <div className="mx-auto max-w-page">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-wide text-muted-2 dark:text-muted">
          experience
        </p>

        {experience.map((job, i) => (
          <div
            key={job.role + job.org}
            className={`flex gap-4 py-[22px] ${
              i !== 0 ? "border-t border-border dark:border-white/10" : "pt-0"
            }`}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-border bg-surface text-base dark:border-white/10 dark:bg-white/5">
              {job.icon}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[15px] font-semibold">{job.role}</span>
                  {job.badge && (
                    <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-muted dark:border-white/15 dark:text-muted-2">
                      {job.badge}
                    </span>
                  )}
                </div>
                <span className="whitespace-nowrap font-mono text-xs text-muted-2 dark:text-muted">
                  {job.period}
                </span>
              </div>
              <p className="mt-[3px] text-[13px] text-muted dark:text-muted-2">
                {job.org} · {job.location}
              </p>
              <p className="mt-2.5 max-w-[58ch] text-sm leading-relaxed text-ink/80 dark:text-paper/80">
                {job.description}
              </p>
              {job.bullets.length > 0 && (
                <ul className="mt-3 grid gap-1.5">
                  {job.bullets.map((bullet) => (
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
              )}
              {job.link && (
                <a
                  href={job.link.href}
                  className="mt-3.5 inline-block rounded-md border border-border px-2.5 py-1 font-mono text-[11px] text-muted hover:border-muted-2 hover:text-ink dark:border-white/15 dark:text-muted-2 dark:hover:text-paper"
                >
                  {job.link.label} ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
