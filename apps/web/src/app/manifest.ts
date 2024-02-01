import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    description: "Small Next.js demo project",
    display: "standalone",
    icons: [
      { sizes: "192x192", src: "/icon-192.png", type: "image/png" },
      { sizes: "512x512", src: "/icon-512.png", type: "image/png" },
    ],
    name: "Rick And Morty",
    short_name: "RaM",
    start_url: "/",
  };
}
