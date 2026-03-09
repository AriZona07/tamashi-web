import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const basePath = process.env.NODE_ENV === 'production' ? '/tamashi-web' : '';

export const metadata: Metadata = {
  title: "Tamashi",
  description: "Tamashi: Aprendamos a Crecer",
  verification: {
    google: "ImjM00vSmOURPAZGHX8RRKin20eDB2XiJ-idEZfjFlM",
  },
  icons: {
    icon: [
      { url: `${basePath}/favicon-32x32.png`, sizes: '32x32', type: 'image/png' },
      { url: `${basePath}/favicon-16x16.png`, sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: `${basePath}/apple-touch-icon.png`, sizes: '180x180' },
    ],
  },
  manifest: `${basePath}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
