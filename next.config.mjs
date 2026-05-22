/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  },
  poweredByHeader: false
};

export default nextConfig;
