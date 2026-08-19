import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "uwrov.org" },
      { protocol: "https", hostname: "uwrovorg.wordpress.com" },
    ],
  },
};

export default nextConfig;