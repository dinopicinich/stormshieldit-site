"use client";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
          Managed IT & Security Services
        </h1>
        <p className="text-lg text-slate-300 mb-10">
          Proactive IT, 24/7 security monitoring, and responsive support that
          keeps your business running — rain or shine.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Managed IT</h2>
            <p className="text-slate-400">
              Day-to-day IT management, patching, backups, and monitoring so you
              can focus on running your business.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Cybersecurity</h2>
            <p className="text-slate-400">
              Threat detection, MDR/EDR, and compliance-focused solutions to
              protect your systems 24/7.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Cloud Services</h2>
            <p className="text-slate-400">
              Migration, optimization, and secure cloud management for Microsoft
              365, AWS, and more.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-2">24/7 Helpdesk</h2>
            <p className="text-slate-400">
              Always-on support with a US-based team ready to help your staff
              anytime issues come up.
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
            href="/contact"
            className="rounded-xl bg-cyan-500 px-6 py-3 text-slate-900 font-semibold shadow-lg hover:bg-cyan-400 transition"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </div>
  );
}