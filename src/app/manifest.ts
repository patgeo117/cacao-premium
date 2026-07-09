import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.name,
    short_name: "Cacao",
    description: SITE_CONFIG.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F5F0E8",
    theme_color: "#3D2314",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
