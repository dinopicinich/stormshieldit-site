"use client";

import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export default function WhyUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex flex-col">
      <SiteHeader />

      <main className="flex-1 mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-4xl font-extrabold mb-4">Why StormShield IT</h1>
        <p className="max-w-3xl text-lg text-slate-300 mb-10">
          We combine <span className="font-semibold">25 years</span> of technical leadership (Dino)
          and <span className="font-semibold">15 years</span> of sales & business development (Olivia)
          to deliver proactive IT, security-first operations, and white-glove support.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Continuity first",
              body:
                "Playbooks prioritize uptime, backups, and rapid recovery so your team keeps working.",
            },
            {
              title: "Security built-in",
              body:
                "MFA, patching, least-privilege access, and 24/7 monitoring are standard, not add-ons.",
            },
            {
              title: "Fast human support",
              body:
                "US-based helpdesk with real engineers. We focus on first-contact resolution.",
            },
            {
              title: "Clear pricing",
              body:
                "Simple per-user packages. No surprise fees. Flexible options as you scale.",
            },
            {
              title: "Owners in the loop",
              body:
                "Work directly with the founders on strategy, roadmap, and quarterly reviews.",
            },
            {
              title: "Vendor wrangling",
              body:
                "We handle ISPs, SaaS, and hardware vendors so you don’t have to.",
            },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6">
              <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
              <p className="text-slate-400">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/contact#book-call"
            className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-slate-900 shadow hover:bg-emerald-400"
          >
            Book a Discovery Call
          </Link>
          <Link
            href="/about"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-200 hover:bg-slate-800"
          >
            Meet the Team
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}