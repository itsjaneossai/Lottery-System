// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack config (Next.js 16)
  turbopack: {
    rules: {
      // Enable importing .svg as React components
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
