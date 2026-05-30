"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

/**
 * Scroll-driven parallax. Translates a child on the Y axis as the element
 * passes through the viewport. Transform-only (GPU) → no layout thrash.
 * Disabled entirely under prefers-reduced-motion.
 *
 * `distance` = total px of travel across the scroll range.
 */
export default function Parallax({ children, distance = 60, className }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [distance, -distance]
  );

  return (
    <div ref={ref} className={className} style={{ position: "relative" }}>
      <motion.div style={{ y, willChange: "transform" }}>{children}</motion.div>
    </div>
  );
}
