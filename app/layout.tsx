import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SoulPrint - 성향 분석 도구",
  description: "출생 정보를 바탕으로 한 독자적인 성향 분석 서비스",
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
            © 2025 — This service is an independent personality analysis tool
            inspired by general metaphysical systems. Not affiliated with
            Human Design®, Jovian Archive, or any official organization.
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

