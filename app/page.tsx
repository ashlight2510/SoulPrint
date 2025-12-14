"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { DateInput } from "@/components/DateInput"
import { LocationInput } from "@/components/LocationInput"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const router = useRouter()
  const [birthDate, setBirthDate] = useState("")
  const [birthTime, setBirthTime] = useState("")
  const [birthPlace, setBirthPlace] = useState("")

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
    
    if (!birthDate || !birthTime || !birthPlace) {
      alert("모든 정보를 입력해주세요.")
      return
    }

    // URL 파라미터로 전달
    const params = new URLSearchParams({
      date: birthDate,
      time: birthTime,
      place: encodeURIComponent(birthPlace),
    })

    const dateValid = /^\d{4}-\d{2}-\d{2}$/.test(birthDate)
    const timeValid = /^\d{2}:\d{2}$/.test(birthTime)

    if (!dateValid) {
      alert("생년월일을 YYYY-MM-DD 형식으로 입력해주세요.")
      return
    }

    if (!timeValid) {
      alert("출생 시간을 HH:MM 형식으로 입력해주세요.")
      return
    }

    router.push(`/result?${params.toString()}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            SoulPrint
          </h1>
          <p className="text-muted-foreground">
            출생 정보를 바탕으로 한 독자적인 성향 분석
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>출생 정보 입력</CardTitle>
            <CardDescription>
              정확한 분석을 위해 출생 정보를 입력해주세요.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <DateInput
                label="생년월일"
                value={birthDate}
                onChange={handleBirthDateChange}
                type="text"
                placeholder="예: 1990-07-15"
                inputMode="numeric"
                hint="연도 4자리-월 2자리-일 2자리 형식으로 입력하세요."
              />
              
              <DateInput
                label="출생 시간"
                value={birthTime}
                onChange={setBirthTime}
                type="time"
                placeholder="예: 08:30"
                inputMode="numeric"
              />
              
              <LocationInput
                value={birthPlace}
                onChange={setBirthPlace}
              />

              <Button type="submit" className="w-full" size="lg">
                결과 보기
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            이 서비스는 독자적인 알고리즘을 사용하여 계산됩니다.
          </p>
        </div>
      </div>
    </div>
  )
}
