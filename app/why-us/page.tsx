"use client";

import Link from "next/link";

export default function WhyUsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 text-slate-200 hover:bg-slate-800"
          >
            ← Back to Home
          </Link>
        </div>

        <section className="mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Why StormShield IT
          </h1>
          <p className="mt-4 max-w-3xl text-slate-300">
            We combine **25+ years** of leadership experience with a security-first
            mindset and white-glove support.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Continuity first",
              text:
                "Our playbooks prioritize uptime, backups, and rapid recovery so your team keeps working.",
            },
            {
              title: "Security built-in",
              text:
                "MFA, patching, least-privilege access, and 24/7 monitoring are standard, not add-ons.",
            },
            {
              title: "Fast human support",
              text:
                "US-based helpdesk with real engineers. We focus on first-contact resolution.",
            },
            {
              title: "Clear pricing",
              text:
                "Simple per-user packages. No surprise fees. Flexible options as you scale.",
            },
            {
              title: "Owners in the loop",
              text:
                "You’ll work directly with the founders for strategy, roadmap, and quarterly reviews.",
            },
            {
              title: "Vendor wrangling",
              text:
                "We handle the vendors (ISPs, SaaS, hardware) so you don’t have to.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6"
            >
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-slate-300">{c.text}</p>
            </div>
          ))}
        </section>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/contact#book-call"
            className="rounded-2xl bg-emerald-500 px-6 py-3 font-semibold text-slate-900"
          >
            Book a Discovery Call
          </Link>
          <Link
            href="/about"
            className="rounded-2xl border border-slate-700 px-6 py-3 font-semibold text-slate-200 hover:bg-slate-800"
          >
            Meet the Team
          </Link>
        </div>
      </div>
    </main>
  );
}