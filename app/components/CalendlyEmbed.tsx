// app/components/CalendlyEmbed.tsx
"use client";

import { useEffect, useRef } from "react";

type CalendlyEmbedProps = {
  url: string;
  height?: number;
  className?: string;
};

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, unknown>;
        utm?: Record<string, unknown>;
      }) => void;
    };
  }
}

let calendlyLoadPromise: Promise<void> | null = null;

function ensureCalendlyLoaded(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();

  // Inject CSS once
  if (!document.querySelector('link[data-calendly-css="true"]')) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.setAttribute("data-calendly-css", "true");
    document.head.appendChild(link);
  }

  // If already available, we're done
  if (window.Calendly) return Promise.resolve();

  // Load script once
  if (!calendlyLoadPromise) {
    calendlyLoadPromise = new Promise<void>((resolve, reject) => {
      const scriptId = "calendly-widget-js";
      const existing = document.getElementById(scriptId) as HTMLScriptElement | null;

      const onReady = () => resolve();

      if (existing) {
        if (window.Calendly) onReady();
        else existing.addEventListener("load", onReady, { once: true });
        return;
      }

      const s = document.createElement("script");
      s.id = scriptId;
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      s.async = true;
      s.onload = () => onReady();
      s.onerror = () => reject(new Error("Failed to load Calendly"));
      document.body.appendChild(s);
    });
  }

  return calendlyLoadPromise;
}

export default function CalendlyEmbed({
  url,
  height = 620,
  className = "",
}: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    ensureCalendlyLoaded()
      .then(() => {
        if (cancelled || !containerRef.current || !window.Calendly) return;

        // Clear any previous instance in the same container before re-init
        containerRef.current.innerHTML = "";

        window.Calendly.initInlineWidget({
          url,
          parentElement: containerRef.current,
          prefill: {},
          utm: {},
        });
      })
      .catch(() => {
        // silently ignore—keeps prod builds clean
      });

    return () => {
      cancelled = true;
    };
  }, [url]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ minWidth: "320px", height }}
    />
  );
}