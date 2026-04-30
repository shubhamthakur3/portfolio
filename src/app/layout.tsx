import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Shubham Thakur — Developer & Creator",
    template: "%s | Shubham Thakur",
  },
  description:
    "Personal portfolio of Shubham Thakur — a developer who loves to create things and is always working on something new.",
  keywords: [
    "Shubham Thakur",
    "Developer",
    "Portfolio",
    "Web Developer",
    "Frontend Developer",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Shubham Thakur" }],
  creator: "Shubham Thakur",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Shubham Thakur",
    title: "Shubham Thakur — Developer & Creator",
    description:
      "Personal portfolio of Shubham Thakur — a developer who loves to create things and is always working on something new.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Thakur — Developer & Creator",
    description:
      "Personal portfolio of Shubham Thakur — a developer who loves to create things and is always working on something new.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-grow pt-[72px] md:pt-[88px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
