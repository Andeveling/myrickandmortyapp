import { Card, Text, Col, Badge } from '@nextui-org/react'
import { CharacterI } from '@/types'
import { selectColorBadge } from '@/utils'
import { useNavigate } from 'react-router-dom'

export const CharactersCard = (character: Partial<CharacterI>) => {
  const navigate = useNavigate()
  return (
    <Card
      isHoverable
      isPressable
      variant='flat'
      css={{
        mw: 360,
        opacity: 0.9,
        transition: 100,
        '&:hover': {
          opacity: 1,
          boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px',
        },
      }}
      onPress={() => navigate(`/character/${character.id}`)}>
      <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight='bold' transform='uppercase' color='#9E9E9E'>
            <Badge disableOutline color={selectColorBadge(character.status ?? '')}>
              {character.status}
            </Badge>
            <Badge disableOutline color={selectColorBadge(character.species ?? '')}>
              {character.species}
            </Badge>
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image src={character.image || ''} objectFit='cover' width='100%' height='100%' />
      </Card.Body>
      <Card.Footer
        css={{
          bg: '$accents9',
          display: 'flex',
          flexDirection: 'column',
          position: 'absolute',
          zIndex: 1,
          bottom: -1,
          opacity: 0.8,
        }}>
        <Text h3 css={{ color: '$accents0' }}>
          {character.name}
        </Text>
      </Card.Footer>
    </Card>
  )
}
