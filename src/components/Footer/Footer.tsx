import { Row, CSS, Text } from '@nextui-org/react'

const style: CSS = {
  height: 120,
  p: 0,
  m: 0,
  mt: 20,
  bg: '$backgroundAlpha',
  bottom: 0,
  zIndex: 1,
  display: 'grid',
  placeItems: 'center',
  justifyContent: 'center',
  borderTop: 'solid 2px $success',
}

const Footer = () => {
  return (
    <Row css={style}>
      <Text color='$success' b>
        by Andeveling {new Date().getFullYear()} ussing Rick and Morty api
      </Text>
    </Row>
  )
}
export default Footer
