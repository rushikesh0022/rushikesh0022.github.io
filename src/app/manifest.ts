import type { MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => ({
  short_name: "triassic",
  name: "Triassic",
  lang: "en",
  start_url: "/",
  background_color: "#FFFFFF",
  theme_color: "#FFFFFF",
  dir: "ltr",
  display: "standalone",
  prefer_related_applications: false,
});

export default manifest;
