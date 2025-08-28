import Head from "next/head";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FabButtons from "@/components/FabButtons";

export const metadata = { title: "Industries | StormShield IT" };

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Head>
        <link rel="icon" href="/favicon-32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-512.png" sizes="512x512" />
      </Head>

      <SiteHeader />

      <main className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <section className="max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Industries We Serve</h1>
          <p className="mt-4 text-lg text-slate-300">
            Tailored controls, compliance, and uptime for regulated and high-growth environments.
          </p>
        </section>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            { name: "Healthcare", desc: "HIPAA, PHI protection, audit logging, secure telehealth, and vendor risk." },
            { name: "Financial Services", desc: "SOC 2, PCI, FDIC/NFA expectations, phishing defense, and DLP." },
            { name: "Manufacturing", desc: "OT network segmentation, least privilege, and secure remote maintenance." },
            { name: "Professional Services", desc: "Email security, data retention, secure collaboration, and MDM." },
            { name: "Non-profits", desc: "Grant-friendly plans, security baseline, and donor data protection." },
            { name: "SaaS / Startups", desc: "SOC 2 readiness, cloud posture, SSO/MFA, and rapid onboarding/offboarding." },
          ].map((i) => (
            <div key={i.name} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-xl font-semibold">{i.name}</h3>
              <p className="mt-2 text-slate-300">{i.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="/#contact"
            className="inline-flex items-center rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-cyan-500/20 hover:translate-y-[-1px]"
          >
            Get a tailored plan
          </a>
        </div>
      </main>

      <SiteFooter />
      <FabButtons />
    </div>
  );
}