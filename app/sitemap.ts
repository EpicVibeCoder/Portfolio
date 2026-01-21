import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.epicvibecoder.com"; // Replace with your actual domain

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        // Add more URLs if you have other pages like /blog, /projects/[slug], etc.
        // For a single page portfolio, the root is usually sufficient.
        {
            url: `${baseUrl}/projects/EpicVibeCoder_CV.pdf`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];
}
