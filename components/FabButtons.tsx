"use client";

import Link from "next/link";

export default function FabButtons() {
  return (
    <Link
      href="/#book-call"
      aria-label="Book a call"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 ring-1 ring-emerald-400/40 transition hover:translate-y-[-1px] md:px-6"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90">
        <path d="M8 7h8M8 11h8M8 15h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14l-4-3H8a2 2 0 0 1-2-2V5Z" stroke="currentColor" strokeWidth="2" />
      </svg>
      <span>Book a call</span>
    </Link>
  );
}