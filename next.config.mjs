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
    async redirects() {
        return [
            // Redirect non-www to www (301 permanent redirect)
            {
                source: '/:path*',
                has: [
                    {
                        type: 'host',
                        value: 'epicvibecoder.com',
                    },
                ],
                destination: 'https://www.epicvibecoder.com/:path*',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
