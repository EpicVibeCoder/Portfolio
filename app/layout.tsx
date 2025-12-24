import type { Metadata } from "next";
import { Inter, Playfair_Display, Mystery_Quest } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

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
  title: "Mir Ashiqul Hossain | Portfolio",
  description: "Premium Portfolio Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(inter.variable, playfair.variable, mysteryQuest.variable)}
    >
      <body className="bg-cocoa-900 text-cream-50 antialiased overflow-x-hidden selection:bg-gold-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
