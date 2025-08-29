"use client";

import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex flex-col">
      <SiteHeader />

      <main className="flex-1 mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-4xl font-extrabold mb-4">Simple, predictable pricing</h1>
        <p className="max-w-3xl text-lg text-slate-300 mb-10">
          Per-user plans that include security by default. No surprises.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Core */}
          <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6">
            <h3 className="text-xl font-semibold">Core</h3>
            <div className="mt-2 text-3xl font-extrabold">$79</div>
            <div className="text-slate-400 mb-4">per user / month</div>
            <ul className="space-y-2 text-slate-300">
              <li>• Helpdesk & remote support</li>
              <li>• Patch & asset management</li>
              <li>• M365 administration</li>
              <li>• Backup monitoring</li>
            </ul>
          </div>

          {/* Secure */}
          <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6">
            <h3 className="text-xl font-semibold">Secure</h3>
            <div className="mt-2 text-3xl font-extrabold">$109</div>
            <div className="text-slate-400 mb-4">per user / month</div>
            <ul className="space-y-2 text-slate-300">
              <li>• Everything in Core</li>
              <li>• MDR + EDR protection</li>
              <li>• Email security & phishing defense</li>
              <li>• Security awareness training</li>
            </ul>
          </div>

          {/* Complete */}
          <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6">
            <h3 className="text-xl font-semibold">Complete</h3>
            <div className="mt-2 text-3xl font-extrabold">Custom</div>
            <div className="text-slate-400 mb-4">per user</div>
            <ul className="space-y-2 text-slate-300">
              <li>• Everything in Secure</li>
              <li>• vCIO & quarterly reviews</li>
              <li>• Compliance reporting</li>
              <li>• Onsite & after-hours options</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/contact#book-call"
            className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-slate-900 shadow hover:bg-emerald-400"
          >
            Book a Call
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-200 hover:bg-slate-800"
          >
            Request a Custom Quote
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}