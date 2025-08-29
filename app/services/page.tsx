"use client";

import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-10">
        {/* Back link */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 text-slate-200 hover:bg-slate-800"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Hero */}
        <section className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Managed IT & Security Services
          </h1>
          <p className="mt-4 max-w-3xl text-slate-300">
            Proactive IT, 24/7 security monitoring, and responsive support that
            keeps your business running—rain or shine.
          </p>
        </section>

        {/* Service grid */}
        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="text-xl font-semibold">Managed IT</h3>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-slate-300">
              <li>Device & patch management</li>
              <li>Helpdesk & onsite support</li>
              <li>Backup & disaster recovery</li>
              <li>Vendor & license management</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="text-xl font-semibold">Cybersecurity</h3>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-slate-300">
              <li>24/7 monitoring & response (MDR)</li>
              <li>Next-gen endpoint protection</li>
              <li>Email security & phishing defense</li>
              <li>Security awareness training</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="text-xl font-semibold">Cloud & Microsoft 365</h3>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-slate-300">
              <li>Microsoft 365 deployment & hardening</li>
              <li>SharePoint / OneDrive governance</li>
              <li>Identity & access management</li>
              <li>Secure remote work</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="text-xl font-semibold">Networking</h3>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-slate-300">
              <li>Firewall & VPN</li>
              <li>Wi-Fi design & segmentation</li>
              <li>Zero-trust access</li>
              <li>Performance & uptime monitoring</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap gap-3">
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
      </div>
    </main>
  );
}