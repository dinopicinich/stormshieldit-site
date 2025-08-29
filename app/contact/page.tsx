"use client";

import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const CALENDLY_URL = "https://calendly.com/stormshieldit/30min";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Let’s talk</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          Book a discovery call and get a tailored IT &amp; security plan for your business.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
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

            <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-300">
              Prefer email? Send a note to{" "}
              <a href="mailto:sales@stormshieldit.com" className="text-cyan-300 underline">
                sales@stormshieldit.com
              </a>{" "}
              or book directly using the scheduler.
            </div>

            <div className="mt-6 flex gap-3">
              <Link
                href="#book-call"
                className="rounded-2xl bg-emerald-500 px-6 py-3 font-semibold text-slate-900"
              >
                Jump to Scheduler
              </Link>
            </div>
          </div>

          {/* Calendly */}
          <div id="book-call" className="rounded-2xl border border-slate-800 bg-slate-900/40 p-0">
            <div
              className="calendly-inline-widget rounded-2xl"
              data-url={CALENDLY_URL}
              style={{ minWidth: "320px", height: "720px" }}
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}