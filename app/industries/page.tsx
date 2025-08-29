"use client";

import Link from "next/link";
import Image from "next/image";

function Header() {
  const nav = [
    { name: "Services", href: "/services" },
    { name: "Why Us", href: "/why-us" },
    { name: "Industries", href: "/industries" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-header-220.png" alt="StormShield IT" width={160} height={52} className="h-8 w-auto md:h-10" priority />
          <span className="text-xl font-extrabold tracking-tight">StormShield IT</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          {nav.map((i) => (
            <Link key={i.name} href={i.href} className="text-sm text-slate-300 hover:text-white">
              {i.name}
            </Link>
          ))}
        </nav>
        <div className="hidden gap-3 md:flex">
          <Link href="/contact#book-call" className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300 hover:bg-emerald-500/20">Book a call</Link>
          <Link href="/contact" className="rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 hover:bg-cyan-500/20">Get a quote</Link>
        </div>
      </div>
    </header>
  );
}

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Header />

      <div className="mx-auto max-w-7xl px-4 py-10">
        <section className="mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Industries We Support</h1>
          <p className="mt-4 max-w-3xl text-slate-300">Compliance-aware IT for SMBs that can’t afford downtime.</p>
        </section>

        {/* four industry cards (same as before) */}

        <div className="mt-12">
          <Link href="/contact" className="rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-slate-900">Talk to Sales</Link>
        </div>
      </div>
    </main>
  );
}