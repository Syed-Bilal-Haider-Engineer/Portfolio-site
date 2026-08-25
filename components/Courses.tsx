import { courses } from "@/data/content";

export default function Courses() {
  return (
    <section
      id="courses"
      className="scroll-mt-20 border-t border-border px-6 py-10 dark:border-white/10"
    >
      <div className="mx-auto max-w-page">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-wide text-muted-2 dark:text-muted">
          courses
        </p>

        {courses.map((course) => (
          <div
            key={course.title}
            className="mb-4 overflow-hidden rounded-xl border border-border dark:border-white/10"
          >
            <div
              className="flex h-[150px] items-center justify-center p-5 text-center font-display text-xl font-bold leading-tight text-white"
              style={{ background: course.gradient }}
            >
              {course.title}
            </div>
            <div className="p-[22px]">
              <div className="mb-3 flex flex-wrap gap-2">
                {course.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-md border border-border px-2 py-[3px] font-mono text-[11px] text-muted dark:border-white/15 dark:text-muted-2"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <h3 className="mb-2 text-base font-semibold">{course.title}</h3>
              <p className="mb-4 max-w-[60ch] text-sm leading-relaxed text-ink/80 dark:text-paper/80">
                {course.description}
              </p>
              <div className="flex flex-wrap gap-[18px] border-t border-border pt-3.5 dark:border-white/10">
                {course.stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-0.5">
                    <b className="text-[15px] font-semibold">{stat.value}</b>
                    <span className="font-mono text-[10px] uppercase tracking-wide text-muted-2 dark:text-muted">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
