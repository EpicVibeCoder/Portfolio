/** @type {import('next').NextConfig} */
const nextConfig = {
    // swcMinify is enabled by default in Next.js 15
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placehold.co',
            },
        ],
    },
};

export default nextConfig;
