import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Professional Transformation Programs | Consulting, Masterclass & Upgrade Academy",
  description: "Transform your professional journey through expert consulting, transformative masterclasses, and comprehensive upgrade programs. Become a person of interest in your industry.",
  keywords: "public speaking, consulting, masterclass, upgrade academy, professional development, personal branding, workshops, seminars",
  authors: [{ name: "Professional Development Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Professional Transformation Programs | Become a Person of Interest",
    description: "Elevate your professional presence through expert consulting, transformative masterclasses, and comprehensive upgrade programs designed to make you a person of interest.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
