"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Signature moment: a conductive "current" tracing a circuit path that resolves
 * toward a lighthouse beam — the electricity + lighthouse through-line.
 * Pure SVG path-draw (stroke-dashoffset via pathLength) → transform/opacity-class
 * GPU work, no layout thrash. Reduced-motion: paths shown static, no pulse.
 */
export default function CurrentMotif() {
  const reduce = useReducedMotion();

  const draw = (delay) =>
    reduce
      ? { pathLength: 1, opacity: 0.5 }
      : {
          pathLength: [0, 1],
          opacity: [0, 0.7],
          transition: {
            pathLength: { duration: 2.4, delay, ease: "easeInOut" },
            opacity: { duration: 0.6, delay },
          },
        };

  return (
    <svg
      className="motif"
      viewBox="0 0 600 600"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Circuit traces */}
      <motion.path
        d="M20 300 H160 a20 20 0 0 0 20-20 V120 a20 20 0 0 1 20-20 H300"
        stroke="var(--gold)"
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={draw(0.2)}
      />
      <motion.path
        d="M580 360 H440 a20 20 0 0 1-20-20 V200 a20 20 0 0 0-20-20 H300"
        stroke="var(--gold)"
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={draw(0.5)}
      />
      <motion.path
        d="M300 580 V440 a20 20 0 0 1 20-20 H460"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={draw(0.8)}
      />

      {/* Circuit nodes */}
      {[
        [300, 100],
        [300, 180],
        [460, 420],
      ].map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy}
          r="4"
          fill="var(--gold)"
          initial={{ scale: 0, opacity: 0 }}
          animate={
            reduce
              ? { scale: 1, opacity: 0.8 }
              : {
                  scale: [0, 1.4, 1],
                  opacity: [0, 1, 0.8],
                  transition: { delay: 1.2 + i * 0.15, duration: 0.6 },
                }
          }
        />
      ))}

      {/* Travelling pulse along the main trace (skipped under reduced-motion) */}
      {!reduce && (
        <motion.circle
          r="3.5"
          fill="#fff"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            offsetDistance: ["0%", "100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 1.5,
            delay: 2.6,
            ease: "easeInOut",
          }}
          style={{
            offsetPath:
              "path('M20 300 H160 a20 20 0 0 0 20-20 V120 a20 20 0 0 1 20-20 H300')",
          }}
        />
      )}
    </svg>
  );
}
