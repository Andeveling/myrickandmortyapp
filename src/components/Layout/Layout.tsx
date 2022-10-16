import { Container } from '@nextui-org/react'
import { ScrollToTop } from '@/components'
import { PropsWithChildren } from 'react'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Container fluid xl>
      {children}
      <ScrollToTop />
    </Container>
  )
}
