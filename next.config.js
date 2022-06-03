/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'cdn.shopify.com', 'alisboutique.s3.amazonaws.com'],
  },
};

module.exports = nextConfig;
