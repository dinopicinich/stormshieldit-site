// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Shared layout pieces
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StormShield IT",
  description: "Managed IT & Security for Business Continuity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon-512.png" sizes="512x512" />

        {/* Calendly stylesheet */}
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100`}
      >
        {/* Shared Header */}
        <SiteHeader />

        {/* Page content */}
        <main>{children}</main>

        {/* Shared Footer */}
        <SiteFooter />

        {/* Calendly script (needed for inline embeds) */}
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>
      </body>
    </html>
  );
}