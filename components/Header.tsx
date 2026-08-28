"use client";

import { useState } from "react";
import Link from "next/link";
import { navItems } from "@/data/shared";
import { useI18n } from "@/lib/i18n";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-paper/90 backdrop-blur-sm dark:bg-ink/90">
      <div className="mx-auto flex max-w-page items-center justify-between gap-3 px-6 py-4">
        <Link href="/#top" className="font-display text-[17px] font-semibold">
          B.H.
        </Link>

        <nav className="hidden items-center gap-4 text-sm text-muted dark:text-muted-2 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="transition-colors hover:text-ink dark:hover:text-paper"
            >
              {t.nav[item.id]}
            </a>
          ))}
          <LanguageToggle />
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            className="rounded-md border border-border px-2 py-1 font-mono text-[11px] dark:border-white/15"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
          >
            {t.nav.menu}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border px-6 py-3 lg:hidden dark:border-white/10">
          <div className="mx-auto flex max-w-page flex-col gap-2 text-sm">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="py-1 text-muted hover:text-ink dark:text-muted-2 dark:hover:text-paper"
                onClick={() => setOpen(false)}
              >
                {t.nav[item.id]}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
