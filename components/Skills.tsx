import { skills, writing } from "@/data/content";

export default function Skills() {
  return (
    <>
      <section
        id="stack"
        className="border-t border-border px-6 py-10 dark:border-white/10 scroll-mt-20"
      >
        <div className="mx-auto max-w-page">
          <p className="mb-6 font-mono text-[11px] uppercase tracking-wide text-muted-2 dark:text-muted">
            stack
          </p>

          <div className="grid gap-[22px] sm:grid-cols-2">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <h3 className="mb-2.5 font-mono text-[11px] uppercase tracking-wide text-muted-2 dark:text-muted">
                  {group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border px-2 py-[3px] font-mono text-[11px] text-muted dark:border-white/15 dark:text-muted-2"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="writing"
        className="border-t border-border px-6 py-10 dark:border-white/10 scroll-mt-20"
      >
        <div className="mx-auto max-w-page">
          <p className="mb-6 font-mono text-[11px] uppercase tracking-wide text-muted-2 dark:text-muted">
            writing
          </p>
          <ul>
            {writing.map((post, i) => (
              <li
                key={post.title}
                className={i !== 0 ? "border-t border-border dark:border-white/10" : ""}
              >
                <a
                  href="#"
                  className="group flex items-baseline justify-between gap-4 py-[15px] text-sm"
                >
                  <span className="decoration-muted-2 underline-offset-4 group-hover:underline">
                    {post.title}
                  </span>
                  <span className="shrink-0 font-mono text-xs text-muted-2 dark:text-muted">
                    {post.date}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
