"use client";

import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
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
          <span className="text-sm">© {new Date().getFullYear()} StormShield IT • Jupiter, FL</span>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/services" className="text-slate-400 hover:text-slate-200">Services</Link>
          <Link href="/pricing" className="text-slate-400 hover:text-slate-200">Pricing</Link>
          <Link href="/contact" className="text-slate-400 hover:text-slate-200">Contact</Link>
        </div>
      </div>
    </footer>
  );
}