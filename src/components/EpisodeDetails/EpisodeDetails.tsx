import { Context } from '@/Context'
import { useGetCharactersQuery, useGetEpisodeByIdQuery } from '@/redux'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Avatar, Badge, Button, Card, Grid, Loading, Row, Spacer, Text } from '@nextui-org/react'
import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { selectColorBadge } from '../CharactersCard'

const EpisodeDetails = () => {
  const params = useParams()
  const context = useContext(Context)
  const navigate = useNavigate()
  const episode = useGetEpisodeByIdQuery(params.id || '')
  const characters = useGetCharactersQuery(context?.currentPage || 0)

  let content
  if (episode.isLoading) content = <Loading size='xl' color='success' />
  if (episode.isError) content = <Text>oops something went wrongI</Text>
  if (episode.isSuccess && episode.data) {
    return (
      <>
        <Button
          color='success'
          rounded
          auto
          size='sm'
          css={{ mt: 20 }}
          bordered
          icon={<ArrowBackIcon />}
          onPress={() => navigate(-1)}>
          Back
        </Button>

        <Grid.Container css={{ mt: 10, ml: 'auto', mr: 'auto', textAlign: 'center' }} justify='center'>
          <Grid xs={12} css={{ display: 'grid', flexDirection: 'column', mb: 20 }}>
            <Grid css={{ display: 'inline-flex', textAlign: 'center', justifyContent: 'center' }}>
              <Text size='$2xl'>Episode&nbsp;</Text>{' '}
              <Text size='$2xl' css={{ fontWeight: 100 }}>{`#${episode.data.id}`}</Text>
            </Grid>
            <Text size='$4xl' b>
              {episode.data.name}
            </Text>
            <Text size='$3xl' css={{ fontWeight: 100 }}>{`On air ${episode.data.air_date}`}</Text>
            <Text size='$2xl'>characters in this chapter</Text>
          </Grid>

          <Grid xs={12} sm={6} justify='center'>
            <Grid.Container gap={2} justify='center'>
              {characters.data?.results.map((character) => {
                return (
                  <Grid key={character.id}>
                    <Badge
                      placement='top-left'
                      variant='bordered'
                      disableOutline
                      content={character?.status}
                      size='md'
                      color={selectColorBadge(character?.status || '')}>
                      <Card variant='flat' isHoverable isPressable>
                        <Avatar
                          squared
                          src={character?.image || ''}
                          size='xl'
                          color={selectColorBadge(character?.status || '')}
                          bordered
                          css={{ cursor: 'pointer' }}
                          onClick={() => navigate(`/character/${character.id}`)}
                        />
                      </Card>
                    </Badge>
                  </Grid>
                )
              })}
            </Grid.Container>
          </Grid>
        </Grid.Container>
      </>
    )
  } else {
    return <Row justify='center'>{content}</Row>
  }
}
export default EpisodeDetails
