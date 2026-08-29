"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { courseCardsMeta } from "@/data/shared";
import { useI18n } from "@/lib/i18n";

type CourseId = (typeof courseCardsMeta)[number]["id"];

export default function GenericCoursePage({ courseId }: { courseId: CourseId }) {
  const { t } = useI18n();
  const copy = t.courses[courseId];

  return (
    <main className="min-h-screen bg-paper dark:bg-ink">
      <Header />
      <article className="px-6 pb-16 pt-10">
        <div className="mx-auto max-w-page">
          <Link
            href="/course"
            className="font-mono text-[11px] text-muted hover:text-ink dark:text-muted-2 dark:hover:text-paper"
          >
            ← {t.coursePage.back}
          </Link>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-wide text-muted-2">
            {t.coursePage.kicker}
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {copy.title}
          </h1>
          <p className="mt-4 max-w-[62ch] text-sm leading-relaxed text-ink/80 dark:text-paper/80">
            {copy.description}
          </p>
          <div className="mt-8 min-h-[160px] rounded-lg border border-dashed border-border px-4 py-3 text-sm leading-relaxed text-muted dark:border-white/15 dark:text-muted-2">
            {t.coursePage.placeholder}
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
