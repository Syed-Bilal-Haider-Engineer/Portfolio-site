import { notFound } from "next/navigation";
import HttpRestCoursePage from "@/components/HttpRestCoursePage";
import GenericCoursePage from "@/components/GenericCoursePage";
import { courseCardsMeta } from "@/data/shared";

type CourseId = (typeof courseCardsMeta)[number]["id"];

export default function CourseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const course = courseCardsMeta.find((item) => item.id === params.slug);
  if (!course) notFound();

  if (course.id === "http-rest") {
    return <HttpRestCoursePage />;
  }

  return <GenericCoursePage courseId={course.id as CourseId} />;
}
