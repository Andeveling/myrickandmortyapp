import { useState } from 'react'
import { EmailInput } from './EmailInput'
import { PasswordInput } from './PasswordInput'

type LoginFormProps = {
  onSubmit: (email: string, password: string) => void
}

export const LoginForm = (props: LoginFormProps) => {
  const { onSubmit } = props

  // Use local state to work with form values:
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  // Use change handler to update the email value:
  const updateEmail = (value: string): void => setEmail(value)

  // ...And use handler to update the password:
  const updatePassword = (value: string): void => setPassword(value)

  return (
    <form onSubmit={onSubmit}>
      <EmailInput value={email} onChange={updateEmail} />

      <PasswordInput value={email} onChange={updatePassword} />
    </form>
  )
}
