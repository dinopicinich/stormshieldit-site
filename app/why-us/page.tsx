"use client";

import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Link from "next/link";

export default function WhyUsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Why StormShield IT</h1>
        <p className="mt-4 text-slate-300">
          We blend enterprise-grade security with responsive, human support. Here’s what sets us apart.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            { t: "Business Continuity First", d: "Playbooks for uptime, backups, disaster recovery, and rapid restoration." },
            { t: "Security Built-In", d: "MFA, least privilege, patching, and 24/7 monitoring are standard—not add-ons." },
            { t: "Clear Pricing", d: "Transparent per-user plans with no surprises. Options as you scale." },
            { t: "Fast Human Support", d: "US-based helpdesk with senior engineers and aggressive SLAs." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-lg font-semibold">{c.t}</h3>
              <p className="mt-2 text-slate-300">{c.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex gap-3">
          <Link href="/contact#book-call" className="rounded-2xl bg-emerald-500 px-5 py-3 font-semibold text-slate-900">
            Book a Discovery Call
          </Link>
          <Link href="/pricing" className="rounded-2xl border border-slate-700 px-5 py-3">
            View Pricing
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}