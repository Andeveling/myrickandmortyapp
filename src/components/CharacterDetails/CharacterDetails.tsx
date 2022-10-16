import { selectColorBadge } from '@/components'
import { useGetCharacterByIdQuery } from '@/redux'
import { extractId } from '@/utils/extractId'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Avatar, Badge, Button, Card, Grid, Loading, Row, Spacer, Text } from '@nextui-org/react'
import { useNavigate, useParams } from 'react-router-dom'

const CharacterDetails = () => {
  const params = useParams()
  const navigate = useNavigate()
  const { data: character, isSuccess, isLoading, isError } = useGetCharacterByIdQuery(params.id || '')

  let content
  if (isLoading) content = <Loading size='xl' color='success' />
  if (isError) content = <Text>oops something went wrongI</Text>
  if (isSuccess && character) {
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
        <Spacer y={2} />
        <Grid.Container css={{ mt: 10, maxWidth: 1000, ml: 'auto', mr: 'auto' }}>
          <Grid xs={12} sm={6} css={{ display: 'grid', flexDirection: 'column', mb: 20 }}>
            <Row justify='center'>
              <Badge
                placement='top-left'
                variant='bordered'
                disableOutline
                content={character?.status}
                size='md'
                color={selectColorBadge(character?.status || '')}>
                <Avatar
                  squared
                  src={character?.image || ''}
                  size='xl'
                  color={selectColorBadge(character?.status || '')}
                  bordered
                />
              </Badge>
            </Row>
            <Row justify='center'>
              <Text h1 css={{ textAlign: 'center' }}>
                {character?.name}
              </Text>
            </Row>
            <Row css={{ justifyContent: 'center', display: 'grid', flexDirection: 'column' }}>
              <Badge isSquared css={{ width: 350, mb: 10 }} size='lg' color='success' variant='bordered'>
                Gender: {character?.gender}
              </Badge>
              <Badge isSquared css={{ width: 350, mb: 10 }} size='lg' color='success' variant='bordered'>
                Species: {character?.species}
              </Badge>
              <Badge isSquared css={{ width: 350, mb: 10 }} size='lg' color='success' variant='bordered'>
                Origin: {character?.origin.name}
              </Badge>
              <Badge isSquared css={{ width: 350, mb: 10 }} size='lg' color='success' variant='bordered'>
                Location: {character?.location.name}
              </Badge>
            </Row>
          </Grid>
          <Grid xs={12} sm={6} justify='center'>
            <Card variant='bordered' borderWeight='extrabold' css={{ maxWidth: 370 }}>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={character?.image || ''}
                  width='100%'
                  height='100%'
                  objectFit='cover'
                  alt={character?.name}
                />
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={12} css={{ boxSizing: 'border-box', mt: 20, textAlign: 'center' }} justify='center'>
            <Card variant='flat' css={{ p: 10, maxW: 1000 }}>
              <Text h2>Episodes</Text>
              <Grid.Container gap={1} justify='center'>
                {character?.episode.map((episode) => (
                  <Grid key={extractId(episode, 'episode/')}>
                    <Button
                      rounded
                      ghost
                      size='sm'
                      css={{ width: 70 }}
                      color='success'
                      onPress={() => navigate(`/episode/${extractId(episode, 'episode/')}`)}>
                      Episode: {extractId(episode, 'episode/')}
                    </Button>
                  </Grid>
                ))}
              </Grid.Container>
            </Card>
          </Grid>
        </Grid.Container>
      </>
    )
  } else {
    return <Row justify='center'>{content}</Row>
  }
}
export default CharacterDetails
