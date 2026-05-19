/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/wiseguysbarbers.co.uk",
  assetPrefix: "/wiseguysbarbers.co.uk/",
  images: {
    formats: ["image/webp"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
