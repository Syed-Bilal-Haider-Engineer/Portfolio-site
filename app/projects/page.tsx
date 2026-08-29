import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-paper dark:bg-ink">
      <Header />
      <Projects />
      <Footer />
    </main>
  );
}
