import Logo from "./Logo";
import { PhoneIcon } from "./Icons";

const PHONE = "0451 020 862";
const PHONE_HREF = "tel:+61451020862";

const AREAS = [
  "Newcastle",
  "Lake Macquarie",
  "Maitland",
  "Port Stephens",
  "Hunter Valley",
  "Central Coast",
];

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo onDark />
          <p className="footer__tag">Reliable Electrical Done Properly.</p>
          <a href={PHONE_HREF} className="footer__phone">
            <PhoneIcon width={18} height={18} />
            {PHONE}
          </a>
        </div>

        <nav className="footer__col" aria-label="Footer">
          <h3 className="footer__heading">Explore</h3>
          <ul className="footer__list">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="footer__link">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h3 className="footer__heading">Service Areas</h3>
          <ul className="footer__list footer__areas">
            {AREAS.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer__bar">
        <p className="footer__legal">
          Licensed &amp; insured electrical contractor &middot; Newcastle, NSW
        </p>
        <p className="footer__copy">
          &copy;&nbsp;{new Date().getFullYear()} Lighthouse Electrical. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
