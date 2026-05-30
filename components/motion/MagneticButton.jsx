"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { springSnappy } from "@/lib/motion";

/**
 * Cursor-aware "magnetic" CTA: gently pulls toward the pointer, springs back.
 * Pointer-only (skipped on touch + reduced-motion). Renders a real <a>/<button>
 * so it stays keyboard- and screen-reader-accessible.
 */
export default function MagneticButton({
  children,
  as = "a",
  className,
  strength = 0.35,
  ...rest
}) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, springSnappy);
  const sy = useSpring(y, springSnappy);

  const M = as === "button" ? motion.button : motion.a;

  function handleMove(e) {
    if (reduce) return;
    // Skip magnetic effect for coarse pointers (touch)
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <M
      ref={ref}
      className={className}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      {...rest}
    >
      {children}
    </M>
  );
}
