"use client";

import Reveal from "./motion/Reveal";
import Stagger from "./motion/Stagger";
import { HeartIcon, ClockIcon, PinIcon, AwardIcon, BuildingIcon } from "./Icons";

const POINTS = [
  {
    Icon: HeartIcon,
    title: "Honest",
    body: "Transparent pricing with no hidden fees. We tell it like it is.",
  },
  {
    Icon: ClockIcon,
    title: "Reliable",
    body: "We show up on time, every time. Your schedule matters to us.",
  },
  {
    Icon: PinIcon,
    title: "Local",
    body: "Born and bred Newcastle. We know and love this community.",
  },
  {
    Icon: AwardIcon,
    title: "High-End Workmanship",
    // Typography fix: real apostrophe, not the literal &apos; seen on the live site.
    body: "Premium quality on every job. We don’t cut corners.",
  },
  {
    Icon: BuildingIcon,
    title: "Commercial Capability",
    body: "From homes to high-rises. We scale with your needs.",
  },
];

export default function WhyUs() {
  return (
    <section className="section why" id="why">
      <div className="container">
        <Reveal className="why__head">
          <p className="eyebrow why__eyebrow">The Lighthouse Difference</p>
          <h2 className="section-title why__title">Why Choose Us</h2>
          <p className="why__lede">
            We&rsquo;re not just another electrical company. Here&rsquo;s what sets
            Lighthouse apart.
          </p>
        </Reveal>

        <Stagger className="why__grid" stagger={0.06}>
          {POINTS.map(({ Icon, title, body }) => (
            <Stagger.Item key={title} className="why-card">
              <span className="why-card__icon" aria-hidden="true">
                <Icon width={22} height={22} />
              </span>
              <h3 className="why-card__title">{title}</h3>
              <p className="why-card__body">{body}</p>
            </Stagger.Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
