"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { httpRestCourse } from "@/data/shared";
import { useI18n } from "@/lib/i18n";

export default function HttpRestCoursePage() {
  const { t } = useI18n();
  const page = t.coursePage;

  return (
    <main className="min-h-screen bg-paper dark:bg-ink">
      <Header />
      <article className="px-6 pb-16 pt-10">
        <div className="mx-auto grid max-w-page gap-10 lg:max-w-[960px] lg:grid-cols-[200px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-wide text-muted-2">
              {page.toc}
            </p>
            <nav className="grid gap-4 text-[13px]">
              {httpRestCourse.modules.map((mod, index) => (
                <div key={mod.id}>
                  <a
                    href={`#${mod.id}`}
                    className="font-medium text-ink hover:underline dark:text-paper"
                  >
                    {index + 1}. {page.modules[mod.id]}
                  </a>
                  <ul className="mt-1.5 grid gap-1 pl-3 text-muted dark:text-muted-2">
                    {mod.lessons.map((lesson) => (
                      <li key={lesson}>
                        <a href={`#${lesson}`} className="hover:text-ink dark:hover:text-paper">
                          {page.lessons[lesson]}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>

          <div>
            <Link
              href="/#courses"
              className="font-mono text-[11px] text-muted hover:text-ink dark:text-muted-2 dark:hover:text-paper"
            >
              ← {page.back}
            </Link>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-wide text-muted-2">
              {page.kicker}
            </p>
            <h1 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {page.title}
            </h1>
            <p className="mt-4 max-w-[62ch] text-sm leading-relaxed text-ink/80 dark:text-paper/80">
              {page.subtitle}
            </p>

            {httpRestCourse.modules.map((mod, index) => (
              <section
                key={mod.id}
                id={mod.id}
                className="mt-12 scroll-mt-24 border-t border-border pt-8 dark:border-white/10"
              >
                <h2 className="font-display text-xl font-semibold">
                  {index + 1}. {page.modules[mod.id]}
                </h2>

                {mod.lessons.map((lesson, lessonIndex) => (
                  <div
                    key={lesson}
                    id={lesson}
                    className="mt-8 scroll-mt-24"
                  >
                    <h3 className="text-[15px] font-semibold">
                      {index + 1}.{lessonIndex + 1} {page.lessons[lesson]}
                    </h3>
                    {/*
                      Add your content under this block.
                      Keep the id={lesson} so the table of contents still works.
                    */}
                    <div className="mt-3 min-h-[88px] rounded-lg border border-dashed border-border px-4 py-3 text-sm leading-relaxed text-muted dark:border-white/15 dark:text-muted-2">
                      {page.placeholder}
                    </div>
                  </div>
                ))}
              </section>
            ))}
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
