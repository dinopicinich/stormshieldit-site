"use client";
// If your headshot filenames differ, update the src paths below.

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-3">
          Meet the Team
        </h1>
        <p className="text-lg text-slate-300 mb-10">
          40+ years of combined experience delivering resilient, secure IT.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Dino left */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 overflow-hidden rounded-full ring-1 ring-white/10">
                <Image
                  src="/headshot-dino.jpg" // ← update if needed
                  alt="Dino Picinich"
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Dino Picinich</h2>
                <p className="text-slate-400">Founder &amp; CEO — 25 years experience</p>
              </div>
            </div>
            <p className="mt-4 text-slate-300">
              Dino leads strategy and service design, with deep experience in managed IT,
              cloud operations, and security programs for SMBs.
            </p>
          </div>

          {/* Olivia right */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 overflow-hidden rounded-full ring-1 ring-white/10">
                <Image
                  src="/headshot-olivia.jpg" // ← update if needed
                  alt="Olivia Davila"
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Olivia Davila</h2>
                <p className="text-slate-400">Co-Founder &amp; President, Sales &amp; Biz Dev — 15 years experience</p>
              </div>
            </div>
            <p className="mt-4 text-slate-300">
              Olivia leads growth and client success, aligning tailored solutions with
              real business outcomes.
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
            Talk to Sales
          </a>
        </div>
      </div>
    </div>
  );
}