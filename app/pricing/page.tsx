"use client";

import Link from "next/link";
import Image from "next/image";

function Header() {
  const nav = [
    { name: "Services", href: "/services" },
    { name: "Why Us", href: "/why-us" },
    { name: "Industries", href: "/industries" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-header-220.png" alt="StormShield IT" width={160} height={52} className="h-8 w-auto md:h-10" priority />
          <span className="text-xl font-extrabold tracking-tight">StormShield IT</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          {nav.map((i) => (
            <Link key={i.name} href={i.href} className="text-sm text-slate-300 hover:text-white">
              {i.name}
            </Link>
          ))}
        </nav>
        <div className="hidden gap-3 md:flex">
          <Link href="/contact#book-call" className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300 hover:bg-emerald-500/20">Book a call</Link>
          <Link href="/contact" className="rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 hover:bg-cyan-500/20">Get a quote</Link>
        </div>
      </div>
    </header>
  );
}

export default function PricingPage() {
  const tiers = [
    { name: "Core", price: "$79", desc: "per user / month", features: ["Helpdesk & remote support","Patch & asset management","M365 administration","Backup monitoring"] },
    { name: "Secure", price: "$109", desc: "per user / month", features: ["Everything in Core","MDR + EDR protection","Email security & phishing defense","Security awareness training"] },
    { name: "Complete", price: "Custom", desc: "per user", features: ["Everything in Secure","vCIO & quarterly reviews","Compliance reporting","Onsite & after-hours options"] },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Header />

      <div className="mx-auto max-w-7xl px-4 py-10">
        <section className="mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Simple, predictable pricing</h1>
          <p className="mt-4 max-w-3xl text-slate-300">Per-user plans that include security by default. No surprises.</p>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <div className="mt-2 text-3xl font-extrabold">
                {t.price} <span className="text-base font-normal">{t.desc}</span>
              </div>
              <ul className="mt-4 space-y-2 text-slate-300">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2"><span>•</span><span>{f}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/contact#book-call" className="rounded-2xl bg-emerald-500 px-6 py-3 font-semibold text-slate-900">Book a Call</Link>
          <Link href="/contact" className="rounded-2xl border border-slate-700 px-6 py-3 font-semibold text-slate-200 hover:bg-slate-800">Request a Custom Quote</Link>
        </div>
      </div>
    </main>
  );
}