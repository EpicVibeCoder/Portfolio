import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "EpicVibeCoder | Premium Portfolio",
        short_name: "EpicVibeCoder",
        description: "Full-stack developer specializing in Next.js, React, and Blockchain.",
        start_url: "/",
        display: "standalone",
        background_color: "#1a1006", // cocoa-950
        theme_color: "#cfa640", // gold-500
        icons: [
            {
                src: "/favicon.svg",
                sizes: "any",
                type: "image/svg+xml",
            },
            {
                src: "/favicon.svg",
                sizes: "192x192",
                type: "image/svg+xml",
            },
            {
                src: "/favicon.svg",
                sizes: "512x512",
                type: "image/svg+xml",
            },
        ],
    };
}
