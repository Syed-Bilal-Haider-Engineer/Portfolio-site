import { openSource } from "@/data/content";

export default function OpenSource() {
  return (
    <section
      id="opensource"
      className="scroll-mt-20 border-t border-border px-6 py-10 dark:border-white/10"
    >
      <div className="mx-auto max-w-page">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-wide text-muted-2 dark:text-muted">
          open source contributions
        </p>

        {openSource.map((item, i) => (
          <div
            key={item.title}
            className={`flex gap-4 py-[22px] ${
              i !== 0
                ? "border-t border-border dark:border-white/10"
                : "pt-0"
            }`}
          >
            {/* Company / Project Logo */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-[10px] border border-border bg-surface dark:border-white/10 dark:bg-white/5">
              <img
                src={item.logo}
                alt={`${item.title} logo`}
                className="h-7 w-7 object-contain"
              />
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="text-[15px] font-semibold">
                  {item.title}
                </span>

                <span className="whitespace-nowrap font-mono text-xs text-muted-2 dark:text-muted">
                  {item.period}
                </span>
              </div>

              <p className="mt-[3px] text-[13px] text-muted dark:text-muted-2">
                {item.project}
                {item.type && ` · ${item.type}`}
              </p>

              {item.description && (
                <p className="mt-2.5 max-w-[58ch] text-sm leading-relaxed text-ink/80 dark:text-paper/80">
                  {item.description}
                </p>
              )}

              {/* Individual PRs */}
              {item.contributions?.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {item.contributions.map((contribution) => (
                    <li
                      key={contribution.href}
                      className="relative pl-4 text-[13px] leading-relaxed"
                    >
                      <span className="absolute left-0 top-[9px] h-1 w-1 rounded-full bg-muted-2 dark:bg-muted" />

                      <a
                        href={contribution.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-ink/75 transition-colors hover:text-ink dark:text-paper/75 dark:hover:text-paper"
                      >
                        {contribution.title}
                      </a>

                      <span className="ml-2 font-mono text-[10px] text-muted-2 dark:text-muted">
                        {contribution.number}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {/* All PRs */}
              {item.link && (
                <a
                  href={item.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex font-mono text-[11px] text-muted underline decoration-border underline-offset-4 transition-colors hover:text-ink dark:decoration-white/20 dark:hover:text-paper"
                >
                  {item.link.label} ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}