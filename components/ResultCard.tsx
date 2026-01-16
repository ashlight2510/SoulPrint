"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Type, Authority, Profile } from "@/lib/calculator"
import { Descriptions } from "@/lib/descriptions"
import { useTranslation } from "@/lib/i18n"
import { typeTranslations, strategyTranslations, authorityTranslations } from "@/lib/translations"

interface ResultCardProps {
  type: Type
  strategy: string
  authority: Authority
  profile: Profile
  descriptions: Descriptions
}

export function ResultCard({
  type,
  strategy,
  authority,
  profile,
  descriptions,
}: ResultCardProps) {
  const t = useTranslation()
  const lang = typeof window !== "undefined" ? (localStorage.getItem("preferredLang") || "ko") : "ko"
  const isEn = lang === "en"
  
  const typeDisplay = isEn && typeTranslations[type] ? typeTranslations[type].en : type
  const strategyDisplay = isEn && strategyTranslations[strategy] ? strategyTranslations[strategy].en : strategy
  const authorityDisplay = isEn && authorityTranslations[authority] ? authorityTranslations[authority].en : authority
  
  return (
    <div className="space-y-6">
      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle>{t("overviewTitle")}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            {descriptions.overview}
          </p>
        </CardContent>
      </Card>

      {/* Type */}
      <Card>
        <CardHeader>
          <CardTitle>{t("typeTitle")}: {typeDisplay}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            {descriptions.typeExplanation}
          </p>
        </CardContent>
      </Card>

      {/* Strategy */}
      <Card>
        <CardHeader>
          <CardTitle>{t("strategyTitle")}: {strategyDisplay}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            {descriptions.strategyExplanation}
          </p>
        </CardContent>
      </Card>

      {/* Authority */}
      <Card>
        <CardHeader>
          <CardTitle>{t("authorityTitle")}: {authorityDisplay}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            {descriptions.authorityExplanation}
          </p>
        </CardContent>
      </Card>

      {/* Profile */}
      <Card>
        <CardHeader>
          <CardTitle>{t("profileTitle")}: {profile}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            {descriptions.profileExplanation}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
