import { useGetCharacterByIdQuery } from '@/redux'
import { EpisodeI } from '@/types'
import { extractId } from '@/utils/extractId'
import { Avatar, Badge, Card, Loading, Row, Text } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'
import { selectColorBadge } from '@/components'

const AvatarEpisode = ({ characterLink }: { characterLink: EpisodeI['url'] }) => {
  const navigate = useNavigate()
  const id = extractId(characterLink, 'character/')
  const { data: character, isLoading, isSuccess, isError } = useGetCharacterByIdQuery(id)

  let content
  if (isLoading) content = <Loading size='sm' color='success' />
  if (isError) content = <Text>oops something went wrong</Text>
  if (isSuccess && character) {
    return (
      <Badge
        placement='top-left'
        variant='bordered'
        disableOutline
        content={character?.status}
        size='md'
        color={selectColorBadge(character?.status ?? '')}>
        <Card variant='flat' isHoverable isPressable>
          <Avatar
            squared
            src={character?.image ?? ''}
            size='xl'
            color={selectColorBadge(character?.status ?? '')}
            bordered
            css={{ cursor: 'pointer' }}
            onClick={() => navigate(`/character/${character?.id}`)}
          />
        </Card>
      </Badge>
    )
  } else {
    return <Row justify='center'>{content}</Row>
  }
}
export default AvatarEpisode
