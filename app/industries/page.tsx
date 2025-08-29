"use client";

import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Link from "next/link";

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Industries We Serve</h1>
        <p className="mt-4 text-slate-300">
          Tailored playbooks, security controls, and support models for each vertical.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Healthcare", d: "HIPAA-minded security, reliable uptime, secure PHI handling." },
            { t: "Financial Services", d: "Device control, reporting, data protection, and governance." },
            { t: "Professional Services", d: "Secure collaboration, remote work, and data governance." },
            { t: "Manufacturing", d: "OT/IT segmentation, endpoint hardening, and backup resilience." },
            { t: "Real Estate", d: "Email security, tenant data protection, device lifecycle." },
            { t: "Non-Profit", d: "Budget-friendly controls and simple, secure access." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-lg font-semibold">{c.t}</h3>
              <p className="mt-2 text-slate-300">{c.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex gap-3">
          <Link href="/contact" className="rounded-2xl bg-cyan-500 px-5 py-3 font-semibold text-slate-900">
            Talk to Sales
          </Link>
          <Link href="/contact#book-call" className="rounded-2xl bg-emerald-500 px-5 py-3 font-semibold text-slate-900">
            Book a Call
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}