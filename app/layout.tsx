import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SoulPrint - 성향 분석 도구",
  description: "출생 정보를 바탕으로 한 독자적인 성향 분석 서비스",
  applicationName: "SoulPrint",
  keywords: ["SoulPrint", "성향 분석", "출생 정보", "퍼스널리티", "프로파일"],
  openGraph: {
    title: "SoulPrint - 성향 분석 결과",
    description: "출생 정보를 기반으로 한 독자적인 성향 분석 결과를 확인하세요.",
    siteName: "SoulPrint",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "https://dummyimage.com/1200x630/1f2937/f9fafb&text=Soul+Print",
        width: 1200,
        height: 630,
        alt: "SoulPrint 성향 분석 대표 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoulPrint - 성향 분석 도구",
    description: "출생 정보를 바탕으로 한 독자적인 성향 분석 서비스",
    images: ["https://dummyimage.com/1200x630/1f2937/f9fafb&text=Soul+Print"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {children}
        <footer className="border-t mt-12 py-6 px-4 text-center text-sm text-muted-foreground">
          <p className="mb-2">
            © 2025 — 이 서비스는 다양한 형이상학적 시스템에서 영감을 받은
            독립적인 성향 분석 도구이며, Human Design®, Jovian Archive 등
            어떠한 공식 기관과도 관련이 없습니다.
          </p>
          <p className="text-xs mt-2">
            본 서비스는 Human Design System의 개념을 참고하여
            독자적으로 재구성된 성향 분석 도구입니다.
            공식 기관(Jovian Archive 등)과 무관하며,
            공식 문구나 자료를 사용하지 않습니다.
          </p>
        </footer>
      </body>
    </html>
  )
}
