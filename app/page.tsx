import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Courses from "@/components/Courses";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper dark:bg-ink">
      <Header />
      <Hero />
      <Experience />
      <Education />
      <Projects />
      <Courses />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
