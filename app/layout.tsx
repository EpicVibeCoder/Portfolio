import type { Metadata } from 'next';
import { Inter, Playfair_Display, Mystery_Quest } from 'next/font/google';
import './globals.css';
import clsx from 'clsx';
import Providers from './components/Providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});
const mysteryQuest = Mystery_Quest({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-mystery',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://epicvibecoder.com'),
  title: {
    default: 'EpicVibeCoder | Premium Portfolio',
    template: '%s | EpicVibeCoder',
  },
  description:
    'EpicVibeCoder is a Full-stack developer specializing in Next.js, React, Node.js, and Blockchain. crafting pixel-perfect, secure, and scalable digital experiences.',
  keywords: [
    'EpicVibeCoder',
    'Full-stack Developer',
    'Web Developer',
    'Next.js Portfolio',
    'React Developer',
    'Blockchain Developer',
    'Node.js',
    'NestJS',
  ],
  authors: [{ name: 'EpicVibeCoder' }],
  creator: 'EpicVibeCoder',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://epicvibecoder.com', // Replace with actual domain if known, or keep generic/placeholder
    siteName: 'EpicVibeCoder Portfolio',
    title: 'EpicVibeCoder | Premium Portfolio',
    description:
      'Full-stack developer specializing in Next.js, React, and Blockchain. Crafting pixel-perfect digital experiences.',
    images: [
      {
        url: '/og-image.png', // Ensure this image exists or plan to create it
        width: 1200,
        height: 630,
        alt: 'EpicVibeCoder Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EpicVibeCoder | Premium Portfolio',
    description: 'Full-stack developer specializing in Next.js, React, and Blockchain.',
    creator: '@EpicVibeCoder', // Replace with actual handle if different
    images: ['/twitter-image.png'], // Ensure this exists
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://epicvibecoder.com', // Replace with actual domain
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={clsx(inter.variable, playfair.variable, mysteryQuest.variable)}>
      <body className="bg-cocoa-900 text-cream-50 antialiased overflow-x-hidden selection:bg-gold-500 selection:text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
