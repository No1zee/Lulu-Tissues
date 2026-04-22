import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/partners",
        destination: "/business",
        permanent: true,
      },
      {
        source: "/partners/:path*",
        destination: "/business/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

