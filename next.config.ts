import type { NextConfig } from "next";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (process.env.NODE_ENV === "production" ? "/PHQCportfolio" : "");
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: true },
  // Keep local UI iterations from reusing stale CSS loader output.
  webpack(config, { dev }) {
    if (dev) config.cache = false;
    return config;
  },
};
export default nextConfig;
