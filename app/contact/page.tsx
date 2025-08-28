"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnnbqnlw";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setStatus(null);

    const formEl = e.currentTarget;
    const fd = new FormData(formEl);

    if (fd.get("website")) {
      setIsSubmitting(false);
      return;
    }

    const body = new URLSearchParams();
    fd.forEach((v, k) => {
      if (k !== "website") body.append(k, String(v));
    });
    if (fd.get("email")) body.append("_replyto", String(fd.get("email")));
    body.append("_format", "json");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: body.toString(),
      });

      let success =
        res.ok || (res.status >= 200 && res.status < 400) || res.type === "opaqueredirect";

      const ct = res.headers.get("content-type") || "";
      if (ct.includes("application/json")) {
        const data = await res.json().catch(() => null);
        if (data?.ok === true) success = true;
      }

      if (success) {
        setStatus("success");
        formEl.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Let’s talk</h2>
            <p className="mt-3 text-slate-300">
              Book a discovery call and get a tailored IT & security plan for your business.
            </p>
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

          {/* Contact Form */}
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            noValidate
            autoComplete="on"
            className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6"
          >
            <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm text-slate-300">Name</label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm text-slate-300">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500"
                  placeholder="you@company.com"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="company" className="text-sm text-slate-300">Company</label>
                <input
                  id="company"
                  name="company"
                  autoComplete="organization"
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500"
                  placeholder="Company LLC"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="message" className="text-sm text-slate-300">What do you need help with?</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500"
                  placeholder="Tell us a bit about your goals or issues…"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 w-full rounded-2xl bg-cyan-500 px-4 py-3 font-semibold text-slate-900 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending…" : "Send inquiry"}
            </button>

            {status === "success" && (
              <p className="mt-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-3 text-sm text-emerald-300">
                Thanks! Your message has been sent.
              </p>
            )}
            {status === "error" && (
              <p className="mt-3 rounded-xl border border-rose-400/30 bg-rose-400/10 p-3 text-sm text-rose-300">
                Something went wrong. Please email us at sales@stormshieldit.com.
              </p>
            )}
          </form>
        </div>

        {/* Calendly Embed */}
        <div
          className="calendly-inline-widget rounded-3xl mt-12"
          data-url="https://calendly.com/stormshieldit/30min"
          style={{ minWidth: "320px", height: "640px" }}
        />
      </section>
    </div>
  );
}