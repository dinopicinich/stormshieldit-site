"use client";

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
          Industries We Serve
        </h1>
        <p className="text-lg text-slate-300 mb-10">
          Tailored playbooks, security controls, and support models for each vertical.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <h2 className="text-lg font-semibold mb-2">Healthcare</h2>
            <p className="text-slate-400">HIPAA-minded security, secure PHI handling, and reliable uptime.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <h2 className="text-lg font-semibold mb-2">Financial Services</h2>
            <p className="text-slate-400">Identity, device control, and audit-ready reporting.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <h2 className="text-lg font-semibold mb-2">Professional Services</h2>
            <p className="text-slate-400">Modern collaboration, secure remote work, and data governance.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <h2 className="text-lg font-semibold mb-2">Manufacturing</h2>
            <p className="text-slate-400">OT/IT segmentation, endpoint hardening, and backup resilience.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <h2 className="text-lg font-semibold mb-2">Real Estate</h2>
            <p className="text-slate-400">Device lifecycle, email security, and tenant data protection.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <h2 className="text-lg font-semibold mb-2">Non-Profit</h2>
            <p className="text-slate-400">Budget-friendly controls and simple, secure user access.</p>
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
            Talk to Sales
          </a>
        </div>
      </div>
    </div>
  );
}