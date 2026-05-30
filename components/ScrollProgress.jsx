"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";

/**
 * Thin gold scroll-progress bar pinned to the top edge.
 * Uses scaleX (transform-only). Under reduced-motion it still reflects
 * progress but without spring smoothing.
 */
export default function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: reduce ? 1000 : 140,
    damping: reduce ? 100 : 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="scroll-progress"
    />
  );
}
