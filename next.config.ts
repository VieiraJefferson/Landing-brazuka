import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "siriusdev.site",
          },
        ],
        destination: "https://www.siriusdev.site/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
