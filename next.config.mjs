/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so the site can be hosted on GitHub Pages (codewithemperor.github.io).
  // Every case study is pre-rendered to real HTML, which is what search engines index.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
