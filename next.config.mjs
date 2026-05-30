/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export — ships as plain HTML/CSS/JS (host-anywhere, best perf/SEO).
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
