"use client";

import { useEffect, useRef } from "react";

type Props = {
  url: string;
  height?: number;
  className?: string;
};

export default function CalendlyEmbed({ url, height = 620, className = "" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // reset container in case we navigated client-side
    el.innerHTML = "";

    const init = () => {
      const Calendly = (window as any).Calendly;
      if (Calendly?.initInlineWidget) {
        Calendly.initInlineWidget({
          url,
          parentElement: el,
        });
      }
    };

    // if Calendly is already on the page, init immediately
    if ((window as any).Calendly?.initInlineWidget) {
      init();
    } else {
      // inject the script (or reuse if already present)
      const existing = document.querySelector<HTMLScriptElement>(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existing) {
        existing.addEventListener("load", init, { once: true });
        // also try once in case it's already loaded
        setTimeout(init, 0);
      } else {
        const s = document.createElement("script");
        s.src = "https://assets.calendly.com/assets/external/widget.js";
        s.async = true;
        s.onload = init;
        document.body.appendChild(s);
      }
    }
  }, [url]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ minWidth: 320, height }}
    />
  );
}