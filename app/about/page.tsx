import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const navItems = [
    { name: "Services", href: "/#services" },
    { name: "Why Us", href: "/#why-us" },
    { name: "Industries", href: "/#industries" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Contact", href: "/#contact" },
    { name: "About", href: "/about" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-header-220.png"
              alt="StormShield IT"
              width={180}
              height={60}
              className="h-8 w-auto"
              priority
            />
            <span className="text-xl font-extrabold tracking-tight">StormShield IT</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm text-slate-300 hover:text-white">
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
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
            {/* Dino LEFT */}
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

            {/* Olivia RIGHT */}
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

      {/* Footer */}
      <footer className="border-t border-slate-800/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-10 md:flex-row">
          <div className="flex items-center gap-3 text-slate-400">
            <Image
              src="/logo-header-220.png"
              alt="StormShield IT Small Logo"
              width={160}
              height={52}
              className="h-6 w-auto"
            />
            <span className="text-sm">
              © {new Date().getFullYear()} StormShield IT • Jupiter, FL
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/#services" className="text-slate-400 hover:text-slate-200">
              Services
            </Link>
            <Link href="/#pricing" className="text-slate-400 hover:text-slate-200">
              Pricing
            </Link>
            <Link href="/#contact" className="text-slate-400 hover:text-slate-200">
              Contact
            </Link>
            <Link href="/about" className="text-slate-400 hover:text-slate-200">
              About
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}