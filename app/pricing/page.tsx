"use client";

import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function PricingPage() {
  const plans = [
    {
      name: "Core",
      price: "$79",
      unit: "per user / month",
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
      unit: "per user / month",
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
      unit: "per user",
      features: [
        "Everything in Secure",
        "vCIO & quarterly reviews",
        "Compliance reporting",
        "Onsite & after-hours options",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Simple, predictable pricing
        </h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          Per-user plans that include security by default. No surprises.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6"
            >
              <h3 className="text-xl font-bold">{p.name}</h3>
              <div className="mt-3 flex items-end gap-2">
                <span className="text-3xl font-extrabold">{p.price}</span>
                <span className="text-sm text-slate-400">{p.unit}</span>
              </div>
              <ul className="mt-4 space-y-2 text-slate-300">
                {p.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex gap-3">
          <Link
            href="/contact#book-call"
            className="rounded-2xl bg-emerald-500 px-6 py-3 font-semibold text-slate-900"
          >
            Book a Call
          </Link>
          <Link
            href="/contact"
            className="rounded-2xl border border-slate-700 px-6 py-3 font-semibold text-slate-100"
          >
            Request a Custom Quote
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}