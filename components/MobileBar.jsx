"use client";

import { motion, useReducedMotion } from "motion/react";
import { PhoneIcon } from "./Icons";

const PHONE_HREF = "tel:+61451020862";

/**
 * Persistent thumb-reachable conversion bar on mobile only.
 * Tap-to-call + Get a Quote, both ≥44px. Hidden ≥768px (desktop nav handles it).
 * The body reserves bottom padding so it never covers content.
 */
export default function MobileBar() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="mobilebar"
      initial={reduce ? { opacity: 0 } : { y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <a href={PHONE_HREF} className="mobilebar__call">
        <PhoneIcon width={20} height={20} />
        Call
      </a>
      <a href="#contact" className="mobilebar__quote btn btn-primary">
        Get A Quote
      </a>
    </motion.div>
  );
}
