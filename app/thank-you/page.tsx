"use client";

import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">
      <div className="max-w-lg rounded-3xl border border-slate-800 bg-slate-900/40 p-10 text-center shadow-xl">
        <h1 className="text-4xl font-extrabold text-emerald-400">Thank You!</h1>
        <p className="mt-4 text-slate-300 text-lg">
          Your meeting has been scheduled. We look forward to talking with you.
        </p>
        <p className="mt-2 text-slate-400 text-sm">
          A calendar invite has been sent to your email.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-6 py-3 font-semibold text-emerald-300 hover:bg-emerald-500/20"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
