"use client";

import { profileMeta } from "@/data/shared";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border px-6 py-10 dark:border-white/10">
      <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-3">
        <span className="font-mono text-xs text-muted-2 dark:text-muted">
          © {new Date().getFullYear()} {t.hero.name}
        </span>
        <div className="flex flex-wrap gap-4 text-xs text-muted dark:text-muted-2">
          {profileMeta.socials.map((social) => (
            <a
              key={social.id}
              href={social.href}
              className="transition-colors hover:text-ink dark:hover:text-paper"
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
            >
              {t.socials[social.id]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
