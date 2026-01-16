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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <LangSwitch />
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {t("title")}
          </h1>
          <p className="text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{t("cardTitle")}</CardTitle>
            <CardDescription>
              {t("cardDescription")}
            </CardDescription>
          </CardHeader>
          <CardContent>
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

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            {t("serviceNote")}
          </p>
        </div>
      </div>
    </div>
  )
}
