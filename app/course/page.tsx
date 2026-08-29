import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Courses from "@/components/Courses";

export default function CourseListPage() {
  return (
    <main className="min-h-screen bg-paper dark:bg-ink">
      <Header />
      <Courses />
      <Footer />
    </main>
  );
}
