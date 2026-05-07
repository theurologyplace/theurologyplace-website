import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: [
          "/studio",
          "/studio/",
          "/studio/*",
          "/api",
          "/api/",
          "/api/*",
          "/circumcision-photos",
          "/circumcision-photos/",
          "/circumcision-photos/*",
        ],
      },
    ],
  };
}

