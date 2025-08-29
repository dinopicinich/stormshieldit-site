"use client";

import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function WhyUsPage() {
  const cards = [
    {
      title: "Continuity first",
      body:
        "Our playbooks prioritize uptime, backups, and rapid recovery so your team keeps working.",
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
        "Work directly with the founders for strategy, roadmap, and quarterly reviews.",
    },
    {
      title: "Vendor wrangling",
      body:
        "We handle ISPs, SaaS, and hardware vendors so you don’t have to.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Why StormShield IT
        </h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          We combine <strong>25+ years</strong> of leadership experience with a security-first
          mindset and white-glove support.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
            >
              <h3 className="font-semibold">{c.title}</h3>
              <p className="mt-2 text-slate-300">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex gap-3">
          <Link
            href="/contact#book-call"
            className="rounded-2xl bg-emerald-500 px-6 py-3 font-semibold text-slate-900"
          >
            Book a Discovery Call
          </Link>
          <Link
            href="/about"
            className="rounded-2xl border border-slate-700 px-6 py-3 font-semibold text-slate-100"
          >
            Meet the Team
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}