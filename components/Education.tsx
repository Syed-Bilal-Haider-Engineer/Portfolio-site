import { education } from "@/data/content";

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-20 border-t border-border px-6 py-10 dark:border-white/10"
    >
      <div className="mx-auto max-w-page">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-wide text-muted-2 dark:text-muted">
          education
        </p>

        {education.map((item, i) => (
          <div
            key={item.title}
            className={`flex gap-4 py-[22px] ${
              i !== 0 ? "border-t border-border dark:border-white/10" : "pt-0"
            }`}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-border bg-surface text-base dark:border-white/10 dark:bg-white/5">
              {item.icon}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="text-[15px] font-semibold">{item.title}</span>
                <span className="whitespace-nowrap font-mono text-xs text-muted-2 dark:text-muted">
                  {item.period}
                </span>
              </div>
              <p className="mt-[3px] text-[13px] text-muted dark:text-muted-2">
                {item.org}
                {item.location && ` · ${item.location}`}
              </p>
              {item.description && (
                <p className="mt-2.5 max-w-[58ch] text-sm leading-relaxed text-ink/80 dark:text-paper/80">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
