import type { NextConfig } from "next";

/**
 * Export statique pour hébergement web classique (Hostinger, OVH, infomaniak…).
 * `npm run build` produit un dossier `out/` 100 % statique HTML/CSS/JS — uploadable
 * tel quel dans `public_html/` via FTP ou File Manager.
 *
 * Conséquences :
 * - `next/image` désactive l'optimisation runtime → images servies telles quelles.
 * - Routes API non disponibles → formulaire branché sur un service tiers.
 * - Trailing slash activé pour la compatibilité Apache/nginx.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "img.youtube.com" },
    ],
  },
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
};

export default nextConfig;
