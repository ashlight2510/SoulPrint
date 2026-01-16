"use client"

import { Language, translations, t as translate } from "./translations"
import { useEffect, useState } from "react"

export function useLanguage(): Language {
  const [lang, setLang] = useState<Language>("ko")

  useEffect(() => {
    // Client-side only: read from URL or localStorage
    if (typeof window === "undefined") return
    
    const updateLang = () => {
      const urlParams = new URLSearchParams(window.location.search)
      const urlLang = urlParams.get("lang") as Language
      const storedLang = localStorage.getItem("preferredLang") as Language
      const browserLang = navigator.language?.startsWith("ko") ? "ko" : "en"
      
      const currentLang = urlLang || storedLang || browserLang
      if (currentLang === "ko" || currentLang === "en") {
        setLang(currentLang)
        localStorage.setItem("preferredLang", currentLang)
      }
    }
    
    updateLang()
    
    // Listen for URL changes
    const checkInterval = setInterval(updateLang, 100)
    window.addEventListener("popstate", updateLang)
    
    return () => {
      clearInterval(checkInterval)
      window.removeEventListener("popstate", updateLang)
    }
  }, [])

  return lang
}

export function useTranslation() {
  const lang = useLanguage()
  
  return (key: keyof typeof translations.ko, vars?: Record<string, string>) => {
    return translate(key, lang, vars)
  }
}
