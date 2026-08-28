"use client";

import { skillGroups } from "@/data/shared";
import { useI18n } from "@/lib/i18n";
import TechIcon from "./TechIcon";

export default function Skills() {
  const { t } = useI18n();

  return (
    <section
      id="stack"
      className="scroll-mt-20 border-t border-border px-6 py-10 dark:border-white/10"
    >
      <div className="mx-auto max-w-page">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-wide text-muted-2 dark:text-muted">
          {t.sections.stack}
        </p>

        <div className="grid gap-[22px] sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.id}>
              <h3 className="mb-2.5 font-mono text-[11px] uppercase tracking-wide text-muted-2 dark:text-muted">
                {t.skills.groups[group.id]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const label = t.skills.items[item.id];
                  return (
                    <span
                      key={item.id}
                      className="inline-flex items-center gap-1.5 rounded-md border border-border px-2 py-[4px] font-mono text-[11px] text-muted dark:border-white/15 dark:text-muted-2"
                    >
                      <TechIcon slug={item.icon} label={label} size={14} />
                      {label}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
