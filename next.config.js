/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["encrypted-tbn0.gstatic.com", "fakestoreapi.com"],
  },
};

module.exports = nextConfig;
