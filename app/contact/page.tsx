"use client";

import Script from "next/script";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex flex-col">
      <SiteHeader />

      <main className="flex-1 mx-auto max-w-7xl px-4 py-16 grid gap-10 md:grid-cols-3">
        {/* Contact info */}
        <div>
          <h1 className="text-4xl font-extrabold mb-4">Let’s talk</h1>
          <p className="text-slate-300 mb-6">
            Book a discovery call and get a tailored IT & security plan for your business.
          </p>

          <div className="space-y-2 text-slate-200">
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

          <div className="mt-6 rounded-xl border border-slate-700 bg-slate-900/40 p-4 text-sm text-slate-300">
            Prefer email? Send a note to <span className="font-semibold">sales@stormshieldit.com</span> or book directly using the scheduler.
          </div>

          <div className="mt-8">
            <Link
              href="/about"
              className="rounded-xl border border-slate-700 px-4 py-2 text-slate-200 hover:bg-slate-800"
            >
              Meet the Team
            </Link>
          </div>
        </div>

        {/* Simple contact form placeholder (keep if you want) */}
        <form className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6">
          <label className="block text-sm text-slate-300">Name</label>
          <input className="mt-1 mb-4 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2" />

          <label className="block text-sm text-slate-300">Email</label>
          <input type="email" className="mt-1 mb-4 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2" />

          <label className="block text-sm text-slate-300">What do you need help with?</label>
          <textarea rows={4} className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2" />

          <button
            type="submit"
            className="mt-4 w-full rounded-xl bg-cyan-500 px-4 py-3 font-semibold text-slate-900 hover:bg-cyan-400"
          >
            Send inquiry
          </button>
        </form>

        {/* Calendly */}
        <div id="book-call" className="rounded-2xl border border-slate-700 bg-slate-900/40 p-0">
          <div
            className="calendly-inline-widget rounded-2xl"
            data-url="https://calendly.com/stormshieldit/30min"
            style={{ minWidth: "320px", height: "640px" }}
          />
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
          />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}