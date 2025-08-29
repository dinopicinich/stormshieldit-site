"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function SiteHeader() {
  const navItems = [
    { name: "Services", href: "/services" },
    { name: "Why Us", href: "/why-us" },
    { name: "Industries", href: "/industries" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    if (mobileOpen) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-header-220.png"
              alt="StormShield IT"
              width={220}
              height={72}
              priority
              sizes="(max-width: 768px) 128px, 220px"
              className="h-8 md:h-10 w-auto"
            />
            <span className="text-xl font-extrabold tracking-tight">StormShield IT</span>
          </Link>

          <nav className="hidden gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-slate-300 hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex gap-3">
            <Link
              href="/contact#book-call"
              className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300 hover:bg-emerald-500/20"
            >
              Book a call
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 hover:bg-cyan-500/20"
            >
              Get a quote
            </Link>
          </div>
        </div>
      </header>

      {/* Floating sticky Book a Call button */}
      <Link
        href="/contact#book-call"
        aria-label="Book a call"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 ring-1 ring-emerald-400/40 transition hover:translate-y-[-1px] focus:outline-none focus:ring-2 focus:ring-emerald-300 md:px-6"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90">
          <path d="M8 7h8M8 11h8M8 15h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path
            d="M6 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14l-4-3H8a2 2 0 0 1-2-2V5Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
        <span>Book a call</span>
      </Link>

      {/* Mobile hamburger */}
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setMobileOpen(true)}
        className="fixed bottom-6 left-6 z-50 inline-flex items-center justify-center rounded-full bg-slate-800 px-4 py-3 shadow-lg ring-1 ring-white/10 md:hidden hover:bg-slate-700 transition"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-x-0 bottom-0 rounded-t-3xl border-t border-slate-800 bg-slate-900 p-6 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-300">Menu</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="rounded-full p-2 text-slate-300 hover:bg-slate-800"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <nav className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-slate-200 hover:bg-slate-800"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}