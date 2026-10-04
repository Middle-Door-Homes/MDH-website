import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "middledoorhomes.com" }],
        destination: "https://www.middledoorhomes.com/:path*",
        permanent: true,
      },
      {
        source: "/partners",
        destination: "/brokers",
        permanent: true,
      },
      {
        source: "/partners/:path*",
        destination: "/brokers/:path*",
        permanent: true,
      },
      {
        source: "/asset-class",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
