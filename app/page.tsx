"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { DateInput } from "@/components/DateInput"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LangSwitch } from "@/components/LangSwitch"
import { useTranslation } from "@/lib/i18n"

export default function Home() {
  const router = useRouter()
  const t = useTranslation()
  const [birthDate, setBirthDate] = useState("")
  const [birthTime, setBirthTime] = useState("")

  const handleBirthDateChange = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 8)

    if (digits.length <= 4) {
      setBirthDate(digits)
      return
    }

    if (digits.length <= 6) {
      setBirthDate(`${digits.slice(0, 4)}-${digits.slice(4)}`)
      return
    }

    setBirthDate(
      `${digits.slice(0, 4)}-${digits.slice(4, 6)}-${digits.slice(6, 8)}`
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!birthDate || !birthTime) {
      alert(t("validationAllFields"))
      return
    }

    // URL 파라미터로 전달
    const params = new URLSearchParams({
      date: birthDate,
      time: birthTime,
    })
    
    // 언어 파라미터 추가
    const lang = localStorage.getItem("preferredLang") || "ko"
    params.set("lang", lang)

    const dateValid = /^\d{4}-\d{2}-\d{2}$/.test(birthDate)
    const timeValid = /^\d{2}:\d{2}$/.test(birthTime)

    if (!dateValid) {
      alert(t("validationDateFormat"))
      return
    }

    if (!timeValid) {
      alert(t("validationTimeFormat"))
      return
    }

    router.push(`/result?${params.toString()}`)
  }

  return (
    <div className="min-h-screen bg-paper">
      <LangSwitch />
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <div className="text-center mb-8">
          <span className="booth-badge mb-4">🎟️ CANDY TICKET BOOTH</span>
          <h1 className="font-display text-5xl leading-tight mb-3 text-ink sm:text-6xl">
            {t("title")}
          </h1>
          <p className="font-body-kr text-lg text-ink-soft">
            {t("subtitle")}
          </p>
        </div>

        <Card className="overflow-hidden">
          <div className="awning" aria-hidden="true" />
          <CardHeader>
            <CardTitle>{t("cardTitle")}</CardTitle>
            <CardDescription className="text-ink-soft">
              {t("cardDescription")}
            </CardDescription>
          </CardHeader>
          <div className="ticket-perforation mx-6" aria-hidden="true" />
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <DateInput
                label={t("birthDateLabel")}
                value={birthDate}
                onChange={handleBirthDateChange}
                type="text"
                placeholder={t("birthDatePlaceholder")}
                inputMode="numeric"
                hint={t("birthDateHint")}
              />
              
              <DateInput
                label={t("birthTimeLabel")}
                value={birthTime}
                onChange={setBirthTime}
                type="time"
                placeholder={t("birthTimePlaceholder")}
                inputMode="numeric"
              />
              <Button type="submit" className="w-full" size="lg">
                {t("submitButton")}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-sm text-ink-soft">
          <p>
            {t("serviceNote")}
          </p>
          <p className="mt-4">
            <a
              href="https://funnyfunny.cloud/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-booth text-coral underline decoration-sun decoration-[3px] underline-offset-4 hover:text-mint"
            >
              FunnyFunny에서 더 많은 테스트 보기 →
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
