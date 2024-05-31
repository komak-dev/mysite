const isDev = process.env.NODE_ENV === "development";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: isDev
    ? ["mdx", "md", "jsx", "js", "tsx", "ts", "dev.tsx"]
    : ["mdx", "md", "jsx", "js", "tsx", "ts"],
  
  output:"export",
};

export default nextConfig;
