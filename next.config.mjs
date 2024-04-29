/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',   // Protokolü belirtin
            hostname: '**',      // Herhangi bir hostname için joker karakter
          },
        ],
    },
};

export default nextConfig;
