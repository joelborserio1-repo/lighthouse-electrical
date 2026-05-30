"use client";

import { motion, useReducedMotion } from "motion/react";
import { staggerContainer, riseItem, riseItemReduced, spring } from "@/lib/motion";
import CurrentMotif from "./CurrentMotif";
import MagneticButton from "./motion/MagneticButton";
import Parallax from "./motion/Parallax";

export default function Hero() {
  const reduce = useReducedMotion();
  const item = reduce ? riseItemReduced : riseItem;

  return (
    <section className="hero" id="main">
      {/* Layered background: navy wash over imagery slot (reserved height, no CLS) */}
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__motif" aria-hidden="true">
        <Parallax distance={50}>
          <CurrentMotif />
        </Parallax>
      </div>

      <div className="container hero__inner">
        <motion.div
          variants={staggerContainer(0.12, 0.15)}
          initial="hidden"
          animate="show"
          className="hero__content"
        >
          <motion.p variants={item} className="hero__badge">
            Newcastle&rsquo;s Trusted Electricians
          </motion.p>

          <motion.h1 variants={item} className="hero__title">
            Reliable Electrical
            <span className="hero__title-accent"> Done Properly.</span>
          </motion.h1>

          <motion.p variants={item} className="hero__sub">
            Premium electrical, solar and battery solutions across residential and
            commercial projects.
          </motion.p>

          <motion.div variants={item} className="hero__actions">
            <MagneticButton href="#contact" className="btn btn-primary">
              Get A Quote
            </MagneticButton>
            <a href="#services" className="btn btn-ghost">
              Our Services
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="hero__scroll"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...spring, delay: 1 }}
      >
        <span>Scroll</span>
        <motion.span
          className="hero__chevron"
          animate={reduce ? {} : { y: [0, 6, 0] }}
          transition={reduce ? {} : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          ⌄
        </motion.span>
      </motion.div>
    </section>
  );
}
