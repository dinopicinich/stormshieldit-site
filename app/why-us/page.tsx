"use client";

export default function WhyUsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
          Why StormShield IT
        </h1>
        <p className="text-lg text-slate-300 mb-10">
          We blend enterprise-grade security with responsive, human support.
          Here’s what sets us apart.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Business Continuity First</h2>
            <p className="text-slate-400">
              Proactive monitoring, backups, disaster recovery planning, and tested runbooks.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Security Built-In</h2>
            <p className="text-slate-400">
              MDR/EDR, identity protection, phishing defense, and compliance-ready controls.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Clear, Fixed Pricing</h2>
            <p className="text-slate-400">
              Transparent plans. No surprise bills. Scale up or down as you grow.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Fast, Human Support</h2>
            <p className="text-slate-400">
              US-based helpdesk with aggressive SLAs and direct access to senior engineers.
            </p>
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
            href="/pricing"
            className="rounded-xl bg-cyan-500 px-6 py-3 text-slate-900 font-semibold shadow-lg hover:bg-cyan-400 transition"
          >
            View Pricing
          </a>
        </div>
      </div>
    </div>
  );
}