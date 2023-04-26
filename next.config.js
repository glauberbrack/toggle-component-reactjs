/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn-icons-png.flaticon.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig
