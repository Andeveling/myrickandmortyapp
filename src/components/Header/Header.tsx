import { Context } from '@/Context'
import { Progress, Row, Switch, Text } from '@nextui-org/react'
import { useContext } from 'react'
import { styleContainer, styledHead, styleText } from './stylesHeader'
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined'
import Brightness5OutlinedIcon from '@mui/icons-material/Brightness5Outlined'

export const Header = () => {
  const context = useContext(Context)
  const handleTheme = () => context?.setIsDark((state) => !state)

  return (
    <>
      <Row css={styledHead}>
        <Switch
          css={{ m: 10 }}
          size='xl'
          borderWeight='extrabold'
          color='success'
          checked={context?.isDark}
          onChange={handleTheme}
          iconOn={<Brightness5OutlinedIcon />}
          iconOff={<Brightness4OutlinedIcon />}
        />
      </Row>
      <Row css={styleContainer}>
        <Text color='success' h3 css={{ lineHeight: '$xs', position: 'relative', top: 15, textAlign: 'center' }}>
          Coding for fun!
        </Text>
        <Text h1 weight='bold' color='$gray900' css={styleText}>
          Rick and Morty
        </Text>
        <Progress color='success' value={100} shadow striped />
      </Row>
    </>
  )
}
