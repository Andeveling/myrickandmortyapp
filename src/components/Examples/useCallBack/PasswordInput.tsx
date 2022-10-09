import React, { ChangeEvent } from 'react'
// And the second one to render their password:

type PasswordInputProps = {
  value: string
  onChange: (newValue: string) => void
}

export const PasswordInput = ({ value, onChange }: PasswordInputProps) => {
  return (
    <label>
      Your password:
      <input type='password' value={value} onChange={(e: ChangeEvent) => onChange(e.currentTarget.value)} />
    </label>
  )
}
