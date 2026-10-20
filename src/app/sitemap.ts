
import type { MetadataRoute } from "next";

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://transora.com"
).replace(/\/$/, "");

const locales = ["en", "ar", "tr"] as const;

const pages = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/solutions", priority: 0.9, changeFrequency: "monthly" },
  { path: "/features", priority: 0.9, changeFrequency: "monthly" },
  { path: "/resources", priority: 0.8, changeFrequency: "weekly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(({ path, priority, changeFrequency }) => {
    const languages = Object.fromEntries(
      locales.map((locale) => [
        locale,
        `${baseUrl}/${locale}${path}`,
      ]),
    );

    return locales.map((locale) => ({
      url: `${baseUrl}/${locale}${path}`,
      changeFrequency,
      priority,
      alternates: {
        languages,
      },
    }));
  });
}
