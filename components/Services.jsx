"use client";

import Reveal from "./motion/Reveal";
import Stagger from "./motion/Stagger";
import TiltCard from "./motion/TiltCard";
import {
  SolarIcon,
  BatteryIcon,
  HomeIcon,
  BuildingIcon,
  WrenchIcon,
  BoltIcon,
} from "./Icons";

const SERVICES = [
  {
    Icon: SolarIcon,
    title: "Solar Installation",
    body: "Premium solar systems designed for maximum efficiency and long-term savings.",
  },
  {
    Icon: BatteryIcon,
    title: "Battery Systems",
    body: "Store your solar energy with cutting-edge battery solutions for 24/7 power.",
  },
  {
    Icon: HomeIcon,
    title: "Residential",
    body: "Complete electrical services for homes, from new builds to renovations.",
  },
  {
    Icon: BuildingIcon,
    title: "Commercial",
    body: "Large-scale electrical solutions for businesses and commercial properties.",
  },
  {
    Icon: WrenchIcon,
    title: "Maintenance",
    body: "Regular maintenance and emergency repairs to keep your systems running.",
  },
  {
    Icon: BoltIcon,
    title: "Switchboards",
    body: "Modern switchboard upgrades for safety and compliance.",
  },
];

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <Reveal className="services__head">
          <p className="eyebrow">What We Do</p>
          <h2 className="section-title">Our Services</h2>
          <p className="lede services__lede">
            From solar installations to commercial fit-outs, we deliver premium
            electrical solutions with precision and care.
          </p>
        </Reveal>

        <Stagger className="services__grid" stagger={0.07}>
          {SERVICES.map(({ Icon, title, body }) => (
            <Stagger.Item key={title}>
              <TiltCard className="card svc-card">
                <span className="svc-card__icon" aria-hidden="true">
                  <Icon width={22} height={22} />
                </span>
                <h3 className="svc-card__title">{title}</h3>
                <p className="svc-card__body">{body}</p>
              </TiltCard>
            </Stagger.Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
