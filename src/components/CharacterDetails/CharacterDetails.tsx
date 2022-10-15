import { useGetCharacterByIdQuery } from '@/redux'
import { Avatar, Badge, Card, Col, Grid, Row, Text, Spacer, Button } from '@nextui-org/react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { selectColorBadge } from '../CharactersCard'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const CharacterDetails = () => {
  const params = useParams()
  const navigate = useNavigate()
  const { data: character, isSuccess } = useGetCharacterByIdQuery(params.id || '')

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
          <Card variant='flat' css={{ p: 10 }}>
            <Text h2>Episodes</Text>
            <Col css={{ textAlign: 'center' }}>
              {character?.episode.map((episode) => (
                <Badge key={episode} css={{ minWidth: 90, m: 1 }} color='success' variant='bordered'>
                  Episode:{' '}
                  {episode
                    ?.slice(episode.length - 3)
                    .replace('/', '')
                    .replace('e', '')}
                </Badge>
              ))}
            </Col>
          </Card>
        </Grid>
      </Grid.Container>
    </>
  )
}
export default CharacterDetails
