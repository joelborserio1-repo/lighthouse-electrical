// JSON-LD structured data — LocalBusiness (Electrician) for AEO/SEO.
// Server component; injected once. Helps AI search + rich results surface
// the business, service area, and contact path (drives quote/call intent).

const data = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: "Lighthouse Electrical",
  description:
    "Premium electrical, solar and battery solutions across residential and commercial projects in Newcastle and the Hunter region.",
  slogan: "Reliable Electrical Done Properly.",
  url: "https://lighthouse.jtbassetgroup.com",
  telephone: "+61451020862",
  areaServed: [
    "Newcastle",
    "Lake Macquarie",
    "Maitland",
    "Port Stephens",
    "Hunter Valley",
    "Central Coast",
  ].map((name) => ({ "@type": "City", name })),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Newcastle",
    addressRegion: "NSW",
    addressCountry: "AU",
  },
  founder: { "@type": "Person", name: "Blayke" },
  makesOffer: [
    "Solar Installation",
    "Battery Systems",
    "Residential Electrical",
    "Commercial Electrical",
    "Maintenance",
    "Switchboard Upgrades",
  ].map((name) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name },
  })),
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
