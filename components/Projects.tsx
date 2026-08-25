import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section
      id="work"
      className="border-t border-border px-6 py-10 dark:border-white/10 scroll-mt-20"
    >
      <div className="mx-auto max-w-page">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-wide text-muted-2 dark:text-muted">
          projects
        </p>

        {projects.map((project) => (
          <div
            key={project.title}
            className="mb-4 rounded-xl border border-border p-[22px] dark:border-white/10"
          >
            <div className="mb-3.5 flex items-center justify-between">
              <span className="rounded-md border border-border px-2 py-[3px] font-mono text-[11px] text-muted dark:border-white/15 dark:text-muted-2">
                {project.category}
              </span>
              <a
                href={project.link.href}
                className="font-mono text-xs text-muted hover:text-ink dark:text-muted-2 dark:hover:text-paper"
              >
                {project.link.label} ↗
              </a>
            </div>

            <h3 className="mb-2 text-base font-semibold">{project.title}</h3>
            <p className="mb-3.5 max-w-[60ch] text-sm leading-relaxed text-ink/80 dark:text-paper/80">
              {project.description}
            </p>

            <div className="mb-3.5 flex flex-wrap gap-3.5 text-xs text-muted dark:text-muted-2">
              {project.stats.map((stat) => (
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
        ))}
      </div>
    </section>
  );
}
