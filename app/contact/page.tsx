// Server component is fine here; Calendly script is loaded globally in layout.
// Ensure your app/layout.tsx has the Calendly CSS+JS <link>/<Script> tags.

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
          Contact StormShield IT
        </h1>
        <p className="text-lg text-slate-300 mb-8">
          Pick a time that works for you, or email <a className="underline" href="mailto:sales@stormshieldit.com">sales@stormshieldit.com</a>.
        </p>

        {/* Calendly embed */}
        <div
          className="calendly-inline-widget rounded-2xl border border-slate-800"
          data-url="https://calendly.com/stormshieldit/30min"
          style={{ minWidth: "320px", height: "650px" }}
        />

        <div className="mt-10 text-slate-300">
          <p><span className="text-slate-400">Phone:</span> <a className="underline" href="tel:+17322722202">(732) 272-2202</a></p>
          <p><span className="text-slate-400">Hours:</span> 8am–6pm ET • 24/7 emergency</p>
        </div>
      </div>
    </div>
  );
}