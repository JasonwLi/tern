/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["pg"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
