import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const manifest = (): MetadataRoute.Manifest => ({
  short_name: "Rushikesh",
  name: "Rushikesh Reddy - Portfolio",
  lang: "en",
  start_url: "/",
  background_color: "#FFFFFF",
  theme_color: "#FFFFFF",
  dir: "ltr",
  display: "standalone",
  prefer_related_applications: false,
  icons: [
    {
      src: "/favicon.ico",
      sizes: "any",
      type: "image/x-icon",
    },
  ],
});

export default manifest;
