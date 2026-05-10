import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/utils";

export const dynamic = "force-static";

const ROUTES = [
  "",
  "/nos-maisons",
  "/la-maison-senso",
  "/maison-aubertin",
  "/notre-direction",
  "/notre-fabrication",
  "/engagements-rse",
  "/doctrine-achat",
  "/espace-presse",
  "/carrieres",
  "/contact",
  "/faq",
  "/mentions-legales",
  "/politique-confidentialite",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    // trailingSlash: true côté Next → le sitemap doit suivre la même convention
    url: `${SITE_URL}${path === "" ? "/" : `${path}/`}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1.0 : 0.7,
  }));
}
