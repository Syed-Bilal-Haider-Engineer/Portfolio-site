import { profile } from "@/data/content";

export default function Contact() {
  const linkedIn = profile.socials.find(
    (social) => social.label === "LinkedIn"
  );

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border px-6 py-10 dark:border-white/10"
    >
      <div className="mx-auto max-w-page">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-wide text-muted-2 dark:text-muted">
          contact
        </p>

        <p className="mb-6 max-w-[54ch] text-sm leading-relaxed text-muted dark:text-muted-2">
         The best way to reach me is email or LinkedIn. I'm usually happy to talk about Software Development, open-source project, devtools, technical writing, and serious collaboration.

Send context, links, constraints, or a rough problem. The more specific the shape, the better I can respond.
        </p>

        <div className="flex flex-wrap gap-3">
          {/* Email */}
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg border border-ink bg-ink px-4 py-2.5 text-sm text-paper transition-opacity hover:opacity-85 dark:border-paper dark:bg-paper dark:text-ink"
          >
            Email
          </a>

          {/* LinkedIn */}
          {linkedIn && (
            <a
              href={linkedIn.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-ink transition-colors hover:border-muted-2 dark:border-white/15 dark:bg-white/5 dark:text-paper"
            >
              LinkedIn ↗
            </a>
          )}
        </div>

        <p className="mt-4 font-mono text-[11px] text-muted-2 dark:text-muted">
          {profile.email}
        </p>
      </div>
    </section>
  );
}