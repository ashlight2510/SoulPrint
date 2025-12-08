"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface DateInputProps {
  label: string
  value: string
  onChange: (value: string) => void
  type?: "date" | "time"
}

export function DateInput({ label, value, onChange, type = "date" }: DateInputProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={label}>{label}</Label>
      <Input
        id={label}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
  )
}

