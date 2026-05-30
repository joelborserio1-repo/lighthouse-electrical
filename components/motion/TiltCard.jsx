"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "motion/react";

/**
 * Cursor-aware card: subtle 3D tilt + a light-glare that tracks the pointer,
 * echoing the "light/electricity" through-line. Pointer-only; skipped on
 * touch and under reduced-motion (renders a plain card then).
 * Tilt uses rotateX/rotateY (transform) → 60fps, no reflow.
 */
export default function TiltCard({ children, className, max = 6 }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 200, damping: 20 });
  const sy = useSpring(py, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const glareX = useTransform(sx, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(sy, [0, 1], ["0%", "100%"]);

  function onMove(e) {
    if (reduce) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  }
  function reset() {
    px.set(0.5);
    py.set(0.5);
  }

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 900, willChange: "transform" }}
    >
      {children}
      <motion.span
        aria-hidden="true"
        className="tilt-glare"
        style={{
          background: useTransform(
            [glareX, glareY],
            ([x, y]) =>
              `radial-gradient(180px circle at ${x} ${y}, rgba(224,164,58,0.18), transparent 60%)`
          ),
        }}
      />
    </motion.div>
  );
}
