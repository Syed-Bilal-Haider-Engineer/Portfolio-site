import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Hackathon from "@/components/Hackathon";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import OpenSource from "@/components/Opensource";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper dark:bg-ink">
      <Header />
      <Hero />
      <Experience />
      <OpenSource />
      <Hackathon />
      <Projects />
      <Education />
      <Skills />
      <Writing />
      <Contact />
      <Footer />
    </main>
  );
}
