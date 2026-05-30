// Reserved logo slot. The real Logo_09.svg is not yet in the repo — we do NOT
// redraw or recolour the brand mark. This holds exact dimensions (zero CLS) and
// a labelled placeholder until the official SVG is dropped into /public.
//
// To wire the real logo: place Logo_09.svg in /public and replace the inner
// markup with <img src="/Logo_09.svg" .../> at the same width/height.

export default function Logo({ width = 132, height = 44, onDark = false }) {
  return (
    <span
      className="logo-slot"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width,
        height,
        border: `1px dashed ${onDark ? "var(--border-on-dark)" : "var(--border)"}`,
        borderRadius: "var(--radius)",
        color: onDark ? "var(--text-inv-muted)" : "var(--text-muted)",
        fontFamily: "var(--font-display)",
        fontSize: "0.72rem",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
      }}
      role="img"
      aria-label="Lighthouse Electrical"
    >
      Logo
    </span>
  );
}
