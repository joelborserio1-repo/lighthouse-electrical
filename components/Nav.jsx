"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Logo from "./Logo";
import { PhoneIcon } from "./Icons";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

const PHONE = "0451 020 862";
const PHONE_HREF = "tel:+61451020862";

export default function Nav() {
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`nav ${scrolled ? "nav--scrolled" : ""}`}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container nav__inner">
        <a href="#main" aria-label="Lighthouse Electrical — home" className="nav__logo">
          <Logo onDark />
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav__link">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a href={PHONE_HREF} className="nav__phone">
            <PhoneIcon width={18} height={18} />
            <span>{PHONE}</span>
          </a>
          <a href="#contact" className="btn btn-primary nav__cta">
            Get A Quote
          </a>
        </div>
      </div>
    </motion.header>
  );
}
