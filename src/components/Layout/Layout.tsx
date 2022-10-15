import { Container } from '@nextui-org/react'
import { ScrollToTop } from '../ScrollToTop'

interface LayoutI {
  children: JSX.Element | JSX.Element[]
}
export const Layout = ({ children }: LayoutI) => {
  return (
    <Container fluid xl>
      {children}
      <ScrollToTop />
    </Container>
  )
}
