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
    ];
  },
};

export default nextConfig;
