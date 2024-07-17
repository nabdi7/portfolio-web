import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from 'next/script';
import "./globals.css";
import { Header } from "@/components/navbar/Header";
import Footer from "@/components/footer/Footer";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Najib Abdi - Software Engineer",
  description: "Najib Abdi | I am a Software Engineer with a passion for full-stack development and a master's student specializing in machine learning.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL ?? siteConfig.url),
  openGraph: {
    title: "Najib Abdi - Software Engineer",
    description: "Najib Abdi is a full stack and mobile app developer ",
    type: "website",
    siteName: "Najib Abdi",
    url: "https://www.najibabdi.me/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YFK3CZKZKQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YFK3CZKZKQ');
          `}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KSGSTWJ6"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <div className="relative flex min-h-dvh flex-col bg-background">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
