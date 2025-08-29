"use client";

import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex flex-col">
      <SiteHeader />

      <main className="flex-1 mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-4xl font-extrabold mb-4">Managed IT & Security Services</h1>
        <p className="max-w-3xl text-lg text-slate-300 mb-10">
          Proactive IT, 24/7 security monitoring, and responsive support that keeps
          your business running—rain or shine.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6">
            <h3 className="text-xl font-semibold mb-2">24/7 Monitoring</h3>
            <p className="text-slate-400">
              Real-time monitoring and alerting to catch issues before they impact your team.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6">
            <h3 className="text-xl font-semibold mb-2">Helpdesk & Remote Support</h3>
            <p className="text-slate-400">
              US-based support focused on first-contact resolution and clear communication.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6">
            <h3 className="text-xl font-semibold mb-2">Security-First by Default</h3>
            <p className="text-slate-400">
              Patching, MFA, phishing defense, and endpoint protection in every package.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6">
            <h3 className="text-xl font-semibold mb-2">Cloud Administration</h3>
            <p className="text-slate-400">
              Microsoft 365, Google Workspace, identity, permissions, and lifecycle management.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6">
            <h3 className="text-xl font-semibold mb-2">Backup & Continuity</h3>
            <p className="text-slate-400">
              Tested DR plans and automated backups so you can recover fast if something goes wrong.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6">
            <h3 className="text-xl font-semibold mb-2">vCIO & Roadmapping</h3>
            <p className="text-slate-400">
              Quarterly reviews and strategy to align IT investments with business goals.
            </p>
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
            className="rounded-xl border border-cyan-500 px-6 py-3 font-semibold text-cyan-300 hover:bg-cyan-500/20"
          >
            Get a Quote
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}