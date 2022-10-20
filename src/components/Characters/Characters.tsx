import { CharactersCard } from '@/components'
import { Context } from '@/Context'
import { useGetCharactersQuery } from '@/redux'
import { Grid, Input, Loading, Pagination, Row, Text, useInput } from '@nextui-org/react'
import { useContext, useMemo, useRef } from 'react'

export const Characters = () => {
  const context = useContext(Context)
  const { data: pages, isLoading, isError, isSuccess } = useGetCharactersQuery(context?.currentPage ?? 1)
  const { value: search, bindings } = useInput('')
  const searchInput = useRef(null)

  const handlePage = (page: number) => {
    context?.setCurrentPage(page ?? 1)
  }

  const filteredCharacters = useMemo(
    () =>
      pages?.results.filter((char) => {
        return char.name.toLowerCase().includes(search.toLowerCase())
      }),
    [pages, search, context?.currentPage],
  )
  let content
  if (isLoading) content = <Loading size='xl' color='success' />
  if (isError) content = <Text>oops something went wrongI</Text>
  if (isSuccess && pages)
    return (
      <Grid.Container justify='center' gap={2}>
        <Grid xs={12} justify='center'>
          <Input
            {...bindings}
            clearable
            bordered
            labelPlaceholder='Search by name'
            ref={searchInput}
            color='success'
            value={search}
            size='xl'
            css={{ mt: 30 }}
          />
        </Grid>

        {filteredCharacters?.map((character) => (
          <Grid xs={12} sm={6} md={3} key={character.id} justify='center'>
            <CharactersCard
              id={character.id}
              name={character.name}
              image={character.image}
              status={character.status}
              gender={character.gender}
              species={character.species}
              origin={character.origin}
            />
          </Grid>
        ))}
        <Grid xs={12} justify='center' css={{ mb: 10 }}>
          <Pagination
            total={pages?.info.pages}
            initialPage={context?.currentPage}
            siblings={1}
            boundaries={0}
            dotsJump={1}
            color='success'
            page={context?.currentPage}
            size='xl'
            shadow
            onChange={(page: number) => handlePage(page)}
          />
        </Grid>
      </Grid.Container>
    )
  else return <Row justify='center'>{content}</Row>
}
