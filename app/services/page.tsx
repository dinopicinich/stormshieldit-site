"use client";

import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Managed IT & Security Services</h1>
        <p className="mt-4 text-slate-300">
          Proactive IT, 24/7 security monitoring, and responsive support that keeps your business running—rain or shine.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            { t: "Managed IT", d: "Patching, backups, monitoring, device lifecycle, and stable operations." },
            { t: "Cybersecurity", d: "MDR/EDR, identity protection, email defense, and incident response." },
            { t: "Cloud Services", d: "Microsoft 365, AWS, and secure collaboration built for scale." },
            { t: "24/7 Helpdesk", d: "US-based engineers with aggressive SLAs and first-contact resolution." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-lg font-semibold">{c.t}</h3>
              <p className="mt-2 text-slate-300">{c.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex gap-3">
          <Link href="/contact#book-call" className="rounded-2xl bg-emerald-500 px-5 py-3 font-semibold text-slate-900">
            Book a Call
          </Link>
          <Link href="/contact" className="rounded-2xl bg-cyan-500 px-5 py-3 font-semibold text-slate-900">
            Get a Quote
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}