import Head from "next/head";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FabButtons from "@/components/FabButtons";

export const metadata = { title: "Services | StormShield IT" };

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Head>
        <link rel="icon" href="/favicon-32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-512.png" sizes="512x512" />
      </Head>

      <SiteHeader />

      <main className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <section className="max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Services</h1>
          <p className="mt-4 text-lg text-slate-300">
            Proactive IT + 24/7 security that keep your business online, protected, and fast.
          </p>
        </section>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Managed IT & Helpdesk",
              body:
                "Unlimited remote support, endpoint management, patching, asset inventory, and friendly helpdesk that actually picks up.",
            },
            {
              title: "Security Operations (SOC)",
              body:
                "24/7 monitoring and response, EDR/XDR, SIEM, threat hunting, phishing defense, and incident playbooks tailored to your org.",
            },
            {
              title: "Cloud & Microsoft 365",
              body:
                "Tenant hardening, identity & access (Entra), email security, backup, device compliance, Intune, and collaboration.",
            },
            {
              title: "Business Continuity",
              body:
                "Backups you can restore fast, DR planning, runbooks, and real failover tests so recovery isn’t a surprise.",
            },
            {
              title: "Networking & Wi-Fi",
              body:
                "Secure SD-WAN, next-gen firewalls, VLAN segmentation, guest Wi-Fi, and QoS so apps stay snappy.",
            },
            {
              title: "vCIO & Compliance",
              body:
                "Quarterly roadmap, budgeting, vendor management, and compliance guidance for SOC 2, HIPAA, PCI, and more.",
            },
          ].map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-300">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="/#contact"
            className="inline-flex items-center rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-cyan-500/20 hover:translate-y-[-1px]"
          >
            Talk to Sales
          </a>
        </div>
      </main>

      <SiteFooter />
      <FabButtons />
    </div>
  );
}