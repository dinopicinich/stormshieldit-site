"use client";

import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Managed IT & Security Services
        </h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          Proactive IT, 24/7 security monitoring, and responsive support that keeps your
          business running—rain or shine.
        </p>

        <div className="mt-8 flex gap-3">
          <Link
            href="/contact#book-call"
            className="rounded-2xl bg-emerald-500 px-6 py-3 font-semibold text-slate-900"
          >
            Book a Call
          </Link>
          <Link
            href="/contact"
            className="rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-slate-900"
          >
            Get a Quote
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}