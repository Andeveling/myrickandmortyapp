import { Row, Text } from '@nextui-org/react'
import { stylesFooter } from './stylesFooter'

const Footer = () => {
  return (
    <Row css={stylesFooter}>
      <Text color='$success' b>
        by Andeveling {new Date().getFullYear()} ussing Rick and Morty api
      </Text>
    </Row>
  )
}
export default Footer
