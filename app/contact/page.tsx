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
          <Image
            src="/logo-header-220.png"
            alt="StormShield IT"
            width={160}
            height={52}
            className="h-8 w-auto md:h-10"
            priority
          />
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
          <Link
            href="/contact#book-call"
            className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300 hover:bg-emerald-500/20"
          >
            Book a call
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 hover:bg-cyan-500/20"
          >
            Get a quote
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function ContactPage() {
  const CALENDLY_URL = "https://calendly.com/stormshieldit/30min";

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Header />

      <section className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Let’s talk</h1>
        <p className="mt-3 max-w-3xl text-slate-300">
          Book a discovery call and get a tailored IT & security plan for your business.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="space-y-2 text-slate-200">
              <p>
                <span className="text-slate-400">Phone:</span>{" "}
                <a className="hover:underline" href="tel:+17322722202">
                  (732) 272-2202
                </a>
              </p>
              <p>
                <span className="text-slate-400">Email:</span>{" "}
                <a className="hover:underline" href="mailto:sales@stormshieldit.com">
                  sales@stormshieldit.com
                </a>
              </p>
              <p>
                <span className="text-slate-400">Hours:</span> 8am–6pm ET • 24/7 emergency
              </p>
            </div>
          </div>

          {/* (Optional) form column placeholder */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-slate-300">
              Prefer email? Send a note to <strong>sales@stormshieldit.com</strong> or book
              directly using the scheduler.
            </p>
          </div>

          {/* Calendly inline */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-0 md:col-span-2 md:p-0">
            <div
              id="book-call"
              className="calendly-inline-widget rounded-2xl"
              data-url={CALENDLY_URL}
              style={{ minWidth: "320px", height: "680px" }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}