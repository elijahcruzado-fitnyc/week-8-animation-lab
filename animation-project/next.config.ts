import type { NextConfig } from "next";

// GitHub Pages serves this repo's site from /<repo-name>/, so every asset
// path needs that prefix in production. Local dev stays at the root.
const repo = "rapid-prototyping-with-ai-week-8-elijahcruzado-fitnyc";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? `/${repo}` : "",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
