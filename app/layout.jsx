import localFont from "next/font/local";
import "./globals.css";
import "./components.css";
import ScrollProgress from "@/components/ScrollProgress";
import StructuredData from "@/components/StructuredData";

// Close-match brand fonts, bundled locally (the container blocks Google Fonts,
// and local fonts keep the build network-independent). Outfit ≈ Sora/Poppins
// for display; Work Sans ≈ Inter for body. Swap to exact brand fonts when known.
const sora = localFont({
  src: [
    { path: "./fonts/Outfit-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Outfit-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-sora",
  display: "swap",
});

const inter = localFont({
  src: [
    { path: "./fonts/WorkSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/WorkSans-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://lighthouse.jtbassetgroup.com"),
  manifest: "/manifest.webmanifest",
  title: "Lighthouse Electrical — Reliable Electrical Done Properly | Newcastle",
  description:
    "Premium electrical, solar and battery solutions across residential and commercial projects. Newcastle's trusted electricians, serving the Hunter region. Get a free quote.",
  keywords: [
    "electrician Newcastle",
    "solar installation Newcastle",
    "battery systems",
    "commercial electrical",
    "switchboard upgrades",
    "Hunter region electrician",
  ],
  openGraph: {
    title: "Lighthouse Electrical — Reliable Electrical Done Properly",
    description:
      "Premium electrical, solar and battery solutions across residential and commercial projects in Newcastle and the Hunter.",
    type: "website",
    locale: "en_AU",
  },
};

export const viewport = {
  themeColor: "#0e2238",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU" className={`${sora.variable} ${inter.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ScrollProgress />
        {children}
        <StructuredData />
      </body>
    </html>
  );
}
