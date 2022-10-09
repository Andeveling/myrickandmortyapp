import { Container } from '@nextui-org/react'

interface LayoutI {
  children: JSX.Element | JSX.Element[]
}
export const Layout = ({ children }: LayoutI) => {
  return (
    <Container fluid xl>
      {children}
    </Container>
  )
}
