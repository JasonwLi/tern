/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["pg", "nodemailer"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
