"use client";

import Link from "next/link";

export default function IndustriesPage() {
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
            Industries We Support
          </h1>
          <p className="mt-4 max-w-3xl text-slate-300">
            Compliance-aware IT for SMBs that can’t afford downtime.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="text-xl font-semibold">Healthcare & Dental</h3>
            <p className="mt-2 text-slate-300">
              HIPAA, endpoint encryption, secure messaging, and vendor BAA
              coordination.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="text-xl font-semibold">Legal & Professional Services</h3>
            <p className="mt-2 text-slate-300">
              Client data protection, DLP, email security, and frictionless
              remote access.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="text-xl font-semibold">Construction & Field Teams</h3>
            <p className="mt-2 text-slate-300">
              Secure mobile device management, job-site Wi-Fi, ruggedized
              network design.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="text-xl font-semibold">Finance & Real Estate</h3>
            <p className="mt-2 text-slate-300">
              MFA everywhere, advanced email protection, audit-friendly change
              control.
            </p>
          </div>
        </section>

        <div className="mt-12">
          <Link
            href="/contact"
            className="rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-slate-900"
          >
            Talk to Sales
          </Link>
        </div>
      </div>
    </main>
  );
}