"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

export default function HomePage() {
  const navItems = [
    { name: "Services", href: "/services" },
    { name: "Why Us", href: "/why-us" },
    { name: "Industries", href: "/industries" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
  ];

  // mobile menu
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    if (mobileOpen) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Shared Header */}
      <SiteHeader />

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60rem_60rem_at_50%_-10%,rgba(6,182,212,0.15),transparent)]" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-20 md:grid-cols-2 md:py-28">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Built for <span className="text-cyan-400">Business Continuity</span>
            </h1>
            <p className="mt-5 max-w-prose text-lg text-slate-300">
              Shielding your business from storms & cyber threats with proactive IT, 24/7 security, and
              rock-solid support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact#book-call"
                className="rounded-2xl bg-emerald-500 px-6 py-3 text-slate-900 shadow-lg shadow-emerald-500/20 transition hover:translate-y-[-1px]"
              >
                Book a Call
              </a>
              <a
                href="/contact"
                className="rounded-2xl bg-cyan-500 px-6 py-3 text-slate-900 shadow-lg shadow-cyan-500/20 transition hover:translate-y-[-1px]"
              >
                Talk to Sales
              </a>
              <a
                href="/services"
                className="rounded-2xl border border-slate-700 px-6 py-3 text-slate-200 hover:border-slate-500"
              >
                Explore Services
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/logo-hero-600.png"
              alt="StormShield IT"
              width={600}
              height={200}
              sizes="(max-width: 768px) 288px, 384px"
              className="w-72 md:w-96 h-auto"
            />
          </div>
        </div>
      </section>

      {/* Shared Footer */}
      <SiteFooter />
    </div>
  );
}