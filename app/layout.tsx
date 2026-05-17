import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/layout"

export const metadata: Metadata = {
  title: "Abel Atkelet",
  description: "Personal portfolio website of Abel Atkelet, a full-stack developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

