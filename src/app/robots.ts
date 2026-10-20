
import type { MetadataRoute } from "next";

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://transora.com"
).replace(/\/$/, "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/en/login",
        "/ar/login",
        "/tr/login",
        "/en/register",
        "/ar/register",
        "/tr/register",
        "/en/dashboard/",
        "/ar/dashboard/",
        "/tr/dashboard/",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
