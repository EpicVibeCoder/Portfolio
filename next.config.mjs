/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // For static export/Vercel compatibility if needed, though usually not for Vercel
  },
};

export default nextConfig;
