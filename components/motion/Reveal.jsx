"use client";

import { motion, useReducedMotion } from "motion/react";
import { spring, inView } from "@/lib/motion";

/**
 * Scroll-triggered reveal. Animates transform/opacity only.
 * Honours prefers-reduced-motion (fades, no movement).
 * `as` lets callers pick the rendered element (section, div, li…).
 */
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 24,
  className,
  ...rest
}) {
  const reduce = useReducedMotion();
  const M = motion[as] || motion.div;

  return (
    <M
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={inView}
      transition={reduce ? { duration: 0.25, delay } : { ...spring, delay }}
      {...rest}
    >
      {children}
    </M>
  );
}
