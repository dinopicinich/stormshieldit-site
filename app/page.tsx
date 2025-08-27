"use client";

import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import Script from "next/script";

export default function StormShieldLanding() {
  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Industries", href: "#industries" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  const FORMSPREE_ID = "mnnbqnlw"; // TODO: replace with your actual Formspree form ID
  const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`;
  const CALENDLY_URL = "https://calendly.com/stormshieldit/30min"; // TODO: replace with your Calendly link

  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    if (form.get("website")) return; // Honeypot check
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Head>
        <link rel="icon" href="/favicon-32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-512.png" sizes="512x512" />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </Head>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a href="#home" className="flex items-center gap-3">
            <Image
  src="/logo-header-220.png"
  alt="StormShield IT"
  width={220}
  height={72}  // approximate; adjust if it looks too tall/short
  priority     // ensures it loads ASAP (above the fold)
  sizes="(max-width: 768px) 128px, 220px"
  className="h-8 md:h-10 w-auto"
  style={{ height: "auto", width: "auto" }}
/>
            <span className="text-xl font-extrabold tracking-tight">StormShield IT</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-sm text-slate-300 hover:text-white">
                {item.name}
              </a>
            ))}
          </nav>
          <div className="flex gap-3">
            <a href="#book-call" className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300 hover:bg-emerald-500/20">Book a call</a>
            <a href="#contact" className="rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 hover:bg-cyan-500/20">Get a quote</a>
          </div>
        </div>
      </header>

      {/* Floating sticky Book a Call button */}
      <a
        href="#book-call"
        aria-label="Book a call"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 ring-1 ring-emerald-400/40 transition hover:translate-y-[-1px] focus:outline-none focus:ring-2 focus:ring-emerald-300 md:px-6"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90">
          <path d="M8 7h8M8 11h8M8 15h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M6 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14l-4-3H8a2 2 0 0 1-2-2V5Z" stroke="currentColor" strokeWidth="2" />
        </svg>
        <span>Book a call</span>
      </a>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60rem_60rem_at_50%_-10%,rgba(6,182,212,0.15),transparent)]" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-20 md:grid-cols-2 md:py-28">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Built for <span className="text-cyan-400">Business Continuity</span>
            </h1>
            <p className="mt-5 max-w-prose text-lg text-slate-300">
              Shielding your business from storms & cyber threats with proactive IT, 24/7 security, and
              rock‑solid support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#book-call" className="rounded-2xl bg-emerald-500 px-6 py-3 text-slate-900 shadow-lg shadow-emerald-500/20 transition hover:translate-y-[-1px]">
                Book a Call
              </a>
              <a href="#contact" className="rounded-2xl bg-cyan-500 px-6 py-3 text-slate-900 shadow-lg shadow-cyan-500/20 transition hover:translate-y-[-1px]">
                Talk to Sales
              </a>
              <a href="#services" className="rounded-2xl border border-slate-700 px-6 py-3 text-slate-200 hover:border-slate-500">
                Explore Services
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
  src="/logo-hero-600.png"
  alt="StormShield IT"
  width={600}
  height={200} // approximate; adjust as needed for aspect
  sizes="(max-width: 768px) 288px, 384px"
  className="w-72 md:w-96 h-auto"
/>
          </div>
        </div>
      </section>

      {/* Contact */}
<section id="contact" className="mx-auto max-w-7xl px-4 py-20">
  <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
    {/* Contact Info */}
    <div>
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Let’s talk</h2>
      <p className="mt-3 text-slate-300">
        Book a discovery call and get a tailored IT & security plan for your business.
      </p>
      <div className="mt-6 space-y-2 text-slate-200">
        <p>
          <span className="text-slate-400">Phone:</span>{" "}
          <a className="hover:underline" href="tel:+17322722202">(732) 272-2202</a>
        </p>
        <p>
          <span className="text-slate-400">Email:</span>{" "}
          <a className="hover:underline" href="mailto:sales@stormshieldit.com">sales@stormshieldit.com</a>
        </p>
        <p><span className="text-slate-400">Hours:</span> 8am–6pm ET • 24/7 emergency</p>
      </div>
    </div>

    {/* Form */}
    <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm text-slate-300">Name</label>
          <input name="name" required className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500" placeholder="Your name" />
        </div>
        <div>
          <label className="text-sm text-slate-300">Email</label>
          <input name="email" type="email" required className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500" placeholder="you@company.com" />
        </div>
        <div className="md:col-span-2">
          <label className="text-sm text-slate-300">Company</label>
          <input name="company" className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500" placeholder="Company LLC" />
        </div>
        <div className="md:col-span-2">
          <label className="text-sm text-slate-300">What do you need help with?</label>
          <textarea name="message" rows={4} className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500" placeholder="Tell us a bit about your goals or issues…" />
        </div>
      </div>
      <button type="submit" className="mt-4 w-full rounded-2xl bg-cyan-500 px-4 py-3 font-semibold text-slate-900">Send inquiry</button>
      {status === "success" && (
        <p className="mt-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-3 text-sm text-emerald-300">
          Thanks! Your message has been sent.
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 rounded-xl border border-rose-400/30 bg-rose-400/10 p-3 text-sm text-rose-300">
          Something went wrong. Please email us at sales@stormshieldit.com.
        </p>
      )}
      <p className="mt-3 text-center text-xs text-slate-500">By submitting, you agree to our terms & privacy policy.</p>
    </form>

    {/* Calendly Embed */}
    <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-0">
      <div
        id="book-call"
        className="calendly-inline-widget rounded-3xl scroll-mt-28 md:scroll-mt-32"
        data-url={CALENDLY_URL}
        style={{ minWidth: "320px", height: "620px" }}
      />
    </div>
  </div>
</section>

      <footer className="border-t border-slate-800/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-10 md:flex-row">
          <div className="flex items-center gap-3 text-slate-400">
           <Image
  src="/logo-header-220.png"
  alt="StormShield IT Small Logo"
  width={160}
  height={52} // approximate
  sizes="120px"
  className="h-6 w-auto"
/>
            <span className="text-sm">© {new Date().getFullYear()} StormShield IT • Jupiter, FL</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#services" className="text-slate-400 hover:text-slate-200">Services</a>
            <a href="#pricing" className="text-slate-400 hover:text-slate-200">Pricing</a>
            <a href="#contact" className="text-slate-400 hover:text-slate-200">Contact</a>
          </div>
        </div>
      </footer>

      {/* Floating Book a Call button */}
      <a
        href="#book-call"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition"
      >
        Book a Call
      </a>
    </div>
  );
}
