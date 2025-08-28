import Head from "next/head";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FabButtons from "@/components/FabButtons";

export const metadata = { title: "Why Us | StormShield IT" };

export default function WhyUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Head>
        <link rel="icon" href="/favicon-32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-512.png" sizes="512x512" />
      </Head>

      <SiteHeader />

      <main className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <section className="max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Why StormShield IT</h1>
          <p className="mt-4 text-lg text-slate-300">
            We pair battle-tested security with practical IT so your team moves faster — and safer.
          </p>
        </section>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Proactive by design",
              body: "We hunt issues before your team feels them: patching, monitoring, hardening, and roadmap reviews.",
            },
            {
              title: "Fast, human support",
              body: "No ticket purgatory. You get named engineers and leadership you can text when it matters.",
            },
            {
              title: "Security first",
              body: "SOC coverage, MFA/SSO, EDR/XDR, and layered defense that aligns to real threats in your industry.",
            },
            {
              title: "Continuity obsessed",
              body: "Backups verified, failovers rehearsed, and recovery times we stand behind.",
            },
            {
              title: "Clear pricing",
              body: "Simple per-user/per-device plans with no gotchas, and month-to-month options.",
            },
            {
              title: "Executive visibility",
              body: "Quarterly vCIO reviews, KPIs, and board-ready security posture summaries.",
            },
          ].map((x) => (
            <div key={x.title} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-lg font-semibold">{x.title}</h3>
              <p className="mt-2 text-slate-300">{x.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="/#book-call"
            className="inline-flex items-center rounded-2xl bg-emerald-500 px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-emerald-500/20 hover:translate-y-[-1px]"
          >
            Book a Call
          </a>
        </div>
      </main>

      <SiteFooter />
      <FabButtons />
    </div>
  );
}