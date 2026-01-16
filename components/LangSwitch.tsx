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
    <div className="fixed top-4 right-4 z-50 inline-flex gap-1 p-1 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg">
      <button
        onClick={() => handleLangChange("ko")}
        className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all ${
          lang === "ko"
            ? "bg-indigo-600 text-white shadow-sm"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        KR
      </button>
      <button
        onClick={() => handleLangChange("en")}
        className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all ${
          lang === "en"
            ? "bg-indigo-600 text-white shadow-sm"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        EN
      </button>
    </div>
  )
}
