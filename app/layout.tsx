import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip-link" href="#main-content">
          Ir para o conteúdo
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
