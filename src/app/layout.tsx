import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { SITE_URL } from "@/lib/utils";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--sp-font-heading",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--sp-font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Senso Pur Group — Une famille, deux maisons, un savoir-faire",
    template: "%s · Senso Pur Group",
  },
  description:
    "Senso Pur conçoit et fabrique en France des produits de literie de qualité, dans le respect de l'environnement et des hommes. Usine de 6 600 m² à Vaulx-Milieu (Isère) depuis 2010.",
  keywords: [
    "Senso Pur",
    "literie française",
    "fabricant matelas France",
    "Vaulx-Milieu",
    "Isère",
    "Maison Aubertin",
    "Bellecour Literie",
    "Matelas Pour Tous",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Senso Pur Group",
    title: "Senso Pur Group — Une famille, deux maisons, un savoir-faire",
    description:
      "Fabricant français de literie depuis 2010. Une famille, deux maisons, un savoir-faire.",
    url: SITE_URL,
    images: [
      {
        url: "/images/media/media-direction-duo.jpg",
        width: 1200,
        height: 630,
        alt: "Fabien et Marine Bully — Direction Senso Pur Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Senso Pur Group",
    description:
      "Une famille, deux maisons, un savoir-faire — fabricant français de literie depuis 2010.",
    images: ["/images/media/media-direction-duo.jpg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/images/brand/Senso-Pur-logo-bleu_nuit.svg", type: "image/svg+xml" },
    ],
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Senso Pur SAS",
  url: SITE_URL,
  logo: `${SITE_URL}/images/brand/Senso-Pur-logo-bleu_nuit.svg`,
  founder: { "@type": "Person", name: "Fabien Bully" },
  foundingDate: "2010",
  numberOfEmployees: 35,
  address: {
    "@type": "PostalAddress",
    streetAddress: "40 rue Antoine Condorcet",
    postalCode: "38090",
    addressLocality: "Vaulx-Milieu",
    addressCountry: "FR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+33-4-74-07-33-51",
    email: "contact@senso-pur.com",
    contactType: "customer service",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>
        <a href="#main" className="sp-skip-link">
          Aller au contenu principal
        </a>
        <SmoothScroll>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScroll>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </body>
    </html>
  );
}
