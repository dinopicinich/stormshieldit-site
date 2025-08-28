"use client";

import type React from "react";
import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";
import Script from "next/script";

export default function StormShieldLanding() {
  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Industries", href: "#industries" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
    { name: "About", href: "/about" },
  ];

  // ---- constants ----
  const CALENDLY_URL = "https://calendly.com/stormshieldit/30min";
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnnbqnlw";

  // ---- ui state ----
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    if (mobileOpen) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  // ---- submit handler ----
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setStatus(null);

    const formEl = e.currentTarget;
    const fd = new FormData(formEl);

    // Honeypot
    if (fd.get("website")) {
      setIsSubmitting(false);
      return;
    }

    const body = new URLSearchParams();
    fd.forEach((v, k) => {
      if (k !== "website") body.append(k, String(v));
    });
    if (fd.get("email")) body.append("_replyto", String(fd.get("email")));
    body.append("_format", "json");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: body.toString(),
      });

      let success =
        res.ok || (res.status >= 200 && res.status < 400) || res.type === "opaqueredirect";

      const ct = res.headers.get("content-type") || "";
      if (ct.includes("application/json")) {
        const data = await res.json().catch(() => null);
        if (data?.ok === true) success = true;
      }

      if (success) {
        setStatus("success");
        formEl.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Head>
        <link rel="icon" href="/favicon-32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-512.png" sizes="512x512" />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </Head>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3">
              <Image
                src="/logo-header-220.png"
                alt="StormShield IT"
                width={220}
                height={72}
                priority
                sizes="(max-width: 768px) 128px, 220px"
                className="h-8 md:h-10 w-auto"
              />
              <span className="text-xl font-extrabold tracking-tight">
                StormShield IT
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex md:items-center md:gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-slate-300 hover:text-white"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#book-call"
                className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300 hover:bg-emerald-500/20"
              >
                Book a call
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 hover:bg-cyan-500/20"
              >
                Get a quote
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 p-2 text-slate-200 hover:bg-slate-800"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Mobile CTA Row */}
          <div className="mt-3 flex w-full justify-center gap-3 md:hidden">
            <a
              href="#book-call"
              className="flex-1 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-center text-sm font-semibold text-emerald-300 hover:bg-emerald-500/20"
            >
              Book a call
            </a>
            <a
              href="#contact"
              className="flex-1 rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-center text-sm font-semibold text-cyan-300 hover:bg-cyan-500/20"
            >
              Get a quote
            </a>
          </div>
        </div>

        {/* Overlay */}
        <div
          className={`md:hidden fixed inset-0 z-[60] bg-black/40 transition-opacity ${
            mobileOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Slide Drawer */}
        <aside
          className={`md:hidden fixed left-0 top-0 bottom-0 z-[61] w-80 max-w-[85vw] transform bg-slate-950/95 backdrop-blur border-r border-slate-800 transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-4 border-b border-slate-800">
            <span className="text-base font-semibold text-slate-100">Menu</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900/60 p-2 text-slate-200 hover:bg-slate-800"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <nav className="px-2 py-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-3 text-slate-200 hover:bg-slate-800/60"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </aside>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60rem_60rem_at_50%_-10%,rgba(6,182,212,0.15),transparent)]" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-20 md:grid-cols-2 md:py-28">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Built for <span className="text-cyan-400">Business Continuity</span>
            </h1>
            <p className="mt-5 max-w-prose text-lg text-slate-300">
              Shielding your business from storms & cyber threats with proactive
              IT, 24/7 security, and rock-solid support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#book-call"
                className="rounded-2xl bg-emerald-500 px-6 py-3 text-slate-900 shadow-lg shadow-emerald-500/20 transition hover:translate-y-[-1px]"
              >
                Book a Call
              </a>
              <a
                href="#contact"
                className="rounded-2xl bg-cyan-500 px-6 py-3 text-slate-900 shadow-lg shadow-cyan-500/20 transition hover:translate-y-[-1px]"
              >
                Talk to Sales
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-slate-700 px-6 py-3 text-slate-200 hover:border-slate-500"
              >
                Explore Services
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/logo-hero-600.png"
              alt="StormShield IT"
              width={600}
              height={200}
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
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Let’s talk
            </h2>
            <p className="mt-3 text-slate-300">
              Book a discovery call and get a tailored IT & security plan for
              your business.
            </p>
            <div className="mt-6 space-y-2 text-slate-200">
              <p>
                <span className="text-slate-400">Phone:</span>{" "}
                <a className="hover:underline" href="tel:+17322722202">
                  (732) 272-2202
                </a>
              </p>
              <p>
                <span className="text-slate-400">Email:</span>{" "}
                <a
                  className="hover:underline"
                  href="mailto:sales@stormshieldit.com"
                >
                  sales@stormshieldit.com
                </a>
              </p>
              <p>
                <span className="text-slate-400">Hours:</span> 8am–6pm ET • 24/7
                emergency
              </p>
            </div>
          </div>

          {/* Form */}
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            noValidate
            autoComplete="on"
            className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6"
          >
            <input
              type="text"
              name="website"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm text-slate-300">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm text-slate-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500"
                  placeholder="you@company.com"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="company" className="text-sm text-slate-300">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  autoComplete="organization"
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500"
                  placeholder="Company LLC"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="message" className="text-sm text-slate-300">
                  What do you need help with?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500"
                  placeholder="Tell us a bit about your goals or issues…"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 w-full rounded-2xl bg-cyan-500 px-4 py-3 font-semibold text-slate-900 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending…" : "Send inquiry"}
            </button>

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
            <p className="mt-3 text-center text-xs text-slate-500">
              By submitting, you agree to our terms &amp; privacy policy.
            </p>
          </form>

          {/* Calendly */}
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

      {/* Footer */}
      <footer className="border-t border-slate-800/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-10 md:flex-row">
          <div className="flex items-center gap-3 text-slate-400">
            <Image
              src="/logo-header-220.png"
              alt="StormShield IT Small Logo"
              width={160}
              height={52}
              sizes="120px"
              className="h-6 w-auto"
            />
            <span className="text-sm">
              © {new Date().getFullYear()} StormShield IT • Jupiter, FL
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#services" className="text-slate-400 hover:text-slate-200">
              Services
            </a>
            <a href="#pricing" className="text-slate-400 hover:text-slate-200">
              Pricing
            </a>
            <a href="#contact" className="text-slate-400 hover:text-slate-200">
              Contact
            </a>
            <a href="/about" className="text-slate-400 hover:text-slate-200">
              About
            </a>
          </div>
        </div>
      </footer>

      {/* Floating Book a Call button (kept) */}
      <a
        href="#book-call"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition"
      >
        Book a Call
      </a>
    </div>
  );
}
