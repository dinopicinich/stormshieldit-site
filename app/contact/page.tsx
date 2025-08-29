import Head from "next/head";
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import CalendlyEmbed from "../components/CalendlyEmbed";

const CALENDLY_URL = "https://calendly.com/stormshieldit/30min";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnnbqnlw";

export const metadata = {
  title: "Contact • StormShield IT",
  description: "Book a discovery call or send us a note.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Calendly CSS */}
      <Head>
        <link
          rel="stylesheet"
          href="https://assets.calendly.com/assets/external/widget.css"
        />
      </Head>

      <SiteHeader />

      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-4 py-16">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Let’s talk</h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            Book a discovery call or send us a quick note. We’ll get back to you shortly.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
            {/* Contact info */}
            <div>
              <div className="flex items-center gap-3">
                <Image
                  src="/logo-header-220.png"
                  alt="StormShield IT"
                  width={160}
                  height={52}
                  className="h-6 w-auto"
                />
                <span className="text-lg font-semibold">StormShield IT</span>
              </div>
              <div className="mt-6 space-y-2 text-slate-200">
                <p>
                  <span className="text-slate-400">Phone:</span>{" "}
                  <a className="hover:underline" href="tel:+17322722202">(732) 272-2202</a>
                </p>
                <p>
                  <span className="text-slate-400">Email:</span>{" "}
                  <a className="hover:underline" href="mailto:sales@stormshieldit.com">
                    sales@stormshieldit.com
                  </a>
                </p>
                <p><span className="text-slate-400">Hours:</span> 8am–6pm ET • 24/7 emergency</p>
              </div>
            </div>

            {/* Formspree form */}
            <form
              action={FORMSPREE_ENDPOINT}
              method="POST"
              className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6"
            >
              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm text-slate-300">Name</label>
                  <input id="name" name="name" required autoComplete="name"
                    className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500"
                    placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm text-slate-300">Email</label>
                  <input id="email" name="email" type="email" required autoComplete="email"
                    className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500"
                    placeholder="you@company.com" />
                </div>
                <div>
                  <label htmlFor="company" className="text-sm text-slate-300">Company</label>
                  <input id="company" name="company" autoComplete="organization"
                    className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500"
                    placeholder="Company LLC" />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm text-slate-300">What do you need help with?</label>
                  <textarea id="message" name="message" rows={4}
                    className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500"
                    placeholder="Tell us a bit about your goals or issues…" />
                </div>
              </div>
              <button type="submit" className="mt-4 w-full rounded-2xl bg-cyan-500 px-4 py-3 font-semibold text-slate-900">
                Send inquiry
              </button>
              <p className="mt-3 text-center text-xs text-slate-500">
                By submitting, you agree to our terms &amp; privacy policy.
              </p>
            </form>

            {/* Calendly – re-inits on every mount and after client navigation */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-0">
              <CalendlyEmbed url={CALENDLY_URL} className="rounded-3xl" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}