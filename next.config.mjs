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
    // Redirect from www to non-www is handled in vercel.json
};

export default nextConfig;
