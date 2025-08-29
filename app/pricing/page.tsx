"use client";

import Link from "next/link";

export default function PricingPage() {
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
            Simple, predictable pricing
          </h1>
          <p className="mt-4 max-w-3xl text-slate-300">
            Per-user plans that include security by default. No surprises.
          </p>
        </section>

        {/* Pricing cards */}
        <section className="grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Core",
              price: "$79",
              desc: "per user / month",
              features: [
                "Helpdesk & remote support",
                "Patch & asset management",
                "M365 administration",
                "Backup monitoring",
              ],
            },
            {
              name: "Secure",
              price: "$109",
              desc: "per user / month",
              features: [
                "Everything in Core",
                "MDR + EDR protection",
                "Email security & phishing defense",
                "Security awareness training",
              ],
            },
            {
              name: "Complete",
              price: "Custom",
              desc: "per user",
              features: [
                "Everything in Secure",
                "vCIO & quarterly reviews",
                "Compliance reporting",
                "Onsite & after-hours options",
              ],
            },
          ].map((tier) => (
            <div
              key={tier.name}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6"
            >
              <h3 className="text-xl font-semibold">{tier.name}</h3>
              <div className="mt-2 text-3xl font-extrabold">
                {tier.price} <span className="text-base font-normal">{tier.desc}</span>
              </div>
              <ul className="mt-4 space-y-2 text-slate-300">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span>•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/contact#book-call"
            className="rounded-2xl bg-emerald-500 px-6 py-3 font-semibold text-slate-900"
          >
            Book a Call
          </Link>
          <Link
            href="/contact"
            className="rounded-2xl border border-slate-700 px-6 py-3 font-semibold text-slate-200 hover:bg-slate-800"
          >
            Request a Custom Quote
          </Link>
        </div>
      </div>
    </main>
  );
}