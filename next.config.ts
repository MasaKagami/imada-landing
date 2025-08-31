// next.config.ts
import type { NextConfig } from "next";

const csp = [
  // keep default self
  "default-src 'self'",
  // allow GA loader script; keep 'unsafe-inline' only if you have inline scripts/styles
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  // GA4 beacons/endpoints (regional endpoint included), plus tag manager
  "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com",
  // images (include data: for inlined svgs/pngs; GA may send via image)
  "img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com",
  // styles (adjust if you use external CDNs)
  "style-src 'self' 'unsafe-inline'",
  // iframes (defensive)
  "frame-src 'self' https://www.googletagmanager.com",
  // optional hardening
  "object-src 'none'",
  "base-uri 'self'",
  // uncomment if your site has no mixed content
  // "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Content Security Policy tailored for GA4
          { key: "Content-Security-Policy", value: csp },
          // (Optional) additional hardening headers:
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
