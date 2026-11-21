"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Language } from "@/lib/translations"

export function LangSwitch() {
  const router = useRouter()
  const pathname = usePathname()
  const [lang, setLang] = useState<Language>("ko")

  useEffect(() => {
    // Client-side only: read from URL or localStorage
    if (typeof window === "undefined") return
    
    const urlParams = new URLSearchParams(window.location.search)
    const urlLang = urlParams.get("lang") as Language
    const storedLang = localStorage.getItem("preferredLang") as Language
    const browserLang = navigator.language?.startsWith("ko") ? "ko" : "en"
    
    const currentLang = urlLang || storedLang || browserLang
    if (currentLang === "ko" || currentLang === "en") {
      setLang(currentLang)
      localStorage.setItem("preferredLang", currentLang)
    }
  }, [])

  // Listen for URL changes
  useEffect(() => {
    if (typeof window === "undefined") return
    
    const checkLang = () => {
      const urlParams = new URLSearchParams(window.location.search)
      const urlLang = urlParams.get("lang") as Language
      if (urlLang === "ko" || urlLang === "en") {
        setLang(urlLang)
        localStorage.setItem("preferredLang", urlLang)
      }
    }
    
    checkLang()
    window.addEventListener("popstate", checkLang)
    return () => window.removeEventListener("popstate", checkLang)
  }, [])

  const handleLangChange = (newLang: Language) => {
    setLang(newLang)
    localStorage.setItem("preferredLang", newLang)
    
    // Update URL and trigger page refresh
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href)
      url.searchParams.set("lang", newLang)
      // Use window.location.href for immediate page reload
      window.location.href = url.pathname + url.search
    }
  }

  return (
    <div className="fixed top-12 right-4 z-50 inline-flex gap-1 p-1 rounded-full bg-paper-2 border-[2.5px] border-ink">
      <button
        onClick={() => handleLangChange("ko")}
        className={`px-3 py-1.5 rounded-full font-booth text-sm transition-colors ${
          lang === "ko"
            ? "bg-coral text-paper-2"
            : "text-ink hover:bg-sun"
        }`}
      >
        KR
      </button>
      <button
        onClick={() => handleLangChange("en")}
        className={`px-3 py-1.5 rounded-full font-booth text-sm transition-colors ${
          lang === "en"
            ? "bg-coral text-paper-2"
            : "text-ink hover:bg-sun"
        }`}
      >
        EN
      </button>
    </div>
  )
}
