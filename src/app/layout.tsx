import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/navbar/Header";
import Footer from "@/components/footer/Footer";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Najib Abdi - Software Engineer",
  description: "Najib Abdi | I am a Software Engineer with a passion for full-stack development and machine learning.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL ?? siteConfig.url),
  openGraph: {
    title: "Najib Abdi - Software Engineer",
    description: "Najib Abdi is a full stack and mobile app developer ",
    type: "website",
    siteName: "Najib Abdi",
    url: "https://najibabdi.me",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="relative flex min-h-dvh flex-col bg-background">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
