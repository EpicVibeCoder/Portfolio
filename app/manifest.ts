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
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
            {
                src: "/icon.png", // need to ensure we have an icon, or at least define it for when it exists
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/icon.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    };
}
