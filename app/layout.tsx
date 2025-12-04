import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header"; 
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. PROFESSIONAL METADATA
// This controls how you appear in Google Search and LinkedIn previews.
export const metadata: Metadata = {
  title: {
    default: "David Caldwell | Software Engineer & Technical Ops",
    template: "%s | David Caldwell", // Allows sub-pages to have titles like "Projects | David Caldwell"
  },
  description: "Computer Science graduate with 10+ years of technical operations experience. Specializing in full-stack development (React, AWS), hardware diagnostics, and root cause analysis.",
  keywords: [
    "Software Engineer", 
    "Full Stack Developer", 
    "Hardware Diagnostics", 
    "AWS", 
    "React", 
    "Kotlin", 
    "Bellevue WA", 
    "Technical Operations"
  ],
  authors: [{ name: "David Caldwell" }],
  creator: "David Caldwell",
  // 2. SOCIAL SHARING (OPEN GRAPH)
  // This is what people see when you paste your link in Discord or LinkedIn.
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://caldwelldavid.com",
    siteName: "David Caldwell Portfolio",
    title: "David Caldwell | Bridging Hardware & Software",
    description: "Solving complex infrastructure and robotics challenges with a hybrid background in code and hardware.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "David Caldwell - Software Engineer",
      },
    ],
  },
  // 3. ICONS
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

// 4. MOBILE VIEWPORT SETTINGS
// Prevents weird zooming issues on mobile inputs
export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 2. 'scroll-smooth' makes jumping to #projects feel nice
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        
        {/* THE CEILING: Fixed Header */}
        <Header />

        {/* THE ROOM: The actual page content */}
        {/* 'flex-grow' pushes the Footer down. 'pt-16' stops the Header from covering the Hero. */}
        <main className="flex-grow pt-16">
          {children}
        </main>

        {/* THE FLOOR: Static Footer */}
        <Footer />
        
      </body>
    </html>
  );
}
