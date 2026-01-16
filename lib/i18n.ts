"use client"

import { Language, translations, t as translate } from "./translations"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

export function useLanguage(): Language {
  const searchParams = useSearchParams()
  const [lang, setLang] = useState<Language>("ko")

  useEffect(() => {
    const urlLang = searchParams.get("lang") as Language
    const storedLang = localStorage.getItem("preferredLang") as Language
    const browserLang = navigator.language?.startsWith("ko") ? "ko" : "en"
    
    const currentLang = urlLang || storedLang || browserLang
    if (currentLang === "ko" || currentLang === "en") {
      setLang(currentLang)
      localStorage.setItem("preferredLang", currentLang)
    }
  }, [searchParams])

  return lang
}

export function useTranslation() {
  const lang = useLanguage()
  
  return (key: keyof typeof translations.ko, vars?: Record<string, string>) => {
    return translate(key, lang, vars)
  }
}
