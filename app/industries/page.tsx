"use client";

import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Industries We Support
        </h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          Compliance-aware IT for SMBs that can’t afford downtime.
        </p>

        <div className="mt-8">
          <Link
            href="/contact"
            className="rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-slate-900"
          >
            Talk to Sales
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}