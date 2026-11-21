"use client"

import { Suspense, useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { calculate, CalculationResult } from "@/lib/calculator"
import { generateDescriptions, Descriptions } from "@/lib/descriptions"
import { ResultCard } from "@/components/ResultCard"
import { Button } from "@/components/ui/button"
import { Share2, ArrowLeft } from "lucide-react"
import { LangSwitch } from "@/components/LangSwitch"
import { useTranslation } from "@/lib/i18n"
import { typeTranslations, strategyTranslations, authorityTranslations } from "@/lib/translations"

function ResultContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const t = useTranslation()
  const [result, setResult] = useState<CalculationResult | null>(null)
  const [descriptions, setDescriptions] = useState<Descriptions | null>(null)

  useEffect(() => {
    const date = searchParams.get("date")
    const time = searchParams.get("time")
    const lang = searchParams.get("lang") || localStorage.getItem("preferredLang") || "ko"

    if (!date || !time) {
      router.push("/")
      return
    }

    try {
      const calcResult = calculate(date, time)
      const desc = generateDescriptions(
        calcResult.type,
        calcResult.strategy,
        calcResult.authority,
        calcResult.profile,
        lang as "ko" | "en"
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
          title: t("shareTitle"),
          text: t("shareText", { type: result?.type || "", profile: result?.profile || "" }),
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
        alert(t("linkCopied"))
      } catch (error) {
        console.error("Failed to copy:", error)
      }
    }
  }

  if (!result || !descriptions) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-paper">
        <div className="text-center">
          <p className="font-booth text-ink">{t("resultCalculating")}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-paper">
      <LangSwitch />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-6 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => {
              const lang = searchParams.get("lang") || localStorage.getItem("preferredLang") || "ko"
              router.push(`/?lang=${lang}`)
            }}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("backButton")}
          </Button>
          
          <Button
            variant="outline"
            onClick={handleShare}
            className="flex items-center gap-2"
          >
            <Share2 className="w-4 h-4" />
            {t("shareButton")}
          </Button>
        </div>

        <div className="text-center mb-8">
          <span className="booth-badge booth-badge--mint mb-4">YOUR SOUL TICKET</span>
          <h1 className="font-display text-5xl leading-tight text-ink sm:text-6xl">
            {t("resultTitle")}
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="ticket overflow-hidden">
            <div className="h-3 bg-coral" aria-hidden="true" />
            <div className="p-6">
            <h3 className="font-display text-3xl mb-2 text-ink">
              {(() => {
                const lang = searchParams.get("lang") || localStorage.getItem("preferredLang") || "ko"
                const isEn = lang === "en"
                return isEn && typeTranslations[result.type] ? typeTranslations[result.type].en : result.type
              })()}
            </h3>
            <p className="text-ink-soft text-sm">
              {t("profileLabel")}: {result.profile}
            </p>
            </div>
          </div>

          <div className="ticket overflow-hidden">
            <div className="h-3 bg-sun" aria-hidden="true" />
            <div className="p-6">
            <h4 className="font-booth text-lg mb-2 text-ink">{t("strategyLabel")}</h4>
            <p className="text-ink-soft">
              {(() => {
                const lang = searchParams.get("lang") || localStorage.getItem("preferredLang") || "ko"
                const isEn = lang === "en"
                return isEn && strategyTranslations[result.strategy] ? strategyTranslations[result.strategy].en : result.strategy
              })()}
            </p>
            </div>
          </div>

          <div className="ticket overflow-hidden">
            <div className="h-3 bg-mint" aria-hidden="true" />
            <div className="p-6">
            <h4 className="font-booth text-lg mb-2 text-ink">{t("authorityLabel")}</h4>
            <p className="text-ink-soft">
              {(() => {
                const lang = searchParams.get("lang") || localStorage.getItem("preferredLang") || "ko"
                const isEn = lang === "en"
                return isEn && authorityTranslations[result.authority] ? authorityTranslations[result.authority].en : result.authority
              })()}
            </p>
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

        <div className="mt-10 text-center">
          <a
            href="https://funnyfunny.cloud/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-lg border-[2.5px] border-ink bg-coral px-8 py-5 font-booth text-lg text-paper-2 shadow-hard transition-transform hover:-translate-y-0.5 hover:bg-sun hover:text-ink"
          >
            {t("moreTestsButton")}
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
        <div className="min-h-screen flex items-center justify-center bg-paper">
          <p className="font-booth text-ink">
            {typeof window !== "undefined" && localStorage.getItem("preferredLang") === "en" 
              ? "Loading results..." 
              : "결과를 불러오는 중..."}
          </p>
        </div>
      }
    >
      <ResultContent />
    </Suspense>
  )
}
