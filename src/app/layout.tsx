import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Mindvest - Architectural Design, Construction & Software Solutions",
  description: "Professional architectural design, construction services, software solutions, space planning, and human capital development. Transform your vision into reality with Mindvest.",
  keywords: "architectural design, construction, software solutions, space planning, human capital development, mindvest",
  authors: [{ name: "Mindvest Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Mindvest - Architectural Design & Construction Services",
    description: "Transform your vision into reality with our comprehensive architectural design, construction, and software solutions.",
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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
