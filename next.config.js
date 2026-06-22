/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "ui-avatars.com" },
      { protocol: "https", hostname: "api.dicebear.com" },
         {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

module.exports = nextConfig;
