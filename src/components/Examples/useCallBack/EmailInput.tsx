import React, { ChangeEvent } from 'react'

// First one to render a user's email:

type EmailInputProps = {
  value: string
  onChange: (newValue: string) => void
}

export const EmailInput: React.FC<EmailInputProps> = ({ value, onChange }) => {
  return (
    <label>
      Your email:
      {/*  <input type='email' value={value} onChange={(e: ChangeEvent) => onChange(e.target.value)} /> */}
    </label>
  )
}
