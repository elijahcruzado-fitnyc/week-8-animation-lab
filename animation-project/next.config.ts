import type { NextConfig } from "next";

// GitHub Pages serves a project site from /<repo-name>/, so every asset
// path needs that prefix in production. In GitHub Actions the repo name
// comes from GITHUB_REPOSITORY, so the same code deploys correctly from the
// Classroom repo and from the personal mirror. Local dev stays at the root.
const repo =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ??
  "rapid-prototyping-with-ai-week-8-elijahcruzado-fitnyc";
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
