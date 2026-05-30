// Inline SVG icons — consistent 1.6 stroke, currentColor, 24×24 grid.
// No emoji as structural icons (per UI rules). aria-hidden; labels live on text.

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
};

export function SolarIcon(p) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
    </svg>
  );
}

export function BatteryIcon(p) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="8" width="15" height="8" rx="2" />
      <path d="M21 11v2" />
      <path d="M9 10l-1.5 2.5h2L8 15" />
    </svg>
  );
}

export function HomeIcon(p) {
  return (
    <svg {...base} {...p}>
      <path d="M4 11l8-6 8 6" />
      <path d="M6 10v9h12v-9" />
      <path d="M10 19v-5h4v5" />
    </svg>
  );
}

export function BuildingIcon(p) {
  return (
    <svg {...base} {...p}>
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
      <path d="M10 21v-3h4v3" />
    </svg>
  );
}

export function WrenchIcon(p) {
  return (
    <svg {...base} {...p}>
      <path d="M15 6a4 4 0 0 0-5.2 5.2L4 17v3h3l5.8-5.8A4 4 0 0 0 18 9l-2.3 2.3-2-2L16 7" />
    </svg>
  );
}

export function BoltIcon(p) {
  return (
    <svg {...base} {...p}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
    </svg>
  );
}

export function HeartIcon(p) {
  return (
    <svg {...base} {...p}>
      <path d="M12 20s-7-4.4-7-9.5A3.5 3.5 0 0 1 12 7a3.5 3.5 0 0 1 7 3.5C19 15.6 12 20 12 20z" />
    </svg>
  );
}

export function ClockIcon(p) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function PinIcon(p) {
  return (
    <svg {...base} {...p}>
      <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function AwardIcon(p) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.5 8 21l4-2 4 2-1-7.5" />
    </svg>
  );
}

export function PhoneIcon(p) {
  return (
    <svg {...base} {...p}>
      <path d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  );
}
