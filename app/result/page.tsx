"use client"

import { Suspense, useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { calculate, CalculationResult } from "@/lib/calculator"
import { generateDescriptions, Descriptions } from "@/lib/descriptions"
import { ResultCard } from "@/components/ResultCard"
import { Button } from "@/components/ui/button"
import { Share2, ArrowLeft } from "lucide-react"

function ResultContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [result, setResult] = useState<CalculationResult | null>(null)
  const [descriptions, setDescriptions] = useState<Descriptions | null>(null)

  useEffect(() => {
    const date = searchParams.get("date")
    const time = searchParams.get("time")
    const place = searchParams.get("place")

    if (!date || !time || !place) {
      router.push("/")
      return
    }

    try {
      const calcResult = calculate(date, time, decodeURIComponent(place))
      const desc = generateDescriptions(
        calcResult.type,
        calcResult.strategy,
        calcResult.authority,
        calcResult.profile
      )

      setResult(calcResult)
      setDescriptions(desc)
    } catch (error) {
      console.error("Calculation error:", error)
      router.push("/")
    }
  }, [searchParams, router])

  const handleShare = async () => {
    const url = window.location.href

    if (navigator.share) {
      try {
        await navigator.share({
          title: "SoulPrint - 성향 분석 결과",
          text: `나의 유형: ${result?.type}, 성향 조합: ${result?.profile}`,
          url: url,
        })
      } catch (error) {
        // 사용자가 공유를 취소한 경우
        console.log("Share cancelled")
      }
    } else {
      // 클립보드에 복사
      try {
        await navigator.clipboard.writeText(url)
        alert("링크가 클립보드에 복사되었습니다!")
      } catch (error) {
        console.error("Failed to copy:", error)
      }
    }
  }

  if (!result || !descriptions) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">결과를 계산하는 중...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-6 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => router.push("/")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            다시 분석하기
          </Button>
          
          <Button
            variant="outline"
            onClick={handleShare}
            className="flex items-center gap-2"
          >
            <Share2 className="w-4 h-4" />
            공유하기
          </Button>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            분석 결과
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg border p-6">
            <h3 className="text-2xl font-bold mb-2">{result.type}</h3>
            <p className="text-muted-foreground text-sm">
              성향 조합: {result.profile}
            </p>
          </div>
          
          <div className="bg-white rounded-lg border p-6">
            <h4 className="font-semibold mb-2">전략</h4>
            <p className="text-muted-foreground">{result.strategy}</p>
          </div>
          
          <div className="bg-white rounded-lg border p-6">
            <h4 className="font-semibold mb-2">결정 스타일</h4>
            <p className="text-muted-foreground">{result.authority}</p>
          </div>
        </div>

        <ResultCard
          type={result.type}
          strategy={result.strategy}
          authority={result.authority}
          profile={result.profile}
          descriptions={descriptions}
        />

        <div className="mt-10 text-center">
          <a
            href="https://funnyfunny.cloud/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-lg border px-8 py-5 text-lg font-semibold text-indigo-800 border-indigo-200 bg-white shadow-sm hover:bg-indigo-50 transition"
          >
            🎯 더 많은 테스트 해보기
          </a>
        </div>
      </div>
    </div>
  )
}

export default function ResultPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-muted-foreground">결과를 불러오는 중...</p>
        </div>
      }
    >
      <ResultContent />
    </Suspense>
  )
}
