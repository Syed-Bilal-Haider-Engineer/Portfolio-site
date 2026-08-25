import { profile, heroActions } from "@/data/content";

export default function Hero() {
  return (
    <section id="top" className="scroll-mt-20 px-6 pb-10 pt-14 sm:pt-16">
      <div className="mx-auto max-w-page">
        <p className="mb-[18px] font-mono text-xs uppercase tracking-wide text-muted dark:text-muted-2">
          {profile.tagline.split(" · ").map((part, i, arr) => (
            <span key={part}>
              {part}
              {i < arr.length - 1 && (
                <span className="mx-2 text-muted-2 dark:text-muted">·</span>
              )}
            </span>
          ))}
        </p>

        <h1 className="mb-[22px] font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
          {profile.name}
        </h1>

        {profile.paragraphs.map((p, i) => (
          <p
            key={i}
            className="mb-4 max-w-[60ch] text-[16px] leading-relaxed text-ink/80 dark:text-paper/80"
          >
            {p}
          </p>
        ))}

        <div className="mt-7 flex flex-wrap gap-2.5">
          {heroActions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              className={
                action.style === "solid"
                  ? "rounded-lg border border-ink bg-ink px-4 py-2.5 text-sm text-paper transition-opacity hover:opacity-85 dark:border-paper dark:bg-paper dark:text-ink"
                  : "rounded-lg border border-border px-4 py-2.5 text-sm hover:bg-surface dark:border-white/15 dark:hover:bg-white/5"
              }
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
