import type { Metadata, Viewport } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.movendolatam.com.br"),
  title: {
    default: "Movendo Latam",
    template: "%s | Movendo Latam",
  },
  description:
    "Movendo Latam desenvolve líderes, equipes e culturas organizacionais com metodologias práticas, humanas e orientadas a resultados.",
  alternates: {
    canonical: "https://www.movendolatam.com.br/",
  },
  openGraph: {
    title: "Movendo Latam",
    description:
      "Desenvolvimento de líderes, equipes e cultura organizacional para empresas que querem mover-se para a frente.",
    type: "website",
    locale: "pt_BR",
    url: "https://www.movendolatam.com.br/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Movendo Latam - Desenvolvimento de líderes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Movendo Latam",
    description:
      "Desenvolvimento de líderes, equipes e cultura organizacional para empresas que querem mover-se para a frente.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  // JSON-LD Structured Data will be added separately
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Movendo Latam",
    description:
      "Desenvolvimento de líderes, equipes e culturas organizacionais na América Latina.",
    url: "https://www.movendolatam.com.br",
    email: "contato@movendolatam.com.br",
    areaServed: "Latin America",
    sameAs: [
      "https://www.linkedin.com/company/movendo-latam/",
      "https://www.instagram.com/movendolatam/",
    ],
  };

  const webSiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Movendo Latam",
    url: "https://www.movendolatam.com.br",
    description:
      "Desenvolvimento de líderes, equipes e culturas organizacionais.",
    inLanguage: "pt-BR",
  };

  return (
    <html lang="pt-BR">
      <body>
        <a className="skip-link" href="#main-content">
          Ir para o conteúdo
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, webSiteLd]) }}
        />
      </body>
    </html>
  );
}
