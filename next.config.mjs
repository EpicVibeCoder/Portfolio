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
            // Redirect www to non-www (301 permanent redirect)
            {
                source: '/:path*',
                has: [
                    {
                        type: 'host',
                        value: 'www.epicvibecoder.com',
                    },
                ],
                destination: 'https://epicvibecoder.com/:path*',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
