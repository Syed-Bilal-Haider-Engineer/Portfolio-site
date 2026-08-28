"use client";

import { profileMeta } from "@/data/shared";
import { useI18n } from "@/lib/i18n";

export default function Contact() {
  const { t } = useI18n();
  const linkedIn = profileMeta.socials.find((s) => s.id === "linkedin");

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border px-6 py-10 dark:border-white/10"
    >
      <div className="mx-auto max-w-page">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-wide text-muted-2 dark:text-muted">
          {t.sections.contact}
        </p>
        <p className="mb-6 max-w-[54ch] text-sm leading-relaxed text-muted dark:text-muted-2">
          {t.contact.body}
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${profileMeta.email}`}
            className="rounded-lg border border-ink bg-ink px-4 py-2.5 text-sm text-paper transition-opacity hover:opacity-85 dark:border-paper dark:bg-paper dark:text-ink"
          >
            {t.contact.email}
          </a>
          {linkedIn && (
            <a
              href={linkedIn.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-ink transition-colors hover:border-muted-2 dark:border-white/15 dark:bg-white/5 dark:text-paper"
            >
              {t.contact.linkedin} ↗
            </a>
          )}
        </div>
        <p className="mt-4 font-mono text-[11px] text-muted-2 dark:text-muted">
          {profileMeta.email}
        </p>
      </div>
    </section>
  );
}
