"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface LocationInputProps {
  value: string
  onChange: (value: string) => void
}

export function LocationInput({ value, onChange }: LocationInputProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="location">출생 장소</Label>
      <Input
        id="location"
        type="text"
        placeholder="예: 서울, 대한민국"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
  )
}

