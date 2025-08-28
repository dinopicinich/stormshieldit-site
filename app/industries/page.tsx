"use client";

import Link from "next/link";

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* …your content… */}

      <div className="mx-auto max-w-7xl px-4 py-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 text-slate-200 hover:bg-slate-800"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}