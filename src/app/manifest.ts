
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "TRANSORA | Transportation Management Platform",
    short_name: "TRANSORA",
    description:
      "TRANSORA is an all-in-one transportation management platform for bookings, dispatch, fleet, drivers, routes, suppliers, accounting, and real-time operations.",
    start_url: "/en",
    scope: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#1769aa",
    orientation: "any",
    lang: "en",
    dir: "auto",
    categories: ["business", "productivity", "travel"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
