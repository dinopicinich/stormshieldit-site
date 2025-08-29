"use client";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
          Simple, Transparent Pricing
        </h1>
        <p className="text-lg text-slate-300 mb-10">
          Predictable monthly plans. Scale as you grow. No surprises.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Starter */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Starter</h2>
            <p className="text-3xl font-extrabold mb-4">$XX<span className="text-base font-semibold text-slate-400">/user</span></p>
            <ul className="text-slate-400 space-y-2">
              <li>Helpdesk (business hours)</li>
              <li>Patch & asset management</li>
              <li>Basic security stack</li>
            </ul>
          </div>

          {/* Growth */}
          <div className="rounded-2xl border border-emerald-600/40 bg-slate-900 p-6 shadow-lg ring-1 ring-emerald-600/20">
            <div className="inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 mb-3">
              Most Popular
            </div>
            <h2 className="text-xl font-semibold mb-2">Growth</h2>
            <p className="text-3xl font-extrabold mb-4">$YY<span className="text-base font-semibold text-slate-400">/user</span></p>
            <ul className="text-slate-400 space-y-2">
              <li>24/7 helpdesk + SLAs</li>
              <li>EDR/MDR + email security</li>
              <li>Backup & recovery</li>
            </ul>
          </div>

          {/* Enterprise */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Enterprise</h2>
            <p className="text-3xl font-extrabold mb-4">Custom</p>
            <ul className="text-slate-400 space-y-2">
              <li>vCIO / compliance support</li>
              <li>SIEM, DLP, IAM strategy</li>
              <li>Tailored onboarding & training</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex gap-4">
          <a
            href="/contact#book-call"
            className="rounded-xl bg-emerald-500 px-6 py-3 text-slate-900 font-semibold shadow-lg hover:bg-emerald-400 transition"
          >
            Book a Call
          </a>
          <a
            href="/contact"
            className="rounded-xl bg-cyan-500 px-6 py-3 text-slate-900 font-semibold shadow-lg hover:bg-cyan-400 transition"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </div>
  );
}