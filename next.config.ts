import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/publibarbosa",
  assetPrefix: "/publibarbosa/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
