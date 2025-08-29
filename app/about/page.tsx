// app/about/page.tsx
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex flex-col">
      {/* Shared header (aligns with all other pages) */}
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">About</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            The team behind <span className="text-cyan-400">StormShield IT</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            We combine <strong>25 years</strong> of technical leadership from{" "}
            <span className="font-semibold text-slate-100">Dino Picinich</span> and{" "}
            <strong>15 years</strong> of sales & business development expertise from{" "}
            <span className="font-semibold text-slate-100">Olivia Davila</span> — that’s{" "}
            <strong>40 years of experience, together</strong> — to deliver proactive IT,
            cybersecurity, and white-glove support for growing businesses.
          </p>
        </section>

        {/* Founders */}
        <section className="mx-auto max-w-6xl px-4 pb-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Dino */}
            <article className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 md:p-8">
              <div className="flex items-start gap-6">
                <Image
                  src="/headshots/dino.jpg"
                  alt="Headshot of Dino Picinich, Founder & CEO"
                  width={112}
                  height={112}
                  className="h-28 w-28 rounded-2xl object-cover ring-1 ring-slate-700"
                />
                <div>
                  <h2 className="text-2xl font-bold">Dino Picinich</h2>
                  <p className="text-cyan-300">Founder & CEO</p>
                  <p className="mt-3 text-slate-300">
                    Dino brings <strong>25 years</strong> of hands-on IT and security leadership. He
                    specializes in business continuity, secure cloud architectures, and building
                    reliable, monitored systems that just work.
                  </p>
                </div>
              </div>
            </article>

            {/* Olivia */}
            <article className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 md:p-8">
              <div className="flex items-start gap-6">
                <Image
                  src="/headshots/olivia.jpg"
                  alt="Headshot of Olivia Davila, Co-Founder & President of Sales & Business Development"
                  width={112}
                  height={112}
                  className="h-28 w-28 rounded-2xl object-cover ring-1 ring-slate-700"
                />
                <div>
                  <h2 className="text-2xl font-bold">Olivia Davila</h2>
                  <p className="text-cyan-300">
                    Co-Founder & President, Sales & Business Development
                  </p>
                  <p className="mt-3 text-slate-300">
                    Olivia brings <strong>15 years</strong> of experience helping businesses align
                    technology with growth. She leads GTM strategy, partnerships, and a customer
                    experience that’s clear and results-driven.
                  </p>
                </div>
              </div>
            </article>
          </div>

          {/* Combined experience card */}
          <div className="mt-8 rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
            <p className="text-lg text-emerald-300">
              Together: <span className="font-semibold text-emerald-200">40 years</span> of combined
              experience powering secure, resilient operations.
            </p>
          </div>
        </section>
      </main>

      {/* Shared footer */}
      <SiteFooter />
    </div>
  );
}