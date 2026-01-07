import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <main className="bg-cocoa-950 min-h-screen selection:bg-gold-500 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Footer />
    </main>
  );
}
