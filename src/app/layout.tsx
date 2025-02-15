import type { Metadata } from "next"
import { Tajawal } from "next/font/google"

import "./globals.css"

import { NextUiProvider } from "@/providers/next-ui"

import Footer from "@/components/common/footer"
import Header from "@/components/common/header"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// const tajwal = Tajawal({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "700"],
// })

export const metadata: Metadata = {
  title: "Washal",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={""}>
        {/* <body className={tajwal.className}> */}
        <NextUiProvider>
          <Header />
          {children}
          <Footer />
        </NextUiProvider>
      </body>
    </html>
  )
}
