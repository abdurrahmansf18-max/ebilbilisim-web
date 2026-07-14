import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Gölbaşı kamera güvenlik sistemleri",
    "Ankara Gölbaşı güvenlik kamerası kurulumu",
    "Gölbaşı alarm sistemleri",
    "Ankara kamera sistemleri firması",
    "Gölbaşı yangın algılama sistemi",
    "Gölbaşı network altyapı kurulumu",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} h-full antialiased`}>
      <head>
        <LocalBusinessJsonLd />
      </head>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
