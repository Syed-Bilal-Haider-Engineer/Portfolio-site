"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: light)"
    ).matches;
    const dark = stored ? stored === "light" : prefersDark;
    setIsDark(dark);
    document.documentElement.classList.toggle("light", dark);
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-border text-muted transition-colors hover:text-ink dark:border-white/15 dark:text-muted-2 dark:hover:text-paper"
    >
      {isDark ? "☀" : "◐"}
    </button>
  );
}
