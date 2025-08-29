"use client";

import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Link from "next/link";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Simple, Predictable Pricing</h1>
        <p className="mt-4 text-slate-300">Per-user plans that include security by default. No surprises.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Core",
              p: "$79",
              lines: ["Helpdesk & remote support", "Patch & asset management", "M365 administration", "Backup monitoring"],
            },
            {
              t: "Secure",
              p: "$109",
              lines: ["Everything in Core", "MDR + EDR protection", "Email security & phishing defense", "Security awareness training"],
            },
            {
              t: "Complete",
              p: "Custom",
              lines: ["Everything in Secure", "vCIO & quarterly reviews", "Compliance reporting", "Onsite & after-hours options"],
            },
          ].map((plan) => (
            <div key={plan.t} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <div className="text-slate-300">{plan.t}</div>
              <div className="mt-2 text-3xl font-bold">{plan.p}<span className="text-base font-normal">/user</span></div>
              <ul className="mt-4 space-y-2 text-slate-300">
                {plan.lines.map((l) => (
                  <li key={l} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex gap-3">
          <Link href="/contact#book-call" className="rounded-2xl bg-emerald-500 px-5 py-3 font-semibold text-slate-900">
            Book a Call
          </Link>
          <Link href="/contact" className="rounded-2xl bg-cyan-500 px-5 py-3 font-semibold text-slate-900">
            Request a Custom Quote
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}