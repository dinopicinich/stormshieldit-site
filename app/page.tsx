"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60rem_60rem_at_50%_-10%,rgba(6,182,212,0.15),transparent)]" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-20 md:grid-cols-2 md:py-28">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Built for <span className="text-cyan-400">Business Continuity</span>
            </h1>

            <p className="mt-5 max-w-prose text-lg text-slate-300">
              Shielding your business from storms &amp; cyber threats with proactive IT, 24/7 security,
              and rock-solid support.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact#book-call"
                className="rounded-2xl bg-emerald-500 px-6 py-3 text-slate-900 shadow-lg shadow-emerald-500/20 transition hover:translate-y-[-1px]"
              >
                Book a Call
              </Link>

              <Link
                href="/contact"
                className="rounded-2xl bg-cyan-500 px-6 py-3 text-slate-900 shadow-lg shadow-cyan-500/20 transition hover:translate-y-[-1px]"
              >
                Talk to Sales
              </Link>

              <Link
                href="/services"
                className="rounded-2xl border border-slate-700 px-6 py-3 text-slate-200 hover:border-slate-500"
              >
                Explore Services
              </Link>
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
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}