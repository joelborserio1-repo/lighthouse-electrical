"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

/**
 * Counts from 0 → target when scrolled into view.
 * `prefix`/`suffix` keep non-numeric parts (e.g. "+", "%", "24/7") intact.
 * Reduced-motion: shows the final value immediately.
 * Uses tabular figures (see .tnum) to avoid width jitter.
 */
export default function CountUp({ value, prefix = "", suffix = "", duration = 1500 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  // Non-numeric targets (e.g. "24/7") are shown verbatim.
  const numeric = typeof value === "number";

  useEffect(() => {
    if (!numeric) return;
    if (!inView || reduce) {
      setDisplay(value);
      return;
    }
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, value, duration, numeric]);

  return (
    <span ref={ref} className="tnum">
      {numeric ? `${prefix}${display}${suffix}` : value}
    </span>
  );
}
