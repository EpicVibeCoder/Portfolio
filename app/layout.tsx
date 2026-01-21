import type { Metadata } from "next";
import { Inter, Playfair_Display, Mystery_Quest } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Providers from "./components/Providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
});
const mysteryQuest = Mystery_Quest({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-mystery",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://www.epicvibecoder.com"),
    title: {
        default: "EpicVibeCoder | Premium Full-Stack Developer Portfolio",
        template: "%s | EpicVibeCoder",
    },
    description: "EpicVibeCoder is a Full-stack developer specializing in Next.js, React, Node.js, and Blockchain. Crafting pixel-perfect, secure, and scalable digital experiences.",
    keywords: ["EpicVibeCoder", "Vibe Coding", "Creative Coding", "Coding Vibe", "Software Engineer Portfolio", "Full-stack Developer", "Next.js Expert", "React Developer", "Blockchain Developer", "Node.js", "NestJS", "Web Development"],
    authors: [{ name: "EpicVibeCoder", url: "https://www.epicvibecoder.com" }],
    creator: "EpicVibeCoder",
    openGraph: {
        type: "profile",
        locale: "en_US",
        url: "https://www.epicvibecoder.com",
        siteName: "EpicVibeCoder Portfolio",
        title: "EpicVibeCoder | Premium Full-Stack Developer Portfolio",
        description: "Need a premium website? I specialize in Next.js, React, and Blockchain. Let's build something amazing together.",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "EpicVibeCoder Portfolio - Full Stack Developer",
            },
        ],
        firstName: "EpicVibe",
        lastName: "Coder",
        username: "EpicVibeCoder",
        gender: "male",
    },
    twitter: {
        card: "summary_large_image",
        title: "EpicVibeCoder | Premium Full-Stack Developer Portfolio",
        description: "Full-stack developer specializing in Next.js, React, and Blockchain. Crafting pixel-perfect digital experiences.",
        creator: "@EpicVibeCoder",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: "/",
    },
    verification: {
        google: "google7c89e33d58a7b8a4", // derived from user's file
    },
    category: "technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={clsx(inter.variable, playfair.variable, mysteryQuest.variable)}>
            <body className="overflow-x-hidden bg-cocoa-900 text-cream-50 antialiased selection:bg-gold-500 selection:text-white">
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
