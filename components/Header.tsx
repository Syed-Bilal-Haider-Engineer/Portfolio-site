import Link from "next/link";
import { nav } from "@/data/content";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-paper/90 backdrop-blur-sm dark:bg-ink/90">
      <div className="mx-auto flex max-w-page items-center justify-between px-6 py-5">
        <Link href="#top" className="font-display text-[17px] font-semibold">
          alex.
        </Link>
        <nav className="flex items-center gap-5 text-sm text-muted dark:text-muted-2">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-ink dark:hover:text-paper transition-colors"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
