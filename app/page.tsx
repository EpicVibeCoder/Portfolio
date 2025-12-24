import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Button from "./components/ui/Button";
import Projects from "./components/Projects";

export default function Page() {
  return (
    <main className="bg-cocoa-950 min-h-screen selection:bg-gold-500 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      {/* Contact will be added in next iteration */}

      <section id="contact" className="py-20 text-center bg-cocoa-900">
        <h2 className="text-3xl font-serif text-gold-500 mb-6">
          Let's Work Together
        </h2>
        <Button>Get In Touch</Button>
      </section>
    </main>
  );
}
