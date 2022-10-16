import { Context } from '@/Context'
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined'
import Brightness5OutlinedIcon from '@mui/icons-material/Brightness5Outlined'
import { Progress, Row, Switch, Text } from '@nextui-org/react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { styleContainer, styledHead, styleText } from './stylesHeader'

export const Header = () => {
  const context = useContext(Context)
  const handleTheme = () => context?.setIsDark((state) => !state)
  const navigate = useNavigate()

  return (
    <>
      <Row css={styledHead}>
        <Text size='$2xl' b css={{ mx: 20, cursor: 'pointer' }} onClick={() => navigate('/')}>
          Home
        </Text>
        <Switch
          size='xl'
          borderWeight='extrabold'
          color='success'
          checked={context?.isDark}
          onChange={handleTheme}
          iconOn={<Brightness5OutlinedIcon />}
          iconOff={<Brightness4OutlinedIcon />}
          css={{ mx: 10 }}
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
