import type { NextConfig } from "next";
import { THORNE_DISPENSARY_URL } from "./app/lib/external-links";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/patient-resources/order-supplements",
        destination: THORNE_DISPENSARY_URL,
        permanent: true,
      },
    ];
  },
  compiler: {
    // Lets Next compile styled-components the same way for app + transpiled Sanity packages,
    // avoiding duplicate ThemeProvider / useTheme context from split SC bundles.
    styledComponents: true,
  },
  transpilePackages: [
    "sanity",
    "@sanity/ui",
    "next-sanity",
    "@sanity/vision",
  ],
};

export default nextConfig;
