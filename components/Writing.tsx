"use client";

import { writingItems } from "@/data/shared";
import { useI18n } from "@/lib/i18n";
import TechIcon from "./TechIcon";

export default function Writing() {
  const { t } = useI18n();

  return (
    <section
      id="writing"
      className="scroll-mt-20 border-t border-border px-6 py-10 dark:border-white/10"
    >
      <div className="mx-auto max-w-page">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-wide  text-accent">
          {t.sections.writing}
        </p>
        <ul>
          {writingItems.map((post, i) => (
            <li
              key={post.id}
              className={i !== 0 ? "border-t border-border dark:border-white/10" : ""}
            >
              <a
                href={post.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 py-[15px] text-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border bg-surface dark:border-white/10 dark:bg-white/5">
                  <TechIcon
                    slug={post.icon}
                    label={t.writing[post.id]}
                    size={16}
                  />
                </span>
                <span className="min-w-0 flex-1 decoration-muted-2 underline-offset-4 group-hover:underline">
                  {t.writing[post.id]}
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
  );
}
