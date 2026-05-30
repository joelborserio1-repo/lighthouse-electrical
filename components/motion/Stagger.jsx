"use client";

import { motion, useReducedMotion } from "motion/react";
import { staggerContainer, riseItem, riseItemReduced, inView } from "@/lib/motion";

/**
 * Staggered group: reveals children in sequence on scroll.
 * Use <Stagger.Item> for each child.
 */
export default function Stagger({
  children,
  as = "div",
  stagger = 0.08,
  delay = 0,
  className,
  ...rest
}) {
  const M = motion[as] || motion.div;
  return (
    <M
      className={className}
      variants={staggerContainer(stagger, delay)}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      {...rest}
    >
      {children}
    </M>
  );
}

function Item({ children, as = "div", className, ...rest }) {
  const reduce = useReducedMotion();
  const M = motion[as] || motion.div;
  return (
    <M
      className={className}
      variants={reduce ? riseItemReduced : riseItem}
      {...rest}
    >
      {children}
    </M>
  );
}

Stagger.Item = Item;
