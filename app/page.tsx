import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Page() {
    return (
        <main className="min-h-screen bg-cocoa-950 selection:bg-gold-500 selection:text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Person',
                        name: 'EpicVibeCoder',
                        url: 'https://epicvibecoder.com',
                        image: 'https://epicvibecoder.com/og-image.png', // Ensure this exists
                        sameAs: [
                            'https://github.com/EpicVibeCoder',
                            'https://twitter.com/EpicVibeCoder',
                            'https://linkedin.com/in/EpicVibeCoder', // Add actual links if available
                        ],
                        jobTitle: 'Full-stack Developer',
                        worksFor: {
                            '@type': 'Organization',
                            name: 'Freelance / Self-Employed',
                        },
                        description: 'Full-stack developer specializing in Next.js, React, Node.js, and Blockchain.',
                        knowsAbout: ['React', 'Next.js', 'Node.js', 'Blockchain', 'Solidity', 'TypeScript'],
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
