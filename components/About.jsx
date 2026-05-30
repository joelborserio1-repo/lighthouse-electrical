"use client";

import Reveal from "./motion/Reveal";
import CountUp from "./motion/CountUp";

const STATS = [
  { value: 35, suffix: "+", label: "Projects Completed" },
  { value: 100, suffix: "%", label: "Satisfaction Rate" },
  { value: "24/7", label: "Emergency Support" },
];

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        {/* Portrait slot — reserved aspect ratio (zero CLS). Real photo drops in here. */}
        <Reveal className="about__media" y={32}>
          <div className="about__photo" role="img" aria-label="Blayke, founder of Lighthouse Electrical" />
          <div className="about__badge">
            <span className="about__badge-num">5+</span>
            <span className="about__badge-label">Years Experience</span>
          </div>
        </Reveal>

        <div className="about__text">
          <Reveal as="p" className="eyebrow">
            About Us
          </Reveal>
          <Reveal as="h2" className="section-title" delay={0.05}>
            Meet Blayke
          </Reveal>

          <Reveal delay={0.1}>
            <p className="about__para">
              Born and bred in Newcastle, Blayke built Lighthouse Electrical around
              honest work, reliability and quality workmanship.
            </p>
            <p className="about__para">
              What started as a passion for solving problems and helping people has
              grown into a trusted local business serving both homeowners and
              commercial clients across the Hunter region.
            </p>
            <p className="about__para">
              Premium workmanship without the ego &mdash; someone clients instantly
              trust. That&rsquo;s the Lighthouse way.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="about__stats">
            {STATS.map((s) => (
              <div key={s.label} className="stat">
                <span className="stat__num">
                  <CountUp value={s.value} suffix={s.suffix || ""} />
                </span>
                <span className="stat__label">{s.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
