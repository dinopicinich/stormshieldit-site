"use client";

import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex flex-col">
      <SiteHeader />

      <main className="flex-1 mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-4xl font-extrabold mb-4">Industries We Support</h1>
        <p className="max-w-3xl text-lg text-slate-300 mb-10">
          Compliance-aware IT for SMBs that can’t afford downtime.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Professional Services", "Legal, finance, accounting, and other firms with high data sensitivity."],
            ["Healthcare / Dental", "HIPAA-minded operations and reliable patient-facing systems."],
            ["Construction / Trades", "Field-friendly device management, asset tracking, and jobsite connectivity."],
            ["Real Estate", "Secure collaboration and reliable document workflows."],
            ["Manufacturing", "Shop-floor resiliency, backups, and OT/IT coordination."],
            ["Non-profit / Education", "Budget-aware security and staff enablement with simple tooling."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6">
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-slate-400">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/contact"
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-900 shadow hover:bg-cyan-400"
          >
            Talk to Sales
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}