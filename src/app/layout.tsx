import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Portal CWB - Notícias de Curitiba",
  description: "Portal de notícias de Curitiba e região, com as últimas atualizações sobre política, economia, cultura e mais.",
  keywords: "notícias, curitiba, paraná, jornalismo, atualidades",
  authors: [{ name: "Portal CWB" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://portalcwb.com.br",
    siteName: "Portal CWB",
    title: "Portal CWB - Notícias de Curitiba",
    description: "Portal de notícias de Curitiba e região, com as últimas atualizações sobre política, economia, cultura e mais.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className={`${inter.variable} font-sans min-h-screen bg-gray-100`}>
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
