"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { calculate, CalculationResult } from "@/lib/calculator"
import { generateDescriptions, Descriptions } from "@/lib/descriptions"
import { ResultCard } from "@/components/ResultCard"
import { BodyGraph } from "@/components/BodyGraph"
import { Button } from "@/components/ui/button"
import { Share2, ArrowLeft } from "lucide-react"

export default function ResultPage() {
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
          text: `나의 Type: ${result?.type}, Profile: ${result?.profile}`,
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

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <BodyGraph
              birthDate={searchParams.get("date") || ""}
              birthTime={searchParams.get("time") || ""}
            />
          </div>
          
          <div className="space-y-4">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-2xl font-bold mb-2">{result.type}</h3>
              <p className="text-muted-foreground text-sm">
                Profile: {result.profile}
              </p>
            </div>
            
            <div className="bg-white rounded-lg border p-6">
              <h4 className="font-semibold mb-2">Strategy</h4>
              <p className="text-muted-foreground">{result.strategy}</p>
            </div>
            
            <div className="bg-white rounded-lg border p-6">
              <h4 className="font-semibold mb-2">Authority</h4>
              <p className="text-muted-foreground">{result.authority}</p>
            </div>
          </div>
        </div>

        <ResultCard
          type={result.type}
          strategy={result.strategy}
          authority={result.authority}
          profile={result.profile}
          descriptions={descriptions}
        />
      </div>
    </div>
  )
}

