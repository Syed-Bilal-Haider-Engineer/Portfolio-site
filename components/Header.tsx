"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/shared";
import { useI18n } from "@/lib/i18n";
import LanguageToggle from "./LanguageToggle";

function sectionIdFromHref(href: string) {
  const hash = href.split("#")[1];
  return hash ?? null;
}

export default function Header() {
  const { t } = useI18n();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (pathname.startsWith("/projects")) {
      setActiveId("projects");
      return;
    }

    // if (pathname.startsWith("/course")) {
    //   setActiveId("courses");
    //   return;
    // }

    if (pathname !== "/") {
      setActiveId(null);
      return;
    }

    const fromHash = window.location.hash.replace("#", "");
    if (fromHash && fromHash !== "top") {
      const match = navItems.find((item) => sectionIdFromHref(item.href) === fromHash);
      if (match) setActiveId(match.id);
    }

    const ids = navItems
      .map((item) => sectionIdFromHref(item.href))
      .filter((id): id is string => Boolean(id));

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const id = visible[0]?.target.id;
        const item = navItems.find((nav) => sectionIdFromHref(nav.href) === id);
        if (item) setActiveId(item.id);
      },
      { rootMargin: "-18% 0px -70% 0px", threshold: [0, 0.2, 0.4, 0.6] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  function linkClass(id: string, mobile = false) {
    const active = activeId === id;
    if (mobile) {
      return active
        ? "border-b-2 border-accent py-1.5 text-accent"
        : "border-b-2 border-transparent py-1.5 text-muted hover:text-ink dark:text-muted-2 dark:hover:text-paper";
    }
    return active
      ? "border-b-2 border-accent pb-1 text-accent"
      : "border-b-2 border-transparent pb-1 text-muted hover:text-ink dark:text-muted-2 dark:hover:text-paper";
  }

  return (
    <header className="sticky top-0 z-30 bg-paper/90 backdrop-blur-sm dark:bg-ink/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link
          href="/#top"
          className="shrink-0 font-display text-[17px] font-semibold text-accent"
        >
          B.H.
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-end gap-x-6 overflow-x-auto text-[13px] lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`shrink-0 ${linkClass(item.id)}`}
            >
              {t.nav[item.id]}
            </Link>
          ))}
          <LanguageToggle />
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
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
          <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`w-fit ${linkClass(item.id, true)}`}
                onClick={() => {
                  window.setTimeout(() => setOpen(false), 0);
                }}
              >
                {t.nav[item.id]}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
