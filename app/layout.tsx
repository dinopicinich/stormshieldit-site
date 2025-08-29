// app/layout.tsx
import type { Metadata } from "next";
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

// Global site metadata (applies to all pages unless a page overrides it)
export const metadata: Metadata = {
  // If your production domain is different, update this:
  metadataBase: new URL("https://stormshieldit.com"),

  // Default <title> and template for pages that set their own titles
  title: {
    default: "StormShield IT – Managed IT & Cybersecurity",
    template: "%s | StormShield IT",
  },

  description:
    "Shielding your business from storms & cyber threats with proactive IT, 24/7 security, and rock-solid support.",

  openGraph: {
    title: "StormShield IT – Managed IT & Cybersecurity",
    description:
      "Shielding your business from storms & cyber threats with proactive IT, 24/7 security, and rock-solid support.",
    url: "/",
    siteName: "StormShield IT",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "StormShield IT – Managed IT & Cybersecurity",
    description:
      "Shielding your business from storms & cyber threats with proactive IT, 24/7 security, and rock-solid support.",
  },

  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}