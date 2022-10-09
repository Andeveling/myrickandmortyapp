import { Context } from '@/Context'
import { Grid, Switch, Text } from '@nextui-org/react'
import { useContext } from 'react'

export const Header = () => {
  const context = useContext(Context)
  const handleTheme = () => context?.setIsDark((state) => !state)

  return (
    <Grid.Container>
      <Grid xs={12}>
        <Text h1>ReactHooks</Text>
      </Grid>
      <Grid>
        <Switch checked={context?.isDark} onChange={handleTheme} />
      </Grid>
    </Grid.Container>
  )
}
