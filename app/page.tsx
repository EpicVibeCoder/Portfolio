import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Page() {
    return (
        <main className="min-h-screen bg-cocoa-950 selection:bg-gold-500 selection:text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "WebSite",
                                "@id": "https://www.epicvibecoder.com/#website",
                                url: "https://www.epicvibecoder.com",
                                name: "EpicVibeCoder Portfolio",
                                description: "Premium Full-Stack Developer Portfolio",
                                publisher: {
                                    "@id": "https://www.epicvibecoder.com/#person",
                                },
                            },
                            {
                                "@type": "ProfilePage",
                                "@id": "https://www.epicvibecoder.com/#webpage",
                                url: "https://www.epicvibecoder.com",
                                name: "About EpicVibeCoder",
                                isPartOf: {
                                    "@id": "https://www.epicvibecoder.com/#website",
                                },
                                mainEntity: {
                                    "@id": "https://www.epicvibecoder.com/#person",
                                },
                            },
                            {
                                "@type": "Person",
                                "@id": "https://www.epicvibecoder.com/#person",
                                name: "EpicVibeCoder",
                                url: "https://www.epicvibecoder.com",
                                image: {
                                    "@type": "ImageObject",
                                    url: "https://www.epicvibecoder.com/og-image.png",
                                    width: 1200,
                                    height: 630,
                                },
                                sameAs: ["https://github.com/EpicVibeCoder", "https://twitter.com/EpicVibeCoder", "https://linkedin.com/in/EpicVibeCoder"],
                                jobTitle: "Full-stack Developer",
                                worksFor: {
                                    "@type": "Organization",
                                    name: "Freelance / Self-Employed",
                                },
                                description: "Full-stack developer specializing in Next.js, React, Node.js, and Blockchain. Turning bold ideas into reality.",
                                knowsAbout: [
                                    { "@type": "Thing", name: "React", sameAs: "https://react.dev/" },
                                    { "@type": "Thing", name: "Next.js", sameAs: "https://nextjs.org/" },
                                    { "@type": "Thing", name: "Node.js", sameAs: "https://nodejs.org/" },
                                    { "@type": "Thing", name: "Blockchain", sameAs: "https://en.wikipedia.org/wiki/Blockchain" },
                                    { "@type": "Thing", name: "TypeScript", sameAs: "https://www.typescriptlang.org/" },
                                    { "@type": "Thing", name: "Solidity", sameAs: "https://soliditylang.org/" },
                                ],
                            },
                        ],
                    }),
                }}
            />
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Education />
            <Contact />
            <Footer />
        </main>
    );
}
