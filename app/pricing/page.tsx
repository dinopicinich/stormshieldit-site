import Head from "next/head";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FabButtons from "@/components/FabButtons";

export const metadata = { title: "Pricing | StormShield IT" };

export default function PricingPage() {
  const plans = [
    {
      name: "Essentials",
      price: "$79",
      unit: "user/mo",
      features: [
        "Unlimited remote helpdesk",
        "Device management & patching",
        "Email security & MFA baseline",
        "Microsoft 365 support",
      ],
      cta: "Get a quote",
    },
    {
      name: "Secure",
      price: "$129",
      unit: "user/mo",
      features: [
        "Everything in Essentials",
        "EDR/XDR + SOC monitoring",
        "Security awareness & phishing",
        "Backup & recovery for M365",
      ],
      cta: "Talk to Sales",
      highlight: true,
    },
    {
      name: "Continuity",
      price: "$169",
      unit: "user/mo",
      features: [
        "Everything in Secure",
        "Business continuity & DR runbooks",
        "Quarterly vCIO & roadmap",
        "Compliance guidance (SOC2/HIPAA)",
      ],
      cta: "Book a Call",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Head>
        <link rel="icon" href="/favicon-32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-512.png" sizes="512x512" />
      </Head>

      <SiteHeader />

      <main className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <section className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Pricing</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Transparent per-user plans. Mix & match based on roles. Month-to-month available.
          </p>
        </section>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border bg-slate-900/40 p-6 ${
                p.highlight ? "border-cyan-500/40 shadow-lg shadow-cyan-500/10" : "border-slate-800"
              }`}
            >
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">{p.price}</span>
                <span className="text-slate-400">/{p.unit}</span>
              </div>
              <ul className="mt-4 space-y-2 text-slate-300">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-400/80" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={p.name === "Continuity" ? "/#book-call" : "/#contact"}
                className={`mt-6 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 font-semibold text-slate-900 ${
                  p.highlight
                    ? "bg-cyan-500 shadow-cyan-500/20"
                    : "bg-emerald-500 shadow-emerald-500/20"
                } shadow-lg hover:translate-y-[-1px]`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-slate-400">
          Final pricing depends on environment size, device count, and selected add-ons.
        </p>
      </main>

      <SiteFooter />
      <FabButtons />
    </div>
  );
}