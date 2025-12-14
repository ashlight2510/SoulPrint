"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Type, Authority, Profile } from "@/lib/calculator"
import { Descriptions } from "@/lib/descriptions"

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
  return (
    <div className="space-y-6">
      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle>분석 결과 요약</CardTitle>
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
          <CardTitle>유형: {type}</CardTitle>
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
          <CardTitle>전략: {strategy}</CardTitle>
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
          <CardTitle>결정 스타일: {authority}</CardTitle>
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
          <CardTitle>성향 조합: {profile}</CardTitle>
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
