import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp'
import { Avatar } from '@nextui-org/react'
import { useEffect, useState } from 'react'

export const ScrollToTop = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 100 ? setScrolled(true) : setScrolled(false)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <>
      {scrolled ? (
        <Avatar
          onClick={scrollToTop}
          bordered
          squared
          size='lg'
          css={{
            position: 'fixed',
            bottom: 15,
            right: 15,
            zIndex: 3,
            cursor: 'pointer',
            color: '$white',
          }}
          color='success'
          icon={<KeyboardDoubleArrowUpIcon />}></Avatar>
      ) : (
        <></>
      )}
    </>
  )
}
