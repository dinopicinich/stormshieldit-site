import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Shared Header */}
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Contact StormShield IT</h1>
        <p className="mt-3 max-w-2xl text-slate-300">
          Pick a time that works for you, or email{" "}
          <a className="underline decoration-slate-500 hover:text-white" href="mailto:sales@stormshieldit.com">
            sales@stormshieldit.com
          </a>
          .
        </p>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Contact details */}
          <aside className="space-y-3 text-slate-300">
            <p>
              <span className="text-slate-400">Phone:</span>{" "}
              <a className="hover:underline" href="tel:+17322722202">
                (732) 272-2202
              </a>
            </p>
            <p>
              <span className="text-slate-400">Email:</span>{" "}
              <a className="hover:underline" href="mailto:sales@stormshieldit.com">
                sales@stormshieldit.com
              </a>
            </p>
            <p>
              <span className="text-slate-400">Hours:</span> 8am–6pm ET • 24/7 emergency
            </p>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-300">
              Prefer email? Send a note to{" "}
              <a className="underline decoration-slate-500 hover:text-white" href="mailto:sales@stormshieldit.com">
                sales@stormshieldit.com
              </a>{" "}
              or book directly using the scheduler.
            </div>
          </aside>

          {/* Calendly inline embed */}
          <section className="md:col-span-2 rounded-3xl border border-slate-800 bg-slate-900/40 p-0">
            <div
              id="book-call"
              className="calendly-inline-widget rounded-3xl"
              data-url="https://calendly.com/stormshieldit/30min"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </section>
        </div>
      </main>

      {/* Shared Footer */}
      <SiteFooter />

      {/* Floating Book a Call button */}
      <a
        href="#book-call"
        aria-label="Book a call"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 ring-1 ring-emerald-400/40 transition hover:translate-y-[-1px] focus:outline-none focus:ring-2 focus:ring-emerald-300 md:px-6"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90">
          <path d="M8 7h8M8 11h8M8 15h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M6 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14l-4-3H8a2 2 0 0 1-2-2V5Z" stroke="currentColor" strokeWidth="2" />
        </svg>
        <span>Book a call</span>
      </a>
    </div>
  );
}