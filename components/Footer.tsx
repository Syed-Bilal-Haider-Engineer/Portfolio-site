import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 dark:border-white/10">
      <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-3">
        <span className="font-mono text-xs text-muted-2 dark:text-muted">
          © {new Date().getFullYear()} {profile.name}
        </span>
        <div className="flex gap-4 text-xs text-muted dark:text-muted-2">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="hover:text-ink dark:hover:text-paper transition-colors"
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
