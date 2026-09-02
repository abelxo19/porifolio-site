import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import Layout from "@/components/layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const siteUrl = "https://abelxo19.dev";
const siteTitle = "Abel Atkelet — Full-Stack Developer";
const siteDescription =
  "Abel Atkelet is a full-stack developer building fast, polished web applications with Next.js, React, and modern cloud technologies.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Abel Atkelet",
  },
  description: siteDescription,
  keywords: [
    "Abel Atkelet",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Abel Atkelet" }],
  creator: "Abel Atkelet",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "Abel Atkelet",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0b14" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abel Atkelet",
  jobTitle: "Full-Stack Developer",
  url: siteUrl,
  email: "mailto:abelaatkelet@gmail.com",
  sameAs: [
    "https://github.com/abelxo19",
    "https://www.linkedin.com/in/abel-atkelet-b36993282",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
