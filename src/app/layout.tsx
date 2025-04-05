import type { Metadata } from "next";
import { Geist, Geist_Mono, Pixelify_Sans, Sixtyfour, Jersey_10 } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify-sans",
  subsets: ["latin"],
});

const sixtyfour = Sixtyfour({
  variable: "--font-sixtyfour",
  subsets: ["latin"],
});

const jersey10 = Jersey_10({
  weight: ['400'],
  variable: "--font-jersey-10",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PedroCoelho",
  description: "Professional Portfolio by PedroHQC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pixelifySans.variable} ${sixtyfour.variable} ${jersey10.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
