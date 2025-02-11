import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack(config) {
    // Resolving the '@' alias to the 'src' folder
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
};

export default nextConfig;
