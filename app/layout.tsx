import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";
import Layout from "@/components/layout"

const inter = Inter({ subsets: ["latin"] })

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
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

