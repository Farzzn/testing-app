import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/testing-app", // Matches the repository name
  output: "export", // Ensures Next.js generates a static export
  images: {
    unoptimized: true // Required for static export
  },
};

export default nextConfig;
