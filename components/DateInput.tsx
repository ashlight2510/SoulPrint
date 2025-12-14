"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface DateInputProps {
  label: string
  value: string
  onChange: (value: string) => void
  type?: string
  placeholder?: string
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"]
  pattern?: string
  hint?: string
}

export function DateInput({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  inputMode,
  pattern,
  hint,
}: DateInputProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={label}>{label}</Label>
      <Input
        id={label}
        type={type}
        placeholder={placeholder}
        inputMode={inputMode}
        pattern={pattern}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
      {hint ? (
        <p className="text-xs text-muted-foreground">{hint}</p>
      ) : null}
    </div>
  )
}
